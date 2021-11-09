import { TransactionHistoryTextBlack,  TransactionHistoryTextGrey, TransactionHistoryTextGreySmall, TransactionHistoryStatusText } from "./Typography"
import truncateString from "hooks/useTruncateString"

const TableHead = () => {
    return (
        <div className="desktop-history-head">
            <div className="box-transaction">
                <TransactionHistoryTextBlack text="Gift Card" className="heading" />
            </div>
            <div className="box-date">
                <TransactionHistoryTextBlack text="Date | Time" />
            </div>
            <div className="box-rateaccount">
                <TransactionHistoryTextBlack text="Amount" span=" | Rate" />
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
    )
}



const TableBody = ({handlePopupView, amount, cardCategory, cardAvatar, cardSubCategory, rate, status, cardAmount, createdAt}) => {

    // get datetime from props and split (to differentiate time from date)
    const dateTime = createdAt.split('T')
    const date = dateTime[0]
    const time = dateTime[1]

    

    return (
        <div className="desktop-history-body" onClick={() => handlePopupView(true)} style={{cursor:'pointer'}}>
            
            <div className="box-transaction box-transaction-details">
                <div className="icon-box">
                    <img height="50px" width="50px" style={{borderRadius: '16px'}} src={cardAvatar} alt="" />
                </div>

                <div className="content">
                    <TransactionHistoryTextBlack text={cardCategory} />
                    <TransactionHistoryTextGrey text={truncateString(cardSubCategory, 18)} />
                </div>
            </div>

            <div className="box-date box-date-details">
                <TransactionHistoryTextBlack text="March 10, 2021" />
                <TransactionHistoryTextGreySmall text="09:34pm" />
            </div>

            <div className="box-rateaccount box-rateaccount-details">
                <TransactionHistoryTextBlack text={cardAmount} span={` | ${rate}`} />
            </div>

            <div className="box-ngnamount box-ngnamount-details">
                <TransactionHistoryTextBlack text={amount} />
            </div>

            <div className="box-status box-status-details">
                <TransactionHistoryStatusText status={status} />
            </div>

            <div className="box-transactiontype box-transactiontype-details">
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
    )
}

export {TableHead, TableBody} 