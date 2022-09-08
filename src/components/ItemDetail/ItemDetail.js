import React from "react";
import estilos from "../ItemDetail/ItemDetail.module.css";

const ItemDetail = ({ item }) => {
	return (
		<div className={estilos.itemDetail}>
			<img className="itemDetail-img" src={item.img} alt={item.title} />

			<div className="itemDetail-details">
				<h2> {item.title} </h2>
				<p className="detail-detallle"> {item.description} </p>
				<h2 className="detail-price">precio: $ {item.price} </h2>
				<span className="detail-stock"> stock: {item.stock} </span>
			</div>
		</div>
	);
};

export default ItemDetail;
