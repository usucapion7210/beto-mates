// *creo un componente y lo exporto. Es privado de este archivo
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/counter/ItemCount";
// import "./estilos.css";
const App = () => {
	const onAdd = () => {
		document.write("<h2>Agregastes al carrito</h2>");
	};

	return (
		<>
			<Header />
			<ItemCount stock={10} initial={1} onAdd={onAdd} />
			<Main />
			<Footer />
		</>
	);
};

export default App;
