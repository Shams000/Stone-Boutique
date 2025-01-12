"use client";
import Image from "next/image";
import { useRef } from "react";

const GallerySlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -500, // Adjust the scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500, // Adjust the scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="gallery w-full lg:w-[100%] xl:h-[100vh] min-h-[1100px] relative justify-center items-center pt-[60px] pb-[60px] 2xl:pt-[80px] 2xl:pb-[80px] ">
      {/* Vertical Text and Navigation */}
      <div className="relative xl:h-full min-h-[960px] bottom-0 ">
      <div className="absolute left-0 min-h-[760px] md:left-[230px] top-1/2 bottom-1/2 gap-56 transform -translate-y-1/2 flex flex-col md:justify-between h-[657px] md:h-full gallery w-[140px] pt-[150px] items-center z-10">
        <p className="transform w-[300px] eg -rotate-90 text-[#AE6C3E] font-bold uppercase tracking-wider">
          Explore Gallery
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-[70px] h-[70px] relative border tetradecagon1 bg-[#AE6C3E]">
          <div className="hover:w-[66px] w-[70px] h-[70px] hover:h-[66px] absolute top-[-1px] left-[-1px] hover:top-[1px] hover:left-[1px] border tetradecagon2 border-[#AE6C3E]">
          <button
            onClick={scrollLeft}
            className="bg-[#F7EAD7]  text-[#8e5733] hover:bg-[#8e5733] hover:text-white flex items-center justify-center tetradecagon transition"
          >
            ←
          </button>
          </div>
          </div>
          <div className="w-[70px] h-[70px] relative border tetradecagon1 bg-[#AE6C3E]">
          <div className="hover:w-[66px] w-[70px] h-[70px] hover:h-[66px] absolute top-[-1px] left-[-1px] hover:top-[1px] hover:left-[1px] border tetradecagon2 border-[#AE6C3E]">
          <button
            onClick={scrollRight}
            className="bg-[#F7EAD7] text-[#8e5733] hover:text-white flex items-center justify-center tetradecagon hover:bg-[#8e5733] transition"
          >
            →
          </button>
          </div>
          </div>
          
        </div>
      </div>

      {/* Gallery Content */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 xl:h-full items-center min-h-[960px] overflow-x-scroll relative scroll-smooth scrollbar-hidden"
      >
        {/* Left Image */}
        <div className="flex-shrink-0 left-[-450px] xl:h-full xl:w-auto md:left-[-450px] lg:left-[-550px] md:w-[700px]  overflow-hidden relative">
          <Image
            src="/Rectangle 15.png"
            alt="Gallery Item 1"
            width={400}
            height={597}
            className="w-full md:h-full xl:h-full xl:w-auto md:w-[700px] h-[600px] md:object-cover"
          />
        </div>

        {/* Middle Large Image */}
        <div className="relative left-[-370px] md:h-full md:w-full md:left-[-350px] lg:left-[-450px] flex gap-[40px]">
        <div className=" flex-shrink-0 md:w-auto xl:w-auto h-[580px] xl:h-auto md:h-auto overflow-hidden relative">
          <Image
            src="/rectangle 12 (1).png"
            alt="Gallery Item 2"
            width={216}
            height={597}
            className="md:h-full xl:h-full xl:w-auto  md:w-auto"
          />
          <div className="absolute top-[50%] left-[50%] group">
              <div className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100  absolute top-[-2rem] left-[-3rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
        </div>

        {/* Right Section */}
        <div className="flex-shrink-0 xl:h-full xl:w-auto w-[230px] md:w-auto content-between gap-[27px] flex flex-col space-y-4">
          {/* Top Image */}
          <div className="overflow-hidden md:h-[50%] md:w-full relative">
            <Image
              src="/rectangle 14.png"
              alt="Gallery Item 3"
              width={230}
              height={273}
              className="w-full md:w-auto xl:h-full xl:w-full  md:h-full md:object-cover"
            />
            <div className="absolute top-[50%] left-[50%] group">
              <div className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100  absolute top-[-2rem] left-[-3rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
          </div>

          {/* Bottom Image */}
          <div className="overflow-hidden md:h-[50%] xl:w-full relative">
            <Image
              src="/rectangle 13.png"
              alt="Gallery Item 4"
              width={230}
              height={273}
              className="w-full md:w-auto xl:h-full xl:w-full md:h-full "
            />
            <div className="absolute top-[50%] left-[50%] group">
              <div className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100  absolute top-[-2rem] left-[-3rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Duplicate of Left Image (Optional) */}
        <div className="flex-shrink-0 md:w-auto xl:h-full xl:w-auto overflow-hidden relative">
          <Image
            src="/Rectangle 15.png"
            alt="Gallery Item 1"
            width={400}
            height={600}
            className="w-full md:h-full md:w-auto xl:h-full xl:w-auto h-[600px] md:object-cover"
          />
          <div className="absolute top-[50%] left-[50%] group">
              <div className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100  absolute top-[-2rem] left-[-3rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
        </div>
        <div className="flex-shrink-0 md:w-auto xl:h-full xl:w-auto overflow-hidden relative">
          <Image
            src="/Rectangle 15.png"
            alt="Gallery Item 1"
            width={400}
            height={600}
            className="w-full md:h-full md:w-auto xl:h-full xl:w-auto h-[600px] md:object-cover"
          />
          <div className="absolute top-[50%] left-[50%] group">
              <div className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100  absolute top-[-2rem] left-[-3rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
        </div>
        </div>
      </div>

      {/* Explore Button */}
      <div className="text-center right-[80px] hidden md:inline-block bottom-[20px] absolute">
        <button className="bg-[#AE6C3E] text-white oct-btnexplore w-[287px] hidden md:inline-block hover:bg-[#F7EAD7] hover:text-[#ae6c3e] hover:border hover:border-[#E4C9AF]">
          Explore Gallery
        </button>
      </div>
      </div>
    </section>
  );
};

export default GallerySlider;