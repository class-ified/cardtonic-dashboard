import { UPDATE_USER } from "action";
import { fetchUser } from "api/user.api";
import { selectUserId } from "selectors";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";

export const queryUserOptions = (dispatch, userId) => ({
	queryKey: "user",
	queryFn: () => fetchUser(userId),
	onSuccess: (user) => {
		dispatch({ type: UPDATE_USER, payload: user });
	},
});

export const useUser = () => {
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);
	return useQuery(queryUserOptions(dispatch, userId));
};


