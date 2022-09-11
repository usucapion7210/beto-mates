import React from "react";
import estilos from "../footer/footer.module.css";
import { Navbar } from "../Nav/Navbar";
import { Brand } from "../Brand/Brand";
const Footer = () => {
	return (
		<footer className={estilos.Navbar}>
			<Brand />
			<Navbar />
		</footer>
	);
};

export default Footer;
