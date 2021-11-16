import instance from "./instance";

export const fetchUser = (id) => {
	return instance.get(`/users/user/${id}`).then((res) => res.data.user);
};

export const fetchSettings = () => {
	return instance.get(`/settings`).then((res) => res)
}

export const fetchTrades = (id) => {
	return instance.get(`/trades/user/${id}`).then((res) => res.data.trades);
};

export const fetchWithdrawals = (id, currentPage) => {
	return instance
		.get(`/withdrawals/user/${id}?currentPage=${currentPage}&limit=5`)
		.then((res) => res.data);
};

export const changeUser = (id, user) => {
	return instance
	  .put(`/users/user/${id}`, user)
	  .then((res) => res.data);
  };
  
  export const setPin = (id, data) => {
	return instance
	  .put(`/users/user/pin-code/${id}`, data)
	  .then((res) => res.data);
  };
  
  export const resetPin = (id) => {
	return instance
	  .put(`/users/user/pin-code-reset/${id}`)
	  .then((res) => res.data);
  };
