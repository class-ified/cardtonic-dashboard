import axios, { AxiosError } from "axios";
import { URL } from "Constants/config";
import { store } from "../store/store";
import { LOGOUT } from "../action/";

const instance = axios.create({
	baseURL: URL,
	withCredentials: true
});

export const refreshToken = () => axios.get("/auth/refresh");

instance.interceptors.request.use(async (config) => {
	config.headers = {
		withCredentials: true,
		...config.headers,
	};
	return config;
});

instance.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		const status = error.response?.status;
		// check if user is auth
		if (Number(status) === 401) {
			console.log('token expired')
			return refreshToken()
				.then(() => {
					return instance.request(error.config);
				})
				.catch((err) => {
					store.dispatch({ type: LOGOUT });
					throw err;
				});
		}
		return Promise.reject(error);
	}
);

export default instance;
