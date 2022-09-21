import { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvaider = (props) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			// lo encuentro==> si esta lo sumo==>sino paso al else

			// alert("ya esta en carrito");

			sumarCantidad(item, quantity);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}

		// no pase el setCart, sino una funcion que hace un setter de setCart.
		//nueva prop para agregar la quantity al item o producto individual. Esparcia todas las propiedades del objeto llamado item y ademas una prop llamada cantidad o quantity.
		// console.log([...cart, { ...item, quantity }]);
	};

	//corroborar se el producto ya está en el cart (isInCart)

	const isInCart = (id) => {
		return cart.some((p) => p.id === id); // si no ponemos el return nunca va a poner nada. Con esto se que el id esta en el cart, pero necesito sumarles las cantidades seleccionadas.
	};

	const sumarCantidad = (item, quantity) => {
		const carritoActualizado = cart.map((p) => {
			if (p.id === item.id) {
				const prodActualizado = {
					...p,
					quantity: p.quantity + quantity,
				};
				return prodActualizado;
			} else {
				return p;
			}
		});
		setCart(carritoActualizado);
	};

	const removeItem = () => {
		console.log("eliminando producto");
	};

	const clear = () => {
		setCart([]);
	};

	console.log(cart);
	return (
		<cartContext.Provider
			value={{ cart, addItem, isInCart, removeItem, clear, sumarCantidad }}>
			{props.children}
		</cartContext.Provider>
	);
};
export default CartProvaider;
