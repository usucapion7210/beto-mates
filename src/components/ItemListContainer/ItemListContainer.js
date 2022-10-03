import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
// import products from "../../mocks/productos";
import "./itemListContainer.css";

export const ItemListContainer = (props) => {
	const [productList, setProductList] = useState([]);
	const [isLoad, setIsLoad] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		const itemsCollections = collection(db, "productosDeportivos");
		// const q = query(itemsCollections, where("category", "==", id));

		const referencia = id
			? query(itemsCollections, where("category", "==", id))
			: itemsCollections;

		getDocs(referencia)
			.then((res) => {
				const productos = res.docs.map((p) => {
					return {
						id: p.id,
						...p.data(),
					};
				});
				setProductList(productos);
			})
			.catch((error) => {
				console.log(error);
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
