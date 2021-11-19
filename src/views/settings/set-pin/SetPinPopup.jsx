import Popup from "../../../components/PopupContainer";
import { BlackSubmit } from "../../../components/Buttons";

import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { selectUserId } from "selectors";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { __DEV__ } from "Constants/config";
import { useCallback } from "react";
import { setPin } from "api";
import { selectPinCode } from "selectors";

const setPinSchema = Yup.object().shape({
	oldPinCode: Yup.string().required("Reset Pin Code is required"),
	newPinCode: Yup.string().required("New Pin is required"),
	confirmNewPin: Yup.string()
		.required("Confirm Pin is required")
		.oneOf([Yup.ref("newPinCode"), null], "Pins must match"),
});

const initialValues = __DEV__
	? {
			oldPinCode: "1111",
			newPinCode: "1111",
			confirmNewPin: "1111",
	  }
	: { oldPinCode: "", newPinCode: "", confirmNewPin: "" };

const SetPinPopup = ({ handlePopup, popupOpen }) => {
	const userId = useSelector(selectUserId);

	const closePopup = useCallback(() => {
		handlePopup(false);
	}, [handlePopup]);

	// check if user has pin set
	const hasPin = useSelector(selectPinCode);
	// console.log(hasPin);

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(setPinSchema),
		defaultValues: initialValues,
	});
	const setPinMutation = useMutation(
		(data) => {
			return setPin(userId, data);
		},
		{
			mutationKey: "setPin",
		}
	);

	const onSubmit = useCallback(
		async (values) => {
			await setPinMutation.mutateAsync(values);
			closePopup();
		},
		[setPinMutation, closePopup]
	);


	return (
		<>
			{popupOpen && (
				<Popup className="set-pin">
					<button className="cancel-button" onClick={closePopup}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.43129 8.27275C2.22757 4.87812 4.87812 2.22757 8.27275 1.43129C10.7243 0.856236 13.2757 0.856235 15.7273 1.43129C19.1219 2.22757 21.7724 4.87812 22.5687 8.27275C23.1438 10.7243 23.1438 13.2757 22.5687 15.7272C21.7724 19.1219 19.1219 21.7724 15.7272 22.5687C13.2757 23.1438 10.7243 23.1438 8.27276 22.5687C4.87812 21.7724 2.22757 19.1219 1.43129 15.7273C0.856235 13.2757 0.856235 10.7243 1.43129 8.27275Z"
								stroke="#3A6A95"
								stroke-width="2"
							/>
							<path
								d="M14 10L10 14M14 14L10 10"
								stroke="#3A6A95"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</button>

					<form action="#" onSubmit={handleSubmit(onSubmit)}>
						{hasPin && (
							<label htmlFor="old-pin" className="label-withspan">
								<input
									type="password"
									className="default-input default-input-withspan"
									placeholder="Old pin"
									{...register("oldPinCode")}
								/>
								<span>
									{/* prettier-ignore */}
									<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7.5" cy="7.5" r="6.5" stroke="#002444" stroke-width="2"/>
                                    </svg>
								</span>
							</label>
						)}

						<label htmlFor="enter-pin" className="label-withspan">
							<input
								id="enter-pin"
								type="password"
								className="default-input default-input-withspan"
								placeholder={
									hasPin
										? "Enter new 4 digit pin"
										: "Enter 4 Digit Pin"
								}
								{...register("newPinCode")}
							/>
							<span>
								{/* prettier-ignore */}
								<svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1" y1="1" x2="14" y2="1" stroke="#002444" stroke-width="2" stroke-linecap="round"/>
                                </svg>
							</span>
						</label>

						<label
							htmlFor="confirm-password"
							className="label-withspan"
						>
							<input
								id="confirm-password"
								type="password"
								className="default-input default-input-withspan"
								placeholder="Confirm Pin"
								{...register("confirmNewPin")}
							/>
							<span>
								{/* prettier-ignore */}
								<svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="1" y1="1" x2="14" y2="1" stroke="#002444" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
							</span>
						</label>

						<BlackSubmit text="Save" />
					</form>
				</Popup>
			)}
		</>
	);
};

export default SetPinPopup;
