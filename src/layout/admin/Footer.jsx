import useWindowSize from "../../hooks/useWindowSize"

const Footer = () => {
    const windowSize = useWindowSize()

    return (
        <div className={`main-footer ${windowSize.width > 1199 ? "main-footer-desktop" : "main-footer-mobile"}`}>
            <div className={`links-box`}>
                <h3 className="text-sm text-vbold">Rate Calculator | </h3>
                <h3 className="text-sm text-vbold">&nbsp; Contact Us</h3>
            </div>
        </div>
    )
}

export default Footer