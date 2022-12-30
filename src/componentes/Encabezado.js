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
        background:"#63421e",
        color:'White',
    });

    return(
          <div className="img-fluid m-0 p-0" id="portada">
                <section class="row" >
                    <div class="container">
                        <div class="card-container">
                            <div class="col-lg-5 col-md-10 col-xs-12 align-self-end card-body text-container">
                                <h5 class="px-3 card-title-h5 card-title">DULCES DEL ALMA</h5>
                                <p class="detail-text  card-text mt-3">Los productos HUMAYA se elaboran desde hace más de 50 años con tradiciones familiares y sabores caseros, acompañándote en los momentos más importantes de tu vida.</p>
                                <button href="#" type="button" className='btn btn-outline-dark my-3' id="btn-presentacion ">CONOCENOS</button>
                            </div>
                        </div>
                    </div>
                </section>
             </div>
    );
}
    
export default Encabezado;