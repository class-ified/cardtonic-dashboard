import { TableBody, TableHead } from "../../components/DeskopTransactionsTable";
import DesktopDetailsPopup from "../../components/DesktopTransactionDetailsPopup";

import { useState } from "react";

const HistoryDesktop = ({ trades }) => {
	// popup state
	const [openPopup, setOpenPopup] = useState(false);

	// active (clicked trade) index (to be passed into the popup)
	const [clickedTradeIndex, setClickedTradeIndex] = useState(null);

	// function that handles the state updating, passed as prop to the detailspopup and tablebody components so they are able to update the state
	const handlePopupView = (newValue) => {
		setOpenPopup(newValue);
	};
	// function that handles clickedtrade index
	const handleClickedTrade = (index) => {
		setClickedTradeIndex(index);
	};

	// get clicked trade
	const clickedTrade = () => {
		if (clickedTradeIndex || clickedTradeIndex === 0) {
			return trades[clickedTradeIndex];
		}
	};

	return (
		<>
			<div className="desktop-history">
				{/* popup details box */}
				<DesktopDetailsPopup
					openPopup={openPopup}
					handlePopupView={handlePopupView}
					clickedTrade={clickedTrade}
				/>

				<TableHead />

				<span className="horizontal-line"></span>

				{trades?.map(
					(trade, index) =>
						index < 6 && (
							<TableBody
								key={index}
								index={index}
								openPopup={openPopup}
								handlePopupView={handlePopupView}
								amount={trade.amountPayable}
								cardCategory={
									trade.cardSubCategory.cardCategory.name
								}
								cardAvatar={
									trade.cardSubCategory.cardCategory.avatar
								}
								cardSubCategory={trade.cardSubCategory.name}
								rate={trade.cardSubCategory.rate}
								status={trade.meta.status}
								cardAmount={trade.cardTotalAmount}
								createdAt={trade.createdAt}
								handleClickedTrade={handleClickedTrade}
							/>
						)
				)}
			</div>

			<div className="pagination-box">
				<button className="previous-btn">
					<svg
						width="9"
						height="15"
						viewBox="0 0 9 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.666342 7.56577C0.665613 7.43965 0.689787 7.31462 0.737478 7.19786C0.785169 7.0811 0.855438 6.9749 0.944258 6.88535L6.69425 1.13535C6.8747 0.954896 7.11946 0.853516 7.37466 0.853516C7.62987 0.853516 7.87462 0.954896 8.05508 1.13535C8.23553 1.31581 8.33691 1.56056 8.33691 1.81577C8.33691 2.07098 8.23553 2.31573 8.05508 2.49619L2.97592 7.56577L8.04549 12.6354C8.20249 12.8187 8.28453 13.0545 8.27522 13.2957C8.2659 13.5369 8.16592 13.7657 7.99524 13.9364C7.82457 14.107 7.59578 14.207 7.35459 14.2163C7.1134 14.2256 6.87758 14.1436 6.69425 13.9866L0.944258 8.2366C0.767212 8.0581 0.667401 7.81718 0.666342 7.56577Z"
							fill="#9BABC5"
						/>
					</svg>
				</button>

				<div className="number-box">
					<button className="page-number page-number-active">
						1
					</button>
					<button className="page-number">2</button>
					<button className="page-number">3</button>
				</div>

				<button className="next-btn">
					<svg
						width="9"
						height="15"
						viewBox="0 0 9 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.33366 7.56704C8.33439 7.69316 8.31021 7.81819 8.26252 7.93495C8.21483 8.05171 8.14456 8.15791 8.05574 8.24746L2.30575 13.9975C2.1253 14.1779 1.88054 14.2793 1.62534 14.2793C1.37013 14.2793 1.12538 14.1779 0.944923 13.9975C0.764466 13.817 0.663086 13.5722 0.663086 13.317C0.663086 13.0618 0.764466 12.8171 0.944923 12.6366L6.02408 7.56704L0.954506 2.49746C0.797506 2.31413 0.715467 2.07831 0.724783 1.83712C0.734099 1.59593 0.834084 1.36714 1.00476 1.19646C1.17543 1.02579 1.40422 0.925803 1.64541 0.916487C1.8866 0.907171 2.12242 0.989208 2.30575 1.14621L8.05574 6.89621C8.23279 7.07471 8.3326 7.31563 8.33366 7.56704Z"
							fill="#9BABC5"
						/>
					</svg>
				</button>
			</div>
		</>
	);
};

export default HistoryDesktop;
