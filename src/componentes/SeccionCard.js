import React from 'react';

import {Button, Card } from 'react-bootstrap';

const SeccionCard = (props) => {
    return (
            <Card style={{ width: '18rem' }} className={props.data.classTipo}>
                <Card.Img className={props.data.classImage} variant="top" src={props.data.imagen} />
                <Card.Body className={props.data.classBody}>
                    <Card.Title className={props.data.classTitulo}>{props.data.titulo}</Card.Title>
                    <Card.Text className={props.data.classTexto}>{props.data.texto}</Card.Text>
                    <Button variant="primary" className={props.data.classBoton}>{props.data.boton}</Button>
                </Card.Body>
            </Card>
    );
};

export default SeccionCard;