import { createSelector } from "reselect";

export const selectAuth = (state) => state.auth;

export const selectAuthenticated = createSelector(
	selectAuth,
	(auth) => auth.authenticated
);

export const selectLoggedInBefore = createSelector(
	selectAuth,
	(auth) => auth?.loggedIn ?? false
);
