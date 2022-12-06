import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';

/* import 'bootstrap/dist/css/bootstrap.min.css' */

const Recetas = () =>{

    return(
        <div className='Seccion' id='contenedor-recetas'>
            <div className='container py-4 px-4 justify-content-center'>
                <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                breakpoints={{
                    0:{
                        slidesPerView:1,
                        spaceBetween:10,   
                    },
                    480:{
                        slidesPerView:2,
                        spaceBetween:10,   
                    },
                    768:{
                        slidesPerView:3,
                        spaceBetween:10,   
                    },
                    1280:{
                        slidesPerView:5,
                        spaceBetween:10,   
                    },
                }}
                >
                    <SwiperSlide>
                        <h1>Slide 1</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Slide 2</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Slide 3</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Slide 4</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Slide 5</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Slide 6</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Slide 7</h1>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
    
    export default Recetas;