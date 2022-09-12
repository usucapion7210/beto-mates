import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import products from "../../mocks/productos";
import { useParams } from "react-router-dom";

import "./itemListContainer.css";
// import { AiFillExclamationCircle } from "react-icons/ai";

export const ItemListContainer = (props) => {
	const [productList, setProductList] = useState([]);

	const { id } = useParams();

	// const { id } = useParams();
	console.log(id);

	useEffect(() => {
		const getProducts = () =>
			new Promise((resolve, reject) => {
				const filtrados = products.filter((p) => p.category === id);
				setTimeout(() => resolve(id ? filtrados : products), 2000);
			});
		getProducts()
			.then((products) => setProductList(products))
			.catch((error) => console.error(error));
	}, [id]);

	return (
		<div className="Item-list-container">
			<h1> {props.saludo} </h1>
			<ItemList
				style={{ display: "flex", margin: "2rem" }}
				productList={productList}
			/>
			;
		</div>
	);
};
// export default ItemListContainer;
