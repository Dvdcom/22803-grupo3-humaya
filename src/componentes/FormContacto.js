import Image from 'react-bootstrap/Image'
import { useForm } from 'react-hook-form';

// Un formulario controlado maneja los valores de los inputs en el state y lo actualiza de acuerdo a los eventos del mismo usando setState.
// Aquí se trabaja un formulario con react hook form: librería externa

const FormContacto = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className='container' id='FormContacto'>
        <div className="text-center p-4">
            <h2 style={{color:"white"}} className="p-3 mb-0 text-center fw-bold text-light titulos animate__animated animate__pulse">Contacto</h2>
        </div>
            <div className="row">
                <div className="img col-md-5 p-0">
                    <Image className="img-fluid img-responsive w-100 h-100" src="https://i.postimg.cc/76MQ1Sdg/contacto.png" alt="alfajores" />
                </div>
                <div className="texto-form form col-md-7">
                    <p className="form form-group pt-5">Dejanos tu consulta y nos pondremos en contacto a la brevedad: </p>
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
                            <label className="my-3" htmlFor="text-email">E-MAIL:</label>
                            <input
                                type="email"
                                className="form-control"
                                {...register('email', { pattern: /^\S+@\S+$/i })   //validación del email usando una RegEx   
                                } />
                            {errors.email && <p>El formato de email no es correcto</p>}
                        </div>
                        <div className="form-group my-2">
                            <label className="form-label my-3" htmlFor="text-textarea">CONSULTA:</label>
                            <textarea className="form-control" id="text-textarea" rows={5} cols={50}></textarea>
                        </div>
                        <div className="d-flex contenedor-btn-form">
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