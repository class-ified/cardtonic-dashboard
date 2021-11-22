import Popup from "./PopupContainer";
import { BlackSubmit } from "./Buttons";
import { selectMinimumWithdrawalableAmountNGN, selectNGNBanks, selectServerState } from "selectors";
import { useSelector } from "react-redux";
import { useUsersBanks } from "hooks";
import { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router";
import {Controller, useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import _ from 'lodash';
import { useMutation } from "react-query";
import { withdrawFunds } from "api";
import { queryClient } from "store/queryClient";

const WithdrawFunds = ({ handlePopupView, openPopup }) => {
	// close popup via handlePopupView function prop from
	const closePopup = () => {
		handlePopupView(false);
	};
	const {
		data: banks = [],
		status: usersBanks,
		usersBanksRefetch: refetch,
		usersBanksIsFetching: isFetching,
	} = useUsersBanks();

	const [selectedId, setSelectedId] = useState(null);

	const history = useHistory();

	console.log({ banks });

	const userBanks = useSelector(selectNGNBanks);
	// get server state
	const serverState = useSelector(selectServerState);
	console.log({ serverState });
	console.log(serverState?.minimumAmountWithdrawables.NGN);

	const navigateToWithdrawalHistory = useCallback(() => {
		history.push("/transactions");
	}, [history]);

	const chooseAccount = useCallback(
		(acct) => () => {
			if (acct === selectedId) {
				return setSelectedId(null);
			}
			setSelectedId(acct);
		},
		[selectedId]
	);

	const minimumWithdrawalableAmount = useSelector(
		selectMinimumWithdrawalableAmountNGN,
	  );

	const WithdrawalSchema = useMemo(
		() =>
		  Yup.object().shape({
			amount: Yup.string()
			  .matches(/[0-9]/g, 'Only digits are allowed')
			  .test(
				'is-greater-than-minimum',
				`Amount must be greater than minimum ${minimumWithdrawalableAmount}`,
				value => {
				  return Number(value) >= minimumWithdrawalableAmount;
				},
			  ),
		  }),
		[minimumWithdrawalableAmount],
	  );

	const withdrawalMutation = useMutation(
		data => {
		  return withdrawFunds(selectedId, data);
		},
		{
		  mutationKey: 'withdrawFunds',
		  onSuccess: async () => {
			try {
			  await queryClient.invalidateQueries('infiniteTrades');
			} catch (error) {}
			// on();
		  },
		},
	  );

	const onSubmit = useCallback(
		async (values) => {
			try {
				// const pinCode = await authenticateWithPIN();
				await withdrawalMutation.mutateAsync({
					// pinCode,
					amount: values.amount,
				});
			} catch (error) {
				console.log({ error });
			}
		},
		[withdrawalMutation]
	);

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(WithdrawalSchema),
	});

	return (
		<>
			{openPopup && (
				<Popup className="withdraw-funds-popup">
					<button className="cancel-button" onClick={closePopup}>
						{/* prettier-ignore */}
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.43129 8.27275C2.22757 4.87812 4.87812 2.22757 8.27275 1.43129C10.7243 0.856236 13.2757 0.856235 15.7273 1.43129C19.1219 2.22757 21.7724 4.87812 22.5687 8.27275C23.1438 10.7243 23.1438 13.2757 22.5687 15.7272C21.7724 19.1219 19.1219 21.7724 15.7272 22.5687C13.2757 23.1438 10.7243 23.1438 8.27276 22.5687C4.87812 21.7724 2.22757 19.1219 1.43129 15.7273C0.856235 13.2757 0.856235 10.7243 1.43129 8.27275Z" stroke="#3A6A95" stroke-width="2"/>
                            <path d="M14 10L10 14M14 14L10 10" stroke="#3A6A95" stroke-width="2" stroke-linecap="round"/>
                        </svg>
					</button>

					<h3 className="error-heading text-error text-small text-bold">
						{serverState.walletText}
					</h3>

					<form action="#">
						<input
							className="default-input"
							type="number"
							name="amount"
							placeholder="Enter Amount to Withdraw"
							min={serverState.minimumAmountWithdrawables.NGN}
							disabled={!banks?.length > 0}
						/>

						{banks?.length > 0 && (
							<>
								<span className="horizontal-line"></span>

								<div className="account-list-box">
									<h3 className="heading text-small text-success text-vbold">
										Select Bank
									</h3>

									{banks?.length > 0 &&
										banks?.map((bank) => (
											<>
												<input
													type="radio"
													id={bank.id}
													name="account"
													key={bank.id}
												/>
												<label htmlFor="account-1">
													<div className="account-details">
														<h3 className="text-regular text-small text-blue">
															Bank -{" "}
															<span className="text-vbold">
																{bank.bankName}
															</span>
														</h3>
														<h3 className="text-regular text-small text-blue">
															Account Number -{" "}
															<span className="text-vbold">
																{
																	bank.accountNumber
																}
															</span>
														</h3>
														<h3 className="text-regular text-small text-blue">
															Account Name -{" "}
															<span className="text-vbold">
																{
																	bank.accountName
																}
															</span>
														</h3>
														<div className="checkbox-icon"></div>
													</div>
												</label>
											</>
										))}
								</div>
							</>
						)}

						<BlackSubmit text="Withdraw" />
					</form>
				</Popup>
			)}
		</>
	);
};

export default WithdrawFunds;
