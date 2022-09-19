import React from "react";
import { useState, useEffect } from "react";

export const Form = () => {
	const [nombre, setNombre] = useState(""); // las '' es xq voy a guardar un texto
	const [apellido, setApellido] = useState(""); // las '' es xq voy a guardar un texto
	// const [x, setX] = useState("");

	const handleSubmit = (e) => {
		//!manera no controlada por react
		// e.preventDefault();
		// console.log(e.target.elements.nombre.value);
		// console.log(e.target.elements.apellido.value);
		// .dir(e.target);
	};

	const handleChangeNombre = (e) => {
		setNombre(e.target.value);
		console.log(e.target.value);
	};

	const handleChangeApellido = (e) => {
		setApellido(e.target.value);
		console.log(e.target.value);
	};
	// useEffect(() => {
	// 	const handleMouseMove = (e) => {
	// 		console.log(e.clientX);
	// 	};
	// 	window.addEventListener("mousemove", handleMouseMove);
	// 	console.log("creo evento");

	// 	return () => {
	// 		// siempre antes que la linea 29
	// 		window.removeEventListener("mousemove", handleMouseMove);
	// 		console.log("borro evento");

	// 		/*
	// 		De esta manera estaría removiendo por cada vez que se renderiza. Cada vez que ejecute el useEffect va a ejecutar el return y luego lo que renderiza. No acumulo los eventListener
	// 		*/
	// 	};
	// });

	// const handleMouseMove = (e) => {
	// 	console.log

	// }

	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="nombre..."
					name="nombre"
					value={nombre}
					onChange={handleChangeNombre}
				/>
				<input
					type="text"
					placeholder="apellido..."
					name="apellido"
					value={apellido} // le paso al value el nombre de mi estado. Asi react controla lo q' tengo en mi state. Que todo el tiempo este leyendo lo q' tengo en mi estado. Como de primera esta vacio, react ya sabe que arranca con un string vacio.
					onChange={handleChangeApellido}
				/>
				<input
					type="text"
					placeholder="edad..."
					name="edad"
					value="edad" // le paso al value el nombre de mi estado. Asi react controla lo q' tengo en mi state. Que todo el tiempo este leyendo lo q' tengo en mi estado. Como de primera esta vacio, react ya sabe que arranca con un string vacio.
					// onChange={handleChangeEdad}
					id="edad"
					readOnly
				/>
				<button>Enviar</button>
			</form>
		</div>
	);
};
// controlados: mejor practica para react document. Create un state, yo controlo el value de ese input, controlar que cada vez que escribas vos puedasver lo que estas escribiendo. Create un metodo por cada input.
// no controlados

// los elements son todos elementos que tiene mi formulario.
