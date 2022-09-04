import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ productList }) => {
	console.log("Soy product List", productList);

	return (
		<div style={{ display: "flex" }}>
			{productList.map((i) => (
				<Item
					key={i.id}
					img={i.img}
					title={i.title}
					stock={i.stock}
					price={i.price}
				/>
			))}
		</div>
	);
};

// export default ItemList
