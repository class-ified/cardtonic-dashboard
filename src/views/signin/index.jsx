import React from "react";
import { useForm } from "react-hook-form";
import { __DEV__ } from "Constants/config";
import { BlackSubmit } from "../../components/Buttons";
import { useLoginMutation } from "hooks";
import { useHistory } from "react-router";

const initialValues = __DEV__
	? {
			email: "tundegolibenachukwu@freeallapp.com",
			password: "Adeleke123",
	  }
	: {
			email: "",
			password: "",
	  };

      
const SignIn = () => {
	const history = useHistory();

	const { register, handleSubmit } = useForm({
		defaultValues: initialValues,
	});
	const loginMutation = useLoginMutation();
	const onSubmit = React.useCallback(
		async (values) => {
			await loginMutation.mutateAsync(values);
			history.push("/");
		},
		[history, loginMutation]
	);

	return (
		<div>
			<form action="#" onSubmit={handleSubmit(onSubmit)}>
				<input
					type="email"
					className="default-input"
					placeholder="Drop your email"
					{...register("email")}
				/>
				<input
					type="password"
					className="default-input"
					placeholder="Enter your password"
					{...register("password")}
				/>
				<BlackSubmit text="Get me in" />
			</form>
		</div>
	);
};

export default SignIn;
