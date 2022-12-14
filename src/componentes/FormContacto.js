


const FormContacto = () =>{

    return(
        <div className='container' id='FormContacto'>

        <div class="row">
        <div class="img col-md-5 p-0">
            <img class="img-fluid img-responsive w-100 h-100" src="https://i.postimg.cc/76MQ1Sdg/contacto.png" alt="alfajores"/>
        </div>
        <div class="texto-form form col-md-7">
            <p class="form form-group pt-5">Dejanos tu consulta y nos pondremos en contacto a la brevedad: </p>
            <form>
                <div class="form-group my-2">
                    <label class="my-3" for="text-name">NOMBRE:</label>
                    <input type="text" class="form-control" id="text-name"/>
                </div>
                <div class="form-group my-2">
                  <label class="my-3" for="text-email">E-MAIL:</label>
                  <input type="email" class="form-control" id="text-email" aria-describedby="emailHelp"/>
                </div>
                <div class="form-group my-2">
                    <label class="my-3" for="text-textarea" className="form-label">CONSULTA:</label>
                    <textarea class="form-control" id="text-textarea" rows="5"></textarea>
                </div>
                <div className="d-flex contenedor-btn-form">
                    <button type="submit" class="btnCard btnForm my-5 btn text-light ">Enviar</button>
                </div>
              </form>
        </div> 
      </div>
           
        </div>
    );
}
    
    export default FormContacto;