import useWindowSize from "../../hooks/useWindowSize";
import HistoryDesktop from "./HistoryDesktop";
import HistoryMobile from "./HistoryMobile";
import Footer from "../../layout/admin/Footer";
import FundStat from "../../components/FundStat";
import { PageHeading } from "../../components/Typography";

import { useTrades } from "hooks";

const Transactions = () => {
	const windowSize = useWindowSize();

	// get trades data from route called in useTrades hook
	const { trades, getNextPage, page, getPreviousPage } = useTrades();
	console.log(trades)

	return (
		<main className="transactions">
			<div className="transactions__top">
				<PageHeading text="Gift Card" span="History" />

				<FundStat trades={trades} />
			</div>

			<div className="transactions__bottom">
				{/* if window size is greater than 1199px, render desktop history and vice versa  */}
				{windowSize.width > 1199 ? (
					<HistoryDesktop
						{...{ trades, getNextPage, getPreviousPage, page }}
					/>
				) : (
					<HistoryMobile
						{...{ trades, getNextPage, getPreviousPage, page }}
					/>
				)}
			</div>

			<Footer />
		</main>
	);
};

export default Transactions;
