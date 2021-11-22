import AdminLayout from "./layout/admin";
import SignLayout from "./layout/sign";
import NoMatch from "./views/404";
import AuthGuard from "./components/auth/AuthGuard";

import { lazy } from "react";

const routes = [
	{
		exact: true,
		path: "/signin",
		component: lazy(() => import("./views/signin")),
		layout: SignLayout,
		ignore: true,
	},
	{
		exact: true,
		path: "/signup",
		component: lazy(() => import("./views/signup")),
		layout: SignLayout,
		ignore: true,
	},
	{
		exact: true,
		path: "/reset-password",
		layout: SignLayout,
		component: lazy(() => import("./views/reset-password")),
	},
	{
		exact: true,
		path: "/email-verification",
		layout: SignLayout,
		component: lazy(() => import("./views/email-verification")),
	},

	{
		path: "*",
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
				exact: true,
				path: "/start-trade",
				component: lazy(() => import("./views/start-trade")),
			},
			{
				exact: true,
				path: "/wallet",
				component: lazy(() => import("./views/wallet")),
			},
			{
				exact: true,
				path: "/settings",
				component: lazy(() => import("./views/settings")),
			},
			// {
			// 	exact: true,
			// 	path: "/support",
			// 	component: lazy(() => import("./views/support")),
			// },
			{
				component: NoMatch,
				ignore: true,
			},
		],
	},
	// {
	// 	path: "/",
	// 	// exact: true,
	// 	layout: SignLayout,
	// 	routes: [
	// 		{
	// 			exact: true,
	// 			path: "/signin",
	// 			component: lazy(() => import("./views/signin")),
	// 		},
	// 		{
	// 			exact: true,
	// 			path: "/signup",
	// 			component: lazy(() => import("./views/signup")),
	// 		},
	// 		{
	// 			exact: true,
	// 			path: "/reset-password",
	// 			component: lazy(() => import("./views/reset-password")),
	// 		},
	// 	]
	// },

	{
		component: NoMatch,
		ignore: true,
	},
];

export default routes;
