import Swal from 'sweetalert2'

//Se utilizo la función Sweet Alert para crear una alerta del producto ofrecido con descuento"
const Encabezado = () =>{

    Swal.fire({
        title: "<img src='https://i.postimg.cc/fysypQ8G/Logo-Humaya100x100.png' heigth='50px' width='50px' alt='humaya-logo'></img>  Alfajor Sabroson!",
        html: '<b>50% de descuento</b> en todas tus compras',
        imageUrl: 'http://supermercadoscomodin.com/wp-content/uploads/2019/11/Supermercados-comodin-receta-entrada-34.jpg',
        imageWidth: 450,
        imageHeight: 300,
        imageAlt: 'Alfajores de dulce de leche',
        position: 'center',
        confirmButtonText: "Comprar",
        confirmButtonColor: "#63421e",
        borderButtonColor: "rgba(188, 161, 119, 0.233)",
        background:"#63421e",
        color:'White',
    });

    return(
        <div className="img-fluid m-0 p-0" id="portada">
            <div className="card mt-0 mx-2 pt-4 fondoTransparente inicio">
                <div className="card-body align-items-center my-auto mt-5 container-text">
                    <h5 className="card-title text-white tituloPresentacion">DULCES DEL ALMA</h5>
                    <p className="card-text mt-3 section-desktop">Los productos HUMAYA son elaborados desde hace más de 50 años fiel a las tradiciones familiares y sabores caseros, acompañándote en los momentos más importantes de la vida.</p>
                    <button href="#" type="button" className="btn btn-dark d-grid gap-2 col-8 mx-auto mt-4" id="btn-presentacion">CONOCENOS</button>
                </div>
            </div>
        </div>
    );
}
    
export default Encabezado;