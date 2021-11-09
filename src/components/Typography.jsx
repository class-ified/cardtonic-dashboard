export const TransactionHistoryTextBlack = ({text, span, className}) => (
    <h3 className={`text-xs text-bold text-almostblack ${className}`}>{text} <span className="text-green">{span}</span></h3>
)

export const TransactionHistoryTextGrey = ({text, span}) => (
    <h3 className="text-xs text-bold" style={{color: "#9BABC5"}}>{text} <span className="text-green">{span}</span></h3>
)

export const TransactionHistoryTextGreySmall = ({text, span}) => (
    <h3 className="text-tiny text-bold" style={{color: "#9BABC5"}}>{text} <span className="text-green">{span}</span></h3>
)

export const TransactionHistoryStatusText = ({status}) => (
    <div className="status-text-box" style={{display: 'flex', justifyContent: "center"}}>
        {(() => {
            switch (status) {
            case 'approved':
                return <h3 className="status-text text-regular status-text-paid">Paid</h3>
            case 'pending':
                return <h3 className="status-text text-regular status-text-pending">Pending</h3>
            case 'rejected':
                return <h3 className="status-text text-regular status-text-failed">Failed</h3>
            default:
                return null
            }
        })()}
    </div>
)


export const PageHeading = ({text, span}) => {
    return (
        <div className="pageheading-box">
            <h3 className="text-kindabig text-blue text-vbold">{text}</h3>
            <h3 className="text-18 text-vbold" style={{color: "#BFBFBF"}}>{span}</h3>
        </div>
    )
}