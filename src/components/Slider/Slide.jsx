import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay, EffectFade} from 'swiper'
import 'swiper/swiper-bundle.css';
import style from './slider.css';
import headerBG from '../../assets/img/header/header-bg-lg.jpg'
import arrow from '../../assets/img/header/arrow-header.svg'


SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
const Slide = React.memo(({children}) => {
    const slides = []

    for (let i = 0; i < 5; i++) {
        slides.push(<SwiperSlide key={i} tag="div">
            <div className="children__wrapper">
                {children}
            </div>
        </SwiperSlide>)
    }
    return (
        <Swiper
            tag="section"
            wrapperTag="div"
            effect={"fade"}
            pagination
            navigation
            loop={true}
            allowTouchMove={false}
            autoplay={{delay: 10000}}
        >
            {slides}
        </Swiper>
    );
});

export default Slide;