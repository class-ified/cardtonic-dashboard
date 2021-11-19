import Popup from "../../components/PopupContainer"

import cautionImage from "../../assets/images/caution.svg"

const CompleteTrade = ({handlePopup, popupOpen}) => {
    const closePopup = () => {
        handlePopup(false)
    }

    return (
        <>
            {popupOpen &&
                <Popup className="complete-trade">
                    <button className="cancel-button" onClick={closePopup}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.43129 8.27275C2.22757 4.87812 4.87812 2.22757 8.27275 1.43129C10.7243 0.856236 13.2757 0.856235 15.7273 1.43129C19.1219 2.22757 21.7724 4.87812 22.5687 8.27275C23.1438 10.7243 23.1438 13.2757 22.5687 15.7272C21.7724 19.1219 19.1219 21.7724 15.7272 22.5687C13.2757 23.1438 10.7243 23.1438 8.27276 22.5687C4.87812 21.7724 2.22757 19.1219 1.43129 15.7273C0.856235 13.2757 0.856235 10.7243 1.43129 8.27275Z" stroke="#3A6A95" stroke-width="2"/>
                            <path d="M14 10L10 14M14 14L10 10" stroke="#3A6A95" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>

                    <img src={cautionImage} alt="caution" />

                    <h3 className="text-error text-small text-bold">
                        We are not liable for any error from you, please keep your card safe, and make sure no one is watching while you upload your card.
                    </h3>

                    <button type="submit" className="complete-trade-button">
                        <h3 className="text-white text-bold text-small">Complete Trade</h3>

                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.901587 5.44756C0.962963 5.4376 1.02508 5.43301 1.08722 5.43381H11.6694L11.4387 5.32649C11.2131 5.21973 11.0079 5.07444 10.8323 4.89719L7.86478 1.92968C7.47395 1.55659 7.40828 0.956413 7.70916 0.50763C8.05934 0.0294 8.73088 -0.0744361 9.20915 0.275743C9.24778 0.304049 9.28451 0.334905 9.31902 0.368108L14.6852 5.73432C15.1046 6.15322 15.105 6.83275 14.6861 7.25212C14.6858 7.25239 14.6855 7.25269 14.6852 7.25296L9.31902 12.6192C8.89932 13.0377 8.21979 13.0368 7.80122 12.6171C7.76829 12.584 7.73753 12.5489 7.70916 12.5118C7.40828 12.0631 7.47395 11.4629 7.86478 11.0898L10.8269 8.11692C10.9844 7.95928 11.1654 7.82711 11.3635 7.72518L11.6855 7.5803H1.14629C0.598027 7.60065 0.117013 7.21767 0.0140152 6.67877C-0.0808659 6.09369 0.316503 5.54248 0.901587 5.44756Z" fill="white"/>
                        </svg>
                    </button>

                </Popup>
            }
        </>
    )
}

export default CompleteTrade;