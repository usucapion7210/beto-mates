// *creo un componente y lo exporto. Es privado de este archivo
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import { BrowserRouter } from "react-router-dom"; // importar de react-dom
// import { Routes, Route } from "react-router-dom";
// import "./estilos.css";
import CartProvaider from "./context/cartContext";

const App = () => {
	return (
		<CartProvaider>
			<BrowserRouter>
				<Header />
				<Main />
				<Footer />
			</BrowserRouter>
		</CartProvaider>
	);
};

export default App;
