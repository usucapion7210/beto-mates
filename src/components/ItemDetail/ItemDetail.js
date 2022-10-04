import React from "react";
import estilos from "../ItemDetail/ItemDetail.module.css";
import { Counter } from "../counter/Counter";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
const ItemDetail = ({ item }) => {
	const [quantity, setQuantity] = useState(0);
	const { addItem, getProductQty } = useContext(cartContext);

	const onAdd = (quantity) => {
		setQuantity(quantity);
		addItem(item, quantity);
	};
	const cantidad = getProductQty(item.id);

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
				{quantity === 0 ? (
					<Counter initial={cantidad} stock={item.stock} onAdd={onAdd} />
				) : (
					<Link to="/cart">
						<span style={{ textDecoration: "underline" }}>Ir al carrrito</span>
					</Link>
				)}
			</div>
		</div>
	);
};

export default ItemDetail;
