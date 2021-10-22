import AdminLayout from "./layout/admin";
import NoMatch from "./views/404";
import AuthGuard from "./components/auth/AuthGuard";

import { lazy } from "react";

const routes = [
	{
		exact: true,
		path: "/signin",
		component: lazy(() => import("./views/signin")),
		ignore: true,
	},
	{
		exact: true,
		path: "/signup",
		component: lazy(() => import("./views/signup")),
		ignore: true,
	},
	{
		exact: true,
		path: "/reset-password",
		component: lazy(() => import("./views/reset-password")),
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
				component: lazy(() => import("./views/dashboard")),
			},
			{
				exact: true,
				path: "/dashboard",
				component: lazy(() => import("./views/dashboard")),
				
			},
			{
				exact: true,
				path: "/transactions",
				component: lazy(() => import("./views/transactions")),
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