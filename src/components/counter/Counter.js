import React, { useState } from "react";
import "./count.css";
// import { Link } from "react-router-dom";

export const Counter = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(initial);

	const sumar = () => {
		if (count < stock) {
			setCount(count + 1);
		} else {
			alert("Ud. ha llegado al maximo disponible");
		}
	};
	const restar = () => {
		if (count !== initial) {
			setCount(count - 1);
		} else {
			alert("No hay stock disponible.");
		}
	};

	return (
		<div className="contador-contenedor">
			<div className="count_container">
				<button className="count_button" onClick={sumar}>
					Sumar
				</button>
				<p>Cantidad: {count} </p>
				<button className="count_button" onClick={restar}>
					Restar
				</button>
				{/* <button onClick={restar}>Restar</button> */}
			</div>

			<button
				className="count_button "
				onClick={() => {
					onAdd(count);
				}}>
				Agregar al carrito
			</button>
		</div>
	);
};

// export default ItemCount;
