import {useAsignarCarrito} from '../aplication/UserProvider'

const ProductoPrincipal = () =>{

    const addCarrito = useAsignarCarrito();

    return(
        <div className='Seccion' id='ProductoPrincipal'>
            <h1>PRODUCTO PRINCIPAL</h1>
            <button onClick={addCarrito} id='producto 1'>añadir al carrito</button>
        </div>
    );
}
    
    export default ProductoPrincipal;