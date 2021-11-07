import React from "react";
import { selectUserId } from "selectors";
import { useQueries } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { queryUserOptions } from "./useUser";
import { querySettingsOptions } from "./useSettings";
import { queryBanksSettings, queryUsersBanksSettings } from "./useBanks";

export const useHome = () => {
	const [isRefetching, setRefreshing] = React.useState(false);
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);
	const queries = useQueries([
		queryUserOptions(dispatch, userId),
		querySettingsOptions(dispatch),
		queryBanksSettings(),
		queryUsersBanksSettings(dispatch, userId),
	]);

	const isLoading = queries.some((query) => query.isLoading);
	const isError = queries.some((query) => query.isError);
	const refetch = React.useCallback(() => {
		setRefreshing(true);
		return Promise.all(queries.map((query) => query.refetch())).finally(
			() => setRefreshing(false)
		);
	}, [queries]);
	return { isLoading, isError, refetch, isRefetching };
};
