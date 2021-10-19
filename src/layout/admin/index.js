import NavBar from "./NavBar";
import Navigation from "./Navigation"

const AdminLayout = (props) => {
    const navItems = [
		{
			name: "Dashboard",
			route: "/",
		},
		{
			name: "Transactions",
			route: "/transactions",
		},
		{
			name: "Start Trade",
			route: "/start-trade",
		},
		{
			name: "Wallet",
			route: "/wallet",
		},
		{
			name: "Settings",
			route: "/settings",
		},
		{
			name: "Support",
			route: "/support",
		},
	];


	return (
    <>
      <NavBar />
      <Navigation history={props.history} navItems={navItems} />
      {props.children}
    </>
  );
};

export default AdminLayout