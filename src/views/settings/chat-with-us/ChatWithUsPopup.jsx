
import Popup from "../../../components/PopupContainer"

const SocialMediaLink = ({text, href, className}) => {
    return (
        <a className={`socialmedia-link text-regular text-white text-xs ${className ? className : text.toLowerCase()}`} href={href}>
            {text}
        </a>
    )
}



const ChatWithUsPopup = ({handlePopup, popupOpen}) => {
    const closePopup = () => {
        handlePopup(false)
    }

    return (
        <>
            {
                popupOpen && 
                <Popup className="chat-with-us">
                    <button className="cancel-button" onClick={closePopup}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.43129 8.27275C2.22757 4.87812 4.87812 2.22757 8.27275 1.43129C10.7243 0.856236 13.2757 0.856235 15.7273 1.43129C19.1219 2.22757 21.7724 4.87812 22.5687 8.27275C23.1438 10.7243 23.1438 13.2757 22.5687 15.7272C21.7724 19.1219 19.1219 21.7724 15.7272 22.5687C13.2757 23.1438 10.7243 23.1438 8.27276 22.5687C4.87812 21.7724 2.22757 19.1219 1.43129 15.7273C0.856235 13.2757 0.856235 10.7243 1.43129 8.27275Z" stroke="#3A6A95" stroke-width="2"/>
                            <path d="M14 10L10 14M14 14L10 10" stroke="#3A6A95" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>

                    <SocialMediaLink text="Facebook" />
                    <SocialMediaLink text="Instagram" />
                    <SocialMediaLink text="Twitter" />
                    <span className="horizontal-line"></span>
                    <SocialMediaLink text="Whatsapp" />
                    <SocialMediaLink text="Mobile | Call" className="mobile" />

                </Popup>
            }
        </>
        
    )
}

export default ChatWithUsPopup;