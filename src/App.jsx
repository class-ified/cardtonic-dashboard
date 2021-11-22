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
import { IntercomProvider } from "react-use-intercom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
const INTERCOM_APP_ID = "vvzf372a";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<IntercomProvider appId={INTERCOM_APP_ID}>
				<PersistGate persistor={persistor}>
					<Provider store={store}>
						<Router>{renderRoutes(routes)}</Router>
					</Provider>
				</PersistGate>
			</IntercomProvider>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</QueryClientProvider>
	);
}

export default App;
