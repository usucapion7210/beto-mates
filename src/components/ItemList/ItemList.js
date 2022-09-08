import React from "react";
import { Item } from "../Item/Item";
import "./itemList.css";

export const ItemList = ({ productList }) => {
	console.log("Soy product List", productList);

	return (
		<div className="itemList-container">
			{productList.map((i) => (
				<Item
					key={i.id}
					img={i.img}
					title={i.title}
					stock={i.stock}
					description={i.description}
					price={i.price}
				/>
			))}
		</div>
	);
};

// export default ItemList
