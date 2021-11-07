import { LOGOUT, LOGIN, REFRESH_TOKEN } from "action/type";
import something from "../Constants/data";

const INITIAL_STATE = something.authInitialState;

export default function authReducer(state = INITIAL_STATE, action) {
	const payload = action.payload;
	switch (action.type) {
		case LOGOUT:
			return INITIAL_STATE;
		case LOGIN:
			return {
				...state,
				authenticated: true,
				loggedIn: true,
			};

		case REFRESH_TOKEN:
			return {
				...state,
				payload,
			};
		default:
			return state;
	}
}
