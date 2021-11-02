
import useWindowSize from "../../hooks/useWindowSize"
import HistoryDesktop from "./HistoryDesktop"
import HistoryMobile from "./HistoryMobile"
import Footer from "../../layout/admin/Footer"
import FundsSection from "../../components/FundsSection"

const Dashboard = () => {
    //get window size
    const windowSize = useWindowSize()

    return (
        <main className="dashboard">

            <div className="dashboard__top">
                <h1 className="text-heading text-kindabig text-blue-dark text-vbold">Dashboard</h1>
                <FundsSection />
            </div>

            <div className="dashboard__bottom">
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

export default Dashboard