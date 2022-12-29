const ProductoPrincipal = () =>{

    return(        
        <div id="ProductoPrincipal">            
            <div className="card text-bg-dark cardPrincipal">
                <img src="/img/prodPrincipal.jpg" className="card-img opacity-25 img-fluid imgPrincipal mx-auto" alt="productoPrincipal" /> 
                <div className="row gx-5">
                    <div className="card-img-overlay d-flex align-items-center ">
                        <div className="section-title text-center mx-auto border p-4 col-md-7 cardContenido">
                            <h2 className="card-title font-secondary mt-4"><u>Promoción Combo Especial</u></h2>                                                            
                            <h1 className="display-4 colorTerciario">Cupcakes Super Cremosos</h1>                            
                            <p className="card-text">Enamorate de todos nuestros Cupcake y mini Cupcake #Crujientes y #Extrahumedos a mitad de precio </p>                            
                            <a href="/#" className="btn btn-md colorTerciario me-4 mt-4 mb-4 btnClose "><i class="fa-solid fa-cart-shopping"></i> Comprar</a>                            
                            <a href="/#" className="btn btn-md colorTerciario mb-4 mt-4 mb-4 btnClose" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-plus"></i> Promociones</a>                            
                        </div>
                    </div>
                </div>
            </div>   
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">                                            
                            <img src="/img/Logo-Humaya100x100.png" className="card-img  img-fluid imgLogo" alt="logo" /> 
                            <h5 className="modal-title text-black" id="exampleModalLabel"><span className="text-white m-2">Semana de promo con Dulzura !!!</span></h5>
                            <button type="button" className="btn-close btnClose" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body modalBody p-2 mb-3">    
                            <div className="col-md-6 w-100">
                                <div className="card mb-3">
                                    <div className="row g-0 cardPromo">
                                        <div className="col-md-4">
                                            <img src="/img/promocion1.jpg" className="img-fluid rounded-start" alt="promocion1"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">   
                                                <h5 className="card-title text-black">Lunes de Promoción</h5>                                                             
                                                <p className="card-text text-black"> 
                                                    <small> Deliciosos Cupcakes de Almendra, Chocolate, Velvet y más</small>
                                                </p>                                                            
                                                <p className="card-text"><small className="text-muted">4 Cupcakes x $ 100</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3" >
                                    <div className="row g-0 cardPromo">
                                        <div className="col-md-4">
                                            <img src="/img/promocion2.jpg" className="img-fluid rounded-start" alt="promocion2"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body text-center">
                                                <h5 className="card-title text-black">Martes de Promoción</h5>
                                                <p className="card-text text-black"> 
                                                    <small> Mega promo en todas nuestras Cookies</small><br></br>                                                             
                                                </p>       
                                                <p className="card-text"><small className="text-muted">12 unidades x $ 40.00</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="row g-0 cardPromo">
                                        <div className="col-md-4">
                                            <img src="/img/promocion3.jpg" className="img-fluid rounded-start" alt="promocion3"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title text-black">Miercoles de Promoción</h5>
                                                <p className="card-text text-black"> 
                                                    <small> Promo Chocolate </small><br></br>                                                                    
                                                </p> 
                                                <p className="card-text"><small className="text-muted">20% de descuentos en productos seleccionados</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3" >
                                    <div className="row g-0 cardPromo">
                                        <div className="col-md-4">
                                            <img src="/img/promocion4.jpg" className="img-fluid rounded-start" alt="promocion4"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title text-black">Jueves de Promoción</h5>
                                                <p className="card-text text-black"> 
                                                    <small> Difruta de nuestras deliciosas Tortas</small><br></br>                                                                    
                                                </p>    
                                                <p className="card-text"><small className="text-muted">Al 25% de descuento</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3" >
                                    <div className="row g-0 cardPromo">
                                        <div className="col-md-4">
                                            <img src="/img/promocion5.jpg" className="img-fluid rounded-start" alt="promocion2"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body text-center">
                                                <h5 className="card-title text-black">Viernes de Promoción</h5>
                                                <p className="card-text text-black"> 
                                                    <small> Vive una ventura a puro Chocolate</small><br></br>                                                                    
                                                </p> 
                                                <p className="card-text"><small className="text-muted">Comprando 1Kg te obsequiamos una barrita de chocolate con maní</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-dark d-grid gap-2 col-2 mx-auto mt-4 btnClose" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div> {/* FIN: Modal */}
        </div>        
    );
}
    
    export default ProductoPrincipal;