import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
// import products from "../../mocks/productos";
import "./itemListContainer.css";

export const ItemListContainer = (props) => {
	const [productList, setProductList] = useState([]);
	const [isLoad, setIsLoad] = useState(true);

	const { id } = useParams();
	// console.log(id);

	// const { id } = useParams();
	// console.log(id);

	useEffect(() => {
		//creamos una const itemCollection a la que le asigna el metodo collection(basedeDatos,"el nombre de nuestra colleccion")
		const itemCollection = collection(db, "productosDeportivos");
		// console.log(itemCollection);

		getDocs(itemCollection)
			.then((snapshot) => {
				//voy a hacer una constate con el argumento del then.docs para iterar mi listado de productos
				const productos = snapshot.docs.map((p) => {
					// console.log(p.data());
					// console.log(p.id);
					//estoy accediendo a cada producto de mi coleccion. Con el .data()puedo acceder a los campos que tengo en mi coleccion.
					//por cada iteracion de cada producto yo voy a return con el metodo de firestor .data(), y tambien de mi id xq no esta dentro de los items del producto.
					return {
						id: p.id,
						...p.data(),
					};
				});
				// console.log(snapshot)
				// console.log(snapshot.docs);
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
