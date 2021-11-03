import HistoryDesktop from "./HistoryDesktop";
import HistoryMobile from "./HistoryMobile";
import FundsSection from "../../components/FundsSection";
import Footer from "../../layout/admin/Footer";
import { PageHeading } from "../../components/Typography";

import useWindowSize from "../../hooks/useWindowSize";
import FundStat from "../../components/FundStat";

const Wallet = () => {
    const windowSize = useWindowSize()

    return (
        <main className="wallet">

            <div className="wallet__top">
                {windowSize.width <= 1199 && <PageHeading text="Withdrawal" span="History"/>}

                <FundsSection />

                <div className="wallet__top-base">
                    <FundStat />
                    {windowSize.width > 1199 && <PageHeading text="Withdrawal" span="History"/>}
                </div>
            </div>

            <div className="wallet__bottom">
            {/* if window size is greater than 1199px, render desktop history and vice versa  */}
            {windowSize.width > 1199 ? (
                <HistoryDesktop />
            ) : (
                <HistoryMobile />
            )}
            </div>

            <Footer />
        </main>
    )
}

export default Wallet;


