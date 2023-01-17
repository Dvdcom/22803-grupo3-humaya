import React from 'react';

import { contenido } from '../aplication/arrayContenido';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CrearSeccionSimple(arg, index) {
    return (
        <section key={index} className={arg.classSection}>
            <div>
            <img className={arg.classImage} src={arg.imagen} alt='img'></img>
            </div>
            <div className={arg.classTipo}>
                <div>
                    <h3 className={arg.classTitulo}>{arg.titulo}</h3>
                    <p className={arg.classTexto}>{arg.texto}</p>
                    <p className={arg.classTexto2}>{arg.texto2}</p>
                    <button className={arg.classBoton}>{arg.boton}</button>
                </div>
            </div>
        </section>
    )
}

function CrearSeccionCard(arg, index) {
    return (
        <section key={index} className={arg.classSection}>
            <Card className={arg.classTipo}>
                <Card.Img className={arg.classImage} variant="top" src={arg.imagen} />
                <Card.Body className={arg.classBody}>
                    <Card.Title className={arg.classTitulo}>{arg.titulo}</Card.Title>
                    <Card.Text className={arg.classTexto}>{arg.texto}</Card.Text>
                    <Card.Text className={arg.classTexto2}>{arg.texto2}</Card.Text>
                    <Card.Text className={arg.classPrecio}>{arg.precio}</Card.Text>
                    <Button variant="primary" className={arg.classBoton}>{arg.boton}</Button>
                </Card.Body>
            </Card>
        </section>
    );
}

const CrearSeccion = () => {

    return (
        <>
            {contenido.map((element, index) => {
                if (element.tipo === "card") {
                    return (CrearSeccionCard(element, index))
                } else {
                    return (CrearSeccionSimple(element, index))
                }
            }
            )}
        </>
    )
}

export default CrearSeccion;

/* (element.tipo === "card") ? <SeccionCard data={element} key={index} /> : <SeccionSimple data={element} key={index} /> */