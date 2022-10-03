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
			<>
				<h2 style={{ background: "rgb(214, 207, 207)" }}>
					Gracias por su compra. Su id de compra es:
					<span style={{ color: "red", fontFamily: "sans-serif" }}>
						{idCompra}
					</span>
				</h2>
			</>
		);
	}

	if (cart.length === 0) {
		return (
			<h2>
				No se ha agregado ningun producto... Si deseas hacerlo has click
				<Link style={{ color: "rgb(79, 98, 242)" }} to={"/"}>
					aquí
				</Link>
			</h2>
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
				<h3 style={{ color: "red;" }}>"no se agregaron productos"</h3>
			) : (
				<div>
					<h3 style={{ color: "black", fontSize: "1.5rem" }}>
						Total Compra: $ {total}
					</h3>
					<h3
						style={{
							margin: ".5rem",
						}}>
						Completa el siguiente formulario para terminar de realizar tu copra
					</h3>
					<Form cart={cart} total={total} clear={clear} handleId={handleId} />
				</div>
			)}

			<div style={{ width: "90vw", margin: "1rem auto" }}>
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
			</div>
		</div>
	);
};

export default Cart;
