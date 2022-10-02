import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../../firebaseConfig";
import estilos from "./form.module.css";

export const Form = ({ cart, total, clear, handleId }) => {
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [telefono, SetTelfono] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const order = {
			buyer: { nombre: nombre, apellido: apellido, telefono: telefono },
			items: cart,
			total: total,
			date: serverTimestamp(),
		};
		const ordersCollections = collection(db, "orders");

		addDoc(ordersCollections, order).then((res) => {
			handleId(res.id);
			console.log(res.path);
			clear();
		});
	};

	const handleChangeNombre = (e) => {
		setNombre(e.target.value);
	};

	const handleChangeApellido = (e) => {
		setApellido(e.target.value);
	};
	const handleChangeTelefono = (e) => {
		SetTelfono(e.target.value);
	};

	return (
		<div className={estilos.form}>
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
					value={apellido}
					onChange={handleChangeApellido}
				/>
				<input
					type="text"
					placeholder="telefono..."
					name="telefono"
					value={telefono}
					onChange={handleChangeTelefono}
				/>
				<button>Finalizar compra</button>
			</form>
		</div>
	);
};
