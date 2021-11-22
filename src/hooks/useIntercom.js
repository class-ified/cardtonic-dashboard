import React from "react";
import { useSelector } from "react-redux";
import { selectAuthenticated, selectUser } from "selectors";
import { useIntercom as UseIntercom } from "react-use-intercom";

export const useIntercom = () => {
	const user = useSelector(selectUser);
	const auth = useSelector(selectAuthenticated);
	const { boot, update, show } = UseIntercom();
	const openIntercom = React.useCallback(() => {
		if (auth) {
			const userPayload = {
				email: user.email,
				userId: user.id,
				name: user.username,
			};
			update(userPayload);
			boot(userPayload);
			return;
		}
		boot();
	}, [auth, boot, update, user.email, user.id, user.username]);
	return { openIntercom, show };
};
