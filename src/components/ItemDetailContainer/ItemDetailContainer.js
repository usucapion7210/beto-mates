import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../mocks/productos";

const ItemDetailContainer = () => {
	//creo mi estado
	const [item, setItem] = useState({});

	useEffect(() => {
		const prod = () =>
			new Promise((res, rej) => {
				const unProducto = productos.find((prod) => prod.id === 2);
				console.log(unProducto);

				setTimeout(() => {
					res(unProducto);
				}, 2000);
			});

		prod()
			.then((data) => {
				setItem(data);
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<ItemDetail item={item} />
			{console.log(item)}
		</div>
	);
};

export default ItemDetailContainer;
