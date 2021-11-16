import { BlackSubmit } from "components/Buttons";
import { resetPassword } from "api";

const ResetPassword = () => {
    resetPassword("tundegolibenachukwu@freeallapp.com")


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
						<form action="#">
							<input
								type="email"
								className="default-input"
								placeholder="Drop your email"
								// {...register("email")}
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