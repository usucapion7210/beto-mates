import React, { useState, useEffect } from "react";
import "./count.css";

export const Counter = ({ stock, initial = 0, onAdd }) => {
	const [count, setCount] = useState(initial);

	useEffect(() => {
		setCount(initial);
	}, [initial]);

	const sumar = () => {
		if (initial < stock) {
			setCount(count + 1);
		} else {
			alert("no hay stock disponible");
		}
	};
	const restar = () => {
		if (initial !== 1) {
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
			</div>
			{count === 0 ? (
				<h2>no hay productos agregados</h2>
			) : (
				<button
					className="count_button "
					onClick={() => {
						onAdd(count);
					}}>
					Agregar al carrito
				</button>
			)}
		</div>
	);
};
