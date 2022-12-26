/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import React, { useState } from "react";
import {Card,Button,CardImg,Modal} from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {

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
                    <div className="btnCardContenedor">
                    <Button className="btnCard"><a className="text-decoration-none text-reset" href={props.url} target="_blank" rel="noreferrer noopener">En Web</a></Button>
                    <Button className="btnCard">Descargar</Button>
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
    let {imgSrc,titulo, descripcion, urlReceta,url_video} = props.data;
    const [modalShow, setModalShow] = useState(false);
    const [tempData,setTempdata] = useState([]);

    const pasarInfo = (img, title, detalle,url,video) => {
        let tempData = [img, title, detalle,url,video];
        setTempdata(item => [1, ...tempData]);
        return setModalShow(true);
    }

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
                    <Button className='btnCard' onClick={() => pasarInfo(imgSrc,titulo,descripcion,urlReceta,url_video)}>Mostrar</Button>
                    </div>
                </Card.Body>

            </div>

        </Card> 
        { modalShow === true ? <MyVerticallyCenteredModal
                img={tempData[1]}
                title={tempData[2]}
                detalle={tempData[3]}
                url={tempData[4]}
                video={tempData[5]}
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> : ''}
        </>
    );
}
    
    export default ProductoCard;