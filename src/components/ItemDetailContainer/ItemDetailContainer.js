import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
// import productos from "../../mocks/productos";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDoc, doc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	const [load, setLoad] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		const itemCollection = collection(db, "productosDeportivos");
		const ref = doc(itemCollection, id);
		getDoc(ref)
			.then((res) => {
				setItem({
					id: id,
					...res.data(),
				});
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setLoad(false);
			});
	}, [id]);
	return (
		<div className="detail-contaier">
			{load ? (
				<h3 style={{ color: "lime", fontSize: "3rem" }}>Cargando</h3>
			) : (
				<>
					<ItemDetail item={item} />
				</>
			)}

			{/* {console.log(item)} */}
		</div>
	);
};

export default ItemDetailContainer;

/* 
const prod = () =>
			new Promise((res, rej) => {
				const unProducto = productos?.find((prod) => prod.id === id);
				setTimeout(() => res(id ? unProducto : productos), 2000);
				// console.log(unProducto);
			});

		prod()
			.then((data) => {
				setItem(data);
				setLoad(false);

				// console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
		return () => {
			setLoad(true);
		};

*/
/* 
const itemsCollections = collection(db, "productosDeportivos");
		const ref = doc(itemsCollections, id);
		getDoc(ref)
			.then((res) => {
				console.log(res);
				setItem({
					id: res.id,
					...res.data(),
				});
				setLoad(false);
			})
			.catch((error) => {
				console.log(error);
			});
*/
/* 
const prod = () =>
		// 	new Promise((res, rej) => {
		// 		const unProducto = productos?.find((prod) => prod.id === id);
		// 		setTimeout(() => res(id ? unProducto : productos), 500);
		// 		// console.log(unProducto);
		// 	});

		// prod()
		// 	.then((data) => {
		// 		setItem(data);
		// 		setLoad(false);

		// 		// console.log(data);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
		// return () => {
		// 	setLoad(true);
		// };
*/
