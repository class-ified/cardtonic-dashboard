/* eslint-disable jsx-a11y/alt-text */
import successIcon from "assets/images/icon-success.svg";
import failedIcon from "assets/images/failed-icon.svg";
import pendingIcon from "assets/images/icon-pending.svg";
import copyIcon from "assets/images/copy-icon.svg";
import Popup from "./PopupContainer";

import FormatSplit from "hooks/useFormatSplit";
import {
	FULL_MONTH_YEAR_DATE_FORMAT,
	SHORT_TIME_FORMAT,
} from "Constants/config";

import { format } from "date-fns";
import { useRef } from "react";

const MobileDetailsPopup = ({ openPopup, handlePopupOpen, clickedTrade }) => {
	// close popup via handlePopupView function prop from
	const closePopup = () => {
		handlePopupOpen(false);
	};

	// if clickedtrade is passed as prop, run it and save result to trade variable
	let trade = clickedTrade && clickedTrade();
	console.log(clickedTrade())
	console.log(trade);

	return (
		<>
			{openPopup && (
				<Popup className="mobile-history-detailbox">
					<button className="cancel-button" onClick={closePopup}>
						{/* prettier-ignore */}
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.43129 8.27275C2.22757 4.87812 4.87812 2.22757 8.27275 1.43129C10.7243 0.856236 13.2757 0.856235 15.7273 1.43129C19.1219 2.22757 21.7724 4.87812 22.5687 8.27275C23.1438 10.7243 23.1438 13.2757 22.5687 15.7272C21.7724 19.1219 19.1219 21.7724 15.7272 22.5687C13.2757 23.1438 10.7243 23.1438 8.27276 22.5687C4.87812 21.7724 2.22757 19.1219 1.43129 15.7273C0.856235 13.2757 0.856235 10.7243 1.43129 8.27275Z" stroke="#3A6A95" stroke-width="2"/>
                            <path d="M14 10L10 14M14 14L10 10" stroke="#3A6A95" stroke-width="2" stroke-linecap="round"/>
                        </svg>
					</button>

					{/* if trade status === rejected, render failed component, else (if status === pending), render unfailed component (accounts for both approved and pending) */}
					{trade?.meta.status === "rejected" ? (
						<Failed
							key={trade?.id}
							cardNairaAmount={trade?.amountPayable}
							cardStatus={trade?.meta.status}
							cardRate={trade?.cardSubCategory.rate}
							cardAmount={trade?.cardTotalAmount}
							cardDateTime={
								trade?.cardSubCategory.cardCategory.createdAt
							}
							cardCategory={
								trade?.cardSubCategory.cardCategory.name
							}
							cardCategoryIcon={
								trade?.cardSubCategory.cardCategory.avatar
							}
							cardCategoryId={trade?.id}
							cardTradeComment={trade?.comment}
							cardRejectionImages={trade?.meta.rejectionFiles}
							cardTransactionImages={trade?.tradeFiles}
							cardRejectionReason={trade?.meta.rejectionReason}
						/>
					) : (
						<Unfailed
							key={trade?.id}
							cardNairaAmount={trade?.amountPayable}
							cardStatus={trade?.meta.status}
							cardRate={trade?.cardSubCategory.rate}
							cardAmount={trade?.cardTotalAmount}
							cardDateTime={
								trade?.cardSubCategory.cardCategory.createdAt
							}
							cardCategory={
								trade?.cardSubCategory.cardCategory.name
							}
							cardCategoryIcon={
								trade?.cardSubCategory.cardCategory.avatar
							}
							cardCategoryId={trade?.id}
							cardTradeComment={trade?.comment}
							cardTransactionImages={trade?.tradeFiles}
						/>
					)}
				</Popup>
			)}
		</>
	);
};

const Unfailed = (props) => {
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

	// change popup heading, heading classname and icon based on trade status
	let heading = {};

	function handlePopupHeading() {
		const status = props.cardStatus ? props.cardStatus : "";
		switch (status) {
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
			<div className="top-indicator">
				<img src={heading.icon} alt="check" />
				<h3 className="text-regular text-xs text-black">
					Transaction Status:{" "}
					<span className={`text-vbold ${heading.className}`}>
						{heading.text}
					</span>
				</h3>
			</div>

			<div className="image-box">
				{props.cardTransactionImages?.map((image) => (
					<img src={image} className="icon-default" />
				))}
			</div>

			<div className="amount-box">
				<h2 className="text-vbold text-medium text-amount">
					{props.cardNairaAmount &&
						`₦${FormatSplit(props.cardNairaAmount)[0]}.${
							FormatSplit(props.cardNairaAmount)[1]
						}`}
				</h2>
				<h3 className="text-18 text-blue text-vbold">
					{props.cardAmount}{" "}
					<span
						style={{ color: "#D2D2D2" }}
					>{`| ${props.cardRate}`}</span>
				</h3>
			</div>

			<div className="comment-box">
				<h3 className="text-xs text-black text-regular">
					No comment added
				</h3>
			</div>

			{props.cardStatus === "pending" ? (
				<p className="text-small feedback-message text-grey-2 text-bold">
					The transaction is in progress. <br /> You’ll get a
					notification once done.
					<br /> Go have some fun!
				</p>
			) : (
				<p className="text-small feedback-message text-green-2 text-bold">
					The transaction has been completed. <br />
					You can proceed to withdrawal. <br />
					Thanks!
				</p>
			)}

			<div className="info-card">
				<div className="icon-box">
					<img
						src={props.cardCategoryIcon}
						className="icon-default"
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
							&nbsp;&nbsp;{time}
						</h3>
					</div>
				</div>
			</div>

			<div className="transaction-id">
				<h3 className="text-xs text-black text-regular">
					Transaction ID:
					<br />
					<span className="text-vbold">{props.cardCategoryId}</span>
				</h3>{" "}
				<button>
					<img src={copyIcon} />
				</button>
			</div>
		</>
	);
};

const Failed = (props) => {
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

	console.log(props.cardRejectionImages);

	return (
		<>
			<div className="top-indicator">
				<img src={failedIcon} alt="check" />
				<h3 className="text-regular text-xs text-black">
					Transaction Status:{" "}
					<span className="text-error text-vbold">Failed</span>
				</h3>
			</div>

			<div className="image-box">
				{props.cardTransactionImages?.map((image) => (
					<img src={image} className="icon-default" />
				))}
			</div>

			<div className="failed-amount-box">
				<h2
					className="text-vbold text-medium"
					style={{ color: "#4FAEA8" }}
				>
					{`₦${FormatSplit(props.cardNairaAmount)[0]}.${
						FormatSplit(props.cardNairaAmount)[1]
					}`}
				</h2>
				<h3 className="text-18 text-blue text-vbold">
					{props.cardAmount}{" "}
					<span
						style={{ color: "#D2D2D2" }}
					>{`| ${props.cardRate}`}</span>
				</h3>
			</div>

			<div className="rejection-reason-box">
				<h3 className="text-xs text-black text-regular">
					Rejection Reason:&nbsp;
					{props.cardRejectionReason}
				</h3>
			</div>

			<div className="rejection-images-box">
				<h3 className="text-error text-xs text-regular">
					Rejection images:
				</h3>
				{props.cardRejectionImages?.map((image) => (
					<img src={image} className="icon-default" />
				))}
			</div>

			<div className="optional-comment-box">
				<h3 className="text-xs text-black text-regular">
					Optional comment:&nbsp;{props.cardTradeComment || ""}
				</h3>
			</div>

			<div className="info-card">
				<div className="icon-box">
					<img
						className="icon-default"
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

			<div className="transaction-id">
				<h3 className="text-xs text-black text-regular">
					Transaction ID:&nbsp;&nbsp;
					<br />
					<span className="text-vbold" ref={idRef}>
						{props.cardCategoryId}
					</span>
				</h3>{" "}
				<button onClick={copyId}>
					<img src={copyIcon} />
				</button>
			</div>
		</>
	);
};

export default MobileDetailsPopup;
