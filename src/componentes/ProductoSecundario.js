import {useAsignarCarrito} from '../aplication/UserProvider'

const ProductoSecundario = () =>{

    const addCarrito = useAsignarCarrito();

    return(
        <div className='Seccion' id='ProductoSecundario'>
            <h1>PRODUCTO SECUNDARIO</h1>
            <button onClick={addCarrito} id='producto 2'>añadir al carrito</button>
        </div>
    );
}
    
    export default ProductoSecundario;