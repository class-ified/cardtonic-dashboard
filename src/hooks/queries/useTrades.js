
import { UPDATE_TRADES } from "action";
import { fetchTrades } from "api/user.api";
import { selectUserId } from "selectors";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";

export const queryTradeOptions = (dispatch, userId) => ({
	queryKey: "usersTrades",
	queryFn: () => fetchTrades(userId),
	onSuccess: (trades) => {
        // console.log(trades)
		dispatch({ type: UPDATE_TRADES, payload: trades });
	},
});

export const useTrades = () => {
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);
	return useQuery(queryTradeOptions(dispatch, userId));
};
