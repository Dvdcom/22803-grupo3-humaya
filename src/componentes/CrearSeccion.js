import React from 'react';

import SeccionCard from './SeccionCard'
import SeccionSimple from './SeccionSimple';
import { contenido } from '../aplication/arrayContenido'

const CrearSeccion = () => {


    return (
        <>
        {contenido.map((element,index) => 
            {if(element.tipo === "card"){
                return (<SeccionCard data={element} key={index} />)
            }else{
                return (<SeccionSimple data={element} key={index} />)
            }}
        )};
            
            
        </>
    );
};

export default CrearSeccion;

/* (element.tipo === "card") ? <SeccionCard data={element} key={index} /> : <SeccionSimple data={element} key={index} /> */