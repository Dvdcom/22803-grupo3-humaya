const Footer = () =>{

    return(
    <>
        <h1 className="p-3 mb-0 text-center fw-bold text-light titulos animate__animated animate__pulse">Encontranos en:</h1>
        <div id="footer" className="flex-shrink-0">
            <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="col-12 col-md-2 text-center mb-4">
                        <img src="https://i.postimg.cc/fysypQ8G/Logo-Humaya100x100.png" alt="logoHumaya"/>
                    </div>

                {/* Menu */}
                    <div className="col-6 col-md-2">
                        <h5 className="fw-light titulo-footer">MENU</h5>
                        <ul className="list-unstyled text-small lh-lg">
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none" href="/#">Home</a></li>
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none" href="/#">Productos</a></li>
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none" href="/#">Contactos</a></li>
                        </ul>
                    </div>

                {/* Navegacion */}
                    <div className="col-6 col-md-3">
                        <h5 className="fw-light titulo-footer">NAVEGACION</h5>
                        <ul className="list-unstyled text-small lh-lg">
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none" href="/#">Preguntas frecuentes</a></li>
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none" href="/#">Distribuidores</a></li>
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none" href="/#">Recetas exclusivas</a></li>
                        </ul>
                    </div>

                {/* Redes */}
                <div className="col-6 col-md-2 redes">
                        <h5 className="text-brown-light fw-light titulo-footer">REDES</h5>
                        <ul className="list-unstyled text-small lh-lg md-4">
                            <li className="mb-4"><a className="md-5 link-secondary text-light fw-bold" href="/#"><i className="fa-brands fa-instagram fa-2xl"></i></a></li>
                            <li className="mb-4"><a className="link-secondary text-light fw-bold" href="/#"><i className="fa-brands fa-facebook-f fa-2xl"></i></a></li>
                            <li className="mb-4"><a className="link-secondary text-light fw-bold" href="/#"><i className="fa-brands fa-tiktok fa-2xl"></i></a></li>
                        </ul>
                    </div>

                {/* Ubicacion */}
                    <div className="col-6 col-md-3">
                        <h5 className="fw-light titulo-footer">UBICACION</h5>
                        <ul className="list-unstyled text-small lh-lg">
                            <li className="mb-1"><a className="link-secondary text-light fw-bold text-decoration-none" href="/#">Capital Federal, Buenos Aires</a></li>
                            <iframe title="myFrame" className="iframeMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26274.19122892621!2d-58.41253800906745!3d-34.597234739151354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1670082294662!5m2!1ses!2sar"/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
    
export default Footer;