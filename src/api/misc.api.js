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
