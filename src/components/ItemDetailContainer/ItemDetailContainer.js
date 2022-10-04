import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
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
