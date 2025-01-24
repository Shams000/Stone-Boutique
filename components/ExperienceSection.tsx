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
    <section className="w-full py-0 gallery h-[100vh] xl:w-[100%]  min-h-[1160px] md:min-h-[750px] lg:min-h-[980px] xl:max-h-[100px] relative overflow-hidden bg-gray-100">
      {/* Header Section */}
     

      {/* Full-width Slider */}
      <div className="relative gap-[200px] h-full flex items-center min-h-[1160px] md:min-h-[750px]  md:pt-[84px] md:pb-[84px] md:ml-[-20px] xl:m-0 xl:pl-[80px] w-full ml-auto">
      <div className="absolute gallery1 pl-[20px] md:pl-[45px] pt-[60px] lg:pt-[120px] h-full  xl:h-full md:min-h-[750px] w-[372px] flex flex-col items-start z-50 md:left-[100px] xl:left-[130px] xxl:left-[330px] text-left">
        <h2 className=" eh w-[332px]">
          Exclusive <em>stone</em> <br /> Revolutionary <br /> <em>experience.</em>
        </h2>
        
        <div className="oct-btn-border w-[289px] mt-6">
        <button className="bg-[#AE6C3E] oct-btng left-[1px] text-white px-6 py-3 hover:bg-[#F7EAD7] hover:text-[#ae6c3e]">
          Shop Our Stones
        </button>
        </div>
  <div className="absolute bottom-[30px] md:bottom-[10px] lg:bottom-[120px] left-[20px] md:left-10 flex gap-4 z-10">
  <div className="w-[78px] h-[80px] relative  tetradecagon1">
  
    <button
      onClick={() => swiperRef.current?.slidePrev()}
      className="bg-[#F7EAD7] arrows text-3xl text-[#AE6C3E] hover:text-white flex items-center justify-center w-full h-full tetradecagon hover:bg-[#AE6C3E] transition-transform transform hover:scale-75"
    >
      &larr;
    </button>

</div>

    <div className="w-[78px] h-[80px] relative  tetradecagon1">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-[#F7EAD7] arrows text-3xl text-[#AE6C3E] hover:text-white flex items-center justify-center w-full h-full tetradecagon hover:bg-[#AE6C3E] transition-transform transform hover:scale-75"
        >
          &rarr;
        </button>
    </div>
          
        </div>
      </div>
      <Swiper
    modules={[Navigation, Autoplay]}
    navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
    }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    slidesPerView={"auto"} /* Show all slides in a queue */
    centeredSlides={true} /* Center the active slide */
    spaceBetween={0}
    className="lg:pl-[70px] md:mt-0 mt-[160px] pl-[180px] md:pl-[0px] h-[full]" /* Added class */
    onSwiper={(swiper) => (swiperRef.current = swiper)}
    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
>
    {slides.map((slide, index) => (
        <SwiperSlide
            key={slide.id}
            className={`flex gap-[80px] items-center absolute h-[810px] w-auto xl:ml-[40px] pl-[160px] md:ml-[640px] md:pl-[80px] xl:pl-[40px] transition-transform duration-[800ms] ease-in-out ${
                activeIndex === index
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-50"
            }`}
            style={{
                width: "640px",
                height: "760px",
                display: "flex",
                justifyContent: "space-between xl:h-full  xl:w-auto",
            }}
        >
            <div className="h-full overflow-hidden">
                <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[640px] flex justify-between h-[713px] xl:h-[93%] xl:w-auto"
                />
                <h3 className=" mt-[-40px] text-left exsl">
                    {slide.title}
                </h3>
                <div className="flex w-full xl:pl-[8px] justify-between">
                  <p className=" text-left exslp">
                Shop this Stone
                </p>
                <img src="/logos/arrowl.svg" /></div>
            </div>
        </SwiperSlide>
    ))}
</Swiper>

        {/* Custom Navigation Buttons */}
      </div>
    </section>
  );
};

export default ExperienceSection;




