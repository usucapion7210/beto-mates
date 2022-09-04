import React from "react";
// import ItemCount from "../counter/counter";
const Main = (saludo) => {
	return (
		<main className="main">
			<h2 className="main_title">Tienda de Productos</h2>
			<p className="main_parrafo">
				Te presentamos nuestros producto... A ELEGIR!!!
			</p>
			<h3>Tienda de venta de mates y termos</h3>
			{/* <ItemCount initial={1} stock={10} sinStock={0} /> */}
		</main>
	);
};
export default Main;
