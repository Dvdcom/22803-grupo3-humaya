import image1 from "../img/Producto1-Cuadrado.png";
import image2 from "../img/Producto2-Cuadrado.png";
import image3 from "../img/Producto3-Cuadrado.png";
import "../App.css";

const Secciones = () => {
  return (
    <div className="cards-container">
      <div className="card1 row g-0">
        <div className="img-container col-xl">
          <img
            src={image1}
            className="image img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="detail-container col-xl">
          <div className="card-body">
            <h5 className="card-title-h5">ALFAJORES DE DULCE DE LECHE TRADICIONALES</h5>
            <p className="detail-text">
              Alfajores de maizena con relleno del mejor dulce de leche, con un borde de coco rayado.
            </p>
            <h6 className="secondary-text">Cajas de 12 alfajores</h6>
          </div>
          <button className="btn btn-outline-dark mb-5">Tocar aqui</button>
        </div>
      </div>
      <div className="card2 row g-0">
        <div className="detail-container col-xl" id="detail-container2">
          <div className="card-body">
            <h5 className="card-title-h5">DULCE DE LECHE TRADICIONAL</h5>
            <p className="detail-text">
              Nuestro dulce de leche es un producto de excelente calidad y sobre todo excelente sabor.
            </p>
            <h6 className="secondary-text">Unidades por 500gr</h6>
          </div>
          <button className="btn btn-outline-dark mb-5">Tocar aqui</button>
        </div>
        <div className="img-container col-xl" id="img-container2">
          <img
            src={image2}
            className="image img-fluid rounded-start"
            alt="..."
          />
        </div>
      </div>
      <div className="card3 row g-0">
        <div className="img-container col-xl">
          <img
            src={image3}
            className="image img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="detail-container col-xl">
          <div className="card-body">
            <h5 className="card-title-h5">TAPAS DE MAIZENA PARA RELLENAR</h5>
            <p className="detail-text">
              Tapitas de maizena para rellenar en su hogar.
            </p>
            <h6 className="secondary-text">Caja por 50 unidades</h6>
          </div>
          <button className="btn btn-outline-dark mb-5">Tocar aqui</button>
        </div>
      </div>
    </div>
  );
};

export default Secciones;
