import logo from './logo.svg';
import './App.css';
import PieDePagina from './componentes/PieDePagina';
import Firmas from './componentes/Firmas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Proyecto Integrador - Humaya</h1>
      </header>
      <main>

      </main>
      <footer>
        <PieDePagina/>
        <Firmas/>
      </footer>
    </div>
  );
}

export default App;
