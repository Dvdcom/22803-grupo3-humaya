import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,CardImg} from 'react-bootstrap';


const ProductoCard = props => {
    let {imgSrc,titulo, descripcion, urlReceta} = props.data;

    return(
        <Card className="carta">
            <div className="rounded p-0 bg-dark">
                <CardImg variant="top" src={imgSrc}/>
            </div>    
                <Card.Body className="text-center text-light">
                    <Card.Title className='text-uppercase fw-bold'>{titulo}</Card.Title>
                    <Card.Text>{descripcion}</Card.Text>
                </Card.Body>  
            <Button className='w-100 rounded-0' href={urlReceta}>ir a Receta</Button>
        </Card>
    );
}
    
    export default ProductoCard;