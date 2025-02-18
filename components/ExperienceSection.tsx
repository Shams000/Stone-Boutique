"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useRef, useState, useEffect } from "react";
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
  const [isLaptop, setIsLaptop] = useState(false); // Initialize as false

  useEffect(() => {
      if (typeof window !== "undefined") {
          setIsLaptop(window.innerWidth >= 1124);
          
          const handleResize = () => {
              setIsLaptop(window.innerWidth >= 1124);
          };
  
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
      }
  }, []);

  return (
    <section className="w-full py-0 gallery h-[100vh] xl:w-[100%]  min-h-[1160px]  md:min-h-[750px] lg:min-h-[980px] xl:max-h-[100px] relative overflow-hidden bg-gray-100">
      {/* Header Section */}

      {/* Full-width Slider */}
      <div className="relative gap-[200px] h-full flex items-center xl:items-start min-h-[1160px] md:min-h-[750px] xl:min-h-[900px]  md:pt-[84px] md:pb-[84px] md:ml-[-20px] xl:m-0 xl:pl-[60px] w-full ml-auto">
      <div className="absolute hidden md:inline-block lxl:hidden xl:h-full md:min-h-[750px] w-[670px] items-start z-50 md:left-[-600px] lxl:h-[980px] lxl:left-[100px] xl:left-[130px] xxl:left-[330px] text-left">
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
    className=""
    onSwiper={(swiper) => (swiperRef.current = swiper)}
    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
>
    {slides.map((slide) => (
        
    <SwiperSlide
    key={slide.id}
    
>
    <div className="h-full xl:w-full overflow-hidden flex flex-col justify-start">
        <img
            src={slide.image}
            alt={slide.title}
            className="w-[640px] h-[713px]  md:h-[100vh] md:w-auto xl:w-auto md:object-fill"
        />
       
    </div>
</SwiperSlide>
    ))}
</Swiper>
      
      </div>

      <div className="absolute gallery1 pl-[20px] md:pl-[25px] xl:pl-[45px] pt-[60px] lg:pt-[170px] xl:pt-[120px] mxl:pt-[190px] md:pt-[130px] h-full xl:h-full min-h-[850px] xl:top-0 xl:min-h-[750px] w-[352px] flex flex-col items-start z-50 md:left-[80px] lg:left-[100px] xl:left-[110px] xxl:left-[330px] text-left">
        <h2 className=" eh w-[332px]">
          Exclusive <em>stone</em> <br /> Revolutionary <br /> <em>experience.</em>
        </h2>
        
        <div className="oct-btn-border w-[289px] mt-6">
        <button className="bg-[#AE6C3E] oct-btng left-[1px] text-white px-6 py-3 hover:bg-[#F7EAD7] hover:text-[#ae6c3e]">
          Shop Our Stones
        </button>
        </div>
  <div className="absolute bottom-[30px] md:bottom-[120px] lg:bottom-[80px] left-[20px] md:left-10 flex gap-4 z-10">
  <div className="w-[78px] h-[80px] relative  tetradecagon1">
  
    <button
      onClick={() => swiperRef.current?.slidePrev()}
      className=" arrows text-3xl text-[#AE6C3E] hover:text-white flex items-center justify-center w-full h-full tetradecagon hover:bg-[#AE6C3E] transition-transform transform hover:scale-75"
    >
      &larr;
    </button>

</div>

    <div className="w-[78px] h-[80px] relative  tetradecagon1">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className=" arrows text-3xl text-[#AE6C3E] hover:text-white flex items-center justify-center w-full h-full tetradecagon hover:bg-[#AE6C3E] transition-transform transform hover:scale-75"
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
    className="lg:pl-[50px] md:mt-0 pl-[10px] md:pl-[0px] h-[full] py-auto xl:py-0 xl:min-h-[910px] xl:pt-[80px] xl:flex xl:items-center md:h-[100vh] xl:h-full"
    onSwiper={(swiper) => (swiperRef.current = swiper)}
    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
>
    {slides.map((slide, index) => (
        
    <SwiperSlide
    key={slide.id}
    className={`flex gap-[80px] items-center md:absolute h-[100vh]  md:h-[100vh] w-auto xl:w-auto 
            xl:ml-[40px] pl-[20px] md:ml-[710px] md:pl-[110px] xl:pl-[30px] 
            transition-transform duration-[800ms] ease-in-out
            ${activeIndex === index ? "scale-100 opacity-100" : "scale-90 opacity-0 xl:opacity-50"}
        `}
        
        style={isLaptop ? { width: "740px", height: "860px", display: "flex", justifyContent: "space-around" } : {}}
>
    <div className="w-[512px] mt-[170px] md:mt-[0px] md:w-[auto] md:h-full xl:w-full overflow-hidden flex flex-col justify-start xl:justify-center">
        <img
            src={slide.image}
            alt={slide.title}
            className=" h-[718px]  md:h-[100vh] xl:h-[713px] object-fill xl:object-contain md:w-auto xl:w-full md:object-fill"
        />
        <h3 className="mt-[-90px] md:mt-[-170px] xl:pl-[30px] mxl:mt-[-230px] lxl:mt-[-170px] xl:mt-[-15px] text-left exsl">
            {slide.title}
        </h3>
        <div className="flex w-full xl:pl-[35px] justify-between items-center">
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




