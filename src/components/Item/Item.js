import React from "react";
import { Counter } from "../counter/Counter";
import "./Item.css";

export const Item = ({
	key = 1,
	title = "Producto de testeo",
	img = "https://pbs.twimg.com/media/DcwoS-VWkAIB60j.jpg",
	price = 600,
	stock = 10,
}) => {
	const onAdd = (cantidad) => {
		console.log(`<h2> Ud. ha agregdo productos a su carrito ${cantidad} </h2>`);
	};

	return (
		<div className="item-container">
			<h4>{title}</h4>

			<img src={img} alt="  {title} " />

			<h5>Precio: $ {price} </h5>

			<Counter stock={10} initial={1} onAdd={onAdd} />
		</div>
	);
};

// export default Item
