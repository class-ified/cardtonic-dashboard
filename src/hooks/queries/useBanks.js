import { fetchBanks, fetchUsersBanks } from "api";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "selectors";
import { setUsersBanks } from "action";

export const queryBanksSettings = () => ({
	queryKey: "banks",
	queryFn: () => fetchBanks(),
});

export const queryUsersBanksSettings = (dispatch, userId) => ({
	queryKey: "usersBanks",
	queryFn: () => fetchUsersBanks(userId),
	onSuccess: (banks) => {
		dispatch(setUsersBanks(banks));
	},
});

export const useBanks = () => {
	return useQuery(queryBanksSettings());
};

export const useUsersBanks = () => {
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	return useQuery(queryUsersBanksSettings(dispatch, userId));
};
