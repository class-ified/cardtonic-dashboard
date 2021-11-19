import { UPDATE_TRADES } from "action"; 
import { fetchTrades } from "api/user.api";
import { selectUserId } from "selectors";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

export const queryTradeOptions = (dispatch, userId, params) => ({
	queryKey: "usersTrades",
	queryFn: () => fetchTrades(userId, params),
});

export const useTrades = () => {
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);

	const [page, setPage] = React.useState(1);
	// console.log({ page });
const {
		isPreviousData,
		data = {},
		...query
	} = useQuery(queryTradeOptions(dispatch, userId, { currentPage: page }));
	const getPreviousPage = () => setPage((old) => Math.max(old - 1, 0));

	const getNextPage = () => {
		console.log({ isPreviousData, page });
		if (!isPreviousData && page < data.totalPages) {
			setPage((old) => old + 1);
			// setPage(page + 1);
		}
	};
	return {
		trades: data.trades,
		isPreviousData,
		getPreviousPage,
		getNextPage,
		page,
		...query,
	};
};
