import "./sass/main.scss";

import Loader from "./components/Loader";
import routes from "./routes";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment, Suspense } from "react";
import { persistor, store } from "./store/store";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./store/queryClient";
import { PersistGate } from "redux-persist/integration/react";

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
	return (
		<QueryClientProvider client={queryClient}>
			<PersistGate persistor={persistor}>
				<Provider store={store}>
					<Router>{renderRoutes(routes)}</Router>
				</Provider>
			</PersistGate>
		</QueryClientProvider>
	);
}

export default App;
