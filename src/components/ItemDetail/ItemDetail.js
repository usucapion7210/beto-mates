import React from "react";

const ItemDetail = ({ item }) => {
	return (
		<div>
			<h2> {item.title} </h2>
			<img src={item.img} alt={item.title} />
			<h3>precio: $ {item.price} </h3>
		</div>
	);
};

export default ItemDetail;
