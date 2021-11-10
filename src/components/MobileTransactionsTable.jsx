import {format} from "date-fns"


export const MobileTableBody = ({handlePopupOpen, cardCategory, amount, cardAvatar, createdAt}) => {
    const openPopup = () => {
        handlePopupOpen(true)
    }

    // get date from datetime and format
    const dateTime = createdAt.split('T') 
    const date = format(new Date(dateTime[0]), 'MM-dd-yy')

    return (
        <div className="mobile-history-body" onClick={openPopup}>
            <div className="left">
                <div className="icon-box">
                    <img src={cardAvatar} alt="icon" />
                </div>

                <div className="text-box">
                    <h3 className="text-tiny text-blue-dark text-regular">{cardCategory}</h3>
                    <h3 className="text-tiny text-green text-regular">{date}</h3>
                </div>
            </div>

            <div className="right">
                <h3 className="text-small text-blue-dark text-vbold">{amount.toLocaleString()}</h3>
            </div>
        </div>
    )
}