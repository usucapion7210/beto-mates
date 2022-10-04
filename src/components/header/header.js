import React from "react";
import { Navbar } from "../Nav/Navbar";
import { Brand } from "../Brand/Brand";
// import { CartWidget } from "../Nav/CartWidget";

// import Navbar from "../Nav/Navbar";
import estilos from "./header.module.css";
const Header = () => {
	return (
		<header className={estilos.header}>
			<Brand />
			<Navbar />
		</header>
	);
};

export default Header;
