
import './App.css';
import Footer from './components/public/Footer';
import Main from './components/public/Main';
import NavBar from './components/public/NavBar';

function App() {
  return (
    <div>
      {/* Funtional component, los usamos para poder ahorrar espacio en la App.js y lo importamos de esta manera */}
      <NavBar />

      {/* Main component */}
      <Main />

      {/* Funtional component, los usamos para poder ahorrar espacio en la App.js y lo importamos de esta manera */}
      <Footer />

    </div>
  );
}

export default App;
