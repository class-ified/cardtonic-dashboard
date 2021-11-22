/* eslint-disable jsx-a11y/alt-text */
import defaultBankIcon from "assets/images/default-bank-icon.svg";
/* eslint-disable jsx-a11y/alt-text */
import successIcon from "assets/images/icon-success.svg";
import failedIcon from "assets/images/failed-icon.svg";
import pendingIcon from "assets/images/icon-pending.svg";

import FormatSplit from "hooks/useFormatSplit";
import { format } from "date-fns";
import {
	FULL_MONTH_YEAR_DATE_FORMAT,
	SHORT_TIME_FORMAT,
} from "Constants/config";

export const WalletsDetailsPopupDesktop = ({
	bankAmount,
	bankStatus,
	bankName,
	bankAccountNumber,
	bankAccountName,
	bankCreatedAt,
	bankRejectionReason,
}) => {
	return (
		<div className="desktop-history-detailbox-body desktop-history-detailbox-body-wallet">
			<div className="row-1">
				<div className="left">
					<h1 className="text-kindabig text-green-2 text-vbold">
						{`₦${FormatSplit(bankAmount)[0]}.${
							FormatSplit(bankAmount)[1]
						}`}
					</h1>
				</div>

				<div className="right">
					<div className="info">
						<div className="icon-box">
							<img
								className="icon-default"
								src={defaultBankIcon}
							/>
						</div>

						<div className="text-box">
							<h3 className="text-small text-black">
								{bankName}
							</h3>

							<div className="text-box-date">
								<h3
									className="text-xs text-regular"
									style={{ color: "#8F92A1" }}
								>
									{format(
										new Date(bankCreatedAt),
										FULL_MONTH_YEAR_DATE_FORMAT
									)}
									&nbsp;&nbsp;
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
									&nbsp;&nbsp;
									{format(
										new Date(bankCreatedAt),
										SHORT_TIME_FORMAT
									).toLowerCase()}
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row-2">
				<div className="account-name-number">
					<h3 className="text-xs text-black text-regular">
						{bankAccountName}:&nbsp;&nbsp;
						<span className="text-vbold">{bankAccountNumber}</span>
					</h3>
				</div>
			</div>

			<div className="row-3">
				{(bankStatus === "pending" && (
					<p className="text-small text-grey-2 text-bold">
						The transaction is in progress. You’ll get a
						notification once done. Go have some fun!
					</p>
				)) ||
					(bankStatus === "approved" && (
						<p className="text-small text-green-2 text-bold">
							The withdrawal has been completed. You should
							receive an alert shortly. Thanks!
						</p>
					)) ||
					(bankStatus === "rejected" && (
						<div className="rejection-reason">
							<h3 className="text-xs text-black text-regular">
								Rejection Reason:&nbsp;
								{bankRejectionReason}
							</h3>
						</div>
					))}
			</div>
		</div>
	);
};

export const WalletsDetailsPopupMobile = ({
	bankAmount,
	bankStatus,
	bankName,
	bankAccountNumber,
	bankAccountName,
	bankCreatedAt,
	bankRejectionReason,
}) => {
	// split datetime from props into date and time
	const dateTime = bankCreatedAt?.split("T");
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
		const status = bankStatus ? bankStatus : "";
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

			case "rejected":
				heading = {
					icon: failedIcon,
					text: "Failed",
					className: "text-error",
				};
				break;

			default:
				return null;
		}
	}
	handlePopupHeading();

	// info box content to render, based on wallet transaction status
	let Component;
	if (bankStatus === "pending") {
		Component = (
			<p className="text-small feedback-message text-grey-2 text-bold">
				The withdrawal is pending. <br />
				You should receive it in few minutes.
			</p>
		);
	} else if (bankStatus === "rejected") {
		Component = (
			<div className="rejection-box">
				<h3 className="text-xs text-black text-regular">
					Rejection Reason:&nbsp;
					{bankRejectionReason}
				</h3>
			</div>
		);
	} else if (bankStatus === "approved") {
		Component = (
			<p className="text-small feedback-message text-green-2 text-bold">
				The withdrawal has been completed. <br />
				You should receive an alert shortly. <br />
				Thanks!
			</p>
		);
	}

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

			<div className="amount-box">
				<h2 className="text-vbold text-medium text-amount">
					{bankAmount &&
						`₦${FormatSplit(bankAmount)[0]}.${
							FormatSplit(bankAmount)[1]
						}`}
				</h2>
			</div>

			{Component}

			<div className="info-card">
				<div className="icon-box">
					<img src={defaultBankIcon} className="icon-default" />
				</div>

				<div className="text-box">
					<h3 className="text-small text-black">{bankName}</h3>

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

			<div className="transaction-id wallets-transaction-id">
				<h3 className="text-xs text-black text-regular">
					{bankAccountName}
				</h3>
				<h3 className="text-xs text-black text-vbold">{bankAccountNumber}</h3>
			</div>
		</>
	);
};
