import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import estilos from "../carrito/cart.module.css";

const Cart = () => {
	const { cart, clear, removeItem } = useContext(cartContext);
	return (
		<div className={estilos.cart}>
			{cart.map((p) => (
				<div key={p.id}>
					<h3>{p.title} </h3>
					<button onClick={removeItem}>Eliminar Producto</button>
				</div>
			))}
			<button onClick={clear}>Clear Cart</button>
		</div>
	);
};

export default Cart;
