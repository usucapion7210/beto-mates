import React from "react";
import estilos from "../footer/footer.module.css";
import Navbar from "../Nav/Navbar";

const Footer = () => {
	return (
		<footer className={estilos.footer}>
			<Navbar />
		</footer>
	);
};

export default Footer;
