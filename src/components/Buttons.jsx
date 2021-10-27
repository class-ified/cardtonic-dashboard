import useWindowSize from "../hooks/useWindowSize"

import { Link } from "react-router-dom"

export const GetMoreButton = () => {
    const windowSize = useWindowSize();


    return (
        <Link to="/transactions" className="get-more-link">
            <div className={`get-more ${windowSize.width>1199 ? "get-more-desktop" : "get-more-mobile"}`}>
                <h3 className="text-xs text-regular">
                    Get More 
                </h3>
                <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1:7760)">
                        <path d="M0.901587 6.44707C0.962963 6.43711 1.02508 6.43252 1.08722 6.43332H11.6694L11.4387 6.326C11.2131 6.21924 11.0079 6.07395 10.8323 5.8967L7.86478 2.92919C7.47395 2.5561 7.40828 1.95592 7.70916 1.50714C8.05934 1.02891 8.73088 0.925076 9.20915 1.27525C9.24778 1.30356 9.28451 1.33442 9.31902 1.36762L14.6852 6.73383C15.1046 7.15273 15.105 7.83226 14.6861 8.25163C14.6858 8.2519 14.6855 8.2522 14.6852 8.25247L9.31902 13.6187C8.89932 14.0372 8.21979 14.0363 7.80122 13.6166C7.76829 13.5835 7.73753 13.5484 7.70916 13.5114C7.40828 13.0626 7.47395 12.4624 7.86478 12.0893L10.8269 9.11643C10.9844 8.9588 11.1654 8.82662 11.3635 8.7247L11.6855 8.57981H1.14629C0.598027 8.60017 0.117013 8.21719 0.0140152 7.67828C-0.0808659 7.0932 0.316503 6.54199 0.901587 6.44707Z" fill="#00CDDE"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1:7760">
                        <rect width="15" height="15" fill="white" transform="matrix(-1 0 0 1 15 0)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </span>
            </div>
        </Link>
    )
}