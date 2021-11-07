import {
	ONBOARDED,
	TOGGLE_BIO,
	UPDATE_BANKS,
	UPDATE_BANK_MAP,
	SET_CARDS,
	UPDATE_SETTINGS,
	UPDATE_CURRENCY,
	TOGGLE_BALANCE,
	UPDATE_USERS_BANKS,
} from "action/type";
// import data from "constants/data";

export default function miscReducer(state = {}, action) {
	const payload = action.payload;
	switch (action.type) {
		case ONBOARDED:
			return {
				...state,
				onboarded: true,
			};
		case TOGGLE_BIO:
			return { ...state, bio: !state.bio };
		case TOGGLE_BALANCE:
			return { ...state, balanceHidden: !state.balanceHidden };
		case UPDATE_BANKS:
			return {
				...state,
				banks: payload,
			};
		case UPDATE_BANK_MAP:
			return {
				...state,
				bankMap: payload,
			};
		case SET_CARDS:
			return {
				...state,
				cardSubCategories: payload,
			};
		case UPDATE_USERS_BANKS:
			return {
				...state,
				usersBank: payload,
			};
		case UPDATE_SETTINGS: {
			return {
				...state,
				serverState: payload,
			};
		}
		case UPDATE_CURRENCY: {
			return {
				...state,
				currency: payload,
			};
		}

		default:
			return state;
	}
}
