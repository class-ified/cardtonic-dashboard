import { BlackSubmit } from "components/Buttons";
import { resetPassword, EmailPayload } from "api";
import {validatePhoneNumber} from 'utils';
import {useMutation} from 'react-query';
import {yupResolver} from '@hookform/resolvers/yup';
import { useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {__DEV__} from "Constants/config"
import {useCallback} from "react"

Yup.addMethod(Yup.string, 'validatePhone', function () {
	return this.test({
	  name: 'phone',
	  message: 'Phone is not valid',
	  test: validatePhoneNumber,
	});
  });
  
  const ForgotSchema = Yup.object().shape({
	email: Yup.string().trim().email('Invalid Email').required('Required'),
  });
  
  const initialValues = __DEV__
	? {
		email: 'test@test.com',
	  }
	: {
		email: '',
	  };


const ResetPassword = () => {
    const {register, handleSubmit} = useForm({
		resolver: yupResolver(ForgotSchema),
		defaultValues: initialValues,
	  });
	
	  const forgotMutation = useMutation(
		(data) => {
		  console.log(data);
		  return resetPassword(data);
		},
		{
		  mutationKey: 'resetPassowrd',
		},
	  );
	
	  const onSubmit = useCallback(
		values => {
		  forgotMutation.mutate(values);
		},
		[forgotMutation],
	  );


    return (
		<main className="sign reset-password">
			<div className="sign-content reset-password-content">
				<div className="sign-content-left reset-password-content-left">
					<h1 className="header-text text-xl text-blue-dark text-vbold">
                        Ouch!
					</h1>

					<h1
						className="small-text text-24 text-bold"
						style={{ color: "#CECECE" }}
					>
						Let us help you out.
					</h1>

					
				</div>

				<div className="sign-content-right reset-password-content-right">
					<div className="formbox">
						<form action="#" onSubmit={handleSubmit(onSubmit)}>
							<input
								type="email"
								className="default-input"
								placeholder="Drop your email"
								{...register("email")}
							/>

                            <BlackSubmit text="Send the Link" />
						</form>
					</div>

					<h3 className="enter-email text-small text-regular text-blue-dark">
                        Please enter your registered Email ID
                        here. We will send a reset link to
                        your email.
					</h3>
				</div>
			</div>
		</main>
	);
}

export default ResetPassword