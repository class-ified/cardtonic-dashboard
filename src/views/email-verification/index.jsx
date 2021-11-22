import { BlackSubmit } from "components/Buttons";

const EmailVerification = () => {
	return (
		<main className="sign email-verification">
			<div className="sign-content email-verification-content">
                <div className="sign-content-left email-verification-content-left">
                    <h1 className="header-text text-xl text-blue-dark text-vbold">
                        Email 
                        Verification 
                        Sent 
                    </h1>
                </div>
            

                <div className="sign-content-right email-verification-content-right">
                    <div className="formbox">
                        <h3 className="question-text text-small text-blue-dark text-regular">Didn’t get the Verification link?</h3>
                        <BlackSubmit text="Resend Link" />
                    </div>
                </div>
			</div>
		</main>
	);
};

export default EmailVerification;
