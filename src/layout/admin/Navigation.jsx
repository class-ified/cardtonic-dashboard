import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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



	return (
		<nav className="navigation">
			{props.navItems.map((item, index) => (
				<Link to={item.route}>
					<div
						className={`navigation__item ${
							index === activeIndex
								? "navigation__item--active"
								: ""
						}`}
						key={item.name}
						active={index === activeIndex}
					>
						<h3>{item.name}</h3>
					</div>
				</Link>
			))}
		</nav>
	);
};

export default Navigation;
