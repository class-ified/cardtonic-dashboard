import { QueryClient } from "react-query";
import {
	extractErrorMessage,
	extractMessageAndShow,
	showErrorSnackBar,
} from "utils";

export const queryClient = new QueryClient({
	// defaultOptions: {
	// 	mutations: {
	// 		onError: (error) => {
	// 			const errorMsg = extractErrorMessage(error);
	// 			showErrorSnackBar({ text: errorMsg });
	// 		},
	// 		onSuccess: (data) => {
	// 			extractMessageAndShow(data);
	// 		},
	// 	},
	// },
});
