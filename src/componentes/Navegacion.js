const Navegacion = () =>{

    return(
        <div className='Seccion Seccion-fondo' id='Navegacion'>
             <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-3">
             <div className="container">
                
                <button className="navbar-toggler start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/#">Productos</a>
                    </li>
                  </ul>
                  </div>
                    <div className="d-flex m-3 align-items-center">
                        
                            <a className="mr-0" href="#Home">
                            <img src="https://i.postimg.cc/fysypQ8G/Logo-Humaya100x100.png" alt="logo" width="120" height="120" class="d-inline-block align-text-top"/>
                            </a>
                       
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav center">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/#">Locales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/#">Contacto</a>
                    </li>

                  </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}
    
    export default Navegacion;