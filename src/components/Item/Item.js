import React from "react";
import { Counter } from "../counter/Counter";
import "./Item.css";

export const Item = ({ key, title, img, description, price, stock }) => {
	const onAdd = (cantidad) => {
		console.log(`<h2> Ud. ha agregdo productos a su carrito ${cantidad} </h2>`);
	};

	return (
		<div className="item-container" key={key}>
			<h4 className="item">{title}</h4>

			<img className="item-img" src={img} alt="  {title} " />

			{/* <p className="item-descrip"> {description} </p> */}

			<h5 className="item-price">Precio: $ {price} </h5>

			{/* <p className="item-stock"> Stock: {stock} </p> */}

			<Counter stock={10} initial={1} onAdd={onAdd} />
		</div>
	);
};

// export default Item
