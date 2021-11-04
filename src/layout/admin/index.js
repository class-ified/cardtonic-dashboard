import {
	DashboardIcon,
	startTradeIcon,
	settingsIcon,
	supportIcon,
	walletIcon,
	transactionsIcon,
} from "../../components/Svg";

import NavBar from "./NavBar";
import Navigation from "./Navigation";

const AdminLayout = (props) => {
	const navItems = [
		{
			name: "Dashboard",
			route: "/",
			icon: DashboardIcon,
		},
		{
			name: "Transactions",
			route: "/transactions",
			icon: transactionsIcon
		},
		{
			name: "Start Trade",
			route: "/start-trade",
			icon: startTradeIcon
		},
		{
			name: "Wallet",
			route: "/wallet",
			icon: walletIcon
		},
		{
			name: "Settings",
			route: "/settings",
			icon: settingsIcon
		},
		{
			name: "Support",
			route: "/support",
			icon: supportIcon
		},
	];

	return (
		<div className="container-dashboard">
			<Navigation history={props.history} navItems={navItems} />

			<div className="container-dashboard-main">
				<NavBar />
				{props.children}
			</div>
		</div>
	);
};

export default AdminLayout;
