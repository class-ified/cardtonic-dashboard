import EditProfilePopup from "./EditProfilePopup"


import { useState } from "react"

const EditProfiileButton = () => {
    const [popupOpen, setPopupOpen] = useState(false)

    const handlePopup = (value) => {
        console.log(popupOpen)
        setPopupOpen(value)
    }


    return (
        <>
            <EditProfilePopup handlePopup={handlePopup} popupOpen={popupOpen} />
            <div style={{cursor: "pointer"}} className="settings__body-option" onClick={() => handlePopup(true)}>
                <h3 className="text-blue text-vbold text-small">Edit Profile</h3>

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.95043 18.6471C4.17301 17.9956 2.00437 15.827 1.35288 13.0496C0.882374 11.0437 0.882374 8.95625 1.35288 6.95043C2.00437 4.173 4.17301 2.00437 6.95043 1.35287C8.95626 0.882373 11.0437 0.882373 13.0496 1.35287C15.827 2.00437 17.9956 4.173 18.6471 6.95043C19.1176 8.95625 19.1176 11.0437 18.6471 13.0496C17.9956 15.827 15.827 17.9956 13.0496 18.6471C11.0437 19.1176 8.95626 19.1176 6.95043 18.6471Z" stroke="#00CEDE" stroke-width="1.5"/>
                    <path d="M9 7.5L11.5 10L9 12.5" stroke="#00CEDE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        
        </>
    )
}

export default EditProfiileButton