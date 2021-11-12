import HistoryDesktop from "./HistoryDesktop";
import HistoryMobile from "./HistoryMobile";
import FundsSection from "../../components/FundsSection";
import Footer from "../../layout/admin/Footer";
import { PageHeading } from "../../components/Typography";

import useWindowSize from "../../hooks/useWindowSize";
import FundStat from "../../components/FundStat";
import { useWithdrawals } from "hooks";

const Wallet = () => {
	const windowSize = useWindowSize();

	// get withdrawals data from route called in useWithdrawals hook
	const withrawalData = useWithdrawals();

	const withdrawals = withrawalData?.data?.withdrawals;
	console.log(withdrawals);

	return (
		<main className="wallet">
			<div className="wallet__top">
				{windowSize.width <= 1199 && (
					<PageHeading text="Withdrawal" span="History" />
				)}

				<FundsSection />

				<div className="wallet__top-base">
					<FundStat />
					{windowSize.width > 1199 && (
						<PageHeading text="Withdrawal" span="History" />
					)}
				</div>
			</div>

			<div className="wallet__bottom">
				{/* if window size is greater than 1199px, render desktop history and vice versa  */}
				{windowSize.width > 1199 ? (
					<HistoryDesktop withdrawals={withdrawals} />
				) : (
					<HistoryMobile withdrawals={withdrawals} />
				)}
			</div>

			<Footer />
		</main>
	);
};

export default Wallet;
