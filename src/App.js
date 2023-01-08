import './App.css';
import Firmas from './componentes/Firmas';
import Footer from './componentes/Footer';
import Navegacion from './componentes/Navegacion';
import CrearSeccion from './componentes/CrearSeccion';
import { UserProvider } from './aplication/UserProvider';

/* RAMA EXPERIMENT */
/* Implementacion de provider , comunicacion entre componentes */

function App() {
  return (
    <UserProvider>
          <div className="App">
            <header className="App-header">
              <Navegacion />
            </header>
            <main>
              <CrearSeccion />
            </main>
            <footer>
              <Footer />
              <Firmas/>
            </footer>
          </div>
    </UserProvider>
  );
}

export default App;
