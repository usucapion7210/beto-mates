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
			if (p.id === item.id) {
				const prodActualizado = {
					...p,
					quantity: quantity,
				};
				return prodActualizado;
			} else {
				return p;
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

	const totalProductPrice = (acum) => {
		acum = 0;
		cart.forEach((prod) => {
			acum += prod.price * prod.quantity;
		});
		return acum;
	};

	const acumuladoProducto = () => {
		let acum = 0;
		cart.forEach((prod) => {
			acum += prod.quantity;
		});
		return acum;
	};

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
				totalProductPrice,
				acumuladoProducto,
				// mostrarTotal,
			}}>
			{props.children}
		</cartContext.Provider>
	);
};
export default CartProvaider;
