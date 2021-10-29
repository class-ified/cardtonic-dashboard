import { TableBody, TableHead } from "../../components/DeskopTransactionsTable";
import DesktopDetailsPopup from "../../components/DesktopTransactionDetailsPopup";

import { useState } from "react";


const HistoryDesktop = () => {
    // popup state
    const [openPopup, setOpenPopup] = useState(false)

    // function that handles the state updating, passed as prop to the detailspopup and tablebody components so they are able to update the state
    const handlePopupView = (newValue) => {
        setOpenPopup(newValue)
    }


    return (
        <div className="desktop-history">
            {/* popup details box */}
            <DesktopDetailsPopup openPopup={openPopup} handlePopupView={handlePopupView}/>

            <TableHead />

            <span className="horizontal-line"></span>

            <TableBody openPopup={openPopup} handlePopupView={handlePopupView} />
            <TableBody openPopup={openPopup} handlePopupView={handlePopupView} />
            <TableBody openPopup={openPopup} handlePopupView={handlePopupView} />
            <TableBody openPopup={openPopup} handlePopupView={handlePopupView} />
            <TableBody openPopup={openPopup} handlePopupView={handlePopupView} />
            <TableBody openPopup={openPopup} handlePopupView={handlePopupView} />

        </div>
    )
}

export default HistoryDesktop;