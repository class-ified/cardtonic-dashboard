/* eslint-disable jsx-a11y/alt-text */
import { BlackSubmit } from "../../components/Buttons";
import uploadGif from "../../assets/images/upload.gif";
import CompleteTrade from "./CompleteTradePopup";
import Footer from "../../layout/admin/Footer";

import { useToggle } from "hooks/useToggle";
import { useSelector } from "react-redux";
import { useState, useMemo, useCallback, useEffect } from "react";
import { selectCardSubCategories } from "selectors";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import data from "Constants/data";
import { useHistory } from "react-router";
import _ from "lodash";
import { useGiftcards } from "hooks/queries/useGiftcards";
import { useMoneyformatter } from "hooks/useMoneyFormatter";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchCardsSubCategory, tradeGiftCard, uploadImage } from "api";
import { selectUserId } from "selectors";
import { useForm } from "react-hook-form";
import { MAX_IMAGES } from "Constants/config";
import { __DEV__ } from "Constants/config";
import { showErrorSnackBar } from "utils";
import Loader from "components/Loader";

const schema = Yup.object().shape({
	// category: Yup.object()
	//   .nullable()
	//   .test("isnt't-null", 'Required', value => {
	//     console.log({value});
	//     return Promise.resolve(value && Object.keys(value).length != 0);
	//   })
	//   .notOneOf([data.cardCategoryRates.value], 'Required')
	//   .required('Required'),
	subCategory: Yup.object()
		.nullable()
		.test(
			"is not null",
			"Required",
			(value) => !!value && value && Object.keys(value).length !== 0
		)
		.notOneOf([data.cardCategoryRates.value], "Required")
		.required("Required"),
	amount: Yup.string().required("Required"),
	comment: Yup.string(),
});

const StartTrade = () => {
	const [popupOpen, setPopupOpen] = useState(false);

	const history = useHistory();

	const {
		register,
		handleSubmit,
		formState: { isDirty },
		getValues,
		watch,
	} = useForm({
		resolver: yupResolver(schema),
		// mode: 'onTouched',
	});

	const validValues = watch();
	const [successful, { on, off: offS }] = useToggle(false);
	const [loading, setLoading] = useState(false);

	const [index, setIndex] = useState(null);
	const [termsOfTransaction, setTermsOfTransaction] = useState("");
	const userId = useSelector(selectUserId);

	const [rate, setRate] = useState(0);
	const [amount, setAmount] = useState("0");
	const [images, setImages] = useState([]);

	// useEffect(() => {
	// function check() {
	// 	let cho = [1, 2, 3]
	// 	setImages(cho => [...cho, images])
	// 	console.log(images)
	// }
	// check();

	// }, [])

	useEffect(() => {
		images && console.log(images);
	}, [images]);

	const queryClient = useQueryClient();
	const isValid = useMemo(() => {
		try {
			schema.validateSync(validValues);
			return true;
		} catch (error) {
			// console.log(error);
		}
		return false;
	}, [validValues]);

	const {
		data: cardCategories = [],
		status,
		refetch,
		isFetching,
	} = useGiftcards();

	const realAmount = useMemo(() => {
		console.log(rate);
		const value = rate * amount;
		// console.log(value)
		return value;
	}, [amount, rate]);
	const [whole, balanceFraction] = useMoneyformatter(realAmount);

	const offSuccessful = useCallback(() => {
		offS();
		history.push("/transactions");
	}, [history, offS]);

	const selectedCategory = useMemo(
		() => cardCategories[index] || {},
		[cardCategories, index]
	);
	const cardCategorySelect = useMemo(
		() =>
			cardCategories.map((cardCategory, index) => ({
				label: cardCategory.name,
				value: index,
			})),
		[cardCategories]
	);

	const { data: cardSubCategories = [], isLoading } = useQuery(
		["cardSubCategory", selectedCategory.id],
		() => fetchCardsSubCategory(selectedCategory.id),
		{ enabled: !!selectedCategory?.id }
	);

	const cardSubCategorySelect = useMemo(() => {
		return (cardSubCategories ?? []).map((cardCategory, index) => ({
			label: cardCategory?.name,
			value: {
				index,
				rate: cardCategory?.rate,
				id: cardCategory.id,
				termsOfTransaction: cardCategory.termsOfTransaction,
			},
		}));
	}, [cardSubCategories]);

	const fileOnChange = useCallback(async (e) => {
		// console.log('uploaded')
		try {
			let files = e.target.files;
			let filesArray = Array.from(files);
			console.log({ filesArray });
			setImages(filesArray);
		} catch (error) {
			showErrorSnackBar({ text: "Couldn't pick images" });
		}
	}, []);

	// const handleFile = (e) => {
	// 	fileOnChange(e);
	// 	console.log(images);
	// };

	const tradeMutation = useMutation(
		(data) => {
			return tradeGiftCard(userId, data);
		},
		{
			mutationKey: "tradeGiftCard",
			onSuccess: async () => {
				try {
					await queryClient.invalidateQueries("infiniteTrades");
				} catch (error) {}
				on();
			},
		}
	);

	// const fileToDataUri = (file) =>
	// 	new Promise((resolve, reject) => {
	// 		const reader = new FileReader();
	// 		reader.onload = (event) => {
	// 			resolve(event.target.result);
	// 		};
	// 		reader.readAsDataURL(file);
	// 	});

	const trade = useCallback(async () => {
		console.log("trade function");
		const values = getValues();
		setLoading(true);
		offS();
		let urls = [];
		try {
			const files = images?.map(
				(asset) =>
					console.log({ asset }) || {
						name: asset.name,
						type: asset.type,
						uri: asset.uri,
						image: asset,
					}
			);
			urls = await uploadImage(userId, {
				files,
			});
			const container = [];
			if (urls.length > 0) {
				console.log(urls);
				for (const [i, el] of urls.entries()) {
					container.push(() =>
						fetch(el.url, {
							method: "PUT",
							headers: {
								"x-amz-acl": "public-read",
								"Content-Type": files[i].type,
							},
							body: files[i].image,
						})
					);
				}
			}
			await Promise.all(container.map((fn) => fn()));
		} catch (error) {
			showErrorSnackBar({ text: "Couldn't upload images" });
			return;
		} finally {
			setLoading(false);
		}

		// await tradeMutation.mutateAsync({
		// 	comment: values?.comment,
		// 	cardTotalAmount: amount,
		// 	cardCategory: selectedCategory.id,
		// 	cardSubCategory: values?.subCategory?.id,
		// 	tradeFiles: urls.map((u) => u.imageUrl),
		// });
	}, [getValues, images, offS, userId]);

	const onSubmit = useCallback(
		(values) => {
			console.log("should run trade()");
			trade();
			setTermsOfTransaction(values.subCategory?.termsOfTransaction);
			//   toggleModal();
		},
		[trade]
	);

	const handlePopup = (value) => {
		setPopupOpen(value);
	};
	const openPopup = (e) => {
		e.preventDefault();
		handlePopup(true);
	};

	// console.log(selectCardSubCategories());

	if (status === "loading") {
		return <Loader />;
	}

	return (
		<main className="start-trade">
			<div className="start-trade__heading">
				<h1 className="text-vbold text-blue-dark text-kindabig">
					Start Trade
				</h1>
			</div>

			<div className="start-trade__body">
				<form action="#" onSubmit={(e) => e.preventDefault()}>
					<div className="default-select-box">
						<select
							className="text-vbold text-small default-input"
							name="category"
							id="category"
							onChange={(e) => setIndex(e.target.value)}
							onBlur={(e) => setIndex(e.target.value)}
						>
							<option value="">Select Category</option>
							{/* {console.log(cardCategorySelect)} */}
							{cardCategorySelect.map((category) => (
								<option value={category.value}>
									{category.label}
								</option>
							))}
						</select>

						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.35288 6.95043C2.00437 4.17301 4.17301 2.00437 6.95043 1.35288C8.95626 0.882374 11.0437 0.882375 13.0496 1.35288C15.827 2.00437 17.9956 4.17301 18.6471 6.95044C19.1176 8.95626 19.1176 11.0437 18.6471 13.0496C17.9956 15.827 15.827 17.9956 13.0496 18.6471C11.0437 19.1176 8.95626 19.1176 6.95044 18.6471C4.17301 17.9956 2.00437 15.827 1.35288 13.0496C0.882374 11.0437 0.882374 8.95626 1.35288 6.95043Z"
								stroke="#00CEDE"
								stroke-width="1.5"
							/>
							<path
								d="M12.5 9L10 11.5L7.5 9"
								stroke="#00CEDE"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>

					<div className="default-select-box">
						<select
							className="text-vbold text-small default-input"
							name="sub-category"
							id="sub-category"
							onChange={(e) => {
								console.log(cardSubCategories[e.target.value]);
								setRate(cardSubCategories[e.target.value].rate);
							}}
							{...register("subCategory")}
						>
							<option value="">Select Sub-Category</option>
							{cardSubCategorySelect.map((cardSubCategory) => (
								<option
									key={cardSubCategory.value.id}
									value={cardSubCategory.value.index}
								>
									{cardSubCategory.label}
								</option>
							))}
						</select>

						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.35288 6.95043C2.00437 4.17301 4.17301 2.00437 6.95043 1.35288C8.95626 0.882374 11.0437 0.882375 13.0496 1.35288C15.827 2.00437 17.9956 4.17301 18.6471 6.95044C19.1176 8.95626 19.1176 11.0437 18.6471 13.0496C17.9956 15.827 15.827 17.9956 13.0496 18.6471C11.0437 19.1176 8.95626 19.1176 6.95044 18.6471C4.17301 17.9956 2.00437 15.827 1.35288 13.0496C0.882374 11.0437 0.882374 8.95626 1.35288 6.95043Z"
								stroke="#00CEDE"
								stroke-width="1.5"
							/>
							<path
								d="M12.5 9L10 11.5L7.5 9"
								stroke="#00CEDE"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>

					<div className="amount-rate">
						{/* {console.log(amount)} */}
						<input
							type="number"
							className="default-input text-small text-regular"
							placeholder="Enter Gift Card Amount"
							onChange={(e) => setAmount(e.target.value)}
							{...register("amount")}
						/>
						<div className="rate-box">
							<h2
								className="text-medium text-vbold"
								style={{ marginRight: "20px" }}
							>
								₦{whole}.{balanceFraction}
							</h2>
							<h3 className="text-small text-vbold">
								{/* {console.log(rate)} */}
								{rate ? rate : "000"}
							</h3>
						</div>
					</div>

					<textarea
						className="default-textarea"
						placeholder="Optional Comment, e.g You can type your code here"
						{...register("comment")}
					></textarea>

					<label htmlFor="upload" className="upload-label">
						<input
							id="upload"
							type="file"
							multiple
							accept="image/*"
							onChange={(e) => fileOnChange(e)}
						/>
						<div className="upload-box">
							<img src={uploadGif} />
							<h3 className="text-small text-vbold text-blue">
								Upload Card +
							</h3>
						</div>
					</label>

					<CompleteTrade
						handlePopup={handlePopup}
						popupOpen={popupOpen}
						submitOnClick={trade}
					/>

					{/* <div onClick={openPopup}>start trade</div> */}

					<BlackSubmit text="Start Trade" onClick={trade} />
					{/* <BlackSubmit text="Start Trade" /> */}
				</form>
			</div>

			<Footer />
		</main>
	);
};

export default StartTrade;
