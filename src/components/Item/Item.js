import React from "react";
// import { Counter } from "../counter/Counter";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ id, title, img, description, price, stock }) => {
	// const onAdd = (cantidad) => {
	// 	console.log(`<h2> Ud. ha agregdo productos a su carrito ${cantidad} </h2>`);
	// };

	return (
		<div className="item-container" key={id}>
			<h4 className="item">{title}</h4>

			<img className="item-img" src={img} alt="{title}" />

			<p className="item-descrip"> {description} </p>

			<h5 className="item-price">Precio: $ {price} </h5>

			<p className="item-stock"> Stock: {stock} </p>

			<Link to={`/item/${id} `}>
				<button
					style={{
						fontSize: " 1.5rem",
						borderRadius: ".5rem",
						padding: "1rem",
					}}>
					Detalles
				</button>
			</Link>

			{/* <Counter stock={10} initial={1} onAdd={onAdd} /> */}
		</div>
	);
};

// export default Item
