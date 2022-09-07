import React from "react";
import estilos from "../ItemDetail/ItemDetail.module.css";

const ItemDetail = ({ item }) => {
	return (
		<div className={estilos.itemDetail}>
			<img src={item.img} alt={item.title} />

			<div>
				<h2> {item.title} </h2>
				<h3>precio: $ {item.price} </h3>
			</div>
		</div>
	);
};

export default ItemDetail;
