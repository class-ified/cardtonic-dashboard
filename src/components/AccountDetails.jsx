import { BlackSubmit } from "./Buttons";
import { Input } from "./Inputs";
import { SelectMenu } from "./Inputs";
import Popup from "./PopupContainer";

import { memo, useCallback, useEffect } from "react";
import {
	useAddBankMutation,
	useBanks,
	useDeleteBankMutation,
	useEditBankMutation,
	useUsersBanks,
} from "hooks";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import Loader from "./Loader";
import * as Yup from "yup";
import { __DEV__ } from "Constants/config";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useVerifyBankAccount } from "hooks/useVerifyBank";
import { extractErrorMessage, showErrorSnackBar } from "utils";

const BankSchema = Yup.object({
	bankCode: Yup.string().required("Required!").notOneOf(["Bank"], "Required"),
	accountNumber: Yup.string().required("Required!").min(10, "Invalid!"),
});

const AccountDetailsPopup = memo(
	({
		openAccountDetails,
		setOpenAccountDetails,
		accountNumber,
		accountName,
		bankName,
		id,
	}) => {
		const {
			data: banks = [],
			status: usersBanks,
			usersBanksRefetch: refetch,
			usersBanksIsFetching: isFetching,
		} = useUsersBanks();
		const deleteMutation = useDeleteBankMutation();
		const editBankMutation = useEditBankMutation();
		const addBankMutation = useAddBankMutation();
		const {
			data: rawBanks,
			status: banksStatus,
			refetch: banksRefetch,
			isFetching: banksIsFetching,
		} = useBanks();

		const initialValues = __DEV__
			? {
					bankCode: "",
					accountNumber: "", // "0214956707",
			  }
			: {
					bankCode: "",
					accountNumber: "",
			  };

		const addBankDetails = useCallback(
			async (values) => {
				await addBankMutation.mutateAsync(values);
				console.log(values)
			},
			[addBankMutation]
		);

		const del = useCallback((id) => {
            deleteMutation.mutate(id);
		}, [deleteMutation]);

		const {
			control,
			// formState: {isSubmitting},
			watch,
			register,
		} = useForm({
			resolver: yupResolver(BankSchema),
		});

		const values = watch();
		const { data: verifiedBank, isLoading: isLoadingBanks } =
			useVerifyBankAccount(values, {
				retry: false,
				onError: (error) => {
					const errorMsg = extractErrorMessage(error);
					showErrorSnackBar({ text: errorMsg });
				},
			});

		// console.log(rawBanks &&  rawBanks );

        // useEffect(() => {
        //     console.log(verifiedBank)
        // }, [verifiedBank])

		// if (status === "loading") {
		// 	return <Loader />;
		// }
        console.log({banks})

        const handleSubmit = (e) => {
            e.preventDefault()
            addBankDetails({...values, accountName: verifiedBank?.data.accountData.accountName})
        }

		return (
			<>
				{openAccountDetails && (
					<Popup className="account-details-popup">
						<button
							className="cancel-button"
							onClick={() => setOpenAccountDetails(false)}
						>
							{/* prettier-ignore */}
							<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.50971 9.59507C2.45076 5.58323 5.58324 2.45076 9.59507 1.50971C12.4924 0.830097 15.5076 0.830096 18.4049 1.50971C22.4168 2.45076 25.5492 5.58324 26.4903 9.59507C27.1699 12.4924 27.1699 15.5076 26.4903 18.4049C25.5492 22.4168 22.4168 25.5492 18.4049 26.4903C15.5076 27.1699 12.4924 27.1699 9.59507 26.4903C5.58324 25.5492 2.45076 22.4168 1.50971 18.4049C0.830096 15.5076 0.830096 12.4924 1.50971 9.59507Z" stroke="#002444" stroke-width="2"/>
                            <path d="M16.3635 11.6362L11.6362 16.3635M16.3635 16.3635L11.6362 11.6362" stroke="#002444" stroke-width="2" stroke-linecap="round"/>
                        </svg>
						</button>

						<form action="#" onSubmit={(e) => handleSubmit(e)}>
							<div className="default-select-box">
								<Controller
									control={control}
									render={({
										field: { onChange, onBlur, value },
										fieldState: { invalid, error },
									}) => (
										<select
											className="text-vbold text-small default-input"
											name="bank"
											id="bank"
                                            onChange={onChange}
                                            value={value}
										>
											<option value="">
												Select Bank
											</option>
											{rawBanks?.map((bank) => (
												<option
													key={bank.id}
													value={bank.code}
												>
													{bank.name}
												</option>
											))}
										</select>
									)}
									name="bankCode"
									rules={{ required: true }}
									defaultValue={initialValues.bankCode}
								/>

								{/* prettier-ignore */}
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.35288 6.95043C2.00437 4.17301 4.17301 2.00437 6.95043 1.35288C8.95626 0.882374 11.0437 0.882375 13.0496 1.35288C15.827 2.00437 17.9956 4.17301 18.6471 6.95044C19.1176 8.95626 19.1176 11.0437 18.6471 13.0496C17.9956 15.827 15.827 17.9956 13.0496 18.6471C11.0437 19.1176 8.95626 19.1176 6.95044 18.6471C4.17301 17.9956 2.00437 15.827 1.35288 13.0496C0.882374 11.0437 0.882374 8.95626 1.35288 6.95043Z" stroke="#00CEDE" stroke-width="1.5"/>
                                    <path d="M12.5 9L10 11.5L7.5 9" stroke="#00CEDE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
							</div>

							<Controller
								control={control}
								render={({
									field: { onChange, onBlur, value },
									fieldState: { error, invalid },
								}) => (
									<>
										<Input
											type="number"
											placeholder="Account Number"
											value={value}
											onChange={onChange}
                                            max={10}
										/>
									</>
								)}
								name="accountNumber"
								rules={{ required: true }}
								defaultValue={initialValues.accountNumber}
							/>

							<Input
								type="text"
								placeholder="Account Name"
								disabled={true}
								value={
									verifiedBank
										? verifiedBank?.data.accountData.accountName
										: "Account Name"
								}
							/>

							<BlackSubmit className="submit" text="Save" />

							{banks.length > 0 && <span className="horizontal-line"></span>}

							{banks.length > 0 && (
								<div className="accounts-box">
									{banks?.map((bank) => (
										<div className="account" key={bank.id}>
											<h3 className="text-regular text-small text-blue">
												Bank -&nbsp;
												<span className="text-vbold">
													{bank.bankName}
												</span>
											</h3>
											<h3 className="text-regular text-small text-blue">
												Account Number -&nbsp;
												<span className="text-vbold">
													{bank.accountNumber}
												</span>
											</h3>
											<h3 className="text-regular text-small text-blue">
												Account Name -&nbsp;
												<span className="text-vbold">
													{bank.accountName}
												</span>
											</h3>

											<div className="actions-box">
												<button className="edit">
													{/* prettier-ignore */}
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 1C3.75059 1 1 3.75059 1 12C1 20.2494 3.75059 23 12 23C20.2494 23 23 20.2494 23 12" stroke="#00CEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9531 2.84749V2.84749C19.7723 1.80219 17.9683 1.9116 16.923 3.09246C16.923 3.09246 11.7274 8.96111 9.92579 10.9982C8.12179 13.0341 9.44416 15.8465 9.44416 15.8465C9.44416 15.8465 12.4219 16.7895 14.1985 14.7822C15.9764 12.7748 21.1981 6.87765 21.1981 6.87765C22.2434 5.69679 22.1328 3.89279 20.9531 2.84749Z" stroke="#00CEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M15.5779 4.62793L19.853 8.41312" stroke="#00CEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
												</button>

												<button className="delete" onClick={del(bank.id)}>
													{/* prettier-ignore */}
													<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.93129 8.27275C2.72757 4.87812 5.37812 2.22757 8.77275 1.43129C11.2243 0.856236 13.7757 0.856235 16.2273 1.43129C19.6219 2.22757 22.2724 4.87812 23.0687 8.27275C23.6438 10.7243 23.6438 13.2757 23.0687 15.7272C22.2724 19.1219 19.6219 21.7724 16.2272 22.5687C13.7757 23.1438 11.2243 23.1438 8.77276 22.5687C5.37812 21.7724 2.72757 19.1219 1.93129 15.7273C1.35624 13.2757 1.35624 10.7243 1.93129 8.27275Z" stroke="#FF0000" stroke-width="2"/>
                                                    <path d="M14.5 10L10.5 14M14.5 14L10.5 10" stroke="#FF0000" stroke-width="2" stroke-linecap="round"/>
                                                </svg>
												</button>
											</div>
										</div>
									))}
								</div>
							)}
						</form>
					</Popup>
				)}
			</>
		);
	}
);

export default AccountDetailsPopup;
