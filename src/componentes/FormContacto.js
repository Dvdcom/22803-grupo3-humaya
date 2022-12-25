import Image from 'react-bootstrap/Image'
import { useForm } from 'react-hook-form';

// Un formulario controlado maneja los valores de los inputs en el state y lo actualiza de acuerdo a los eventos del mismo usando setState.
// Aquí se trabaja un formulario con react hook form: librería externa

const FormContacto = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className='container' id='FormContacto'>
        <div className="text-center p-4">
            <h2 style={{color:"white"}}>Contacto</h2>
        </div>
            <div class="row">
                <div class="img col-md-5 p-0">
                    <Image className="img-fluid img-responsive w-100 h-100" src="https://i.postimg.cc/76MQ1Sdg/contacto.png" alt="alfajores" />
                </div>
                <div class="texto-form form col-md-7">
                    <p class="form form-group pt-5">Dejanos tu consulta y nos pondremos en contacto a la brevedad: </p>
                    <form onSubmit={handleSubmit((data) => console.log(data))}>
                        <div className="form-group my-2">
                            <label className="my-3">NOMBRE:</label>
                            <input
                                type="text"
                                className="form-control"
                                id='text-name'
                                {...register('nombre', { required: true }) //decimos que este campo es obligatorio      
                                } />
                            {errors.nombre && <p>Este campo es obligatorio</p>}
                        </div>
                        <div className="form-group my-2">
                            <label className="my-3" for="text-email">E-MAIL:</label>
                            <input
                                type="email"
                                className="form-control"
                                {...register('email', { pattern: /^\S+@\S+$/i })   //validación del email usando una RegEx   
                                } />
                            {errors.email && <p>El formato de email no es correcto</p>}
                        </div>
                        <div class="form-group my-2">
                            <label class="my-3" for="text-textarea" className="form-label">CONSULTA:</label>
                            <textarea as='textarea' className="form-control" id="text-textarea" rows={5} cols={50}></textarea>
                        </div>
                        <div className="d-flex  contenedor-btn-form">
                            <button
                                type="submit"
                                className="btnCard btnForm my-5 btn text-light"
                            >Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
    
    export default FormContacto;