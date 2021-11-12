import {
	TransactionHistoryTextBlack,
	TransactionHistoryTextGrey,
	TransactionHistoryTextGreySmall,
	TransactionHistoryStatusText,
} from "./Typography";
import truncateString from "hooks/useTruncateString";
import bankIcon from "assets/images/bank-icon.svg";
import { format } from "date-fns";
import {
	FULL_MONTH_YEAR_DATE_FORMAT,
	SHORT_TIME_FORMAT,
} from "Constants/config";

const TableHead = ({ type }) => {
	const isTrade = type === "trades";

	return (
		<div className="desktop-history-head">
			<div className="box-transaction">
				<TransactionHistoryTextBlack
					text={isTrade ? "Gift Card" : "Bank Details"}
					className="heading"
				/>
			</div>
			<div className="box-date">
				<TransactionHistoryTextBlack text="Date | Time" />
			</div>
			<div className="box-rateaccount">
				<TransactionHistoryTextBlack
					text={isTrade ? "Amount" : "Account No."}
					span={isTrade ? " | Rate" : ""}
				/>
			</div>
			<div className="box-ngnamount">
				<TransactionHistoryTextBlack text="NGN" />
			</div>
			<div className="box-status">
				<TransactionHistoryTextBlack text="Status" />
			</div>
			<div className="box-transactiontype">
				<TransactionHistoryTextBlack text="Type" />
			</div>
		</div>
	);
};

const TableBody = ({
	handlePopupView,
	amount,
	cardCategory,
	cardAvatar,
	cardSubCategory,
	cardUpdatedAt,
	rate,
	status,
	cardAmount,
	index,
	handleClickedTrade,
	openPopup,
	bankName,
	bankAccountName,
	bankAccountNumber,
	bankUpdatedAt,
	bankAmount,
	bankStatus,
}) => {
	// get datetime from props and split (to differentiate time from date)
	// const dateTimeArray = createdAt?.split('T')
	// const date = dateTime[0]
	// const time = dateTime[1]

	const updateClickedIndex = () => {
		handleClickedTrade(index);
	};
	const onClick = () => {
		updateClickedIndex();
		handlePopupView(true);
		// console.log(index)
	};

	console.log({ cardUpdatedAt });

	return (
		<div
			className="desktop-history-body"
			onClick={onClick}
			style={{ cursor: "pointer" }}
		>
			<div className="box-transaction box-transaction-details">
				<div className="icon-box">
					<img
						height="50px"
						width="50px"
						style={{ borderRadius: "16px" }}
						src={cardAvatar || bankIcon}
						alt=""
					/>
				</div>

				<div className="content">
					<TransactionHistoryTextBlack
						text={cardCategory || bankName}
					/>
					<TransactionHistoryTextGrey
						text={truncateString(
							cardSubCategory || bankAccountName,
							18
						)}
					/>
				</div>
			</div>

			<div className="box-date box-date-details">
				<TransactionHistoryTextBlack
					text={format(
						new Date(cardUpdatedAt || bankUpdatedAt),
						FULL_MONTH_YEAR_DATE_FORMAT
					)}
				/>
				<TransactionHistoryTextGreySmall
					text={format(
						new Date(cardUpdatedAt || bankUpdatedAt),
						SHORT_TIME_FORMAT
					)}
				/>
			</div>

			<div className="box-rateaccount box-rateaccount-details">
				<TransactionHistoryTextBlack
					text={cardAmount || bankAccountNumber}
					span={rate ? ` | ${rate}` : ""}
				/>
			</div>

			<div className="box-ngnamount box-ngnamount-details">
				<TransactionHistoryTextBlack
					text={
						amount?.toLocaleString() || bankAmount?.toLocaleString()
					}
				/>
			</div>

			<div className="box-status box-status-details">
				<TransactionHistoryStatusText status={status || bankStatus} />
			</div>

			<div className="box-transactiontype box-transactiontype-details">
				{/* prettier-ignore */}
				<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="5" fill="#FF9900"/>
                    <g clip-path="url(#clip0_1:7685)">
                    <path d="M36.8 25.5998V29.7598L22.4 15.3598L17.6 20.1598L10.24 12.7998L8 15.0398L17.6 24.6398L22.4 19.8398L34.56 31.9998H30.4V35.1998H40V25.5998H36.8Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1:7685">
                    <rect width="32" height="32" fill="white" transform="translate(8 8)"/>
                    </clipPath>
                    </defs>
                </svg>
			</div>
		</div>
	);
};

export { TableHead, TableBody };
