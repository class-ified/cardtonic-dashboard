import { createSelector } from "reselect";

export const selectMisc = (state) => state.misc;

export const selectCardSubCategories = createSelector(
	selectMisc,
	(misc) => misc.cardSubCategories
);

export const selectServerState = createSelector(
	selectMisc,
	(misc) => misc?.serverState ?? {}
);

export const selecthomepageAvatars = createSelector(
	selectServerState,
	(serverState) => serverState?.homepageAvatars ?? []
);

export const selectUsersBank = createSelector(
	selectMisc,
	(misc) => misc?.usersBank
);

export const selectMinimumWithdrawalableAmountNGN = createSelector(
	selectServerState,
	(serverState) => serverState?.minimumAmountWithdrawables.NGN ?? 2000
);

export const bankDetails = createSelector(selectMisc, (misc) => ({
	bankList: misc?.banks ?? [],
	bankMap: misc?.bankMap ?? {},
}));

export const hiddenBalance = createSelector(
	selectMisc,
	(misc) => misc?.balanceHidden ?? false
);

export const selectOnboarded = createSelector(
	selectMisc,
	(misc) => misc?.onboarded
);

// export const selectSettings = createSelector(

// )







