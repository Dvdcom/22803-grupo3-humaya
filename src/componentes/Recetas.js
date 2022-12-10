import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import ProductoCard from "./ProductoCard";

/* import 'bootstrap/dist/css/bootstrap.min.css' */

const Recetas = () =>{

    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        DescargarRecetas();
    }, [])

    const DescargarRecetas = async() => {

        try {
            const data = await fetch('https://apirestrecetas.netlify.app/.netlify/functions/api/')
            const dataJson = await data.json();
            setRecetas(dataJson);
        }
        catch (error) {
            console.log('hubo un error: ' + error.message);
        }
    
    }

    return(
        <div className='Seccion' id='contenedor-recetas'>
            <div className='swiper-container'>
                <Swiper
                freeMode={true}
                grabCursor={true}
                pagination={{
                    clickable:true,
                }}
                modules={[FreeMode,Pagination]}
                className="mySwiper"
                breakpoints={{
                    0:{
                        slidesPerView:1,
                        spaceBetween:5,   
                    },
                    480:{
                        slidesPerView:1,
                        spaceBetween:10,   
                    },
                    768:{
                        slidesPerView:1,
                        spaceBetween:10,   
                    },
                    1280:{
                        slidesPerView:2,
                        spaceBetween:10,   
                    },
                }}
                >
                    {recetas.map((element,index)=>(
                        <SwiperSlide key={index} className="mx-5">
                            <ProductoCard data={{imgSrc:element.imagen,titulo:element.nombre,descripcion: element.descripcion,urlReceta:element.url_receta}}/>
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>
        </div>
    );
}
    
    export default Recetas;