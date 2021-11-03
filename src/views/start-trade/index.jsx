/* eslint-disable jsx-a11y/alt-text */
import {BlackSubmit} from "../../components/Buttons"
import uploadGif from "../../assets/images/upload.gif"
import CompleteTrade from "./CompleteTradePopup"
import Footer from "../../layout/admin/Footer"

import { useState } from "react"

const StartTrade = () => {
    const [popupOpen, setPopupOpen] = useState(true)

    const handlePopup = (value) => {
        setPopupOpen(value)
    }
    const openPopup = (e) => {
        e.preventDefault()
        handlePopup(true)
    }

    return (
        <main className="start-trade">
            <div className="start-trade__heading">
                <h1 className="text-vbold text-blue-dark text-kindabig">Start Trade</h1>
            </div>
            <div className="start-trade__body">
                <form action="#">
                    <div className="default-select-box">
                        <select className="text-vbold text-small default-input" name="category" id="category">
                            <option value="">Select Category</option>
                            <option value="idk">okay</option>
                            <option value="idk">okay</option>
                            <option value="idk">okay</option>
                            <option value="idk">okay</option>
                        </select>

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.35288 6.95043C2.00437 4.17301 4.17301 2.00437 6.95043 1.35288C8.95626 0.882374 11.0437 0.882375 13.0496 1.35288C15.827 2.00437 17.9956 4.17301 18.6471 6.95044C19.1176 8.95626 19.1176 11.0437 18.6471 13.0496C17.9956 15.827 15.827 17.9956 13.0496 18.6471C11.0437 19.1176 8.95626 19.1176 6.95044 18.6471C4.17301 17.9956 2.00437 15.827 1.35288 13.0496C0.882374 11.0437 0.882374 8.95626 1.35288 6.95043Z" stroke="#00CEDE" stroke-width="1.5"/>
                            <path d="M12.5 9L10 11.5L7.5 9" stroke="#00CEDE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    
                    <div className="default-select-box">
                        <select className="text-vbold text-small default-input" name="category" id="category">
                            <option value="">Select Category</option>
                            <option value="idk">okay</option>
                            <option value="idk">okay</option>
                            <option value="idk">okay</option>
                            <option value="idk">okay</option>
                        </select>

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.35288 6.95043C2.00437 4.17301 4.17301 2.00437 6.95043 1.35288C8.95626 0.882374 11.0437 0.882375 13.0496 1.35288C15.827 2.00437 17.9956 4.17301 18.6471 6.95044C19.1176 8.95626 19.1176 11.0437 18.6471 13.0496C17.9956 15.827 15.827 17.9956 13.0496 18.6471C11.0437 19.1176 8.95626 19.1176 6.95044 18.6471C4.17301 17.9956 2.00437 15.827 1.35288 13.0496C0.882374 11.0437 0.882374 8.95626 1.35288 6.95043Z" stroke="#00CEDE" stroke-width="1.5"/>
                            <path d="M12.5 9L10 11.5L7.5 9" stroke="#00CEDE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div className="amount-rate">
                        <input type="number" className="default-input text-small text-regular" placeholder="Enter Gift Card Amount" />
                        <div className="rate-box">
                            <h2 className="text-medium text-vbold">₦0.00</h2>
                            <h3 className="text-small text-vbold">395</h3>
                        </div>
                    </div>

                    <textarea className="default-textarea" placeholder="Optional Comment, e.g You can type your code here"></textarea>

                    <label htmlFor="upload" className="upload-label">
                        <input id="upload" type="file" />
                        <div className="upload-box">
                            <img src={uploadGif} />
                            <h3 className="text-small text-vbold text-blue">Upload Card +</h3>
                        </div>
                    </label>

                    <CompleteTrade handlePopup={handlePopup} popupOpen={popupOpen} />

                    <BlackSubmit text="Start Trade" onClick={openPopup} />

                </form>
            </div>

            <Footer />
        </main>
    )
}

export default StartTrade;