import React from "react";
import style from "./navbar.module.css";
import { CartWidget } from "./CartWidget";

const Navbar = () => {
	return (
		<>
			<nav className={style.navbar}>
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
				<CartWidget />
			</nav>
		</>
	);
};

export default Navbar;
// <Header/>
