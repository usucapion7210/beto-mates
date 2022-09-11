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
					<Link to="/categorias/camisetas" className="header_li">
						Camisetas
					</Link>

					<Link to="/categorias/pantalon" className="header_li">
						Pantaloncitos
					</Link>

					<Link to="/categorias/gorras" className="header_li">
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
