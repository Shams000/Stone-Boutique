"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper";

const slides = [
  { id: 1, image: "/Group 8.png", title: "Winnetka" },
  { id: 2, image: "/Group 136.png", title: "CCM" },
  { id: 3, image: "/Group 137.png", title: "Bianco Lasa" },
];

const ExperienceSection = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-[100px] gallery xl:ml-[40px] min-h-[960px] relative overflow-hidden bg-gray-100">
      {/* Header Section */}
      <div className="absolute gallery pl-[45px] pt-[60px] lg:pt-[45px] min-h-[750px] w-[372px] flex flex-col items-start z-50 top-[38px] md:left-[170px] text-left">
        <h2 className=" eh w-[332px]">
          Exclusive <em>stone</em> <br /> Revolutionary <br /> <em>experience.</em>
        </h2>

        <button className="bg-[#AE6C3E] oct-btng text-white px-6 py-3 mt-6 hover:bg-white hover:text-[#AE6C3E] transition duration-300">
          Shop Our Stones
        </button>
        <div className="absolute bottom-[100px] left-10 flex gap-4 z-10">
        <div className="w-[70px] h-[70px] relative border tetradecagon1 bg-[#AE6C3E]">
          <div className="hover:w-[66px] w-[70px] h-[70px] hover:h-[66px] absolute top-[-1px] left-[-1px] hover:top-[1px] hover:left-[1px] border tetradecagon2 border-[#AE6C3E]">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-[#F7EAD7] text-[#8e5733] hover:text-white flex items-center justify-center tetradecagon hover:bg-[#8e5733] transition"
          >
            &larr;
          </button>
          </div>
          </div>
          <div className="w-[70px] h-[70px] relative border tetradecagon1 bg-[#AE6C3E]">
          <div className="hover:w-[66px] w-[70px] h-[70px] hover:h-[66px] absolute top-[-1px] left-[-1px] hover:top-[1px] hover:left-[1px] border tetradecagon2 border-[#AE6C3E]">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-[#F7EAD7] text-[#8e5733] hover:text-white flex items-center justify-center tetradecagon hover:bg-[#8e5733] transition"
          >
            &rarr;
          </button>
          </div>
          </div>
          
        </div>
      </div>

      {/* Full-width Slider */}
      <div className="relative gap-[200px] right-0 w-full ml-auto">
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
    spaceBetween={30}
    className="swiper-backface-visible gap-[200px]" /* Added class */
    onSwiper={(swiper) => (swiperRef.current = swiper)}
    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
>
    {slides.map((slide, index) => (
        <SwiperSlide
            key={slide.id}
            className={`flex gap-[80px] items-center transition-transform duration-[800ms] ease-in-out ${
                activeIndex === index
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-50"
            }`}
            style={{
                width: "640px",
                height: "713px",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <div className="gap-[200px] overflow-hidden">
                <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[640px] flex justify-between h-[713px]"
                />
                <h3 className=" mt-[-20px] text-left exsl">
                    {slide.title}
                </h3>
                <p className=" text-left exslp">
                Shop this Stone
                </p>
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




