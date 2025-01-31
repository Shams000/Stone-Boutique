"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper";

const slides = [
  { id: 1, image: "logos/Group 8 (2).svg", title: "Winnetka" },
  { id: 2, image: "logos/Group 136.svg", title: "CCM" },
  { id: 3, image: "logos/Group 137.svg", title: "Bianco Lasa" },
  { id: 4, image: "logos/Group 8 (2).svg", title: "Winnetka" },
  { id: 5, image: "logos/Group 136.svg", title: "CCM" },
  { id: 6, image: "logos/Group 137.svg", title: "Bianco Lasa" },
  
];

const ExperienceSection = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-0 gallery h-[100vh] xl:w-[100%] min-h-[1160px] md:min-h-[750px] lg:min-h-[980px] relative overflow-hidden bg-gray-100">
      {/* Header Section */}
      <div className="absolute gallery1 pl-[20px] md:pl-[45px] pt-[60px] lg:pt-[120px] h-full xl:h-full md:min-h-[750px] w-full max-w-[372px] flex flex-col items-start z-50 md:left-[80px] lg:left-[100px] xl:left-[130px] xxl:left-[330px] text-left">
        <h2 className="eh w-full text-[56px] leading-[56px] md:text-[72px] md:leading-[72px]">
          Exclusive <em>stone</em><br />
          Revolutionary<br />
          <em>experience.</em>
        </h2>
        
        <div className="oct-btn-border w-[289px] mt-6">
          <button className="bg-[#AE6C3E] oct-btng left-[1px] text-white px-6 py-3 hover:bg-[#F7EAD7] hover:text-[#ae6c3e] text-[18px]">
            Himielka
          </button>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-[30px] left-[20px] flex gap-4 z-10">
          <div className="w-[78px] h-[80px] relative tetradecagon1">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="arrows text-3xl text-[#AE6C3E] hover:text-white flex items-center justify-center w-full h-full tetradecagon hover:bg-[#AE6C3E]"
            >
              &larr;
            </button>
          </div>
          <div className="w-[78px] h-[80px] relative tetradecagon1">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="arrows text-3xl text-[#AE6C3E] hover:text-white flex items-center justify-center w-full h-full tetradecagon hover:bg-[#AE6C3E]"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Container */}
      <div className="h-full w-full ml-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={-320}
          className="h-full w-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={slide.id}
              className={`flex items-center h-[810px] w-auto transition-transform duration-500 ${
                activeIndex === index
                  ? "scale-100 opacity-100 z-10"
                  : "scale-90 opacity-50 z-0"
              }`}
              style={{ width: '640px', height: '760px' }}
            >
              <div className="h-full w-full overflow-hidden relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[713px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white text-[32px] mb-2">{slide.title}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-white text-[18px]">Shop this Stone</p>
                    <img 
                      src="/logos/arrowl.svg" 
                      className="w-6 h-6 filter brightness-0 invert"
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExperienceSection;




