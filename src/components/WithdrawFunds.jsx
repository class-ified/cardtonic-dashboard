import Popup from "./PopupContainer";
import { BlackSubmit } from "./Buttons";

const WithdrawFunds = ({ handlePopupView, openPopup }) => {
	// close popup via handlePopupView function prop from
	const closePopup = () => {
		handlePopupView(false);
	};

	return (
		<>
			{openPopup && (
				<Popup className="withdraw-funds-popup">
					<button className="cancel-button" onClick={closePopup}>
						{/* prettier-ignore */}
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.43129 8.27275C2.22757 4.87812 4.87812 2.22757 8.27275 1.43129C10.7243 0.856236 13.2757 0.856235 15.7273 1.43129C19.1219 2.22757 21.7724 4.87812 22.5687 8.27275C23.1438 10.7243 23.1438 13.2757 22.5687 15.7272C21.7724 19.1219 19.1219 21.7724 15.7272 22.5687C13.2757 23.1438 10.7243 23.1438 8.27276 22.5687C4.87812 21.7724 2.22757 19.1219 1.43129 15.7273C0.856235 13.2757 0.856235 10.7243 1.43129 8.27275Z" stroke="#3A6A95" stroke-width="2"/>
                        <path d="M14 10L10 14M14 14L10 10" stroke="#3A6A95" stroke-width="2" stroke-linecap="round"/>
                    </svg>
					</button>

					<h3 className="error-heading text-error text-small text-bold">
						This is a dummy text for the Admin - Access Bank not
						working currently, please try other Banks
					</h3>

					<form action="#">
						<input
							className="default-input"
							type="number"
							name="amount"
							placeholder="Enter Amount to Withdraw"
						/>
						<span className="horizontal-line"></span>

						<div className="account-list-box">
							<h3 className="heading text-small text-success text-vbold">
								Select Bank
							</h3>

							<input type="radio" id="account-1" name="account" />
							<label htmlFor="account-1">
								<div className="account-details">
									<h3 className="text-regular text-small text-blue">
										Bank -{" "}
										<span className="text-vbold">
											Access Bank
										</span>
									</h3>
									<h3 className="text-regular text-small text-blue">
										Account Number -{" "}
										<span className="text-vbold">
											0177386427
										</span>
									</h3>
									<h3 className="text-regular text-small text-blue">
										Account Name -{" "}
										<span className="text-vbold">
											Julia Morgan Agbaje
										</span>
									</h3>
									<div className="checkbox-icon"></div>
								</div>
							</label>

							<input type="radio" id="account-2" name="account" />
							<label htmlFor="account-2">
								<div className="account-details">
									<h3 className="text-regular text-small text-blue">
										Bank -{" "}
										<span className="text-vbold">
											Access Bank
										</span>
									</h3>
									<h3 className="text-regular text-small text-blue">
										Account Number -{" "}
										<span className="text-vbold">
											0177386427
										</span>
									</h3>
									<h3 className="text-regular text-small text-blue">
										Account Name -{" "}
										<span className="text-vbold">
											Julia Morgan Agbaje
										</span>
									</h3>
									<div className="checkbox-icon"></div>
								</div>
							</label>

							<input type="radio" id="account-2" name="account" />
							<label htmlFor="account-2">
								<div className="account-details">
									<h3 className="text-regular text-small text-blue">
										Bank -{" "}
										<span className="text-vbold">
											Access Bank
										</span>
									</h3>
									<h3 className="text-regular text-small text-blue">
										Account Number -{" "}
										<span className="text-vbold">
											0177386427
										</span>
									</h3>
									<h3 className="text-regular text-small text-blue">
										Account Name -{" "}
										<span className="text-vbold">
											Julia Morgan Agbaje
										</span>
									</h3>
									<div className="checkbox-icon"></div>
								</div>
							</label>
						</div>

						<BlackSubmit text="Withdraw" />
					</form>
				</Popup>
			)}
		</>
	);
};

export default WithdrawFunds;
