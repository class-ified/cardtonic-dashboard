const SetPinPopup = ({handlePopup, popupOpen}) => {
    return (
        <>
            {
                popupOpen && <div className="settings-popup">Set Pin</div>
            }
        </>
        
    )
}

export default SetPinPopup;