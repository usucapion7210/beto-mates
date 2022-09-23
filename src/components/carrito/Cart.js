import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import estilos from "../carrito/cart.module.css";

const Cart = () => {
	const { cart, clear, removeItem } = useContext(cartContext);

	return (
		<div>
			{cart.map((p) => (
				<div className={estilos.cart} key={p.id}>
					<h3>Articulo{p.title} </h3>
					<h3>${p.price} </h3>
					<h3>Cantidad: {p.quantity} </h3>
					<button onClick={() => removeItem(p.id)}>Eliminar Producto</button>
				</div>
			))}
			<button
				style={{
					fontSize: "1.5rem",
					lineHeight: "1.5rem",
					borderRadius: ".5rem",
					padding: ".5rem",
				}}
				onClick={clear}>
				Clear Cart
			</button>
		</div>
	);
};

export default Cart;
