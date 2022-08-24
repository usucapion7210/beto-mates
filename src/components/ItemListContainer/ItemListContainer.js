import React from "react";
import estilos from "./item.module.css";

const ItemListContainer = (props) => {
	return <h1 className={estilos.item}>{props.saludo}</h1>;
};

export default ItemListContainer;
