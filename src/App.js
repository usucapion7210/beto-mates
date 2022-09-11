// *creo un componente y lo exporto. Es privado de este archivo
import React from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import { BrowserRouter } from "react-router-dom"; // importar de react-dom
import { Routes, Route } from "react-router-dom";
// import "./estilos.css";
const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Main />
			<Footer />
		</BrowserRouter>
	);
};

export default App;
