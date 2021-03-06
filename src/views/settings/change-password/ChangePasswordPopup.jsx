import Popup from "../../../components/PopupContainer";
import { BlackSubmit } from "../../../components/Buttons";

import { changeUser } from "api";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "selectors";
import { LOGOUT } from "action";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { __DEV__ } from "Constants/config";
import { useCallback } from "react";

const ChangePassordSchema = Yup.object().shape({
	oldPassword: Yup.string()
		.required("Password is required")
		.min(8, "Minimum of 8 characters"),
	newPassword: Yup.string()
		.required("New password is required")
		.min(8, "Minimum of 8 characters"),
	confirmNewPassword: Yup.string()
		.required("Confirm password is required")
		.min(8, "Minimum of 8 characters")
		.oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

const initialValues = __DEV__
	? {
			newPassword: "Adeleke123",
			confirmNewPassword: "Adeleke123",
			oldPassword: "Adeleke123",
	  }
	: {
			newPassword: "",
			confirmNewPassword: "",
			oldPassword: "",
	  };

const ChangePasswordPopup = ({ handlePopup, popupOpen }) => {
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();

	const closePopup = () => {
		handlePopup(false);
	};

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(ChangePassordSchema),
		defaultValues: initialValues,
	});
	const changePasswordMutation = useMutation(
		(data) => {
			return changeUser(userId, data);
		},
		{
			mutationKey: "changePassword",
		}
	);

	const onSubmit = useCallback(
		async (values) => {
			await changePasswordMutation.mutateAsync(values);
			await dispatch({ type: LOGOUT });
		},
		[changePasswordMutation, dispatch]
	);

	return (
		<>
			{popupOpen && (
				<Popup className="change-password">
					<button className="cancel-button" onClick={closePopup}>
						{/* prettier-ignore */}
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.43129 8.27275C2.22757 4.87812 4.87812 2.22757 8.27275 1.43129C10.7243 0.856236 13.2757 0.856235 15.7273 1.43129C19.1219 2.22757 21.7724 4.87812 22.5687 8.27275C23.1438 10.7243 23.1438 13.2757 22.5687 15.7272C21.7724 19.1219 19.1219 21.7724 15.7272 22.5687C13.2757 23.1438 10.7243 23.1438 8.27276 22.5687C4.87812 21.7724 2.22757 19.1219 1.43129 15.7273C0.856235 13.2757 0.856235 10.7243 1.43129 8.27275Z" stroke="#3A6A95" stroke-width="2"/>
                            <path d="M14 10L10 14M14 14L10 10" stroke="#3A6A95" stroke-width="2" stroke-linecap="round"/>
                        </svg>
					</button>

					<form action="#" onSubmit={handleSubmit(onSubmit)}>
						<label
							htmlFor="old-password"
							className="label-withspan"
						>
							<input
								id="old-password"
								type="password"
								className="default-input default-input-withspan"
								placeholder="Old Password"
                                {...register("oldPassword")}
							/>
							<span>
								{/* prettier-ignore */}
								<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7.5" cy="7.5" r="6.5" stroke="#002444" stroke-width="2"/>
                                </svg>
							</span>
						</label>

						<label
							htmlFor="new-password"
							className="label-withspan"
						>
							<input
								id="new-password"
								type="password"
								className="default-input default-input-withspan"
								placeholder="New Password"
                                {...register("newPassword")}
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
								placeholder="Confirm Password"
                                {...register("confirmNewPassword")}
							/>
							<span>
								<svg
									width="15"
									height="2"
									viewBox="0 0 15 2"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line
										x1="1"
										y1="1"
										x2="14"
										y2="1"
										stroke="#002444"
										stroke-width="2"
										stroke-linecap="round"
									/>
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

export default ChangePasswordPopup;
