import { TableBody, TableHead } from "../../components/DeskopTransactionsTable";
import { GetMoreButton } from "../../components/Buttons";
import DesktopDetailsPopup from "../../components/DesktopTransactionDetailsPopup";

import { useState } from "react";
import NoTransaction from "components/NoTransaction";
import AccountDetailsPopup from "components/AccountDetails.jsx";
import Pagination from "components/Pagination";

const HistoryDesktop = ({ withdrawals }) => {
	// popup state
	const [openPopup, setOpenPopup] = useState(false);
	const [openAccountDetails, setOpenAccountDetails] = useState(false)

	// active (clicked trade) index (to be passed into the popup)
	const [clickedWithdrawalIndex, setClickedWithdrawalIndex] = useState(null);

	// function that handles the state updating, passed as prop to the detailspopup and tablebody components so they are able to update the state
	const handlePopupView = (newValue) => {
		setOpenPopup(newValue);
	};
	// function that handles clickedWithdrawal index
	const handleClickedWithdrawal = (index) => {
		setClickedWithdrawalIndex(index);
	};

	// get clicked withdrawal from clickedWithdrawalIndex stored in useState
	const clickedWithdrawal = () => {
		if (clickedWithdrawalIndex || clickedWithdrawalIndex === 0) {
			return withdrawals[clickedWithdrawalIndex];
		}
	};

	// console.log(clickedWithdrawal());
	const withdrawalsArray = withdrawals && withdrawals

	return (
		<>
			<div className="desktop-history">
				{/* popup details box */}
				<DesktopDetailsPopup
					openPopup={openPopup}
					handlePopupView={handlePopupView}
					clickedWithdrawal={clickedWithdrawal}
				/>

				<TableHead type="withdrawals" />

				<span className="horizontal-line"></span>

				{withdrawalsArray?.length > 0 ? (
					withdrawalsArray?.map((withdrawal, index) => (
						<TableBody
							key={index}
							withdrawalIndex={index}
							openPopup={openPopup}
							handlePopupView={handlePopupView}
							bankName={withdrawal?.bank?.bankName}
							bankAccountName={withdrawal?.bank?.accountName}
							bankAccountNumber={withdrawal?.bank?.accountNumber}
							bankUpdatedAt={withdrawal?.bank?.updatedAt}
							bankAmount={withdrawal?.amount}
							bankStatus={withdrawal?.status}
							handleClickedWithdrawal={handleClickedWithdrawal}
						/>
					))
				) : (
					<NoTransaction />
				)}
			</div>

			<div className="history-bottom">
				<AccountDetailsPopup openAccountDetails={openAccountDetails} setOpenAccountDetails={setOpenAccountDetails} />
				<button className="account-details-button" onClick={() => setOpenAccountDetails(true)}>
					<h3 className="text-blue text-vbold text-small">
						Account Details
					</h3>

					{/* prettier-ignore */}
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.95043 18.6471C4.17301 17.9956 2.00437 15.827 1.35288 13.0496C0.882374 11.0437 0.882374 8.95625 1.35288 6.95043C2.00437 4.173 4.17301 2.00437 6.95043 1.35287C8.95626 0.882373 11.0437 0.882373 13.0496 1.35287C15.827 2.00437 17.9956 4.173 18.6471 6.95043C19.1176 8.95625 19.1176 11.0437 18.6471 13.0496C17.9956 15.827 15.827 17.9956 13.0496 18.6471C11.0437 19.1176 8.95626 19.1176 6.95043 18.6471Z" stroke="#00CEDE" stroke-width="1.5"/>
						<path d="M9 7.5L11.5 10L9 12.5" stroke="#00CEDE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>

				<Pagination />
			</div>
		</>
	);
};

export default HistoryDesktop;
