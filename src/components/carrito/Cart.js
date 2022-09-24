import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import estilos from "../carrito/cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
	const { cart, clear, removeItem, getProductQty } = useContext(cartContext);

	return (
		<div>
			{cart.map((p) => (
				<div className={estilos.cart} key={p.id}>
					<img
						src={p.img}
						alt={p.title}
						style={{
							width: "3rem",
							height: "3rem",
						}}
					/>
					<h3>Articulo{p.title} </h3>

					<h3>Cantidad: {p.quantity} </h3>
					<h3>${p.price} </h3>
					<button onClick={() => removeItem(p.id)}>Eliminar Producto</button>
				</div>
			))}

			<h3 style={{ color: "black" }}>Total Compra</h3>

			<div style={{ width: "90vw" }}>
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
				<Link to="/">
					<button
						onClick
						style={{
							fontSize: "1.5rem",
							lineHeight: "1.5rem",
							borderRadius: ".5rem",
							padding: ".5rem",
						}}>
						Home
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Cart;
