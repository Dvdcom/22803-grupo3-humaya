import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import "swiper/css/pagination";
import ProductoCard from "./ProductoCard";

/* para este componente se implemento swiper: https://swiperjs.com/ */

const Recetas = () => {

    /* declaro mis hooks de estado */
    const [recetas, setRecetas] = useState([]);

    /* aplico useEffect para que la descarga de recetas se realice solo la primera ves  */
    useEffect(() => {
        DescargarRecetas();
    }, [])

    /* creo mi funcion para descargar las recetas */
    const DescargarRecetas = async () => {

        /* Aplico un try-catch para la informacion de descarga */
        try {
            const data = await fetch('https://apirestrecetas.netlify.app/.netlify/functions/api/')
            const dataJson = await data.json();
            /* seteleo recetas y le paso todo el objeto json */
            setRecetas(dataJson);
        }
        catch (error) {
            console.log('hubo un error: ' + error.message);
        }
    }

    /* retorno el componente creando un swiper con toda la informacion del estado recetas */

    return (
        <>
            <div className="text-center p-4">
                <h2 style={{ color: "white" }}>Recetas</h2>
            </div>
            <div className='Seccion' id='contenedor-recetas'>
                <div className='swiper-container'>
                    <Swiper
                        freeMode={true}
                        slidesOffsetAfter={0}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            "@0.00": {
                                slidesPerGroup: 1,
                                slidesPerView: 1,
                                spaceBetween: 5
                            },
                            "1520": {
                                slidesPerGroup: 2,
                                slidesPerView: 2,
                                spaceBetween: 5
                            }
                        }}
                        style={{
                            "--swiper-pagination-color": "#63421E",
                            "--swiper-pagination-bullet-inactive-color": "#bca177",
                            "--swiper-pagination-bullet-inactive-opacity": "1",
                            "--swiper-pagination-bullet-size": "10px",
                            "--swiper-pagination-bullet-horizontal-gap": "3px"
                        }}
                    >
                        <div className="swiper-wrapper">
                            {recetas.map((element, index) => (
                                <SwiperSlide key={index} className="mx-1 d-flex justify-content-center" style={{ overflow: "hidden" }}>
                                    <ProductoCard data={{ imgSrc: element.imagen, titulo: element.nombre, descripcion: element.descripcion, urlReceta: element.url_receta, url_video: element.video }} />
                                </SwiperSlide>
                            ))}
                        </div>
                        <div className="swiper-pagination"></div>

                    </Swiper>
                </div>
            </div>
        </>

    );
}

export default Recetas;