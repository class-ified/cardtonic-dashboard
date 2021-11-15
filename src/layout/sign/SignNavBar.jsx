import mobileLogoSmall from "assets/images/mobile-logo.svg"
import mobileLogoBig from "assets/images/mobile-logo-big.svg"

import useWindowSize from "hooks/useWindowSize"
import { useHistory } from "react-router"

const SignNavBar = () => {  
    const windowSize = useWindowSize()

    // console.log(browserHistory)
    const BrowserHistory = useHistory()
    console.log(BrowserHistory)


    return (
        <nav className="sign-navbar">
            <div className="sign-navbar-placeholder"></div>
            <div className="sign-navbar-contentbox">
                <div className="navbar-content">
                    <div className="logo-box">
                        <a href="https://cardtonic.com">
                            <img src={windowSize.width > 1199 ? mobileLogoBig : mobileLogoSmall} alt="logo" />
                        </a>
                    </div>


                    <button className="back-button" onClick={BrowserHistory.goBack} >
                        {/* prettier-ignore */}
                        <svg width="66" height="64" viewBox="0 0 66 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="65.5" y="63.5" width="65" height="63" rx="19.5" transform="rotate(-180 65.5 63.5)" stroke="#1B507E"/>
                            <g clip-path="url(#clip0_1:7392)">
                            <path d="M39.0984 32.5529C39.037 32.5629 38.9749 32.5675 38.9128 32.5667L28.3306 32.5667L28.5613 32.674C28.7869 32.7808 28.9921 32.926 29.1677 33.1033L32.1352 36.0708C32.526 36.4439 32.5917 37.0441 32.2908 37.4929C31.9407 37.9711 31.2691 38.0749 30.7909 37.7247C30.7522 37.6964 30.7155 37.6656 30.681 37.6324L25.3148 32.2662C24.8954 31.8473 24.895 31.1677 25.3139 30.7484C25.3142 30.7481 25.3145 30.7478 25.3148 30.7475L30.681 25.3813C31.1007 24.9628 31.7802 24.9637 32.1988 25.3834C32.2317 25.4165 32.2625 25.4516 32.2908 25.4886C32.5917 25.9374 32.5261 26.5376 32.1352 26.9107L29.1731 29.8836C29.0156 30.0412 28.8346 30.1734 28.6365 30.2753L28.3145 30.4202L38.8537 30.4202C39.402 30.3998 39.883 30.7828 39.986 31.3217C40.0809 31.9068 39.6835 32.458 39.0984 32.5529Z" fill="#1B507E"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1:7392">
                            <rect width="15" height="15" fill="white" transform="matrix(1 8.74228e-08 8.74228e-08 -1 25 39)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default SignNavBar