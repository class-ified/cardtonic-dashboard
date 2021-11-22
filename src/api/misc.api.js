import instance from "./instance";

export const fetchBanks = () =>
	instance.get("/banks").then((res) => res.data?.banks?.banks ?? []);

export const fetchSettings = () =>
	instance.get("/settings").then((res) => res.data?.settings ?? {});

export const fetchUsersBanks = (id) =>
	instance.get(`/banks/user/${id}`).then((res) => res.data?.banks ?? []);

export const deleteBank = (id) => instance.delete(`/banks/delete/${id}`);

export const verifyBank = ({ id, ...bankPayload }) => {
	return instance.post(`/banks/verify/${id}`, bankPayload);
};

export const addBank = ({ id, ...bankPayload }) => {
	return instance.post(`/banks/verify/${id}`, bankPayload);
};

export const editBank = ({ id, ...bankPayload }) =>
	instance.patch(`/banks/edit/${id}`, bankPayload);

export const fetchNotifications = ({ id, ...params }) =>
	instance
		.get(`/notifications/user/${id}`, { params })
		.then((res) => res.data);

		
export const updatePushNotificationToken = ({ id, fcmToken }) =>
	instance
		.post(`/notifications/fcm-token/${id}`, { fcmToken })
		.then((res) => res.data);

export const fetchTrades = ({ id, ...params }) =>
	instance.get(`/trades/user/${id}`, { params }).then((res) => res.data);

export const fetchWithdrawals = ({ id, ...params }) =>
	instance.get(`/withdrawals/user/${id}`, { params }).then((res) => res.data);

export const uploadImage = (id, photo) =>
	instance.post(`/uploads/${id}`, photo).then(({ data }) => data.URLs);

export const withdrawFunds = (id, payload) =>
	instance
		.post(`/withdrawals/user/${id}`, payload)
		.then(({ data }) => data.URLs);

export const tradeGiftCard = (id, payload) =>
	instance.post(`/trades/trade/${id}`, payload).then(({ data }) => data.URLs);
