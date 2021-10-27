import { MobileTableBody } from "../../components/MobileTransactionsTable"
import { GetMoreButton } from "../../components/Buttons"


import { useState } from "react"

const HistoryMobile = () => {
    // popup state
    const [openPopup, setOpenPopup] = useState(true)

    const handlePopupOpen = (newValue) => {
        setOpenPopup(newValue)
    }

    return (
        <div className="mobile-history">
            <MobileTableBody />
            <MobileTableBody />
            <MobileTableBody />
            <MobileTableBody />
            <GetMoreButton />
        </div>
    )
}

export default HistoryMobile