/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import {Card,Button,CardImg} from 'react-bootstrap';


const ProductoCard = props => {
    let {imgSrc,titulo, descripcion, urlReceta} = props.data;

    return(
        <Card className="carta">
            <div className="imgCard">
                <CardImg id='imgCard' variant="left" src={imgSrc} alt="imagen_receta"/>
            </div>
            <div>
                <Card.Body className="bodyCard text-center text-light">
                    <Card.Title className='textBodyTitulo text-uppercase fw-bold'>{titulo}</Card.Title>
                    <Card.Text className='textBodyCard'><span className='textoDescripcion'>{descripcion}</span></Card.Text>
                    <div className='btnCardContenedor'>
                    <Button className='btnCard' href={urlReceta}>ir a Receta</Button>
                    <Button className='btnCard' href="/#">Mostrar</Button>
                    </div>
                </Card.Body>

            </div>
                
        </Card>
    );
}
    
    export default ProductoCard;