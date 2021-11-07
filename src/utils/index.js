import shortid from "shortid";
export * from "./currency.utils";
export * from "./data.utils";
// export * from "./network.utils";
// export * from './keychain';

// copy clipboard
// export const copyHOC = (str: string) => (_: any) => Clipboard.setString(str);
// export const copy = (str: string) => Clipboard.setString(str);

export const uuid = () => shortid.generate();
/**
 *
 * @param amount amount of time to wait
 * @returns Promise Promise
 */
export const waait = (amount = 0) =>
	new Promise((resolve) => setTimeout(resolve, amount));

/**
 *
 * @param string string to be converted to the max version
 * @param maxLen max length of the string
 * @returns string
 */
export function truncateString(string = "", maxLen = 25) {
	return string.length > maxLen
		? string.substring(0, maxLen - 3) + "..."
		: string;
}

/**
 *
 * @param string string to be converted to title case
 * @returns string
 */
export function getFirstLetter(string = "") {
	return string.charAt(0);
}

/**
 *
 * @param string string to be converted to title case
 * @returns string
 */
export function capitalizeFirstLetter(string = "") {
	string = String(string);
	return getFirstLetter(string).toUpperCase() + string.slice(1);
}

export const showSuccessSnackBar = (options) => {
	const text = options?.text ?? "Something went wrong";
	try {
		// Keyboard.dismiss();
	} catch (error) {}
	// return Snackbar.show({
	//   duration: Snackbar.LENGTH_LONG,
	//   fontFamily: 'Lato-Bold',
	//   backgroundColor: palette.blue,
	//   textColor: 'black',
	//   ...options,
	//   text,
	// });
};

export const extractMessageAndShow = (data) => {
	const msg = data?.message ?? "Success";
	showSuccessSnackBar({ text: msg });
};
export const showErrorSnackBar = async (options) => {
	const text = options?.text ?? "Something went wrong";
	// return Snackbar.show({
	//   duration: Snackbar.LENGTH_LONG,
	//   fontFamily: 'Lato-Bold',
	//   backgroundColor: palette.red,
	//   ...options,
	//   text,
	// });
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min = 0, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
