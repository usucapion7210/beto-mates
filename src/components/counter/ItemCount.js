import React, { useState } from "react";
import "./count.css";
const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(initial);
	let noStock = 0;
	let tope = stock;
	// console.log(tope);

	const sumar = () => {
		if (count < tope) {
			setCount(count + 1);
		} else {
			alert("Ud. ha llegado al maximo disponible");
		}
	};
	const restar = () => {
		if (count !== noStock) {
			setCount(count - 1);
		} else {
			alert("No hay stock disponible.");
		}
	};

	return (
		<div>
			<div className="count_container">
				<button className="count_button" onClick={sumar}>
					Sumar
				</button>
				<p>Cantidad: {count} </p>
				<button className="count_button" onClick={restar}>
					Restar
				</button>
				{/* <button onClick={restar}>Restar</button> */}
				<button onClick={onAdd}>Agregar al carrito</button>
			</div>
		</div>
	);
};

export default ItemCount;
