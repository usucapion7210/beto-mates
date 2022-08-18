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
import Header from './components/header/header';
import Main from './components/main/main'
import Footer from './components/footer/footer';
 const App = () => {
    return(
      <>
        <Header/>
        <Main/>
        <Footer/>          
      </>
    )
 }



  export default App;
