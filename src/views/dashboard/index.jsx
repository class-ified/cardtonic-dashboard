import useWindowSize from "../../hooks/useWindowSize";
import HistoryDesktop from "./HistoryDesktop";
import HistoryMobile from "./HistoryMobile";
import Footer from "../../layout/admin/Footer";
import FundsSection from "../../components/FundsSection";

// import { useEffect } from "react";
import { useTrades } from "hooks";

const Dashboard = () => {
	//get window size
	const windowSize = useWindowSize();

    // get trades data from route called in useTrades hook
    const tradesResponse = useTrades()
	const trades = tradesResponse.data
	
	

	return (
		<main className="dashboard">
			<div className="dashboard__top">
				<h1 className="text-heading text-kindabig text-blue-dark text-vbold">
					Dashboard
				</h1>
				<FundsSection />
			</div>

			<div className="dashboard__bottom">
				{/* if window size is greater than 1199px, render desktop history and vice versa  */}
				{windowSize.width > 1199 ? (
					<HistoryDesktop trades={trades} />
				) : (
					<HistoryMobile trades={trades} />
				)}
			</div>

			<Footer />
		</main>
	);
};

export default Dashboard;
