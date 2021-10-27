/* eslint-disable jsx-a11y/alt-text */
import successIcon from "../assets/images/icon-success.svg"
import amazonIcon from "../assets/images/icons/amazon.svg"
import copyIcon from "../assets/images/copy-icon.svg"
import blankIcon from "../assets/images/blank-icon.svg"


import { useRef} from 'react'

const FailedBody = () => {
    return (
        <div className="desktop-history-detailbox-body desktop-history-detailbox-body-failed">
            <div className="row-1">
                <div className="left">
                    <h1 className="text-kindabig text-green-2 text-vbold">₦125,000.00</h1>
                    <h2 className="text-20 text-blue text-vbold">500.00 <span style={{color: '#D2D2D2'}}>| 340 - Rate</span></h2>
                </div>
                <div className="right">
                    <div className="info">
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
                </div>
            </div>

            <div className="row-2">
                <div className="left">
                    <div className="rejection-reason">
                        <h3 className="text-xs text-black text-regular">Rejection Reason:</h3>

                    </div>
                </div>
                <div className="right">
                    <div className="transaction-id"><h3 className="text-xs text-black text-regular">Transaction ID:&nbsp;&nbsp;<span className="text-vbold">894RG7HWYGR87YG</span></h3> <button><img src={copyIcon} /></button></div>
                    <div className="transaction-images">
                        <img src={blankIcon} />
                        <img src={blankIcon} />
                        <img src={blankIcon} />
                        <img src={blankIcon} />
                    </div>
                </div>
            </div>

            <div className="row-3">
                <div className="rejection-imagebox">
                    <h3 className="text-xs text-error text-regular">Rejection images: </h3>
                    <div className="images">
                        <img src={blankIcon} />
                        <img src={blankIcon} />
                        <img src={blankIcon} />
                        <img src={blankIcon} />
                    </div>
                </div>
                <div className="comment-box">
                    <h3 className="text-xs text-black text-regular">No comment added</h3>
                </div>
            </div>
        </div>
    )
}



const DesktopDetailsPopup = ({openPopup, handlePopupView}) => {
    
    const popupRef = useRef()

    // close popup via handlePopupView function prop from 
    const closePopup = () => {
        handlePopupView(false)
    }

    return (
        <>
            {openPopup && 
                <div className="desktop-history-detailbox" ref={popupRef}>
                    <button className="cancel-btn" onClick={closePopup}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.50971 9.59507C2.45076 5.58323 5.58324 2.45076 9.59507 1.50971C12.4924 0.830097 15.5076 0.830096 18.4049 1.50971C22.4168 2.45076 25.5492 5.58324 26.4903 9.59507C27.1699 12.4924 27.1699 15.5076 26.4903 18.4049C25.5492 22.4168 22.4168 25.5492 18.4049 26.4903C15.5076 27.1699 12.4924 27.1699 9.59507 26.4903C5.58324 25.5492 2.45076 22.4168 1.50971 18.4049C0.830096 15.5076 0.830096 12.4924 1.50971 9.59507Z" stroke="#FF2E2E" stroke-width="2"/>
                            <path d="M16.3637 11.6367L11.6365 16.364M16.3637 16.364L11.6365 11.6367" stroke="#FF2E2E" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>

                    <div className="desktop-history-detailbox-head">
                        <img src={successIcon} alt="success" />
                        <h3 className="text-xs text-black text-regular">Transaction Status: <span className="text-success">Paid</span></h3>
                    </div>

                    <span className="horizontal-line"></span>

                    <FailedBody />
                </div>
            }
        </>
    )
}

export default DesktopDetailsPopup