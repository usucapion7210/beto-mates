import { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvaider = (props) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, quantity) => {
		console.log({ ...item, quantity });
		setCart(); // no pase el setCart, sino una funcion que hace un setter de setCart.
	};

	return (
		<cartContext.Provider value={{ cart, addItem }}>
			{props.children}
		</cartContext.Provider>
	);
};
export default CartProvaider;
