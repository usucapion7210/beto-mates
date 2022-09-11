import React from "react";
import style from "./navbar.module.css";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
	return (
		<>
			<nav className={style.navbar}>
				{/* <h1 className="icon">Full equipaciones</h1> */}
				<ul className="navbar-ul">
					<a href="https://www.google.com.ar/" className="header_li">
						Camisetas
					</a>

					<a href="https://www.google.com.ar/" className="header_li">
						Pantaloncitos
					</a>

					<a href="https://www.google.com.ar/" className="header_li">
						Gorras
					</a>
				</ul>
				<a href="/cart">
					<CartWidget />
				</a>
			</nav>
		</>
	);
};

// export default Navbar;
// <Header/>
