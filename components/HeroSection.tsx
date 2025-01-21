"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { Swiper as SwiperCore } from "swiper";

const HeroSection = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="w-full min-h-[800px] xl:w-[100%] h-[100vh] relative">
      {/* Swiper Component */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Autoplay, Pagination]}
        className="h-[100vh] min-h-[800px]"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;

          // Animate pagination dots on slide change
          swiper.on("slideChange", () => {
            const activeIndex = swiper.realIndex % swiper.slides.length;
            const bulletSize = 24; // Approx size of each bullet, including spacing
            const offset = activeIndex * bulletSize;
            const paginationEl = document.querySelector(
              ".swiper-pagination"
            ) as HTMLElement;
            if (paginationEl) {
              paginationEl.style.transform = `translateX(-${offset}px)`;
              paginationEl.style.transition = "transform 0.5s ease-in";
            }
          });
        }}
      >
        {/* Slides */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center relative transition-transform duration-[1s] ease-in-out"
            style={{ backgroundImage: "url('/Hero Slider.jpg')" }}
          >
            <div className="absolute top-[50%] left-[50%] group">
              <div className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100 absolute top-[-2rem] right-[-4rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center relative transition-transform duration-[1s] ease-in-out"
            style={{ backgroundImage: "url('/Hero Slider2.jpg')" }}
          >
            <div className="absolute top-[40%] left-[25%] group">
              <div className="w-[70px] h-[70px] z-10  hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100 absolute top-[-2rem] right-[-4rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center relative transition-transform duration-[1s] ease-in-out"
            style={{ backgroundImage: "url('/Hero Slider3.jpg')" }}
          >
            <div className="absolute top-[20%] left-[60%] group">
              <div className="w-[70px] h-[70px] hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100 absolute top-[-2rem] right-[-4rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center relative transition-transform duration-[1s] ease-in-out"
            style={{ backgroundImage: "url('/Hero Slider4.jpg')" }}
          >
            
          </div>
        </SwiperSlide>
      </Swiper>
      

      {/* Navigation Buttons */}
      <div className="flex-col w-full bottom-[30px] absolute gap-[32px]">
      {/* <h2 className="text-5xl hs w-[332px] font-bold mb-4 text-gray-800">
          Exclusive <em>stone</em> <br /> Revolutionary <br /> <em>experience.</em>
        </h2>
       
       <h1 className=" hs text-white relative">
          Introducing <br />
          <span>a curated</span> selection of <br /> luxury tile
        </h1> */}
       
      
      <div className=" w-full gap-[35px] px-[20px] xl:px-20 flex-col items-start xl:items-center  xl:justify-between flex xl:flex-row">
      <div className=" flex-col flex w-full xl:flex-row gap-4 z-50">
        <div className="oct-btn-border  md:w-[349px]">
        <button className="oct-btn bg-[#AE6C3E] md:w-[347px] w-full left-[1px] text-white px-6 py-3 hover:bg-[#F7EAD7] hover:text-[#ae6c3e] hover:border hover:border-[#E4C9AF] ">
          Schedule a Private Consultation
        </button>
        </div>
        <button className="bg-white oct-btn2 md:w-[347px] text-[#AE6C3E] px-6 py-3 hover:bg-[#F7EAD7] hover:text-[#ae6c3e] hover:border hover:border-[#E4C9AF]">
          Shop Our Stones
        </button>
      </div>
      <div className=" right-10 flex gap-4 z-10">
        
      <div className="w-[78px] h-[80px] relative tetradecagon1">
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
      </div>
      <div className="absolute bottom-[280px] xl:bottom-[120px] left-[20px] md:left-10 xl:left-20 z-50">
        <h1 className="hs text-white">
        Introducing <br />
        <span>a curated</span> selection of <br /> luxury tile
        </h1>
      </div>

      {/* form Content */}
      <div className="absolute hidden lg:inline-block octagon1 top-[160px] xl:top-[100px] right-10 z-50 w-80">
        <div className="relative bg-white octagon1w top-[1px] left-[1px] w-[308px] h-[513px]">
        <div className="pt-[21px] pb-[5px]">
        <h3>
          Schedule a <span>Private Consultation</span>
        </h3>
        </div>
        <p className="form2 text-center">A specialist will be in touch shortly.</p>
        
        <form className="p-5 flex flex-col gap-[15px]">
          <div className="flex items-center justify-between">
            <h6 className="inph6">Name</h6>
          <div className="oct-2f">
          <input
            type="text"
            placeholder="Name"
            className="form-input p-4 focus:outline-none"
          />
          </div>
          </div>
          <div className="flex items-center justify-between">
          <h6 className="inph6">Email</h6>
          <div className="oct-2f">
            <input
            type="email"
            placeholder="Email"
            className="form-input p-4 focus:outline-none"
          />
          </div>
          </div>
          <div className="flex items-center justify-between">
          <h6 className="inph6">Phone</h6>
          <div className="oct-2f">
          <input
            type="tel"
            placeholder="Phone"
            className="form-input p-4 focus:outline-none"
          />
          </div>
          </div>
          <div>
            <h6 className="yn">Are you working with a designer?</h6>
          <div className="flex mt-[5px] w-[100%] gap-4">
            <div className="oct-btn2a">
            <button className="form-btn oct-btn3 bg-gray-200 text-[#AE6C3E]">
              Yes
            </button>
            </div>
            <div className="oct-btn2b">
            <button className="form-btn oct-btn3 bg-gray-200 text-[#AE6C3E]">
              No
            </button>
            </div>
          </div>
          </div>
          <div className="flex items-start gap-[15px] absolute top-[340px] justify-between">
            <h6 className="inputhead1 mt-[10px]">Designers Name</h6>
            
          <div className="oct-2fd">
          <input
            type="text"
            placeholder="Name"
            className="form-input1 p-4 focus:outline-none"
          />
          </div>
          
          </div>
          <div className="oct-btn-border top-[95px] w-[269px]">
            <button className="form-btn absolute left-[1px] oct-btnform bg-[#AE6C3E] text-white">
            BOOK NOW
          </button></div>
          <div className="absolute flex flex-col text-center justify-center top-[460px]">
            <h6>1532 Slocum St, Dallas, Texas 75207</h6>
            <div className="flex gap-[8px]"><div className="flex gap-[8px]"><img src="/logos/icon/vector (3).svg" alt="" /><h6>info@stone.boutique,</h6></div><div className="flex gap-[8px]"> <hr className="w-[1px] h-[17px] bg-[#E4C9AF]" /><img src="/logos/icon/vector (2).svg" alt="" /><h6>(972) 635-4000</h6></div>  </div>
          </div>
        </form>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;