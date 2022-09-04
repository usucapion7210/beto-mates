import React from "react";
import estilos from "./navbar.module.css";

const Navbar = () => {
	return (
		<>
			<nav className={estilos.navbar}>
				<h1 className="icon">Full equipaciones</h1>
				<ul>
					<li href="https://www.google.com.ar/" className="header_li">
						Inicio
					</li>
					<li href="https://www.google.com.ar/" className="header_li">
						Nosotros
					</li>
					<li href="https://www.google.com.ar/" className="header_li">
						Contacto
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
// <Header/>
