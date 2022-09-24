import { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvaider = (props) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			sumarCantidad(item, quantity);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};

	const isInCart = (id) => {
		return cart.some((p) => p.id === id);
	};

	const sumarCantidad = (item, quantity) => {
		const carritoActualizado = cart.map((p) => {
			if (p.id === item.id && p.stock < item.stock) {
				const prodActualizado = {
					...p,
					quantity: p.quantity + quantity,
				};
				return prodActualizado;
			} else {
				const prodActualizado = { ...p, quantity: p.stock };
				return prodActualizado;
			}
		});
		setCart(carritoActualizado);
	};

	const removeItem = (id) => {
		const filterProduct = cart.filter((p) => p.id !== id);
		setCart(filterProduct);
	};

	const clear = () => {
		setCart([]);
	};

	const getProductQty = (id) => {
		const producto = cart.find((p) => p.id === id);
		return producto?.quantity;
	};

	// console.log(cart);
	return (
		<cartContext.Provider
			value={{
				cart,
				addItem,
				isInCart,
				removeItem,
				clear,
				sumarCantidad,
				getProductQty,
			}}>
			{props.children}
		</cartContext.Provider>
	);
};
export default CartProvaider;
