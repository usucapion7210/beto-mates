import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const CartWidget = () => {
	return (
		<div style={{ padding: "2rem" }}>
			<AiOutlineShoppingCart style={{ fontSize: "20px" }} />
			<span
				style={{
					fontSize: "1.5rem",
					backgroundColor: "red",
					borderRadius: "10px 10px 10px 10px",
				}}>
				5
			</span>
		</div>
	);
};

// export default CartWidget;
