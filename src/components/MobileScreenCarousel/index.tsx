import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Imagens
import screen1 from "../../assets/screens/Clip path group (1).png";
import screen2 from "../../assets/screens/Clip path group (2).png";
import screen3 from "../../assets/screens/Clip path group (3).png";
import screen4 from "../../assets/screens/Clip path group (4).png";
import screen5 from "../../assets/screens/Clip path group (5).png";



const MobileScreenCarousel = () => {
  const screens = [
    { src: screen1, name: "Tela 1" },
    { src: screen2, name: "Tela 2" },
    { src: screen3, name: "Tela 3" },
    { src: screen4, name: "Tela 4" },
    { src: screen5, name: "Tela 5" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const duplicatedScreens = [...screens, ...screens, ...screens, ...screens];

  return (
    <div data-aos="fade-up" className="relative w-full h-full py-12 px-4">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="w-full h-full"
      >
        {duplicatedScreens.map((screen, index) => {
          const relativeIndex = (index - activeIndex + duplicatedScreens.length) % duplicatedScreens.length;
          const isBehind = relativeIndex > 0 && relativeIndex < duplicatedScreens.length - 5;

          return (
            <SwiperSlide
              key={`${screen.name}-${index}`}
              className={`!w-[250px] !h-[500px] transition-opacity duration-500 ${
                isBehind && relativeIndex > 4 ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <div className="relative w-full h-full flex flex-col items-center">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={screen.src} 
                    alt={screen.name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MobileScreenCarousel;
