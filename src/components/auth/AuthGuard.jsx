const AuthGuard = ({ children }) => {
	// const user = {};
	// const accessToken = user?.accessToken ?? null;
	// if (!accessToken) {
	// 	return <Redirect to="/login" />;
	// }

	return <>{children}</>;
};

export default AuthGuard