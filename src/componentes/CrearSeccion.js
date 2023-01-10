import React from 'react';

import { contenido } from '../aplication/arrayContenido';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CrearSeccionSimple(arg, index) {
    return (
        <section key={index}>
            <div className={arg.classTipo}>
                <h3 className={arg.classTitulo}>{arg.titulo}</h3>
                <p className={arg.classTexto}>{arg.texto}</p>
                <p className={arg.classTexto2}>{arg.texto2}</p>
                <img className={arg.classImage} src={arg.imagen} alt='img'></img>
                <button className={arg.classBoton}>{arg.boton}</button>
            </div>
        </section>
    )
}

function CrearSeccionCard(arg, index) {
    return (
        <section key={index}>
            <Card style={{ width: '18.1rem' }} className={arg.classTipo}>
                <Card.Img style={{ width: '18rem' }} className={arg.classImage} variant="top" src={arg.imagen} />
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