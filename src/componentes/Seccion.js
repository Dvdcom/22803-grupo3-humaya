import React from 'react';

import {Button, Card } from 'react-bootstrap';

function CardFunction() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/jSm9RxyJ/Producto1-Cuadrado.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

const Seccion = () => {
    return (
        <div>
            {CardFunction()}
        </div>
    );
};

export default Seccion;