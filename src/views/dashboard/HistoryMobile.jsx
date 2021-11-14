import { MobileTableBody } from "../../components/MobileTransactionsTable";
import { GetMoreButton } from "../../components/Buttons";
import MobileDetailsPopup from "../../components/MobileTransactionDetailsPopup";

import { useState } from "react";

const HistoryMobile = ({ trades }) => {
	// popup state
	const [openPopup, setOpenPopup] = useState(false);

	// active (clicked trade) index (to be passed into the popup)
	const [clickedTradeIndex, setClickedTradeIndex] = useState(null);

	const handlePopupOpen = (newValue) => {
		setOpenPopup(newValue);
	};
	// function that handles clickedtrade index
	const handleClickedTrade = (index) => {
		setClickedTradeIndex(index);
        console.log(clickedTradeIndex)
	};

	// get clicked trade
	const clickedTrade = () => {
		if (clickedTradeIndex || clickedTradeIndex === 0) {
			return trades[clickedTradeIndex];
		}
	};

	return (
		<div className="mobile-history">
			<MobileDetailsPopup
				openPopup={openPopup}
				handlePopupOpen={handlePopupOpen}
				clickedTrade={clickedTrade}
			/>

			{trades?.map(
				(trade, index) =>
					index < 4 && (
						<MobileTableBody
							key={index}
							index={index}
							handlePopupOpen={handlePopupOpen}
							cardCategory={
								trade.cardSubCategory.cardCategory.name
							}
							amount={trade.amountPayable}
							cardAvatar={
								trade.cardSubCategory.cardCategory.avatar
							}
							createdAt={trade.createdAt}
							handleClickedTrade={handleClickedTrade}
						/>
					)
			)}

			<GetMoreButton />
		</div>
	);
};

export default HistoryMobile;
