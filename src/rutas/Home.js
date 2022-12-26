import '../App.css';
import Firmas from '../componentes/Firmas';
import Encabezado from '../componentes/Encabezado';
import Footer from '../componentes/Footer';
import FormContacto from '../componentes/FormContacto';
import Navegacion from '../componentes/Navegacion';
import ProductoPrincipal from '../componentes/ProductoPrincipal';
import ProductoSecundario from '../componentes/ProductoSecundario';
import Recetas from '../componentes/Recetas';
import Secciones from '../componentes/Secciones';
import SeccionSecundaria from '../componentes/SeccionSecundaria';

const Home = () =>{

    return(
        <div className="App">
            <header className="App-header">
                <Navegacion />
            </header>
            <main className='App-main'>
                <Encabezado/>
                <Secciones />
                <ProductoPrincipal />
                <ProductoSecundario />
                <SeccionSecundaria />
                <FormContacto />
                <Recetas />
            </main>
            <footer className='footer'>
                <Footer />
                <Firmas/>
            </footer>
        </div>
    );
}
    
    export default Home;