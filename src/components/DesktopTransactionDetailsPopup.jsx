/* eslint-disable jsx-a11y/alt-text */
import successIcon from "../assets/images/icon-success.svg";
import pendingIcon from "../assets/images/icon-pending.svg";
import failedIcon from "../assets/images/failed-icon.svg";
import amazonIcon from "../assets/images/icons/amazon.svg";
import copyIcon from "../assets/images/copy-icon.svg";
import blankIcon from "../assets/images/blank-icon.svg";

import FormatSplit from "hooks/useFormatSplit";
import {
	FULL_MONTH_YEAR_DATE_FORMAT,
	SHORT_TIME_FORMAT,
} from "Constants/config";

import { format } from "date-fns";
import { useRef } from "react";

const DesktopDetailsPopup = ({ openPopup, handlePopupView, clickedTrade }) => {
	// close popup via handlePopupView function prop from
	const closePopup = () => {
		handlePopupView(false);
	};

	// if clickedtrade is passed as prop, run it and save result to trade variable
	let trade = clickedTrade && clickedTrade();
	console.log(trade);

	// change popup heading, heading classname and icon based on trade status
	let heading = {};

	function handlePopupHeading() {
		const status = trade?.meta.status;
		switch (status) {
			case "rejected":
				heading = {
					icon: failedIcon,
					text: "Failed",
					className: "text-error",
				};
				break;

			case "pending":
				heading = {
					icon: pendingIcon,
					text: "Pending",
					className: "text-pending",
				};
				break;

			case "approved":
				heading = {
					icon: successIcon,
					text: "Approved",
					className: "text-success",
				};
				break;

			default:
				return null;
		}
	}
	handlePopupHeading();

	return (
		<>
			{openPopup && (
				<div className="desktop-history-detailbox">
					<button className="cancel-btn" onClick={closePopup}>
						{/* prettier-ignore */}
						<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.50971 9.59507C2.45076 5.58323 5.58324 2.45076 9.59507 1.50971C12.4924 0.830097 15.5076 0.830096 18.4049 1.50971C22.4168 2.45076 25.5492 5.58324 26.4903 9.59507C27.1699 12.4924 27.1699 15.5076 26.4903 18.4049C25.5492 22.4168 22.4168 25.5492 18.4049 26.4903C15.5076 27.1699 12.4924 27.1699 9.59507 26.4903C5.58324 25.5492 2.45076 22.4168 1.50971 18.4049C0.830096 15.5076 0.830096 12.4924 1.50971 9.59507Z" stroke="#FF2E2E" stroke-width="2"/>
                            <path d="M16.3637 11.6367L11.6365 16.364M16.3637 16.364L11.6365 11.6367" stroke="#FF2E2E" stroke-width="2" stroke-linecap="round"/>
                        </svg>
					</button>

					<div className="desktop-history-detailbox-head">
						<img src={heading.icon} alt="" />
						<h3 className="text-xs text-black text-regular">
							Transaction Status:{" "}
							<span className={`text-vbold ${heading.className}`}>
								{heading.text}
							</span>
						</h3>
					</div>

					<span className="horizontal-line"></span>

					{/* if trade status === rejected, render failed component, else (if status === pending), render unfailed component (accounts for both approved and pending) */}
					{trade.meta.status === "rejected" ? (
						<FailedBody
							key={trade.id}
							cardNairaAmount={trade.amountPayable}
							cardStatus={trade.meta.status}
							cardRate={trade.cardSubCategory.rate}
							cardAmount={trade.cardTotalAmount}
							cardDateTime={
								trade.cardSubCategory.cardCategory.createdAt
							}
							cardCategory={
								trade.cardSubCategory.cardCategory.name
							}
							cardCategoryIcon={
								trade.cardSubCategory.cardCategory.avatar
							}
							cardCategoryId={trade.id}
							cardTradeComment={trade.comment}
							cardRejectionImages={trade.meta.rejectionFiles}
							cardTransactionImages={trade.tradeFiles}
							cardRejectionReason={trade.meta.rejectionReason}
						/>
					) : (
						<UnfailedBody
							key={trade.id}
							cardNairaAmount={trade.amountPayable}
							cardStatus={trade.meta.status}
							cardRate={trade.cardSubCategory.rate}
							cardAmount={trade.cardTotalAmount}
							cardDateTime={
								trade.cardSubCategory.cardCategory.createdAt
							}
							cardCategory={
								trade.cardSubCategory.cardCategory.name
							}
							cardCategoryIcon={
								trade.cardSubCategory.cardCategory.avatar
							}
							cardCategoryId={trade.id}
							cardTradeComment={trade.comment}
							cardTransactionImages={trade.tradeFiles}
						/>
					)}
				</div>
			)}
		</>
	);
};

const UnfailedBody = (props) => {
	// split datetime from props into date and time
	const dateTime = props.cardDateTime?.split("T");
	// pick date from date time and format by full month with year
	const date = dateTime
		? format(new Date(dateTime), FULL_MONTH_YEAR_DATE_FORMAT)
		: null;
	// pick time from datetime and format by hour:minute
	const time = dateTime
		? format(new Date(dateTime), SHORT_TIME_FORMAT)
		: null;

	return (
		<div className="desktop-history-detailbox-body desktop-history-detailbox-body-pending">
			<div className="row-1">
				<div className="left">
					<h1 className="text-kindabig text-green-2 text-vbold">
						{`₦${FormatSplit(props.cardNairaAmount)[0]}.${
							FormatSplit(props.cardNairaAmount)[1]
						}`}
					</h1>
					<h2 className="text-20 text-blue text-vbold">
						{props.cardAmount}{" "}
						<span
							style={{ color: "#D2D2D2" }}
						>{`| ${props.cardRate} - Rate`}</span>
					</h2>
				</div>
				<div className="right">
					<div className="info">
						<div className="icon-box">
							<img
								style={{
									height: "50px",
									width: "50px",
									borderRadius: "16px",
								}}
								src={props.cardCategoryIcon}
							/>
						</div>

						<div className="text-box">
							<h3 className="text-small text-black">
								{props.cardCategory}
							</h3>

							<div className="text-box-date">
								<h3
									className="text-xs text-regular"
									style={{ color: "#8F92A1" }}
								>
									{date}&nbsp;&nbsp;
								</h3>

								<span>
									{/* prettier-ignore */}
									<svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="1.5" cy="1.5" r="1.5" fill="#8F92A1"/>
                                    </svg>
								</span>

								<h3
									className="text-xs text-regular"
									style={{ color: "#8F92A1" }}
								>
									&nbsp;&nbsp;{time.toLowerCase()}
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row-2">
				<div className="transaction-id">
					<h3 className="text-xs text-black text-regular">
						Transaction ID:&nbsp;&nbsp;
						<span className="text-vbold">
							{props.cardCategoryId}
						</span>
					</h3>{" "}
					<button>
						<img src={copyIcon} />
					</button>
				</div>
			</div>

			<div className="row-3">
				<div className="left">
					{props.cardStatus === "pending" ? (
						<p className="text-small text-grey-2 text-bold">
							The transaction is in progress. You’ll get a
							notification once done. Go have some fun!
						</p>
					) : (
						<p className="text-small text-green-2 text-bold">
							The withdrawal has been completed. You should
							receive an alert shortly. Thanks!
						</p>
					)}
				</div>

				<div className="right">
					<div className="images">
						{props.cardTransactionImages?.map((image) => (
							<img src={image} className="icon-default" />
						))}
					</div>

					<div className="comment-box">
						<h3 className="text-xs text-black text-regular">
							{props.cardTradeComment || "No comment added"}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

const FailedBody = (props) => {
	// split datetime from props into date and time
	const dateTime = props.cardDateTime?.split("T");
	// pick date from date time and format by full month with year
	const date = dateTime
		? format(new Date(dateTime), FULL_MONTH_YEAR_DATE_FORMAT)
		: null;
	// pick time from datetime and format by hour:minute
	const time = dateTime
		? format(new Date(dateTime), SHORT_TIME_FORMAT)
		: null;

	// transaction id ref
	const idRef = useRef();

	// function that handles copy transaction id
	const copyId = () => {
		const id = idRef.current.textContent;
		navigator.clipboard.writeText(id);
	};

	return (
		<div className="desktop-history-detailbox-body desktop-history-detailbox-body-failed">
			<div className="row-1">
				<div className="left">
					<h1 className="text-kindabig text-green-2 text-vbold">
						{`₦${FormatSplit(props.cardNairaAmount)[0]}.${
							FormatSplit(props.cardNairaAmount)[1]
						}`}
					</h1>
					<h2 className="text-20 text-blue text-vbold">
						{props.cardAmount}{" "}
						<span
							style={{ color: "#D2D2D2" }}
						>{`| ${props.cardRate} - Rate`}</span>
					</h2>
				</div>
				<div className="right">
					<div className="info">
						<div className="icon-box">
							<img
								style={{
									height: "50px",
									width: "50px",
									borderRadius: "16px",
								}}
								src={props.cardCategoryIcon}
							/>
						</div>

						<div className="text-box">
							<h3 className="text-small text-black">
								{props.cardCategory}
							</h3>

							<div className="text-box-date">
								<h3
									className="text-xs text-regular"
									style={{ color: "#8F92A1" }}
								>
									{date}&nbsp;&nbsp;
								</h3>

								<span>
									{/* prettier-ignore */}
									<svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="1.5" cy="1.5" r="1.5" fill="#8F92A1"/>
                                    </svg>
								</span>

								<h3
									className="text-xs text-regular"
									style={{ color: "#8F92A1" }}
								>
									&nbsp;&nbsp;{time.toLowerCase()}
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row-2">
				<div className="left">
					<div className="rejection-reason">
						<h3 className="text-xs text-black text-regular">
							Rejection Reason:&nbsp;
							{props.cardRejectionReason}
						</h3>
					</div>
				</div>
				<div className="right">
					<div className="transaction-id">
						<h3 className="text-xs text-black text-regular">
							Transaction ID:&nbsp;&nbsp;
							<span className="text-vbold" ref={idRef}>
								{props.cardCategoryId}
							</span>
						</h3>{" "}
						<button onClick={copyId}>
							<img src={copyIcon} />
						</button>
					</div>
					<div className="transaction-images">
						{props.cardTransactionImages?.map((image) => (
							<img src={image} className="icon-default" />
						))}
					</div>
				</div>
			</div>

			<div className="row-3">
				<div className="rejection-imagebox">
					<h3 className="text-xs text-error text-regular">
						Rejection images:{" "}
					</h3>
					<div className="images">
						{props.cardRejectionImages.map((image) => (
							<img src={image} className="icon-default" />
						))}
					</div>
				</div>
				<div className="comment-box">
					<h3 className="text-xs text-black text-regular">
						{props.cardTradeComment || "No comment added"}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default DesktopDetailsPopup;
