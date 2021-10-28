/* eslint-disable jsx-a11y/alt-text */
import successIcon from "../assets/images/icon-success.svg"
import failedIcon from "../assets/images/failed-icon.svg"
import amazonIcon from "../assets/images/icons/amazon.svg"
import blankIcon from "../assets/images/blank-icon.svg"
import copyIcon from "../assets/images/copy-icon.svg"

const Unfailed = () => {
    return (
        <>
            <div className="top-indicator">
                <img src={successIcon} alt="check" />
                <h3 className="text-regular text-xs text-black">Transaction Status: <span className="text-vbold" style={{color: '#2BC155'}}>Paid</span></h3>
            </div>

            <div className="image-box">
                <img src={blankIcon} />
                <img src={blankIcon} />
                <img src={blankIcon} />
                <img src={blankIcon} />
            </div>

            <div className="amount-box">
                <h2 className="text-vbold text-medium text-amount">₦125,000.00</h2>
                <h3 className="text-18 text-blue text-vbold">500.00 <span style={{color: '#D2D2D2'}}>| 340</span></h3>
            </div>

            <div className="comment-box">
                <h3 className="text-xs text-black text-regular">No comment added</h3>
            </div>

            <h3 className="feedback-message text-regular text-small text-bold">
                The transaction is in progress. <br/>
                You’ll get a notification once done. <br/>
                Go have some fun!
            </h3>

            <div className="info-card">
                <div className="icon-box">
                    <img src={amazonIcon} />
                </div>
                
                <div className="text-box">
                    <h3 className="text-small text-black">USA Amazon E-code</h3>

                    <div className="text-box-date">
                        <h3 className="text-xs text-regular" style={{color: '#8F92A1'}}>
                            March 10, 2020 &nbsp;&nbsp;
                        </h3>

                        <span>
                            <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="#8F92A1"/>
                            </svg>
                        </span>

                        <h3 className="text-xs text-regular" style={{color: '#8F92A1'}}>&nbsp;&nbsp;9:34 pm</h3>
                    </div>
                </div>
            </div>

            <div className="transaction-id"><h3 className="text-xs text-black text-regular">Transaction ID:&nbsp;&nbsp;<span className="text-vbold">894RG7HWYGR87YG</span></h3> <button><img src={copyIcon} /></button></div>
        </>
    )
}

const Failed = () => {
    return (
        <>
            <div className="top-indicator">
                <img src={failedIcon} alt="check" />
                <h3 className="text-regular text-xs text-black">Transaction Status: <span className="text-error text-vbold">Failed</span></h3>
            </div>

            <div className="image-box">
                <img src={blankIcon} />
                <img src={blankIcon} />
                <img src={blankIcon} />
                <img src={blankIcon} />
            </div>

            <div className="failed-amount-box">
                <h2 className="text-vbold text-medium" style={{color: '#4FAEA8'}}>₦125,000.00</h2>
                <h3 className="text-18 text-blue text-vbold">500.00 <span style={{color: '#D2D2D2'}}>| 340</span></h3>
            </div>

            <div className="rejection-reason-box">
                <h3 className="text-xs text-black text-regular">Rejection Reason:</h3>
            </div>

            <div className="rejection-images-box">
                <h3 className="text-error text-xs text-regular">Rejection images:</h3>
                <img src={blankIcon} />
                <img src={blankIcon} />
                <img src={blankIcon} />
                <img src={blankIcon} />
            </div>

            <div className="optional-comment-box">
                <h3 className="text-xs text-black text-regular">Optional comment:</h3>
            </div>

            <div className="info-card">
                <div className="icon-box">
                    <img src={amazonIcon} />
                </div>
                
                <div className="text-box">
                    <h3 className="text-small text-black">USA Amazon E-code</h3>

                    <div className="text-box-date">
                        <h3 className="text-xs text-regular" style={{color: '#8F92A1'}}>
                            March 10, 2020 &nbsp;&nbsp;
                        </h3>

                        <span>
                            <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="#8F92A1"/>
                            </svg>
                        </span>

                        <h3 className="text-xs text-regular" style={{color: '#8F92A1'}}>&nbsp;&nbsp;9:34 pm</h3>
                    </div>
                </div>
            </div>

            <div className="transaction-id"><h3 className="text-xs text-black text-regular">Transaction ID:&nbsp;&nbsp;<span className="text-vbold">894RG7HWYGR87YG</span></h3> <button><img src={copyIcon} /></button></div>
        </>
    )
}


const MobileDetailsPopup = ({openPopup, handlePopupOpen}) => {
    const closePopup = () => {
        handlePopupOpen(false)
    }

    return (
        <>
            {openPopup &&
                <div className="mobile-history-detailbox">
                    <div className="content-box">
                        <button className="cancel-button" onClick={closePopup}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.43129 8.27275C2.22757 4.87812 4.87812 2.22757 8.27275 1.43129C10.7243 0.856236 13.2757 0.856235 15.7273 1.43129C19.1219 2.22757 21.7724 4.87812 22.5687 8.27275C23.1438 10.7243 23.1438 13.2757 22.5687 15.7272C21.7724 19.1219 19.1219 21.7724 15.7272 22.5687C13.2757 23.1438 10.7243 23.1438 8.27276 22.5687C4.87812 21.7724 2.22757 19.1219 1.43129 15.7273C0.856235 13.2757 0.856235 10.7243 1.43129 8.27275Z" stroke="#3A6A95" stroke-width="2"/>
                                <path d="M14 10L10 14M14 14L10 10" stroke="#3A6A95" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </button>

                        <Failed />
                        
                    </div>
                </div>
            }
        </>
    )
}

export default MobileDetailsPopup;