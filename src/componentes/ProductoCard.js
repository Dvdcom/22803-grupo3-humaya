/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import html2canvas from "html2canvas";
import React, { useState } from "react";
import {Card,Button,CardImg,Modal,Figure} from 'react-bootstrap';

/* creo mi react-Modal  */
function MyVerticallyCenteredModal(props) {

    const descargar = (arg) => {
        let descargable = document.querySelector('#descargable');
        descargable.classList.remove('d-none');
        
        html2canvas(document.querySelector('#descargable'),{ allowTaint: true, useCORS: true, backgroundColor: "rgba(0,0,0,0)", removeContainer: true, x: 0, y: 0}).then(function(canvas){
            let img = canvas.toDataURL('Receta/jpg');
            let link = document.createElement('a');
            link.download = arg + '.jpg';
            link.href = img;
            link.click();
        });
        descargable.classList.add('d-none');
    }

    return (
        
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-90w"
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            <img src="https://i.postimg.cc/gJ8rg2Hy/Logo-Menu60x48.png" alt="img-logo"></img>
            {props.title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="modal-body-superior">
                <img src={props.img} alt="img-receta" style={{width:'350px'}}></img>
                <div className="modal-detalle">
                        <p className="p-3">
                            {props.detalle}
                        </p>
                    <div id="descargable" className="d-none">
                        <Figure.Image src={props.receta} alt="receta"></Figure.Image>
                    </div>
                    <div className="btnCardContenedor">
                    <Button className="btnCard"><a className="text-decoration-none text-reset" href={props.url} target="_blank" rel="noreferrer noopener">En Web</a></Button>
                    <Button className="btnCard" onClick={() => descargar(`${props.title}`)}>Descargar</Button>
                    </div>
                </div>
            </div>
            <div className="modal-video">
            <h5>Para mas informacíon, mira el video:</h5>
            <iframe id='iframe' src={props.video} height='300' title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button className="btnCard" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    );
}

const ProductoCard = props => {
    /* inicializo a una variable donde guardo el props, la informacion que me entrega el padre */
    let {imgSrc,titulo, descripcion, urlReceta,receta,url_video} = props.data;
    /* creo mis hooks de estado para el uso del modal*/
    const [modalShow, setModalShow] = useState(false);
    /* tempData lo utilizo para guardar informacion de forma temporal */
    const [tempData,setTempdata] = useState([]);

    /* creo mi funcion para poder pasar la informacion del componente al modal */
    const pasarInfo = (img, title, detalle,url,receta,video) => {
        let tempData = [img, title, detalle,url,receta,video];
        setTempdata(item => [1, ...tempData]);
        return setModalShow(true);
    }

    /* retorno mi carta con la informacion que traigo de props, lo que no se ve en la carta se 
    envia en a traves de la funcion declarada entregando por argumentos la informacion para armar el modal */
    return(
        <>
        <Card className="carta">
            <div className="imgCard">
                <CardImg id='imgCard' variant="left" src={imgSrc} alt="imagen_receta"/>
            </div>
            <div>
                <Card.Body className="bodyCard text-center text-light">
                    <Card.Title className='textBodyTitulo text-uppercase fw-bold'>{titulo}</Card.Title>
                    <Card.Text className='textBodyCard'><span className='textoDescripcion'>{descripcion}</span></Card.Text>
                    <div className='btnCardContenedor'>
                    <Button className='btnCard' onClick={() => pasarInfo(imgSrc,titulo,descripcion,urlReceta,receta,url_video)}>Mostrar</Button>
                    </div>
                </Card.Body>

            </div>

        </Card> 
        {/* esta informacion corresponde al modal, con esta parte del codigo paso la informacion para que se construya el modal. */}
        { modalShow === true ? <MyVerticallyCenteredModal
                img={tempData[1]}
                title={tempData[2]}
                detalle={tempData[3]}
                url={tempData[4]}
                receta={tempData[5]}
                video={tempData[6]}
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> : ''}
        </>
    );
}
    
    export default ProductoCard;