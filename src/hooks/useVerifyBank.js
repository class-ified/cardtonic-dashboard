import { verifyBank } from "api";
import { selectUserId } from "selectors";
import { QueryOptions, useQuery } from "react-query";
import { useSelector } from "react-redux";

export const validateBankPayload = (values) => {
	if (
		values?.accountNumber?.trim() === "" ||
		values?.accountNumber?.length !== 10
	) {
		return false;
	}
	if (values?.bankCode?.trim() === "") {
		return false;
	}

	return true;
};

export const useVerifyBankAccount = (values, options) => {
	const userId = useSelector(selectUserId);
	return useQuery(
		["verifyBank", values],
		() => verifyBank({ ...values, id: userId }),
		{
			enabled: validateBankPayload(values),
			...options,
		}
	);
};
