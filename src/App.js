// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );

// *creo un componente y lo exporto. Es privado de este archivo
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import "./estilos.css";
const App = () => {
	return (
		<>
			<Header />
			<ItemListContainer saludo="Bienvenidos a la comision 37080." />
			<Main />
			<Footer />
		</>
	);
};

export default App;
