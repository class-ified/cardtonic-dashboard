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
    <>
        {(() => {
            switch (status) {
            case 'paid':
                return <h3 className="status-text status-text-paid">paid</h3>
            case 'pending':
                return <h3 className="status-text status-text-pending">pending</h3>
            case 'failed':
                return <h3 className="status-text status-text-failed">failed</h3>
            default:
                return null
            }
        })()}
    </>
)