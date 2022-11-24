import logo from './logo.svg';
import './App.css';
import Firmas from './componentes/Firmas';

/* RAMA DEVELOP */

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
        <Firmas/>
      </footer>
    </div>
  );
}

export default App;
