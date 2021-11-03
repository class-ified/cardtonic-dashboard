import useWindowSize from "../../hooks/useWindowSize"
import HistoryDesktop from "./HistoryDesktop"
import HistoryMobile from "./HistoryMobile"
import Footer from "../../layout/admin/Footer"
import FundStat from "../../components/FundStat"
import { PageHeading } from "../../components/Typography"

const Transactions = () => {
    const windowSize = useWindowSize()

    return (
        <main className="transactions">
            <div className="transactions__top">
                <PageHeading text="Gift Card" span="History"/>

                <FundStat/>
            </div>


            <div className="transactions__bottom">
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

export default Transactions