import React from "react";
import { CartWidget } from "../Nav/CartWidget";
import { Navbar } from "../Nav/Navbar";

const Menu = () => {
	return (
		<div className="menu-container">
			<Navbar />
			<CartWidget />
		</div>
	);
};

export default Menu;
