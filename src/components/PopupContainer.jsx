const Popup = ({className, children}) => {

    return (
        <div className={`popup ${className}`}>
            <div className="scroll-container">
                <div className="popup-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Popup;