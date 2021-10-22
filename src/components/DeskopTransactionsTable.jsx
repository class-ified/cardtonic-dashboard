import { TransactionHistoryTextBlack,  TransactionHistoryTextGrey, TransactionHistoryTextGreySmall, TransactionHistoryStatusText } from "./Typography"

const TableHead = () => {
    return (
        <div className="desktop-history-head">
            <div className="box-transaction">
                <TransactionHistoryTextBlack text="Gift Card" className="heading" />
            </div>
            <div className="box-date">
                <TransactionHistoryTextBlack text="Date | Time" />
            </div>
            <div className="box-rateaccount">
                <TransactionHistoryTextBlack text="Amount" span=" | Rate" />
            </div>
            <div className="box-ngnamount">
                <TransactionHistoryTextBlack text="NGN" />
            </div>
            <div className="box-status">
                <TransactionHistoryTextBlack text="Status" />
            </div>
            <div className="box-transactiontype">
                <TransactionHistoryTextBlack text="Type" />
            </div>
        </div>
    )
}

const TableBody = () => {
    return (
        <div className="desktop-history-body">
            <div className="box-transaction box-transaction-details">
                <div className="icon-box">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="16" fill="#F6FAFD"/>
                        <g clip-path="url(#clip0_1:7674)">
                            <path d="M34.2439 33.7984C23.3143 39 16.5313 34.648 12.1893 32.0047C11.9206 31.8381 11.4639 32.0436 11.8602 32.4987C13.3067 34.2527 18.0473 38.4802 24.2352 38.4802C30.4274 38.4802 34.1111 35.1015 34.5719 34.5121C35.0296 33.9277 34.7063 33.6053 34.2438 33.7984H34.2439ZM37.3134 32.1032C37.0199 31.721 35.5287 31.6498 34.5902 31.7651C33.6503 31.877 32.2395 32.4515 32.3621 32.7964C32.4251 32.9256 32.5536 32.8676 33.1992 32.8096C33.8467 32.745 35.6605 32.5161 36.0384 33.0101C36.4181 33.5076 35.4599 35.8775 35.2849 36.2597C35.1159 36.6419 35.3495 36.7404 35.6671 36.4859C35.9804 36.2314 36.5474 35.5724 36.928 34.6399C37.3059 33.7022 37.5364 32.3943 37.3133 32.1032H37.3134Z" fill="#FF9900"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8948 23.1847C26.8948 24.5495 26.9292 25.6877 26.2394 26.8998C25.6826 27.8853 24.8007 28.4913 23.8152 28.4913C22.4701 28.4913 21.6867 27.4664 21.6867 25.9538C21.6867 22.9679 24.3621 22.4259 26.8948 22.4259V23.1847ZM30.4275 31.7236C30.1959 31.9305 29.8608 31.9453 29.5997 31.8073C28.4369 30.8416 28.23 30.3932 27.5895 29.4718C25.6679 31.4329 24.308 32.0191 21.8148 32.0191C18.8684 32.0191 16.5723 30.201 16.5723 26.5598C16.5723 23.7169 18.1146 21.7805 20.307 20.8345C22.209 19.9968 24.8647 19.849 26.8948 19.6175V19.1642C26.8948 18.3314 26.9587 17.346 26.471 16.6267C26.0423 15.9812 25.2244 15.7151 24.505 15.7151C23.1698 15.7151 21.9774 16.4 21.6867 17.819C21.6275 18.1344 21.396 18.4448 21.0807 18.4596L17.6809 18.095C17.3951 18.0309 17.0798 17.7994 17.1587 17.3608C17.9421 13.2417 21.662 12 24.9927 12C26.6975 12 28.9246 12.4533 30.2697 13.7443C31.9746 15.3357 31.8119 17.4593 31.8119 19.7702V25.2295C31.8119 26.8703 32.4919 27.5896 33.1324 28.4765C33.359 28.7918 33.4083 29.1713 33.1225 29.4077C32.4081 30.0039 31.1369 31.1126 30.4373 31.7334L30.4274 31.7236" fill="black"/>
                            <path d="M34.2439 33.7984C23.3143 39 16.5313 34.648 12.1893 32.0047C11.9206 31.8381 11.4639 32.0436 11.8602 32.4987C13.3067 34.2527 18.0473 38.4802 24.2352 38.4802C30.4274 38.4802 34.1111 35.1015 34.5719 34.5121C35.0296 33.9277 34.7063 33.6053 34.2438 33.7984H34.2439ZM37.3134 32.1032C37.0199 31.721 35.5287 31.6498 34.5902 31.7651C33.6503 31.877 32.2395 32.4515 32.3621 32.7964C32.4251 32.9256 32.5536 32.8676 33.1992 32.8096C33.8467 32.745 35.6605 32.5161 36.0384 33.0101C36.4181 33.5076 35.4599 35.8775 35.2849 36.2597C35.1159 36.6419 35.3495 36.7404 35.6671 36.4859C35.9804 36.2314 36.5474 35.5724 36.928 34.6399C37.3059 33.7022 37.5364 32.3943 37.3133 32.1032H37.3134Z" fill="#FF9900"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8948 23.1847C26.8948 24.5495 26.9292 25.6877 26.2394 26.8998C25.6826 27.8853 24.8007 28.4913 23.8152 28.4913C22.4701 28.4913 21.6867 27.4664 21.6867 25.9538C21.6867 22.9679 24.3621 22.4259 26.8948 22.4259V23.1847ZM30.4275 31.7236C30.1959 31.9305 29.8608 31.9453 29.5997 31.8073C28.4369 30.8416 28.23 30.3932 27.5895 29.4718C25.6679 31.4329 24.308 32.0191 21.8148 32.0191C18.8684 32.0191 16.5723 30.201 16.5723 26.5598C16.5723 23.7169 18.1146 21.7805 20.307 20.8345C22.209 19.9968 24.8647 19.849 26.8948 19.6175V19.1642C26.8948 18.3314 26.9587 17.346 26.471 16.6267C26.0423 15.9812 25.2244 15.7151 24.505 15.7151C23.1698 15.7151 21.9774 16.4 21.6867 17.819C21.6275 18.1344 21.396 18.4448 21.0807 18.4596L17.6809 18.095C17.3951 18.0309 17.0798 17.7994 17.1587 17.3608C17.9421 13.2417 21.662 12 24.9927 12C26.6975 12 28.9246 12.4533 30.2697 13.7443C31.9746 15.3357 31.8119 17.4593 31.8119 19.7702V25.2295C31.8119 26.8703 32.4919 27.5896 33.1324 28.4765C33.359 28.7918 33.4083 29.1713 33.1225 29.4077C32.4081 30.0039 31.1369 31.1126 30.4373 31.7334L30.4274 31.7236" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1:7674">
                            <rect width="27" height="27" fill="white" transform="translate(11 12)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className="content">
                    <TransactionHistoryTextBlack text="Amazon" />
                    <TransactionHistoryTextGrey text="USA Amazon Ecode" />
                </div>
            </div>

            <div className="box-date box-date-details">
                <TransactionHistoryTextBlack text="March 10, 2021" />
                <TransactionHistoryTextGreySmall text="09:34pm" />
            </div>

            <div className="box-rateaccount box-rateaccount-details">
                <TransactionHistoryTextBlack text="540" span=" | 340" />
            </div>

            <div className="box-ngnamount box-ngnamount-details">
                <TransactionHistoryTextBlack text="125,000" />
            </div>

            <div className="box-status box-status-details">
                <TransactionHistoryStatusText status="paid" />
            </div>

            <div className="box-transactiontype box-transactiontype-details">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="5" fill="#FF9900"/>
                    <g clip-path="url(#clip0_1:7685)">
                    <path d="M36.8 25.5998V29.7598L22.4 15.3598L17.6 20.1598L10.24 12.7998L8 15.0398L17.6 24.6398L22.4 19.8398L34.56 31.9998H30.4V35.1998H40V25.5998H36.8Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1:7685">
                    <rect width="32" height="32" fill="white" transform="translate(8 8)"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export {TableHead, TableBody} 