import { MobileTableBody } from "../../components/MobileTransactionsTable"
import { GetMoreButton } from "../../components/Buttons"
import MobileDetailsPopup from "../../components/MobileTransactionDetailsPopup"


import { useState } from "react"

const HistoryMobile = ({trades}) => {
    // popup state
    const [openPopup, setOpenPopup] = useState(false)

    const handlePopupOpen = (newValue) => {
        setOpenPopup(newValue)
    }

    return (
        <div className="mobile-history">
            <MobileDetailsPopup openPopup={openPopup} handlePopupOpen={handlePopupOpen} />
            
            {
                trades?.map((trade, index) => index < 4 && (
                    <MobileTableBody 
                        key={index}
                        handlePopupOpen={handlePopupOpen} 
                        cardCategory={trade.cardSubCategory.cardCategory.name}
                        amount={trade.amountPayable}
                        cardAvatar={trade.cardSubCategory.cardCategory.avatar}
                        createdAt={trade.createdAt}
                    />
                ))
            }
            
            <GetMoreButton />
        </div>
    )
}

export default HistoryMobile