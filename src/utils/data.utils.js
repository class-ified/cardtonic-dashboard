import FormData from "form-data";
import shortid from "shortid";
// import {format} from 'date-fns';
import _ from "lodash";
import { phone } from "phone";
import { capitalizeFirstLetter } from ".";
import faker from "faker";

export const absorbEventFunction = (callback) => (_event) => {
	console.log({ _event, callback });
	callback?.();
};

export const getErrorMessage = (error) => {
	if (error?.response?.data?.message) {
		return error?.response?.data?.message;
	}
	return null;
};

export const checkPhoneNumber = (phoneNumber = "") => {
	return phone(phoneNumber, { country: "NGA" });
};

export const validatePhoneNumber = (phoneNumber = "") => {
	let values = checkPhoneNumber(phoneNumber);
	return values?.isValid;
};

export const extractErrorMessage = (err) => {
	// const {response, request} = err;
	let temp = getErrorMessage(err);
	if (temp) {
		return temp;
	}
	return null;
	// if (response) {
	//   const {data: res} = response.data;
	//   if (response?.data?.message) return response?.data?.message;
	//   const message = res?.error.message;
	//   return message;
	// } else {
	//   const message = request?._response;
	//   return message;
	// }
};

export const getGreetingForTheDay = () => {
	let message = "";
	const data = [
			[22, "Working Late"],
			[18, "Good Evening"],
			[12, "Good Afternoon"],
			[5, "Good Morning"],
			[0, "Whoa, early bird"],
		],
		hr = new Date().getHours();
	for (let i = 0; i < data.length; i++) {
		if (hr >= data[i][0]) {
			message = data[i][1];
			break;
		}
	}
	return message;
};

// approved, rejected, pending
const allowStatus = ["approved", "rejected"];

export const includesStatus = (status) => allowStatus.includes(status);

export const purifyStatus = (status) => {
	status = String(status).toLocaleLowerCase();
	return includesStatus(status) ? status : "greyish";
};

export const getFormData = (values) => {
	let data = new FormData();
	Object.keys(values).forEach((key) => {
		data.append(key, values[key]);
	});
	return data;
};


export const isToday = (someDate) => {
	const today = new Date();
	someDate = new Date(someDate);
	return (
		someDate.getDate() === today.getDate() &&
		someDate.getMonth() === today.getMonth() &&
		someDate.getFullYear() === today.getFullYear()
	);
};
export const isYesterday = (someDate) => {
	someDate = new Date(someDate);

	const today = new Date();
	const yesterday = new Date(today);

	yesterday.setDate(yesterday.getDate() - 1);
	return (
		someDate.getDate() === yesterday.getDate() &&
		someDate.getMonth() === yesterday.getMonth() &&
		someDate.getFullYear() === yesterday.getFullYear()
	);
};

/**
 * formate number by international standard
 * @param {array} pages specified string
 * @param {string} key key used to specified needed data
 * @return {array} data
 */
export function getDataFromPurePages(pages = [], key = "trades") {
	const container = [];
	pages.forEach((page = {}) => {
		// console.log(page);
		const trades = page[key] || [];
		container.push(...trades);
	});
	// console.log({ container });
	return container;
}

// https://stackoverflow.com/a/38616965
// merge two array of object by a common key
// put the array that takes precidence last
export const mergeArraysOfObjectByKey = (arr, clientArray, key) => [
	...arr
		.concat(clientArray)
		.reduce(
			(m, o) => m.set(o[key], Object.assign(m.get(o[key]) || {}, o)),
			new Map()
		)
		.values(),
];

export const getHashes = (str = "") => {
	str = _.isEmpty(str) ? "" : String(str).replace(",", "");
	const length = str.length === 0 ? 1 : str.length;
	return "*".repeat(length);
};

export const validatePhoneNumberNGN = (phoneNumber = "") => {
	let values = phone(phoneNumber, { country: "NGA" });
	return values?.isValid;
};

export const purifyBettingProviderName = (name) => {
	name = String(name).toLocaleLowerCase().replace("_", " ");
	return capitalizeFirstLetter(name);
};

export function between(x, min, max) {
	return x >= min && x <= max;
}

export const generateData = (schema, min = 1, max) => {
	max = max || min;
	return Array.from({ length: faker.datatype.number({ min, max }) }).map(() =>
		Object.keys(schema).reduce((entity, key) => {
			entity[key] = faker.fake(schema[key]);
			return entity;
		}, {})
	);
};
