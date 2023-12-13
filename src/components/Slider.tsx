import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { gsap } from 'gsap';
import { slide } from '../types';
import '../sass/Slider.scss';

interface IMyProps {
  slides: slide[];
}
const Slider: React.FC<IMyProps> = ({ slides }: IMyProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.from(sliderRef.current, {
      css: { opacity: 0 },
      duration: 1,
    });

    gsap.to(sliderRef.current, {
      css: { opacity: 1 },
      duration: 1,
    });
  }, [slides]);
  return (
    <div className="sliderSection" ref={sliderRef}>
      <Swiper
        spaceBetween={80}
        slidesPerView={3}
        modules={[Navigation, Pagination]}
        navigation
        pagination
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 25,
          },
          1010: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}>
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="slide">
                <p className="slide_year">{slide.year}</p>
                <p className="slide_text">{slide.text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
