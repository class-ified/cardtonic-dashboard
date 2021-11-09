import desktopLogo from "../../assets/images/desktop-logo.svg"

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsersName } from "selectors";


const Navigation = (props, { defaultActive }) => {
	/**
	 * Navigation with Routing functionality (active navlink is tied to url and it "remembers" state on reload)
    */
	const location = props.history.location;
	const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
	const lastActiveIndex = Number(lastActiveIndexString);
	const [activeIndex, setActiveIndex] = useState(
		lastActiveIndex || defaultActive
	);

	function changeActiveIndex(newIndex) {
		localStorage.setItem("lastActiveIndex", newIndex);
		setActiveIndex(newIndex);
	}

	function getPath(path) {
		if (path.charAt(0) !== "/") {
			return "/" + path;
		}
		return path;
	}

	useEffect(() => {
		const activeItem = props.navItems.findIndex(
			(item) => getPath(item.route) === getPath(location.pathname)
		);
		changeActiveIndex(activeItem);
	}, [location, props.navItems]);

    // get user name from (redux) store
	const userName = useSelector(selectUsersName);



	return (
		<nav className="navigation">
            <Link to="/">
                <div className="navigation__logobox">
                    <img src={desktopLogo} alt="logo" />
                </div>
            </Link>

            <div className="navigation__linksbox">
                {props.navItems.map((item, index) => (
                    <Link to={item.route}>
                        <div
                            // if item is active, add active class
                            className={`navigation__linksbox--item ${
                                index === activeIndex
                                    ? "navigation__linksbox--item-active"
                                    : ""
                            }`}
                            key={item.name}
                            active={index === activeIndex}
                        >
                            {/* set link icon to value of icon variable (svg) passed to navitems array */}
                            <div className="icon-box">
                                <span dangerouslySetInnerHTML={{__html: item.icon}} />
                            </div>
                            <h3 className="text-18 text-bold">{item.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="navigation__footer">
                <span className="navigation__footer--span"></span>
                <h3 className="navigation__footer--greeting text-small text-vbold text-blue-dark">Good Morning,</h3>
                <h2 className="navigation__footer--username text-vbold text-green text-medium">{userName}</h2>
            </div>
		</nav>
	);
};

export default Navigation;
