import React from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import estilos from "./main.module.css";
// import { Counter } from "../counter/counter";
const Main = () => {
	return (
		<main className={estilos.main}>
			<h1 className="main_title">Tienda de Productos</h1>
			<p className="main_parrafo">
				Te presentamos nuestros producto... A ELEGIR!!!
			</p>

			<ItemDetailContainer />
		</main>
	);
};
export default Main;
