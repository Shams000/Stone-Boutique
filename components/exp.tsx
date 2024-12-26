"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper";

const slides = [
  { id: 1, image: "/Group8.png", title: "Winnetka" },
  { id: 2, image: "/Group136.png", title: "CCM" },
  { id: 3, image: "/Group137.png", title: "Bianco Lasa" },
];

const ExperienceSection = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-[#F7F4EF] min-h-[960px] flex items-center">
      {/* Left Section */}
      <div className="absolute top-[80px] left-[10%] w-[380px] z-50">
        <h2 className="text-[48px] leading-[56px] font-serif font-bold text-[#2B2928]">
          Exclusive <em>stone</em> <br /> Revolutionary <br /> <em>experience.</em>
        </h2>
        <button className="mt-6 px-6 py-3 bg-[#AE6C3E] text-white text-[16px] font-medium hover:bg-white hover:text-[#AE6C3E] transition-all duration-300 border-2 border-[#AE6C3E]">
          Shop Our Stones
        </button>
      </div>

      {/* Slider Section */}
      <div className="relative w-[80%] ml-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={slide.id}
              className={`transition-transform duration-700 ease-in-out ${
                activeIndex === index
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-50"
              }`}
            >
              <div className="flex flex-col justify-between items-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-xl w-[640px] h-[713px] shadow-md"
                />
                <h3 className="mt-4 text-[24px] font-medium text-[#2B2928]">
                  {slide.title}
                </h3>
                <p className="text-[16px] text-[#8A8685]">Shop this Stone</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation */}
      <div className="absolute bottom-[80px] left-[10%] flex gap-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-12 h-12 flex items-center justify-center bg-[#AE6C3E] text-white rounded-full hover:bg-[#8e5733] transition-all duration-300"
        >
          &larr;
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-12 h-12 flex items-center justify-center bg-[#AE6C3E] text-white rounded-full hover:bg-[#8e5733] transition-all duration-300"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default ExperienceSection;