import mobileLogo from "../../assets/images/mobile-logo.svg"
import NavigationMobile from "./NavigationMobile"

import { Link } from "react-router-dom"
import { store } from "store/store"
import { LOGOUT } from "action"

const NavBar = () => {
    const handleLogout = () => {
        store.dispatch({type: LOGOUT})
    }

    return (
        <header className="navbar">
            <Link to="/">
                <div className="navbar__logobox">
                    <img src={mobileLogo} alt="logo" />
                </div>
            </Link>

            <div className="navbar__rightbox">
                <button className="logout-button" onClick={handleLogout}>
                    {/* prettier-ignore */}
                    <svg width="184" height="56" viewBox="0 0 184 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="184" height="56" rx="28" fill="#F0F4F5"/>
                        <path d="M168.758 22.4423C167.696 20.1928 166.016 18.3039 163.898 16.9786C160.953 15.1404 157.47 14.5564 154.083 15.3384C150.701 16.1153 147.822 18.1668 145.984 21.1119C144.14 24.0571 143.556 27.5405 144.338 30.9274C145.12 34.3092 147.172 37.1883 150.112 39.0265C152.184 40.3214 154.56 41.0069 156.992 41.0069H157.15C159.572 40.9764 161.928 40.2757 163.969 38.9859C164.563 38.6101 164.736 37.8281 164.36 37.234C163.984 36.6399 163.202 36.4673 162.608 36.8431C160.968 37.884 159.069 38.4476 157.119 38.473C155.119 38.4984 153.164 37.9449 151.457 36.8837C149.086 35.4009 147.436 33.0855 146.811 30.3637C146.187 27.6319 146.654 24.8289 148.137 22.4575C151.193 17.5676 157.663 16.0747 162.552 19.1316C164.259 20.1979 165.609 21.7162 166.462 23.5239C167.295 25.2859 167.62 27.2409 167.402 29.1704C167.326 29.8661 167.823 30.4958 168.524 30.5719C169.22 30.6481 169.849 30.1505 169.926 29.4497C170.195 27.0581 169.788 24.6309 168.758 22.4423V22.4423Z" fill="#FF2E2E"/>
                        <path d="M161.411 23.5949C160.913 23.0973 160.111 23.0973 159.613 23.5949L157.003 26.21L154.393 23.6C153.895 23.1024 153.093 23.1024 152.595 23.6C152.098 24.0976 152.098 24.8999 152.595 25.3975L155.205 28.0075L152.595 30.6175C152.098 31.1152 152.098 31.9175 152.595 32.4151C152.844 32.6639 153.169 32.7858 153.494 32.7858C153.819 32.7858 154.144 32.6639 154.393 32.4151L157.003 29.8051L159.613 32.4151C159.862 32.6639 160.187 32.7858 160.512 32.7858C160.837 32.7858 161.162 32.6639 161.411 32.4151C161.908 31.9175 161.908 31.1152 161.411 30.6175L158.801 28.0025L161.411 25.3925C161.908 24.8948 161.908 24.0925 161.411 23.5949V23.5949Z" fill="#FF2E2E"/>
                        <rect width="56" height="56" rx="28" fill="#002444"/>
                        <path d="M39.7516 22.4405C38.6906 20.1916 37.0102 18.3031 34.8933 16.9781C31.9488 15.1404 28.4612 14.5565 25.0802 15.3383C21.6992 16.1151 18.8208 18.166 16.983 21.1104C15.1402 24.0549 14.5564 27.5374 15.3382 30.9235C16.12 34.3045 18.171 37.1829 21.1103 39.0207C23.1816 40.3152 25.5574 41.0005 27.9891 41.0005H28.1465C30.568 40.9701 32.9235 40.2695 34.9643 38.9801C35.5583 38.6044 35.7309 37.8226 35.3552 37.2286C34.9796 36.6347 34.1978 36.4621 33.6038 36.8377C31.9641 37.8784 30.0654 38.4419 28.116 38.4673C26.1158 38.4927 24.1613 37.9393 22.4556 36.8783C20.0848 35.396 18.4349 33.081 17.8105 30.36C17.1861 27.6389 17.6531 24.8367 19.1355 22.4659C22.1916 17.5771 28.6592 16.0846 33.548 19.1407C35.2537 20.2068 36.6041 21.7247 37.4569 23.532C38.2895 25.2935 38.6144 27.248 38.3961 29.1771C38.32 29.8726 38.8175 30.5021 39.518 30.5783C40.2135 30.6544 40.843 30.1569 40.9192 29.4564C41.1882 27.0551 40.7821 24.6285 39.7516 22.4405V22.4405Z" fill="#2BC155"/>
                        <path d="M32.1996 23.5935L26.0766 29.7165L23.8072 27.447C23.3096 26.9494 22.5074 26.9494 22.0099 27.447C21.5123 27.9445 21.5123 28.7467 22.0099 29.2443L25.178 32.4124C25.4268 32.6612 25.7517 32.783 26.0766 32.783C26.4016 32.783 26.7265 32.6612 26.9753 32.4124L33.9918 25.3908C34.4894 24.8932 34.4894 24.091 33.9918 23.5935C33.4943 23.101 32.6921 23.101 32.1996 23.5935V23.5935Z" fill="#2BC155"/>
                        <path d="M77.664 30.84H81.984V33H74.96V21.344H77.664V30.84ZM86.6404 24.576C87.2697 24.576 87.843 24.6747 88.3604 24.872C88.8777 25.0693 89.3204 25.352 89.6884 25.72C90.0617 26.088 90.3497 26.536 90.5524 27.064C90.7604 27.5867 90.8644 28.176 90.8644 28.832C90.8644 29.4933 90.7604 30.0907 90.5524 30.624C90.3497 31.152 90.0617 31.6027 89.6884 31.976C89.3204 32.344 88.8777 32.6293 88.3604 32.832C87.843 33.0293 87.2697 33.128 86.6404 33.128C86.0057 33.128 85.427 33.0293 84.9044 32.832C84.387 32.6293 83.939 32.344 83.5604 31.976C83.187 31.6027 82.8964 31.152 82.6884 30.624C82.4857 30.0907 82.3844 29.4933 82.3844 28.832C82.3844 28.176 82.4857 27.5867 82.6884 27.064C82.8964 26.536 83.187 26.088 83.5604 25.72C83.939 25.352 84.387 25.0693 84.9044 24.872C85.427 24.6747 86.0057 24.576 86.6404 24.576ZM86.6404 31.288C87.211 31.288 87.6297 31.088 87.8964 30.688C88.1684 30.2827 88.3044 29.6693 88.3044 28.848C88.3044 28.0267 88.1684 27.416 87.8964 27.016C87.6297 26.616 87.211 26.416 86.6404 26.416C86.0537 26.416 85.6244 26.616 85.3524 27.016C85.0804 27.416 84.9444 28.0267 84.9444 28.848C84.9444 29.6693 85.0804 30.2827 85.3524 30.688C85.6244 31.088 86.0537 31.288 86.6404 31.288ZM95.1536 24.56C95.5056 24.56 95.8363 24.5947 96.1456 24.664C96.4603 24.7333 96.751 24.832 97.0176 24.96H99.5216V25.864C99.5216 26.0027 99.4816 26.112 99.4016 26.192C99.327 26.272 99.1963 26.3333 99.0096 26.376L98.4016 26.512C98.4763 26.752 98.5136 27 98.5136 27.256C98.5136 27.672 98.4256 28.0453 98.2496 28.376C98.079 28.7067 97.8416 28.9893 97.5376 29.224C97.239 29.4533 96.8843 29.632 96.4736 29.76C96.063 29.8827 95.623 29.944 95.1536 29.944C94.8923 29.944 94.647 29.928 94.4176 29.896C94.2363 30.0027 94.1456 30.1253 94.1456 30.264C94.1456 30.4027 94.2176 30.504 94.3616 30.568C94.511 30.6267 94.7056 30.6693 94.9456 30.696C95.1856 30.7173 95.4603 30.7333 95.7696 30.744C96.079 30.7493 96.3936 30.768 96.7136 30.8C97.0336 30.8267 97.3483 30.8747 97.6576 30.944C97.967 31.0133 98.2416 31.1253 98.4816 31.28C98.7216 31.4347 98.9136 31.6427 99.0576 31.904C99.207 32.16 99.2816 32.488 99.2816 32.888C99.2816 33.2613 99.191 33.6267 99.0096 33.984C98.8283 34.3413 98.5616 34.6587 98.2096 34.936C97.8576 35.2133 97.4256 35.4347 96.9136 35.6C96.4016 35.7707 95.815 35.856 95.1536 35.856C94.503 35.856 93.9403 35.7947 93.4656 35.672C92.9963 35.5493 92.6043 35.3867 92.2896 35.184C91.9803 34.9867 91.751 34.7573 91.6016 34.496C91.4523 34.2347 91.3776 33.9627 91.3776 33.68C91.3776 33.312 91.4896 33.0027 91.7136 32.752C91.9376 32.496 92.2443 32.296 92.6336 32.152C92.447 32.0293 92.2976 31.872 92.1856 31.68C92.0736 31.488 92.0176 31.2453 92.0176 30.952C92.0176 30.8293 92.039 30.7013 92.0816 30.568C92.1243 30.4293 92.191 30.296 92.2816 30.168C92.3723 30.04 92.487 29.9173 92.6256 29.8C92.7643 29.6827 92.9296 29.5787 93.1216 29.488C92.6896 29.2587 92.3483 28.9547 92.0976 28.576C91.8523 28.1973 91.7296 27.7573 91.7296 27.256C91.7296 26.84 91.8176 26.4667 91.9936 26.136C92.1696 25.8 92.4096 25.5173 92.7136 25.288C93.023 25.0533 93.3856 24.8747 93.8016 24.752C94.2176 24.624 94.6683 24.56 95.1536 24.56ZM96.9936 33.304C96.9936 33.1707 96.951 33.064 96.8656 32.984C96.7856 32.904 96.6736 32.84 96.5296 32.792C96.391 32.744 96.2256 32.7093 96.0336 32.688C95.847 32.6667 95.6443 32.6507 95.4256 32.64C95.207 32.6293 94.9803 32.6213 94.7456 32.616C94.511 32.6053 94.279 32.5867 94.0496 32.56C93.895 32.6667 93.767 32.7867 93.6656 32.92C93.5696 33.048 93.5216 33.1947 93.5216 33.36C93.5216 33.4773 93.5456 33.584 93.5936 33.68C93.647 33.776 93.7376 33.8587 93.8656 33.928C93.9936 33.9973 94.1643 34.0507 94.3776 34.088C94.5963 34.1307 94.871 34.152 95.2016 34.152C95.559 34.152 95.8523 34.1307 96.0816 34.088C96.311 34.0453 96.4923 33.9867 96.6256 33.912C96.7643 33.8373 96.8603 33.7467 96.9136 33.64C96.967 33.5387 96.9936 33.4267 96.9936 33.304ZM95.1536 28.416C95.5643 28.416 95.8603 28.3147 96.0416 28.112C96.2283 27.904 96.3216 27.6373 96.3216 27.312C96.3216 26.976 96.2283 26.712 96.0416 26.52C95.8603 26.328 95.5643 26.232 95.1536 26.232C94.743 26.232 94.4443 26.328 94.2576 26.52C94.0763 26.712 93.9856 26.976 93.9856 27.312C93.9856 27.472 94.007 27.6187 94.0496 27.752C94.0976 27.8853 94.1696 28.0027 94.2656 28.104C94.3616 28.2 94.4816 28.2773 94.6256 28.336C94.775 28.3893 94.951 28.416 95.1536 28.416ZM112.105 27.168C112.105 28.0107 111.958 28.7947 111.665 29.52C111.377 30.2453 110.969 30.8773 110.441 31.416C109.913 31.9493 109.275 32.368 108.529 32.672C107.787 32.976 106.963 33.128 106.057 33.128C105.15 33.128 104.323 32.976 103.577 32.672C102.83 32.368 102.19 31.9493 101.657 31.416C101.129 30.8773 100.718 30.2453 100.425 29.52C100.137 28.7947 99.9926 28.0107 99.9926 27.168C99.9926 26.3253 100.137 25.5413 100.425 24.816C100.718 24.0907 101.129 23.4613 101.657 22.928C102.19 22.3947 102.83 21.976 103.577 21.672C104.323 21.368 105.15 21.216 106.057 21.216C106.963 21.216 107.787 21.3707 108.529 21.68C109.275 21.984 109.913 22.4027 110.441 22.936C110.969 23.4693 111.377 24.0987 111.665 24.824C111.958 25.5493 112.105 26.3307 112.105 27.168ZM109.337 27.168C109.337 26.592 109.262 26.0747 109.113 25.616C108.963 25.152 108.747 24.76 108.465 24.44C108.187 24.12 107.846 23.8747 107.441 23.704C107.035 23.5333 106.574 23.448 106.057 23.448C105.534 23.448 105.067 23.5333 104.657 23.704C104.251 23.8747 103.907 24.12 103.625 24.44C103.347 24.76 103.134 25.152 102.985 25.616C102.835 26.0747 102.761 26.592 102.761 27.168C102.761 27.7493 102.835 28.272 102.985 28.736C103.134 29.1947 103.347 29.584 103.625 29.904C103.907 30.224 104.251 30.4693 104.657 30.64C105.067 30.8053 105.534 30.888 106.057 30.888C106.574 30.888 107.035 30.8053 107.441 30.64C107.846 30.4693 108.187 30.224 108.465 29.904C108.747 29.584 108.963 29.1947 109.113 28.736C109.262 28.272 109.337 27.7493 109.337 27.168ZM115.718 24.704V29.968C115.718 30.3787 115.811 30.696 115.998 30.92C116.184 31.144 116.459 31.256 116.822 31.256C117.094 31.256 117.347 31.2 117.582 31.088C117.822 30.976 118.054 30.8187 118.278 30.616V24.704H120.758V33H119.222C118.912 33 118.71 32.8613 118.614 32.584L118.462 32.104C118.302 32.2587 118.136 32.4 117.966 32.528C117.795 32.6507 117.611 32.7573 117.414 32.848C117.222 32.9333 117.014 33 116.79 33.048C116.566 33.1013 116.32 33.128 116.054 33.128C115.6 33.128 115.198 33.0507 114.846 32.896C114.499 32.736 114.206 32.5147 113.966 32.232C113.726 31.9493 113.544 31.616 113.422 31.232C113.299 30.848 113.238 30.4267 113.238 29.968V24.704H115.718ZM125.591 33.128C125.196 33.128 124.847 33.072 124.543 32.96C124.244 32.8427 123.991 32.68 123.783 32.472C123.58 32.2587 123.425 32.0027 123.319 31.704C123.212 31.4053 123.159 31.072 123.159 30.704V26.416H122.455C122.327 26.416 122.217 26.376 122.127 26.296C122.036 26.2107 121.991 26.088 121.991 25.928V24.96L123.311 24.704L123.799 22.68C123.863 22.424 124.044 22.296 124.343 22.296H125.639V24.72H127.655V26.416H125.639V30.536C125.639 30.728 125.684 30.888 125.775 31.016C125.871 31.1387 126.007 31.2 126.183 31.2C126.273 31.2 126.348 31.192 126.407 31.176C126.471 31.1547 126.524 31.1333 126.567 31.112C126.615 31.0853 126.657 31.064 126.695 31.048C126.737 31.0267 126.785 31.016 126.839 31.016C126.913 31.016 126.972 31.0347 127.015 31.072C127.063 31.104 127.111 31.1573 127.159 31.232L127.911 32.408C127.591 32.648 127.231 32.8293 126.831 32.952C126.431 33.0693 126.017 33.128 125.591 33.128Z" fill="#424242"/>
                    </svg>
                </button>

                <div className="notification-box">
                    {/* prettier-ignore */}
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="56" height="56" rx="28" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.6001 18.3008V15.4C26.6001 14.6272 27.2273 14 28.0001 14C28.7715 14 29.4001 14.6272 29.4001 15.4V18.3008C31.4805 18.6004 33.4251 19.5664 34.9287 21.07C36.7669 22.9082 37.8001 25.4016 37.8001 28V33.2696L38.9327 35.5348C39.4745 36.6198 39.4171 37.9078 38.7787 38.9396C38.1417 39.9714 37.0147 40.6 35.8023 40.6H29.4001C29.4001 41.3728 28.7715 42 28.0001 42C27.2273 42 26.6001 41.3728 26.6001 40.6H20.1979C18.9841 40.6 17.8572 39.9714 17.2202 38.9396C16.5818 37.9078 16.5244 36.6198 17.0676 35.5348L18.2001 33.2696V28C18.2001 25.4016 19.232 22.9082 21.0702 21.07C22.5752 19.5664 24.5183 18.6004 26.6001 18.3008V18.3008ZM28.0001 21C26.1423 21 24.363 21.7378 23.0498 23.051C21.7366 24.3628 21.0001 26.1436 21.0001 28V33.6C21.0001 33.817 20.9484 34.0312 20.8518 34.2258C20.8518 34.2258 20.2287 35.4718 19.5707 36.7864C19.4629 37.0034 19.4742 37.2624 19.6016 37.4682C19.7289 37.674 19.9543 37.8 20.1979 37.8H35.8023C36.0445 37.8 36.2699 37.674 36.3973 37.4682C36.5247 37.2624 36.5359 37.0034 36.4281 36.7864C35.7701 35.4718 35.1471 34.2258 35.1471 34.2258C35.0505 34.0312 35.0001 33.817 35.0001 33.6V28C35.0001 26.1436 34.2623 24.3628 32.9491 23.051C31.6359 21.7378 29.8565 21 28.0001 21V21Z" fill="#3E4954"/>
                    </svg>

                    <div className="notification-box-counter">
                        <h3 className="count text-white text-vbold">12</h3>
                    </div>
                </div>


                <NavigationMobile />


            </div>
        </header>
    )
}


export default NavBar