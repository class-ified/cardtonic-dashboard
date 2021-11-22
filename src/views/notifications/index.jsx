import { fetchNotifications } from "api";
import Popup from "components/PopupContainer";
import { useScroller } from "hooks/queries/useScroller";

import { useState } from "react";
import {useSelector} from 'react-redux';
import {selectUserId} from 'selectors';
import {NOTIFICATION_DATE_FORMAT} from 'Constants/config';
import { format } from "date-fns";
import InfiniteScroll from "react-infinite-scroll-component";

const Notifications = () => {
	const [openPopup, setOpenPopup] = useState(false);

	const id = useSelector(selectUserId);
	const {
		data,
		renderListHeader,
		renderListFooter,
		handleLoadMore,
		status,
		isFetching,
		refetch,
		refreshing,
		onRefresh,
	  } = useScroller(
		currentPage => fetchNotifications({id, currentPage}),
		'infiniteNotifications',
		'notifications',
	  );
	console.log(data)

	return (
		<>
			<button className="notification-box" onClick={() => setOpenPopup(true)}>
				{/* prettier-ignore */}
				<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="28" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.6001 18.3008V15.4C26.6001 14.6272 27.2273 14 28.0001 14C28.7715 14 29.4001 14.6272 29.4001 15.4V18.3008C31.4805 18.6004 33.4251 19.5664 34.9287 21.07C36.7669 22.9082 37.8001 25.4016 37.8001 28V33.2696L38.9327 35.5348C39.4745 36.6198 39.4171 37.9078 38.7787 38.9396C38.1417 39.9714 37.0147 40.6 35.8023 40.6H29.4001C29.4001 41.3728 28.7715 42 28.0001 42C27.2273 42 26.6001 41.3728 26.6001 40.6H20.1979C18.9841 40.6 17.8572 39.9714 17.2202 38.9396C16.5818 37.9078 16.5244 36.6198 17.0676 35.5348L18.2001 33.2696V28C18.2001 25.4016 19.232 22.9082 21.0702 21.07C22.5752 19.5664 24.5183 18.6004 26.6001 18.3008V18.3008ZM28.0001 21C26.1423 21 24.363 21.7378 23.0498 23.051C21.7366 24.3628 21.0001 26.1436 21.0001 28V33.6C21.0001 33.817 20.9484 34.0312 20.8518 34.2258C20.8518 34.2258 20.2287 35.4718 19.5707 36.7864C19.4629 37.0034 19.4742 37.2624 19.6016 37.4682C19.7289 37.674 19.9543 37.8 20.1979 37.8H35.8023C36.0445 37.8 36.2699 37.674 36.3973 37.4682C36.5247 37.2624 36.5359 37.0034 36.4281 36.7864C35.7701 35.4718 35.1471 34.2258 35.1471 34.2258C35.0505 34.0312 35.0001 33.817 35.0001 33.6V28C35.0001 26.1436 34.2623 24.3628 32.9491 23.051C31.6359 21.7378 29.8565 21 28.0001 21V21Z" fill="#3E4954"/>
                </svg>

				<div className="notification-box-counter">
					<h3 className="count text-white text-vbold">12</h3>
				</div>
			</button>

			{openPopup && (
				<Popup className="notification-popup">
					<button
						className="cancel-button"
						onClick={() => setOpenPopup(false)}
					>
						{/* prettier-ignore */}
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.43129 8.27275C2.22757 4.87812 4.87812 2.22757 8.27275 1.43129C10.7243 0.856236 13.2757 0.856235 15.7273 1.43129C19.1219 2.22757 21.7724 4.87812 22.5687 8.27275C23.1438 10.7243 23.1438 13.2757 22.5687 15.7272C21.7724 19.1219 19.1219 21.7724 15.7272 22.5687C13.2757 23.1438 10.7243 23.1438 8.27276 22.5687C4.87812 21.7724 2.22757 19.1219 1.43129 15.7273C0.856235 13.2757 0.856235 10.7243 1.43129 8.27275Z" stroke="#3A6A95" stroke-width="2"/>
                            <path d="M14 10L10 14M14 14L10 10" stroke="#3A6A95" stroke-width="2" stroke-linecap="round"/>
                        </svg>
					</button>

					<div id="scrollableParent" className="notification-content">
						{/* <InfiniteScroll */}
						{
							data.length > 0 && data?.map((item) => (
								<div className="notification-item">
									<h3 className="text text-xs text-black text-regular">
										{item?.message}
									</h3>
									<h3 className="date text-tiny text-green text-regular">{format(new Date(item?.createdAt), NOTIFICATION_DATE_FORMAT)}</h3>
								</div>
							))
						}


						{/* <div className="notification-item">
							<h3 className="text text-xs text-black text-regular">
								Transfers to ACCESS BANK are not going through at
								the moment. Kindly avoid using this bank for
								withdrawals this morning. Cheers
							</h3>
							<h3 className="date text-tiny text-green text-regular">28-07-21 | 09:18am</h3>
						</div>
						<div className="notification-item">
							<h3 className="text text-xs text-black text-regular">
								Transfers to ACCESS BANK are not going through at
								the moment. Kindly avoid using this bank for
								withdrawals this morning. Cheers
							</h3>
							<h3 className="date text-tiny text-green text-regular">28-07-21 | 09:18am</h3>
						</div>
						<div className="notification-item">
							<h3 className="text text-xs text-black text-regular">
								Transfers to ACCESS BANK are not going through at
								the moment. Kindly avoid using this bank for
								withdrawals this morning. Cheers
							</h3>
							<h3 className="date text-tiny text-green text-regular">28-07-21 | 09:18am</h3>
						</div>
						<div className="notification-item">
							<h3 className="text text-xs text-black text-regular">
								Transfers to ACCESS BANK are not going through at
								the moment. Kindly avoid using this bank for
								withdrawals this morning. Cheers
							</h3>
							<h3 className="date text-tiny text-green text-regular">28-07-21 | 09:18am</h3>
						</div>
						<div className="notification-item">
							<h3 className="text text-xs text-black text-regular">
								Transfers to ACCESS BANK are not going through at
								the moment. Kindly avoid using this bank for
								withdrawals this morning. Cheers
							</h3>
							<h3 className="date text-tiny text-green text-regular">28-07-21 | 09:18am</h3>
						</div>
						<div className="notification-item">
							<h3 className="text text-xs text-black text-regular">
								Transfers to ACCESS BANK are not going through at
								the moment. Kindly avoid using this bank for
								withdrawals this morning. Cheers
							</h3>
							<h3 className="date text-tiny text-green text-regular">28-07-21 | 09:18am</h3>
						</div> */}

					</div>
				</Popup>
			)}
		</>
	);
};

export default Notifications;
