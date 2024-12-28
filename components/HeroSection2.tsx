"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { Swiper as SwiperCore } from "swiper";

const HeroSection2 = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="w-full xl:ml-[40px] relative">
      {/* Swiper Component */}
      <div>
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
        className="h-[100vh]"
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
              paginationEl.style.transition = "transform 0.8s ease-in-out";
            }
          });
        }}
      >
        {/* Slides */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center relative transition-transform duration-[1s] ease-in-out"
            style={{ backgroundImage: "url('/Rectangle 1.jpg')" }}
          >
            <div className="absolute top-[50%] left-[40%] group">
              <div className="w-[70px] h-[70px] hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100 absolute top-[-2rem] left-[-3rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
            
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center relative transition-transform duration-[1s] ease-in-out"
            style={{ backgroundImage: "url('/Rectangle 2.jpg')" }}
          >
    
            <div className="absolute bottom-[20%] left-[60%] group">
              <div className="w-[70px] h-[70px] hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100 absolute top-[-2rem] left-[-3rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center relative transition-transform duration-[1s] ease-in-out"
            style={{ backgroundImage: "url('/Rectangle 3.jpg')" }}
          >
            <div className="absolute top-[20%] right-[20%] group">
              <div className="w-[70px] h-[70px] hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100 absolute top-[-2rem] left-[-3rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
            className="h-full bg-cover bg-center flex items-center justify-center relative transition-transform duration-[1s] ease-in-out"
            style={{ backgroundImage: "url('/Rectangle 4.jpg')" }}
          >
            <div className="absolute top-[20%] left-[60%] group">
              <div className="w-[70px] h-[70px] hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100 absolute top-[-2rem] left-[-3rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="absolute bottom-[40px] md:right-10 flex w-[100%] justify-between px-[20px] md:px-0 gap-4 z-10 md:w-[156px]">
      <div className="w-[70px] h-[70px] relative border tetradecagon1 bg-[#AE6C3E]">
          <div className="hover:w-[66px] w-[70px] h-[70px] hover:h-[66px] absolute top-[-1px] left-[-1px] hover:top-[1px] hover:left-[1px] border tetradecagon2 border-[#AE6C3E]">
          <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-[#F7EAD7]  text-[#8e5733] hover:bg-[#8e5733] hover:text-white flex items-center justify-center tetradecagon transition"
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
      </Swiper>

      {/* Navigation Buttons */}
    

      {/* Fixed Form */}
      <div className="absolute octagon top-10 left-10 md:left-[115px] md:top-[60px] z-50  shadow-lg w-80">
        <div className="relative bg-white top-[1px] left-[1px] w-[308px] h-[443px]">
        <div className="pt-[21px]">
        <h3>
          Schedule <span>Private Consultation</span>
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
            <h6 className="inph6">Are you working with a designer?</h6>
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
          <button className="form-btn absolute oct-btnform1 bg-[#AE6C3E] text-white">
            BOOK NOW
          </button>
          <div className="absolute text-center flex flex-col justify-center top-[395px]">
            <h6>1532 Slocum St, Dallas, Texas 75207</h6>
            <div className="flex gap-[8px]"><div className="flex gap-[8px]"><img src="/logos/icon/vector (3).svg" alt="" /><h6>info@stone.boutique,</h6></div><div className="flex gap-[8px]"><img src="/logos/icon/vector (2).svg" alt="" /><h6>(972) 635-4000</h6></div>  </div>
          </div>
        </form>
        </div>
      </div>
      
      </div>
      <div className="mx-auto h-[auto] pt-[50px] flex justify-center">
          <div className="flex flex-col w-full justify-between md:justify-between items-center gap-4 px-[40px] xl:px-0 mb-12">
            <div className="gap-[45px] flex flex-col xl:flex-row"> 
                <h6 className="headerpartner1">The <em>pinnacle</em> of the stone industry</h6>
            <div className="flex flex-col md:flex-row gap-[20px] justify-start">
            <p className="para max-w-[400px]">After 30 successful years in the natural stone industry we saw a glaring need for change. Why, in an industry focused on beauty, design and luxury, was the buying process so grueling? Hot, dusty warehouses, an inability to view extensive slab options efficiently, confusing price structures, and unreliable processes went against everything we wanted to offer you.</p>
            <img src="/Vector 17.svg" className=" hidden md:inline-block" alt="" />
            
            <img src="/Vector 18.svg" className=" inline-block md:hidden" alt="" />

            <p className="para max-w-[400px]">In 2016 we began our journey to launch an unmatched, leading-edge process that’s accurate, efficient, and engaging, delivering a superior experience in stone-buying, all from the comfort of our elegant and welcoming showroom – or even your home.</p>
            </div>
            </div>
          
          </div>
        </div>
    </section>
    
  );
};

export default HeroSection2;