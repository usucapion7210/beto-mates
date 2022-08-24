import React from "react";
import estilos from "./navbar.module.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
	return (
		<>
			<nav className={estilos.navbar}>
				<h1>Nación Matera</h1>
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
				<CartWidget />
			</nav>
		</>
	);
};

export default Navbar;
// <Header/>
