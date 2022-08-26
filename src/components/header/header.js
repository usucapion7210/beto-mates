import React from "react";
import CartWidget from "../Nav/CartWidget";

import Navbar from "../Nav/Navbar";
import estilos from "./header.module.css";
const Header = () => {
	return (
		<header className={estilos.header}>
			<Navbar />
			<CartWidget />
		</header>
	);
};

export default Header;
