
import { UPDATE_WITHDRAWALS } from "action";
import { fetchWithdrawals } from "api/user.api";
import { selectUserId } from "selectors";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";

export const queryWithdrawalOptions = (dispatch, userId, currentPage) => ({
	queryKey: "usersWithdrawals",
	queryFn: () => fetchWithdrawals(userId, currentPage),
	onSuccess: (withdrawals) => {
        console.log(withdrawals)
		dispatch({ type: UPDATE_WITHDRAWALS, payload: withdrawals });
	},
});

export const useWithdrawals = (currentPage=1) => {
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);
	return useQuery(queryWithdrawalOptions(dispatch, userId, currentPage));
};
