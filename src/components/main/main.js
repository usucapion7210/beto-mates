import React from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
// import { Counter } from "../counter/counter";
const Main = () => {
	return (
		<main className="main">
			<h1>Listado de Productos</h1>
			{/* <h2 className="main_title">Tienda de Productos</h2>
			<p className="main_parrafo">
				Te presentamos nuestros producto... A ELEGIR!!!
			</p> */}
			{/* <Counter initial={1} stock={10} sinStock={0} /> */}
			<ItemDetailContainer />
		</main>
	);
};
export default Main;
