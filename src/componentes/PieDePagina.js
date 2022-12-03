import React from 'react'

const PieDePagina = () => {
    
    return (
        <footer id="piedepagina" className="w-100 py-4 flex-shrink-0">
            <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="col-12 col-md-2 text-center mb-4">
                        <img src="/img/Logo-Humaya100x100.png"/>
                    </div>

                {/* Menu */}
                    <div className="col-6 col-md-2">
                        <h5 className="fw-light titulo-footer">MENU</h5>
                        <ul className="list-unstyled text-small lh-lg">
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none">Home</a></li>
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none">Productos</a></li>
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none">Contactos</a></li>
                        </ul>
                    </div>

                {/* Navegacion */}
                    <div className="col-6 col-md-3">
                        <h5 className="fw-light titulo-footer">NAVEGACION</h5>
                        <ul className="list-unstyled text-small lh-lg">
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none">Preguntas frecuentes</a></li>
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none">Distribuidores</a></li>
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none">Recetas exclusivas</a></li>
                        </ul>
                    </div>

                {/* Ubicacion */}
                    <div className="col-6 col-md-3">
                        <h5 className="fw-light titulo-footer">UBICACION</h5>
                        <ul className="list-unstyled text-small lh-lg">
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none">Capital Federal, Buenos Aires</a></li>
                            <iframe style={{width: '300px', height:'200px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26274.19122892621!2d-58.41253800906745!3d-34.597234739151354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1670082294662!5m2!1ses!2sar"/>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default PieDePagina;