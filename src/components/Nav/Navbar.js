import React from "react";
import style from "./navbar.module.css";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav className={style.navbar}>
				{/* <h1 className="icon">Full equipaciones</h1> */}
				<ul className="navbar-ul">
					<Link to="/" className="header_li">
						Inicio
					</Link>
					<Link to="/category/camisetas" className="header_li">
						Camisetas
					</Link>

					<Link to="/category/pantalon" className="header_li">
						Pantalon
					</Link>

					<Link to="/category/gorras" className="header_li">
						Gorras
					</Link>
				</ul>
				<Link to="/cart">
					<CartWidget />
				</Link>
			</nav>
		</>
	);
};

// export default Navbar;
// <Header/>
