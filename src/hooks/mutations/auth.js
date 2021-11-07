import { login } from "action";
import { loginUser } from "api";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";

export const useLoginMutation = () => {
	const dispatch = useDispatch();
	return useMutation(
		(user) => {
			return loginUser(user);
		},
		{
			mutationKey: "loginUser",
			onSuccess: (user) => {
				dispatch(login(user));
			},
		}
	);
};
