import AdminLayout from "./layout/admin";
import NoMatch from "./views/404";
import AuthGuard from "./components/auth/AuthGuard";

import { lazy } from "react";

const routes = [
	{
		exact: true,
		path: "/signin",
		component: lazy(() => import("./views/SignIn")),
		ignore: true,
	},
	{
		exact: true,
		path: "/signup",
		component: lazy(() => import("./views/SignUp")),
		ignore: true,
	},
	{
		exact: true,
		path: "/reset-password",
		component: lazy(() => import("./views/ResetPassword")),
		ignore: true,
	},
	{
		path: "/",
		// exact: true,
		layout: AdminLayout,
		guard: AuthGuard,
		routes: [
			{
				exact: true,
				path: "/",
				component: lazy(() => import("./views/Dashboard")),
			},
			{
				exact: true,
				path: "/dashboard",
				component: lazy(() => import("./views/Dashboard")),
			},
			{
				exact: true,
				path: "/transactions",
				component: lazy(() => import("./views/Transactions")),
			},
			{
				component: NoMatch,
				ignore: true,
			},
		],
	},
	{
		component: NoMatch,
		ignore: true,
	},
];

export default routes