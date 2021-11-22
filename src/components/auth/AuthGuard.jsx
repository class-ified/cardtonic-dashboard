import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { selectAuthenticated } from "selectors";

const AuthGuard = ({ children }) => {
	const auth = useSelector(selectAuthenticated);
	console.log({auth})
	if (!auth) {
		return <Redirect to="/signin" />;
	}

	return <>{children}</>;
};

export default AuthGuard;
