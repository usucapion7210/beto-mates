import React from "react";
import estilos from "../ItemDetail/ItemDetail.module.css";
import { Counter } from "../counter/Counter";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
	const onAdd = (cantidad) => {
		console.log(`<h2> Ud. ha agregdo productos a su carrito ${cantidad} </h2>`);
	};
	return (
		<div className={estilos.itemDetail}>
			<span key={item.id}></span>
			<img className="itemDetailImg" src={item.img} alt={item.title} />

			<div className="itemDetail-details">
				<span>{item.id} </span>
				<h2> {item.title} </h2>
				<p className="detail-detallle"> {item.description} </p>
				<h2 className="detail-price">precio: $ {item.price} </h2>
				<span className="detail-stock"> stock: {item.stock} </span>
				{/* <Link to={`detail/ ${item.id}`}>
					<button> Detalles</button>
				</Link> */}
			</div>
			<Counter initial={1} stock={10} onAdd={onAdd} />
		</div>
	);
};

export default ItemDetail;
