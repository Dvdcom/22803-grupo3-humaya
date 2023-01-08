import React from 'react';

const SeccionSimple = (props) => {
    return (
        <div className={props.data.classTipo}>
            <h3 className={props.data.classTitulo}>{props.data.titulo}</h3>
            <p className={props.data.classTexto}>{props.data.texto}</p>
            <img className={props.data.classImage} src={props.data.imagen} alt='img'></img>
        </div>
    );
};

export default SeccionSimple;