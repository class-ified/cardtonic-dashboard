import { TableBody, TableHead } from "../../components/DeskopTransactionsTable";
import { GetMoreButton } from "../../components/Buttons";
import DesktopDetailsPopup from "../../components/DesktopTransactionDetailsPopup";
import truncateString from "hooks/useTruncateString";

import { useEffect, useState } from "react";

const HistoryDesktop = ({ trades }) => {
	// popup state
	const [openPopup, setOpenPopup] = useState(false);

	// function that handles the state updating, passed as prop to the detailspopup and tablebody components so they are able to update the state
	const handlePopupView = (newValue) => {
		setOpenPopup(newValue);
	};


	console.log(trades);

	return (
		<div className="desktop-history">
			{/* popup details box */}
			<DesktopDetailsPopup
				openPopup={openPopup}
				handlePopupView={handlePopupView}
			/>

			<TableHead />

			<span className="horizontal-line"></span>

			{trades?.map((trade, index) => index < 4 && (
				<TableBody
					key={index}
					openPopup={openPopup}
					handlePopupView={handlePopupView}
					amount={trade.amountPayable}
					cardCategory={trade.cardSubCategory.cardCategory.name}
					cardAvatar={trade.cardSubCategory.cardCategory.avatar}
					cardSubCategory={trade.cardSubCategory.name}
					rate={trade.cardSubCategory.rate}
					status={trade.meta.status}
					cardAmount={trade.cardTotalAmount}
					createdAt={trade.createdAt}
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
