import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { dataBase } from "../../../src/firebaseConfig";
import "./itemListContainer.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
	const [productList, setProductList] = useState([]);
	const [isLoad, setIsLoad] = useState(true);

	const { id } = useParams();
	console.log(id);

	// const { id } = useParams();
	// console.log(id);

	useEffect(() => {
		const itemsCollections = collection(dataBase, "productosDeportivos");
		// const q = query(itemsCollections, where("category", "==", id));
		// console.log(q);
		getDocs(itemsCollections)
			.then((res) => {
				const productos = res.docs.map((p) => {
					// console.log(p);
					// console.log(p.data());
					return {
						id: p.id,
						...p.data(),
					};
				});
				console.table(productos);
				setProductList(productos);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setIsLoad(false);
			});
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

/* 
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


*/
