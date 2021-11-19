/* eslint-disable jsx-a11y/anchor-is-valid */
import { BigBlackSubmit } from "../../components/Buttons";
import { Link } from "react-router-dom";

import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	checkPhoneNumber,
	extractMessageAndShow,
	validatePhoneNumber,
} from "../../utils";
import { useMutation } from "react-query";
import { register, RegisterPayload } from "api";
import { useHistory } from "react-router";

Yup.addMethod(Yup.string, "validatePhone", function () {
	return this.test({
		name: "phone",
		message: "Phone is not valid",
		test: validatePhoneNumber,
	});
});

const RegisterSchema = Yup.object().shape({
	name: Yup.string().trim().required("Required"),
	username: Yup.string().trim().required("Required"),
	// phone: Yup.string().required('Required').validatePhone(),
	phoneNumber: Yup.string()
		.required("Required")
		.matches(/[0-9]/g, "Invalid Phone Number")
		.length(11, "Phone Number must be 11 digits long"),
	// phone: Yup.string().required('Required').validatePhone(),

	email: Yup.string().trim().email("Invalid Email").required("Required"),
	password: Yup.string().required("Required").min(4, "Minimun length of 4"),
	confirmPassword: Yup.string()
		.required("Required")
		.oneOf([Yup.ref("password"), null], "Passwords don't match"),
});

const initialValues =
	process.env.NODE_ENV === "development"
		? {
				name: "Daniel",
				email: "tundegolibenachukwu@freeallapp.com",
				username: "somebody",
				phoneNumber: "07000119922",
				password: "Adeleke123",
				confirmPassword: "Adeleke123",
		  }
		: {
				name: "",
				email: "",
				username: "",
				phoneNumber: "",
				password: "",
				confirmPassword: "",
		  };


		  
const SignUp = () => {
	// const history = useHistory()

	// const navigateToSignin = useCallback(() => {
	// 	history.push("/signin")
	// }, [history])

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(RegisterSchema),
		defaultValues: initialValues,
	});

	const registerMutation = useMutation(
		(user) => {
			return register(user);
		},
		{
			mutationKey: "registerUser",
			onSuccess: (data, user) => {
				// console.log({data})
				// console.log({user})
				console.log("user registered");
				// extractMessageAndShow(data);
				// navigation.navigate('VerifyEmail', {email: user.email});
			},
		}
	);

	const onSubmit = useCallback(
		(data) => {
			console.log(data)
			let phoneNumber = checkPhoneNumber(data.phoneNumber)?.phoneNumber;
			registerMutation.mutate({
				...data,
				phoneNumber: phoneNumber?.replace("+", ""),
			});
		},
		[registerMutation]
	);

	return (
		<main className="sign signup">
			<div className="sign-content signup-content">
				<div className="sign-content-left signup-content-left">
					<h1 className="header-text text-xl text-blue-dark text-vbold">
						Relax and Trade.
					</h1>

					<h1
						className="small-text text-24 text-bold"
						style={{ color: "#CECECE" }}
					>
						Nothing has to be stressful
					</h1>
				</div>

				<div className="sign-content-right signup-content-right">
					<div className="formbox">
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								type="text"
								className="default-input"
								placeholder="What's your Full Name?"
								{...register("name")}
							/>

							<input
								type="email"
								className="default-input"
								placeholder="Drop your Email"
								{...register("email")}
							/>

							<input
								type="text"
								className="default-input"
								placeholder="Create a Username"
								{...register("username")}
							/>

							<input
								type="number"
								className="default-input"
								placeholder="Phone Number"
								{...register("phoneNumber")}
							/>

							<label
								htmlFor="password"
								className="label-withspan"
							>
								<input
									id="password"
									type="password"
									className="default-input default-input-withspan"
									placeholder="Create a Password"
									{...register("password")}
								/>
								<span>
									{/* prettier-ignore */}
									<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="7.5" cy="7.5" r="6.5" stroke="#002444" stroke-width="2"/>
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
									placeholder="Pls Confirm your Password"
									{...register("confirmPassword")}
								/>
								<span>
									{/* prettier-ignore */}
									<svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
										<line x1="1" y1="1" x2="14" y2="1" stroke="#002444" stroke-width="2" stroke-linecap="round"/>
									</svg>
								</span>
							</label>

							<div className="button-box">
								<BigBlackSubmit text="Create Account" />

								<h3 className="sign-in-text text-blue-dark text-small text-regular">
									Got an account?{" "}
									<Link
										style={{ color: "#00CEDE" }}
										className="text-green text-bold"
										to="/signin"
									>
										Sign In
									</Link>
								</h3>
							</div>
						</form>
					</div>

					<h3 className="need-help text-small text-bold text-blue-dark">
						Need Help?{" "}
						<span>
							<a href="#">Contact Us</a>
						</span>
					</h3>
				</div>
			</div>
		</main>
	);
};

export default SignUp;
