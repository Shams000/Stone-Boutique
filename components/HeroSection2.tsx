"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { Swiper as SwiperCore } from "swiper";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade"; //  Import Fade CSS


const HeroSection2 = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="w-full bg-white pt-[350px] md:pt-0 min-h-[869px] flex flex-col xl:w-[100%] relative">
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
        effect="fade" //  Ensure fade effect is enabled
        fadeEffect={{ crossFade: true }} //  Smooth transition
        modules={[Autoplay, Pagination, EffectFade]} //  Add EffectFade module
        className="h-[100vh] min-h-[869px]"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {/* Slides */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: "url('/Rectangle 1.jpg')" }}
          >
            <div className="absolute top-[50%] left-[40%] group">
              <div className="w-[70px] h-[70px] hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] pulse-button h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100 absolute top-[-2rem] right-[-4rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
            
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: "url('/Rectangle 2.jpg')" }}
          >
    
            <div className="absolute bottom-[20%] left-[60%] group">
              <div className="w-[70px] h-[70px] hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] pulse-button h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100 absolute top-[-2rem] right-[-4rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: "url('/Rectangle 3.jpg')" }}
          >
            <div className="absolute top-[20%] right-[20%] group">
              <div className="w-[70px] h-[70px] hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] pulse-button h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100 absolute top-[-2rem] left-[-4rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div
            className="h-full bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: "url('/Rectangle 4.jpg')" }}
          >
            <div className="absolute top-[20%] left-[60%] group">
              <div className="w-[70px] h-[70px] hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] pulse-button h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100 absolute top-[-2rem] left-[-4rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="absolute bottom-[40px] md:right-10 flex w-[100%] justify-between px-[20px] md:px-0 gap-4 z-10 md:w-[176px]">
        <div className="w-[78px] h-[80px] relative tetradecagon1">
              
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className=" text-[#AE6C3E]#AE6C3E hover:text-white flex items-center justify-center arrows text-3xl w-full h-full tetradecagon hover:bg-[#AE6C3E] transition-transform transform hover:scale-75"
                >
                  &larr;
                </button>
              
        </div>

      <div className="w-[78px] h-[80px] relative  tetradecagon1">
        
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className=" text-[#AE6C3E] hover:text-white flex items-center justify-center arrows text-3xl w-full h-full tetradecagon hover:bg-[#AE6C3E] transition-transform transform hover:scale-75"
          >
            &rarr;
          </button>
        
      </div>
      </div>
      </Swiper>

      {/* Navigation Buttons */}
    

      {/* Fixed Form */}
      
      <div className="absolute md:left-[115px] md:top-[60px] top-10 inset-0 md:inset-auto z-50">
        <div className="octagon w-[310px] mx-auto">
        <div className="relative octagon1w bg-white top-[1px] left-[1px] w-[308px] h-[453px]">
        <div className="pt-[21px] pb-[5px]">
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
          
          <div className="oct-btn-border top-[40px] w-[269px]">
            <button className="form-btn absolute left-[1px] oct-btnform bg-[#AE6C3E] text-white">
            BOOK NOW
          </button></div>
          <div className="absolute text-center flex flex-col justify-center top-[405px]">
            <h6>1532 Slocum St, Dallas, Texas 75207</h6>
            <div className="flex gap-[8px]"><div className="flex gap-[8px]"><img src="/logos/icon/vector (3).svg" alt="" /><h6>info@stone.boutique</h6></div><hr className="w-[1px] h-[17px] bg-[#E4C9AF]" /><div className="flex gap-[8px]"><img src="/logos/icon/vector (2).svg" alt="" /><h6>(972) 635-4000</h6></div>  </div>
          </div>
        </form>
        </div>
      </div>
      </div>
      
      </div>
      <div className="mx-auto h-[auto] py-[50px] flex items-center justify-center">
          <div className="flex flex-col w-full justify-between md:justify-between items-start gap-4 px-[20px] sm:px-[40px] xl:px-0 ">
            <div className="gap-[45px] items-center md:items-start flex flex-col xl:flex-row"> 
                <h6 className="headerpartner1">The <em>pinnacle</em> of the stone industry</h6>
            <div className="flex flex-col md:flex-row gap-[20px] lg:mt-[20px] justify-start w-auto">
            <p className="para w-full max-w-[400px]">After 30 successful years in the natural stone industry we saw a glaring need for change. Why, in an industry focused on beauty, design and luxury, was the buying process so grueling? Hot, dusty warehouses, an inability to view extensive slab options efficiently, confusing price structures, and unreliable processes went against everything we wanted to offer you.</p>
            <img src="/Vector 17.svg" className=" hidden md:inline-block" alt="" />
            
            <img src="/Vector 18.svg" className=" inline-block md:hidden" alt="" />

            <p className="para w-full max-w-[400px]">In 2016 we began our journey to launch an unmatched, leading-edge process that’s accurate, efficient, and engaging, delivering a superior experience in stone-buying, all from the comfort of our elegant and welcoming showroom – or even your home.</p>
            </div>
            </div>
          
          </div>
        </div>
    </section>
    
  );
};

export default HeroSection2;