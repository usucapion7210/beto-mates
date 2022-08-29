import React, { useState } from "react";

const ItemCount = (prop) => {
	const [count, setCount] = useState(prop.initial);

	let tope = prop.stock;
	// console.log(tope);

	const sumar = () => {
		if (count < tope) {
			setCount(count + 1);
		} else {
			alert("Ud. ha llegado al maximo disponible");
		}
	};
	let stock0 = prop.sinStock;
	const restar = () => {
		// if (count !== stock0) {
		// 	setCount(count - 1);
		// } else {
		// 	alert("No hay stock disponible.");
		// }

		count !== stock0 ? setCount(count - 1) : alert("No hay stock disponible.");
	};

	return (
		<div>
			<div>
				<button onClick={sumar}>Sumar</button>
				<p>Cantidad: {count} </p>
				<button onClick={restar}>Restar</button>
			</div>

			<button onClick>Agregar</button>
		</div>
	);
};

export default ItemCount;
