import './App.css';
import Firmas from './componentes/Firmas';
import Navegacion from './componentes/Navegacion';
import CrearSeccion from './componentes/CrearSeccion';
/* import Footer from './componentes/Footer';
import FormContacto from './componentes/FormContacto';
import Recetas from './componentes/Recetas'; */
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
{/*               <FormContacto />
              <Recetas /> */}
            </main>
            <footer>
{/*               <Footer /> */}
              <Firmas/>
            </footer>
          </div>
    </UserProvider>
  );
}

export default App;
