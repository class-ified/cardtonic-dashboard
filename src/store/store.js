import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { loadState, saveState } from "utils/localStorage";
import thunk from "redux-thunk";
import throttle from "lodash.throttle";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./index";

const whitelist =
	process.env.NODE_ENV === "development"
		? ["misc", "user"]
		: ["misc", "user"];

const persistedReducer = persistReducer(
	{
		key: "root",
		storage,
		whitelist: whitelist,
		stateReconciler: autoMergeLevel2,
	},
	rootReducer
);

const middleware = [thunk];

const persistedState = loadState();

export const configureStore = () => {
	const enhancer = compose(applyMiddleware(...middleware));
	return {
		...createStore(persistedReducer, enhancer),
	};
};


export let store = configureStore();
export let persistor = persistStore(store);


store.subscribe(
	throttle(() => {
		saveState({
			user: store.getState().user,
		});
	}, 1000)
);
