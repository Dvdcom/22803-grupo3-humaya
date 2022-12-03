import './App.css';
import Logito from './componentes/Logito';
import Firmas from './componentes/Firmas';
import Encabezado from './componentes/Encabezado';
import Footer from './componentes/Footer';
import FormContacto from './componentes/FormContacto';
import Navegacion from './componentes/Navegacion';
import ProductoPrincipal from './componentes/ProductoPrincipal';
import ProductoSecundario from './componentes/ProductoSecundario';
import Recetas from './componentes/Recetas';
import Secciones from './componentes/Secciones';
import SeccionSecundaria from './componentes/SeccionSecundaria';
import { UserProvider } from './aplication/UserProvider';

/* RAMA EXPERIMENT */
/* Implementacion de provider , comunicacion entre componentes */

function App() {
  return (
    <UserProvider>
          <div className="App">
            <header className="App-header">
              <Logito/>
              <Navegacion />
            </header>
            <main>
              <Encabezado/>
              <Secciones />
              <ProductoPrincipal />
              <ProductoSecundario />
              <SeccionSecundaria />
              <FormContacto />
              <Recetas />
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
