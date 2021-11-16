import { createSelector } from "reselect";

export const selectUser = (state) => state?.user;

export const selectUserId = createSelector(selectUser, (user) => user.id);

export const selectUsersName = createSelector(
	selectUser,
	(user) => user?.name ?? "User"
);

export const selectUserEmail = createSelector(
	selectUser,
	(user) => user?.email
);
export const selectUserAvatar = createSelector(
	selectUser,
	(user) => user?.avatar
);

export const selectUserName = createSelector(
	selectUser,
	(user) => user?.username
);

export const selectUserWallet = createSelector(
	selectUser,
	(user) => user?.wallets
);

export const selectNGNWallet = createSelector(
	selectUser,
	(user) => user?.wallets?.NGN
);

export const selectNGNBalance = createSelector(
	selectNGNWallet,
	(ngnWallet) => ngnWallet?.balance
);

export const selectNGNBanks = createSelector(
	selectNGNWallet,
	(ngnWallet) => ngnWallet?.banks
)

export const selectPinCode = createSelector(
	selectUser,
	user => !!user?.pinCode,
);

