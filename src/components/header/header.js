import React from "react";

import Navbar from "../Nav/Navbar";
import estilos from "./header.module.css";
const Header = () => {
	return (
		<header className={estilos.header}>
			<Navbar />
		</header>
	);
};

export default Header;
