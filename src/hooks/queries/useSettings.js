import { setServerSettings } from "action";
import { fetchSettings } from "api";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

const settingsQuery = "settings";

export const querySettingsOptions = (dispatch) => ({
	queryKey: settingsQuery,
	queryFn: () => fetchSettings(),
	onSuccess: (settings) => {
		console.log(settings)
		dispatch(setServerSettings(settings));
	},
});

export const useSettings = () => {
	const dispatch = useDispatch();
	return useQuery(querySettingsOptions(dispatch));
};
