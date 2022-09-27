import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import products from "../../mocks/productos";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
	const [productList, setProductList] = useState([]);
	const [isLoad, setIsLoad] = useState(true);

	const { id } = useParams();
	console.log(id);

	// const { id } = useParams();
	// console.log(id);

	useEffect(() => {
		const getProducts = () =>
			new Promise((resolve, reject) => {
				const filtrados = products.filter((p) => p.category === id);
				setTimeout(() => resolve(id ? filtrados : products), 2000);
			});
		getProducts()
			.then((products) => {
				setProductList(products);
				setIsLoad(false);
			})
			.catch((error) => console.error(error));
		return () => {
			setIsLoad(true);
		};
	}, [id]);

	return (
		<>
			{isLoad ? (
				<h3 style={{ fontSize: "4rem", color: "lime" }}>Cargando</h3>
			) : (
				<div className="Item-list-container">
					<h1> {props.saludo} </h1>
					<ItemList
						style={{ display: "flex", margin: "2rem" }}
						productList={productList}
					/>
				</div>
			)}
		</>
	);
};
// export default ItemListContainer;
