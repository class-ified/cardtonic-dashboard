import instance from "./instance";

export const fetchUser = (id) => {
	return instance.get(`/users/user/${id}`).then((res) => res.data.user);
};
