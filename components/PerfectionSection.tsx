

const PerfectionSection = () => {
  return (
    <section className="bg-[#f8f5f0] relative min-h-[1150px]  justify-between gap-[80px] xl:justify-end xl:gap-[300px] xl:h-[100vh] xl:w-[100%] w-[100vw] flex flex-col items-center pt-[63px]">
      {/* Steps Section */}
      <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-[50px] xl:w-[941px] xl:grid-cols-4 md:gap-8">
        {/* Step 1 */}
        <div className="text-center w-[196px]">
          <div
            className="w-[196px] h-[233px] rounded-t-full overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/Rectangle 18.png')" }}
          ></div>
          <div className="relative mt-[-50px]">
          <h4 className="nmbr text-left ">01</h4>
          <p className="text-lg font-medium text-left cardshead">Discover Through <em>Technology</em></p>
          <p className="stepdesc text-left mt-2">
            Our patented tools simplify stone selection and purchase.
          </p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="text-center w-[196px]">
          <div
            className="w-[196px] h-[233px] rounded-t-full overflow-hidden bg-cover bg-center relative"
            style={{ backgroundImage: "url('/Rectangle 19.png')" }}
          >
            <button className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-white text-[#AE6C3E] text-[20px] w-[56px] items-center h-[56px] flex justify-center tetradecagonv ">
              <img src="/logos/Vector 13.svg" className="w-[16px] h-[21px]" alt="" />
            </button>
          </div>
          <div className="relative z-10 mt-[-50px]">
          <h4 className="nmbr text-left">02</h4>
          <p className="text-lg text-left font-medium cardshead">Render Your <em>Vision</em></p>
          <p className="stepdesc text-left mt-2">
            We render your stone selections into photo-realistic renderings.
          </p>
          </div>
        </div>
        {/* Step 3 */}
        <div className="text-center w-[196px]">
          <div
            className="w-[196px] h-[233px] rounded-t-full overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/Rectangle 20.png')" }}
          ></div>
          <div className="mt-[-50px] relative">
          <h4 className="nmbr text-left">03</h4>
          <p className="text-lg text-left font-medium cardshead">Purchase <em>Directly</em></p>
          <p className="stepdesc text-left mt-2">
            We purchase your stone blocks directly from quarries without
            intermediaries.
          </p>
          </div>
        </div>
        {/* Step 4 */}
        <div className="text-center w-[196px]">
          <div
            className="w-[196px] h-[233px] rounded-t-full overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/Rectangle 21.png')" }}
          ></div>
          <div className="mt-[-50px] relative">
          <h4 className="nmbr text-left ">04</h4>
          <p className="text-lg text-left font-medium cardshead">Install <em>Precisely</em></p>
          <p className="stepdesc text-left mt-2">
            We combine the best-engineered design specifications precisely.
          </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bgstone relative w-[100vw] max-w-[1440px] mt-[210px] md:mt-[180px] h-[396px] xl:bottom-[-80px] md:h-[326px] xl:h-[390px] xl:mt-[0px] pb-[48px] mb:pb-0">
      <div className="absolute top-[46%] md:top-[2%] right-[39%] md:right-[20%] group">
              <div className="w-[70px] h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out"><img src="/logos/Arabescato Extra.svg"  className="w-[70px] pulse-button h-[70px]  hover:scale-110 transition-transform duration-300 ease-in-out" alt="" /></div>
              <div className="opacity-0 group-hover:opacity-100  absolute top-[-2rem] right-[-4rem] bg-white text-black p-2 shadow-lg transition-opacity duration-500">
              <p className="hovertext">Shop <br /><span>Arabescato Extra</span></p>
              </div>
            </div>
     

        <div className="mt-[-150px] md:mt-[-210px] md:mb-[0px] mb-[180px]  xl:mt-[-200px]">
          {/* Title Section */}
        <div className="text-center">
          <h2 className="perfection">A passion for <br /> <span className="perfection2 text-[100px] md:text-[180px]">perfection</span></h2>
          <p className="text-xl pr1 italic text-[#AE6C3E] font-normal md:font-medium md:mt-4">
          — In our industry, <br /> <span className="pr2 font-normal md:font-medium">with our products, for our clients</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] md:gap-8 mt-[40px] md:mt-8">
         <div className="oct-btn-border w-[323px] md:w-[347px]">
         <button className="bg-[#AE6C3E] oct-btn w-[321px] md:w-[345px] left-[1px] text-white hover:bg-[#F7EAD7] hover:text-[#ae6c3e] hover:border hover:border-[#E4C9AF]">
            Schedule a Private Consultation
          </button>
         </div>
          <button className="bg-white oct-btn2nd w-[321px] md:w-[345px] text-[#AE6C3E] hover:bg-[#F7EAD7] hover:text-[#ae6c3e] hover:border hover:border-[#E4C9AF]">
            Shop Our Stones
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectionSection;