import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import estilos from "./main.module.css";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import Cart from "../carrito/Cart";

// import { Counter } from "../counter/counter";
const Main = () => {
	return (
		<main className={estilos.main}>
			<Routes>
				<Route
					path="/"
					element={<ItemListContainer saludo="Bienvenidos a Nuestra Tienda" />}
				/>
				<Route path="/category/:id" element={<ItemListContainer />} />
				<Route path="/item/:id" element={<ItemDetailContainer />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</main>
	);
};
export default Main;
