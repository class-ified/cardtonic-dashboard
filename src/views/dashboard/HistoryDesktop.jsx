import { TableBody, TableHead } from "../../components/DeskopTransactionsTable";
import { GetMoreButton } from "../../components/Buttons";
import DesktopDetailsPopup from "../../components/DesktopTransactionDetailsPopup";
import truncateString from "hooks/useTruncateString";

import { useEffect, useState } from "react";

const HistoryDesktop = ({ trades }) => {
	// popup state
	const [openPopup, setOpenPopup] = useState(false);
	
	// active (clicked trade) index (to be passed into the popup)
	const [clickedTradeIndex, setClickedTradeIndex] = useState(null)

	// function that handles the state updating, passed as prop to the detailspopup and tablebody components so they are able to update the state
	const handlePopupView = (newValue) => {
		setOpenPopup(newValue);
	};
	// function that handles clickedtrade index
	const handleClickedTrade = (index) => {
		setClickedTradeIndex(index)
	}

	// get clicked trade
	const clickedTrade = () => {
		if (clickedTradeIndex || clickedTradeIndex === 0) {
			return trades[clickedTradeIndex]
		}
	} 

	// console.log(clickedTrade)
	
	// console.log(trades);


	return (
		<div className="desktop-history">
			{/* popup details box */}
			<DesktopDetailsPopup
				openPopup={openPopup}
				handlePopupView={handlePopupView}
				clickedTrade={clickedTrade}
			/>

			<TableHead type="trades" />

			<span className="horizontal-line"></span>

			{trades?.map((trade, index) => index < 4 && (
				<TableBody
					key={index}
					index={index}
					openPopup={openPopup}
					handlePopupView={handlePopupView}
					amount={trade.amountPayable}
					cardCategory={trade.cardSubCategory.cardCategory.name}
					cardAvatar={trade.cardSubCategory.cardCategory.avatar}
					cardSubCategory={trade.cardSubCategory.name}
					rate={trade.cardSubCategory.rate}
					status={trade.meta.status}
					cardAmount={trade.cardTotalAmount}
					cardUpdatedAt={trade.updatedAt}
					handleClickedTrade={handleClickedTrade}
				/>
			))}

			<div className="button-box">
				<span></span>
				<GetMoreButton />
			</div>
		</div>
	);
};

export default HistoryDesktop;
