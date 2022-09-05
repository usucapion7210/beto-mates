// *creo un componente y lo exporto. Es privado de este archivo
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
// import "./estilos.css";
const App = () => {
	return (
		<>
			<Header />
			<Main />
			{/* <ItemListContainer /> */}
			<Footer />
		</>
	);
};

export default App;
