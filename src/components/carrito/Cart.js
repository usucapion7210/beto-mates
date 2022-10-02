import React from "react";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import estilos from "../carrito/cart.module.css";
import { Link } from "react-router-dom";
import { Form } from "../Form/Form";

const Cart = () => {
	const [idCompra, setIdCompra] = useState("");

	const { cart, clear, removeItem, totalProductPrice } =
		useContext(cartContext);
	// const cantidad = sumarCantidad()
	const total = totalProductPrice();

	const handleId = (id) => {
		setIdCompra(id);
	};
	if (idCompra) {
		return (
			<h3 style={{ background: "rgba(200,165,333,.5" }}>
				Gracias por su compra. Su id de compra es:
				<span style={{ color: "red", fontFamily: "cursive" }}>{idCompra}</span>
			</h3>
		);
	}

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
					<h3>Total Producto: ${p.price * p.quantity} </h3>
					<button onClick={() => removeItem(p.id)}>Eliminar Producto</button>
				</div>
			))}
			{total === 0 ? (
				<h3>"no se agregaron productos"</h3>
			) : (
				<h3 style={{ color: "black", fontSize: "1.5rem" }}>
					Total Compra: $ {total}
				</h3>
			)}

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
						style={{
							fontSize: "1.5rem",
							lineHeight: "1.5rem",
							borderRadius: ".5rem",
							padding: ".5rem",
						}}>
						Home
					</button>
				</Link>
				{totalProductPrice() === 0 ? (
					""
				) : (
					<button
						style={{
							fontSize: "1.5rem",
							lineHeight: "1.5rem",
							borderRadius: ".5rem",
							padding: ".5rem",
						}}>
						finalizar compra
					</button>
				)}
			</div>
			<Form cart={cart} total={total} clear={clear} handleId={handleId} />
		</div>
	);
};

export default Cart;
