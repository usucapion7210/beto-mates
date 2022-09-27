import React from "react";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { cartContext } from "../../context/cartContext";

export const CartWidget = () => {
	const { acumuladoProducto } = useContext(cartContext);
	return (
		<div style={{ padding: "2rem" }}>
			<AiOutlineShoppingCart style={{ fontSize: "30px" }} />
			<span
				style={{
					fontSize: "1.1rem",
					backgroundColor: "red",
					borderRadius: "10px 10px 10px 10px",
					textAlign: "right",
				}}>
				{acumuladoProducto() === 0 ? "" : acumuladoProducto()}
			</span>
		</div>
	);
};

// export default CartWidget;
