import data from "Constants/data";
import { ReduxActionType } from "entities";
import { LOGIN, UPDATE_USER, LOGOUT } from "action/type";
// import Intercom from 'react-native-intercom';
// import crashlytics from '@react-native-firebase/crashlytics';
// import messaging from '@react-native-firebase/messaging';

export default function userReducer(state = data.userInitialState, action) {
	const payload = action.payload;
	switch (action.type) {
		case UPDATE_USER:
			// Intercom.registerIdentifiedUser({userId: payload?.name});
			// Intercom.updateUser({
			//   // Pre-defined user attributes
			//   email: payload?.email,
			//   user_id: payload?.userId,
			//   name: payload?.name,
			//   // unsubscribed_from_emails: true,
			// });
			// console.log(payload?.wallet?.banks == null);

			// let banks = payload?.wallet?.banks;
			// if (banks == null || banks?.length == 0) {
			//   return {
			//     ...state,
			//     ...(payload ?? {}),
			//     wallet: {
			//       ...payload?.wallet,
			//       banks: [],
			//     },
			//   };
			// }
			return {
				...(payload ?? {}),
			};
		case LOGIN:
			//   try {
			//     Intercom.registerIdentifiedUser({userId: data.email});
			//     Intercom.updateUser({
			//       // Pre-defined user attributes
			//       email: data.email,
			//       user_id: data.email,
			//       name: data.name,
			//       unsubscribed_from_emails: true,
			//     });
			//     crashlytics().log('User signed in.');
			//     Promise.all([
			//       crashlytics().setUserId(data.email),
			//       crashlytics().setAttributes({
			//         email: data.email,
			//         name: data.name,
			//       }),
			//     ]).catch((err) => {
			//       crashlytics().log(err);
			//     });
			//   } catch (error) {}
			return {
				...state,
				...payload,
			};
		case LOGOUT:
			// Intercom.logout();
			//   try {
			//     messaging()
			//       .unsubscribeFromTopic('nosh')
			//       .then((value) => console.log({value}));
			//     if (__DEV__) {
			//       messaging()
			//         .unsubscribeFromTopic('test')
			//         .then((value) => console.log({value}));
			//     }
			//   } catch (error) {
			//     console.log({error});
			//   }
			return {
				...data.userInitialState,
				email: state.email,
				// username: state.username,
				name: state.name,
				id: state.id,
				avatar: state.avatar,
			};

		default:
			return state;
	}
}
