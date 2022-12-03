import {useUsarCarrito} from '../aplication/UserProvider'

const Navegacion = () =>{

    const carrito = useUsarCarrito();

    return(
        <div className='Seccion' id='Navegacion'>
            <h1>MENU DE NAVEGACION</h1>
            <span className='text-light'>Carrito {carrito.length} unidades</span>
        </div>
    );
}
    
    export default Navegacion;