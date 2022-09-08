import React from "react";
import style from "./navbar.module.css";
// import { CartWidget } from "./CartWidget";

export const Navbar = () => {
	return (
		<>
			<nav className={style.navbar}>
				{/* <h1 className="icon">Full equipaciones</h1> */}
				<ul>
					<li href="https://www.google.com.ar/" className="header_li">
						Camisetas
					</li>
					<li href="https://www.google.com.ar/" className="header_li">
						Pantalones
					</li>
					<li href="https://www.google.com.ar/" className="header_li">
						Gorras
					</li>
				</ul>
				{/* <CartWidget /> */}
			</nav>
		</>
	);
};

// export default Navbar;
// <Header/>
