import SignNavBar from "./SignNavBar"

const SignLayout = (props) => {
    return (
        <div className="container-sign">
			<SignNavBar />

			<div className="container-sign-main">
				{props.children}
			</div>
		</div>
    )
}

export default SignLayout;