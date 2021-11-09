import WithdrawFunds from "./WithdrawFunds";

import { useState } from "react";
import FormatSplit from "hooks/useFormatSplit";
import { useSelector } from "react-redux";
import {selectNGNBalance} from "selectors"


const FundsSection = () => {
	// popup state
	const [openPopup, setOpenPopup] = useState(false);

	// function that handles the state updating, passed as prop to the detailspopup and tablebody components so they are able to update the state
	const handlePopupView = (newValue) => {
		setOpenPopup(newValue);
	};

	// get ngn balance from redux store
	const ngnBalance = useSelector(selectNGNBalance)


	return (
		<div className="fundsection-box">
			<div className="card card-balance">
				<div className="left">
					<h1 className="text-kindabigger text-blue text-vbold">
						{`₦${FormatSplit(ngnBalance)[0]}`}{" "}
						<span style={{ fontSize: "80%", color: "#EDEDED" }}>
							{`${FormatSplit(ngnBalance)[1]}`}
						</span>
					</h1>
					<h3 className="text-xs text-regular text-grey">Your Funds</h3>
				</div>

				<div className="right">
					{/* prettier-ignore */}
					<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="79" height="79" rx="39.5" stroke="#EFEFEF"/>
                        <path d="M49.917 24.4165H30.0837C28.5808 24.4165 27.1394 25.0135 26.0767 26.0762C25.014 27.1389 24.417 28.5803 24.417 30.0832V39.9998C24.417 40.3756 24.5662 40.7359 24.8319 41.0016C25.0976 41.2672 25.4579 41.4165 25.8337 41.4165H32.917V54.1665C32.9163 54.4375 32.9934 54.7029 33.139 54.9314C33.2846 55.1599 33.4928 55.3419 33.7387 55.4557C33.9851 55.5691 34.259 55.6094 34.5277 55.5718C34.7965 55.5341 35.0487 55.42 35.2545 55.2432L39.292 51.7865L43.3295 55.2432C43.5861 55.4627 43.9127 55.5833 44.2503 55.5833C44.588 55.5833 44.9146 55.4627 45.1712 55.2432L49.2087 51.7865L53.2462 55.2432C53.5028 55.4626 53.8293 55.5832 54.167 55.5832C54.372 55.5817 54.5744 55.5383 54.762 55.4557C55.0079 55.3419 55.216 55.1599 55.3616 54.9314C55.5073 54.7029 55.5843 54.4375 55.5837 54.1665V30.0832C55.5837 28.5803 54.9866 27.1389 53.9239 26.0762C52.8612 25.0135 51.4199 24.4165 49.917 24.4165V24.4165ZM27.2503 38.5832V30.0832C27.2503 29.3317 27.5488 28.6111 28.0802 28.0797C28.6115 27.5483 29.3322 27.2498 30.0837 27.2498C30.8351 27.2498 31.5558 27.5483 32.0871 28.0797C32.6185 28.6111 32.917 29.3317 32.917 30.0832V38.5832H27.2503ZM52.7503 51.0923L50.1295 48.8398C49.8729 48.6204 49.5463 48.4997 49.2087 48.4997C48.871 48.4997 48.5444 48.6204 48.2878 48.8398L44.2503 52.2965L40.2128 48.8398C39.9562 48.6204 39.6297 48.4997 39.292 48.4997C38.9543 48.4997 38.6278 48.6204 38.3712 48.8398L35.7503 51.0923V30.0832C35.7486 29.0879 35.4847 28.1107 34.9853 27.2498H49.917C50.6684 27.2498 51.3891 27.5483 51.9205 28.0797C52.4518 28.6111 52.7503 29.3317 52.7503 30.0832V51.0923ZM49.917 31.4998C49.917 31.8756 49.7677 32.2359 49.5021 32.5016C49.2364 32.7672 48.8761 32.9165 48.5003 32.9165H40.0003C39.6246 32.9165 39.2643 32.7672 38.9986 32.5016C38.7329 32.2359 38.5837 31.8756 38.5837 31.4998C38.5837 31.1241 38.7329 30.7638 38.9986 30.4981C39.2643 30.2324 39.6246 30.0832 40.0003 30.0832H48.5003C48.8761 30.0832 49.2364 30.2324 49.5021 30.4981C49.7677 30.7638 49.917 31.1241 49.917 31.4998ZM49.917 37.1665C49.917 37.5422 49.7677 37.9026 49.5021 38.1682C49.2364 38.4339 48.8761 38.5832 48.5003 38.5832H40.0003C39.6246 38.5832 39.2643 38.4339 38.9986 38.1682C38.7329 37.9026 38.5837 37.5422 38.5837 37.1665C38.5837 36.7908 38.7329 36.4304 38.9986 36.1648C39.2643 35.8991 39.6246 35.7498 40.0003 35.7498H48.5003C48.8761 35.7498 49.2364 35.8991 49.5021 36.1648C49.7677 36.4304 49.917 36.7908 49.917 37.1665ZM49.917 42.8332C49.917 43.2089 49.7677 43.5692 49.5021 43.8349C49.2364 44.1006 48.8761 44.2498 48.5003 44.2498H40.0003C39.6246 44.2498 39.2643 44.1006 38.9986 43.8349C38.7329 43.5692 38.5837 43.2089 38.5837 42.8332C38.5837 42.4574 38.7329 42.0971 38.9986 41.8314C39.2643 41.5658 39.6246 41.4165 40.0003 41.4165H48.5003C48.8761 41.4165 49.2364 41.5658 49.5021 41.8314C49.7677 42.0971 49.917 42.4574 49.917 42.8332Z" fill="#858585"/>
                    </svg>
				</div>
			</div>

			<button onClick={() => handlePopupView(true)}>
				<div className="card card-withdraw-button">
					<div className="left">
						<h2 className="text-20 text-white">Withdraw Funds</h2>
					</div>

					<div className="right">
						{/* prettier-ignore */}
						<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="79" height="79" rx="39.5" stroke="#1B507E"/>
                            <path d="M49.9165 24.4165H30.0832C28.5803 24.4165 27.1389 25.0135 26.0762 26.0762C25.0135 27.1389 24.4165 28.5803 24.4165 30.0832V39.9998C24.4165 40.3756 24.5658 40.7359 24.8314 41.0016C25.0971 41.2672 25.4574 41.4165 25.8332 41.4165H32.9165V54.1665C32.9158 54.4375 32.9929 54.7029 33.1385 54.9314C33.2842 55.1599 33.4923 55.3419 33.7382 55.4557C33.9847 55.5691 34.2585 55.6094 34.5273 55.5718C34.796 55.5341 35.0482 55.42 35.254 55.2432L39.2915 51.7865L43.329 55.2432C43.5856 55.4627 43.9122 55.5833 44.2498 55.5833C44.5875 55.5833 44.9141 55.4627 45.1707 55.2432L49.2082 51.7865L53.2457 55.2432C53.5023 55.4626 53.8289 55.5832 54.1665 55.5832C54.3715 55.5817 54.574 55.5383 54.7615 55.4557C55.0074 55.3419 55.2155 55.1599 55.3612 54.9314C55.5068 54.7029 55.5838 54.4375 55.5832 54.1665V30.0832C55.5832 28.5803 54.9862 27.1389 53.9234 26.0762C52.8607 25.0135 51.4194 24.4165 49.9165 24.4165V24.4165ZM27.2498 38.5832V30.0832C27.2498 29.3317 27.5483 28.6111 28.0797 28.0797C28.6111 27.5483 29.3317 27.2498 30.0832 27.2498C30.8346 27.2498 31.5553 27.5483 32.0866 28.0797C32.618 28.6111 32.9165 29.3317 32.9165 30.0832V38.5832H27.2498ZM52.7498 51.0923L50.129 48.8398C49.8724 48.6204 49.5458 48.4997 49.2082 48.4997C48.8705 48.4997 48.5439 48.6204 48.2873 48.8398L44.2498 52.2965L40.2123 48.8398C39.9557 48.6204 39.6292 48.4997 39.2915 48.4997C38.9538 48.4997 38.6273 48.6204 38.3707 48.8398L35.7498 51.0923V30.0832C35.7481 29.0879 35.4842 28.1107 34.9848 27.2498H49.9165C50.668 27.2498 51.3886 27.5483 51.92 28.0797C52.4513 28.6111 52.7498 29.3317 52.7498 30.0832V51.0923ZM49.9165 31.4998C49.9165 31.8756 49.7673 32.2359 49.5016 32.5016C49.2359 32.7672 48.8756 32.9165 48.4998 32.9165H39.9998C39.6241 32.9165 39.2638 32.7672 38.9981 32.5016C38.7324 32.2359 38.5832 31.8756 38.5832 31.4998C38.5832 31.1241 38.7324 30.7638 38.9981 30.4981C39.2638 30.2324 39.6241 30.0832 39.9998 30.0832H48.4998C48.8756 30.0832 49.2359 30.2324 49.5016 30.4981C49.7673 30.7638 49.9165 31.1241 49.9165 31.4998ZM49.9165 37.1665C49.9165 37.5422 49.7673 37.9026 49.5016 38.1682C49.2359 38.4339 48.8756 38.5832 48.4998 38.5832H39.9998C39.6241 38.5832 39.2638 38.4339 38.9981 38.1682C38.7324 37.9026 38.5832 37.5422 38.5832 37.1665C38.5832 36.7908 38.7324 36.4304 38.9981 36.1648C39.2638 35.8991 39.6241 35.7498 39.9998 35.7498H48.4998C48.8756 35.7498 49.2359 35.8991 49.5016 36.1648C49.7673 36.4304 49.9165 36.7908 49.9165 37.1665ZM49.9165 42.8332C49.9165 43.2089 49.7673 43.5692 49.5016 43.8349C49.2359 44.1006 48.8756 44.2498 48.4998 44.2498H39.9998C39.6241 44.2498 39.2638 44.1006 38.9981 43.8349C38.7324 43.5692 38.5832 43.2089 38.5832 42.8332C38.5832 42.4574 38.7324 42.0971 38.9981 41.8314C39.2638 41.5658 39.6241 41.4165 39.9998 41.4165H48.4998C48.8756 41.4165 49.2359 41.5658 49.5016 41.8314C49.7673 42.0971 49.9165 42.4574 49.9165 42.8332Z" fill="#2BC155"/>
                        </svg>
					</div>
				</div>
			</button>

			<WithdrawFunds
				handlePopupView={handlePopupView}
				openPopup={openPopup}
			/>
		</div>
	);
};

export default FundsSection;
