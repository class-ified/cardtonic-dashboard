import "./sass/main.scss";

import Loader from "./components/Loader";
import routes from "./routes";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment, Suspense } from "react";

export const renderRoutes = (routes = []) => (
	<Suspense fallback={<Loader />}>
		<Switch>
			{routes.map((route, i) => {
				const Guard = route.guard || Fragment;
				const Layout = route.layout || Fragment;
				const Component = route.component;

				return (
					<Route
						key={i}
						path={route.path}
						exact={route.exact}
						render={(props) => (
							<Guard>
								<Layout {...props}>
									{route.routes ? (
										renderRoutes(route.routes)
									) : (
										<Component {...props} />
									)}
								</Layout>
							</Guard>
						)}
					/>
				);
			})}
		</Switch>
	</Suspense>
);

function App() {
	return <Router>{renderRoutes(routes)}</Router>;
}

export default App;
