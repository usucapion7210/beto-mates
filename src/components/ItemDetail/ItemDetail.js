//!ACA TENGO LA INFO PARA AGREGAR A MI CONTEXTO

import React from "react";
import estilos from "../ItemDetail/ItemDetail.module.css";
import { Counter } from "../counter/Counter";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
// es donde tengo toda la info de mi objeto y donde se emitia la cantidad
const ItemDetail = ({ item }) => {
	const [quantity, setQuantity] = useState(0);
	const { addItem } = useContext(cartContext); // voy a leer el contexto, en este caso el del carrito.
	/* 
	 const valoresDelContexto = useContext(cartContex);
	 valoresDelContexto.additem
	 ?estoy accediendo a una propiedad dentro de un{}. O podemos poner un destructuring.
	*/

	const onAdd = (quantity) => {
		// console.log(`<h2> Ud. ha agregdo productos a su carrito ${quantity} </h2>`);
		setQuantity(quantity);
		addItem(item, quantity); // genero una nueva prop llamada cantidad.
	};

	return (
		<div className={estilos.itemDetail}>
			<span key={item.id}></span>
			<img className="itemDetailImg" src={item.img} alt={item.title} />

			<div className="itemDetail-details">
				<span style={{ display: "none" }}>{item.id} </span>
				<h2> {item.title} </h2>
				<p className="detail-detallle"> {item.description} </p>
				<h2 className="detail-price">precio: $ {item.price} </h2>
				<span className="detail-stock"> stock: {item.stock} </span>
				{/* <Link to={`detail/ ${item.id}`}>
					<button> Detalles</button>
				</Link> */}
				{quantity === 0 ? (
					<Counter initial={1} stock={item.stock} onAdd={onAdd} />
				) : (
					<Link to="/cart">
						<span style={{ textDecoration: "underline" }}>Ir al carrrito</span>
					</Link>
				)}
			</div>
			<div></div>
		</div>
	);
};

export default ItemDetail;
