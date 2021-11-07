import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
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

export const configureStore = () => {
	const enhancer = compose(applyMiddleware(...middleware));
	return {
		...createStore(persistedReducer, enhancer),
	};
};

export let store = configureStore();
export let persistor = persistStore(store);
