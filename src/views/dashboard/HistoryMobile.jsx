import { MobileTableBody } from "../../components/MobileTransactionsTable"
import { GetMoreButton } from "../../components/Buttons"
import MobileDetailsPopup from "../../components/MobileTransactionDetailsPopup"


import { useState } from "react"

const HistoryMobile = () => {
    // popup state
    const [openPopup, setOpenPopup] = useState(false)

    const handlePopupOpen = (newValue) => {
        setOpenPopup(newValue)
    }

    return (
        <div className="mobile-history">
            <MobileDetailsPopup openPopup={openPopup} handlePopupOpen={handlePopupOpen} />
            <MobileTableBody handlePopupOpen={handlePopupOpen} />
            <MobileTableBody handlePopupOpen={handlePopupOpen} />
            <MobileTableBody handlePopupOpen={handlePopupOpen} />
            <MobileTableBody handlePopupOpen={handlePopupOpen} />
            <GetMoreButton />
        </div>
    )
}

export default HistoryMobile