import { format } from "date-fns";
import defaultBankIcon from "assets/images/default-bank-icon.svg";

export const MobileTableBody = ({
	// trade (dashboard & transactions)
	index,
	handlePopupOpen,
	cardCategory,
	amount,
	cardAvatar,
	createdAt,
	handleClickedTrade,

	// withdrawal
	handleClickedWithdrawal,
	withdrawalIndex,
	bankAmount,
	bankName,
	bankCreatedAt,
}) => {
	// if handleClickedTrade is passed, run it, else run handleclickedWithdrawal (to update clicked index state in parent)
	const updateClickedIndex = () => {
        if (handleClickedTrade) {
            handleClickedTrade(index)
        } else if (handleClickedWithdrawal) {
            handleClickedWithdrawal(withdrawalIndex);
        }
	};
    
	const onClick = () => {
		updateClickedIndex();
		handlePopupOpen(true);
	};
    console.log(withdrawalIndex)

	return (
		<div className="mobile-history-body" onClick={onClick}>
			<div className="left">
				<div className="icon-box">
					<img src={cardAvatar || defaultBankIcon} alt="icon" />
				</div>

				<div className="text-box">
					<h3 className="text-tiny text-blue-dark text-regular">
						{cardCategory || bankName}
					</h3>
					<h3 className="text-tiny text-green text-regular">
						{format(
							new Date(createdAt || bankCreatedAt),
							"MM-dd-yy"
						)}
					</h3>
				</div>
			</div>

			<div className="right">
				<h3 className="text-small text-blue-dark text-vbold">
					{amount?.toLocaleString() || bankAmount?.toLocaleString()}
				</h3>
			</div>
		</div>
	);
};
