import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import products from "../../mocks/productos";

import "./itemListContainer.css";
// import { AiFillExclamationCircle } from "react-icons/ai";

export const ItemListContainer = () => {
	const [productList, setProductList] = useState([]);

	const getProducts = () =>
		new Promise((resolve, reject) => {
			setTimeout(() => resolve(products), 2000);
		});

	useEffect(() => {
		getProducts()
			.then((products) => setProductList(products))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			<ItemList
				style={{ display: "flex", margin: "2rem" }}
				productList={productList}
			/>
			;
		</div>
	);
};
// export default ItemListContainer;
