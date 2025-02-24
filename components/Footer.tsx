
const Footer = () => {
    return (
      <footer className="bg-[#302B25] xl:w-[100%] relative w-full  text-white  ">
        {/* Partners Section */}
        <div className="w-full px-[20px] xl:px-0 xl:pl-[100px] bg-[#4D473F] pt-12">
        <div className=" max-w-[1440px] bg-[#4D473F] mx-auto">
          <div className="flex flex-col max-w-[1440px] justify-between md:justify-between items-start gap-[40px]">
            <div className="gap-[45px] w-[100%] justify-start flex flex-col items-center md: xl:flex-row"> 
                <h6 className="headerpartner">Our Partners</h6>
            <div className="flex justify-between gap-[25px] flex-col">
                
            <div className="flex flex-wrap px-[10px] gap-[28px] justify-center items-center xl:gap-[45px] md:justify-between">
              <img src="/logos/Group 70 2.svg" alt="Partner 1" className="w-[63px] h-[40px]" />
              <img src="/logos/Group 70 3.svg" alt="Partner 2" className="w-[84px] h-[40px]" />
              <img src="/logos/Group 70 4.svg" alt="Partner 3" className="w-[176px] h-[40px]" />
              <img src="/logos/Group 70 5.svg" alt="Partner 4" className="w-[58px] h-[40px]" />
              <img src="/logos/Group 70 6.svg" alt="Partner 4" className="w-[223px] h-[40px]" />
              <img src="/logos/Group 70 7.svg" alt="Partner 4" className="w-[219px] h-[40px]" />
              
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-[35px]">
            <img src="/logos/Group 73 2.svg" alt="Partner 1" className="w-[79px] h-[40px]" />
            <img src="/logos/DCEO_BW 2.svg" alt="Partner 1" className="w-[46px] h-[40px]" />
              <img src="/logos/Group 73 4.svg" alt="Partner 2" className="w-[132px] h-[40px]" />
              <img src="/logos/Group 73 5.svg" alt="Partner 3" className="w-[77px] h-[40px]" />
              <img src="/logos/Group 73 6.svg" alt="Partner 4" className="w-[69px] h-[40px]" />
              <img src="/logos/KipsBay_BW-1 1.svg" alt="Partner 4" className="w-[35px] h-[40px]" />
            </div>
            </div>
            </div>
            <hr className="hr1" />
            <div className="flex flex-row w-full max-w-[1440px] justify-center md:justify-between items-center xl:items-start gap-4 mb-12">
            <div className="flex gap-[70px] flex-col items-center md:flex-row">
            <h6 className="headerpartner">Reputation</h6>
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center md: xl:flex-row gap-[20px]">
                <img src="/logos/Google_2015_logo 1.svg" alt="Google Rating" className="md:w-[118px] md:h-[40px]" />
                <div className="flex flex-col items-center md:items-start">
                    <img src="/logos/Group 102.svg" alt="Google Rating" className="h-6 w-[140px]" />
                        <div className="flex gap-1">
                            <p className="ratings1 opacity-[70%]">5 Star</p>
                            <p className="ratings pt-[0.5px]">—  41 Reviews</p>
                        </div>
                </div>
              </div>
              <hr className="hr2" />

              <div className="gap-[20px] flex flex-col items-center md: xl:flex-row">
              <img src="/logos/houzz-logo.svg" alt="Houzz Rating" className="w-[145px] md:w-[175px] md:h-[40px]" />
              <div className="flex flex-col items-center md:items-start">
                    <img src="/logos/Group 102.svg" alt="Google Rating" className="h-6 w-[140px]" />
                        <div className="flex gap-1">
                            <p className="ratings1 opacity-[70%]">5 Star</p>
                            <p className="ratings pt-[0.5px]">—  41 Reviews</p>
                        </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        {/* Main Footer Section */}
        <div className="w-full px-0 xl:pl-[100px]">
        <div className="max-w-[1440px] w-full min-h-[717px] h-auto justify-center xl:justify-end mx-auto flex flex-col md:flex-row ">
          {/* Founders Section */}
          <div className=" flex flex-col xl:justify-between xl:flex-row w-full md:w-[57%]  xl:w-[917px]">
          <div className=" left-0 xl:left-[0px] xl:ml-[40px] md:w-full gap-[14px] px-[20px]  xl:pl-0 xl:pr-0 xl:px-0 md:pr-[48px] md:pl-[32px] mt-[55px] flex flex-col ">
            <h3 className="fhd text-[60px] xl:w-[316px] text-left">Francisco & <br /> Margarita Acosta</h3>
            <h5 className="fhd2 text-[40px]">Founders</h5>
            <p className="text-sm desc w-full md:w-[335px] xl:w-[229px] text-left mb-6">
            Margarita and Francisco are each natural stone connoisseurs in their own right. Together, they are visionaries and have become a driving force for innovation in their industry. They have re-imagined the way stone is sourced and purchased, bridging the gap between old-world access and modern convenience in a way others deemed impossible. <br /><br />
            Francisco and Margarita are thrilled to leverage the benefits of a strong national partner to help drive innovation and growth. Stone Boutique is committed to their focus on clients and providing the absolute finest quality materials on the market today.
            </p>
            <img src="vector 19.svg" width={82} alt="" />
            <p className="fs">Francisco & <br /> Margarita Acosta</p>
            
            
          </div>
          
          <div className="flex justify-end mt-[-50px] xl:mt-[0px] xl:pt-[20px] w-full xl:w-[70%]">
          <div className="mix-blend-lighten relative bottom-0 xl:top-0 right-0  bg-[#302B25] w-[255px] h-[288px] md:w-[255px] md:h-[288px] xl:ml-[-58px] xl:w-[660px] xl:h-[700px]">
          <img src="./adfdas 1.png"  className="absolute bottom-0 right-0 xl:right-[40px] grayscale opacity-90 w-[255px] h-[288px] md:w-[255px] md:h-[288px] xl:ml-[-58px] xl:w-[660px] xl:h-[700px]" alt="" />
          </div>
          </div>
          
          
          
          </div>
  
          {/* Contact Form Section */}
          <div className="bg-[#676057] flex flex-col items-center min-h-[630px] max-h-[auto] w-full md:w-[43%] xl:w-[520px] pl-[20px] pr-[20px] pt-[48px] pb-[38px] md:pb-[18px] xl:pl-[73px] xl:pr-[73px] xl:pt-[55px] xl:right-[0px]">
            <div className="w-full xl:w-[332px]">
            <h3 className="text-lg formf font-bold mb-5 md:mb-[5px]">Schedule a <br /> <em>Private Consultation</em></h3>
            <p className="text-sm formf2 text-center mb-[30px] md:mb-[5px] xl:mb-[30px]">A specialist will be in touch</p>
            <form className="w-full xl:w-[332px] flex flex-col gap-[10px] ">
          <div className="flex flex-col items-start justify-between">
            <h6 className="inputhead">Name</h6>
          <div className="oct-2ffinput">
          <input
            type="text"
            placeholder="John Doe"
            className="form-input3 placeholder-[#9F9991] font-white text-opacity-30 p-4 focus:outline-none"
          />
          </div>
          </div>
         <div className="flex md:flex-col xl:flex-row gap-[10px] w-[100%]">
         <div className="flex flex-col w-[48%] md:w-auto items-start justify-between">
          <h6 className="inputhead">Email</h6>
          <div className="oct-2ff">
            <input
            type="email"
            placeholder="yourname@domain.com"
            className="form-input2 placeholder-[#9F9991] font-white text-opacity-30 p-4 focus:outline-none"
          />
          </div>
          </div>
          <div className="flex flex-col w-[48%] md:w-auto items-start justify-between">
          <h6 className="inputhead">Phone</h6>
          <div className="oct-2ff">
          <input
            type="tel"
            placeholder="012 123 1234"
            className="form-input2 placeholder-[#9F9991] font-white text-opacity-30 p-4 focus:outline-none"
          />
          </div>
          </div>
         </div>
          
          <div className=" content-center h-[40px] w-[100%] flex relative">
            <h6 className="inph6h mt-[10px] w-[150px] xl:w-[210px] content-center">Are you working with a designer?</h6>
            <div className="oct-btn2af w-[53px] xl:w-[60px] h-[40px] right-[60px] xl:right-[68px]">
            <button className="form-btn w-[51px] h-[38px] xl:w-[58px] oct-btn4f hover:text-[#AE6C3E] hover:bg-[#F7EAD7]">
              Yes
            </button>
            </div>
            <div className="oct-btn2bf w-[53px] xl:w-[60px] h-[40px] right-0 xl:right-[0px]">
            <button className="form-btn oct-btn4f w-[51px] h-[38px] xl:w-[58px] hover:text-[#AE6C3E] hover:bg-[#F7EAD7]">
              No
            </button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between">
            <h6 className="inputhead">Designers Name</h6>
          <div className="oct-2ff2">
          <input
            type="text"
            placeholder="Jane Doe"
            className="form-input3 placeholder-[#9F9991] font-white text-opacity-30 p-4 focus:outline-none"
          />
          </div>
          </div>
          <button className="form-btn oct-btnformfooter text-[#AE6C3E] bg-white">
            BOOK NOW
          </button>
          
          

        </form>
        <div className=" flex flex-col items-center justify-center mb-[30px] mt-[20px] md:mt-[5px] xl:mt-[20px] top-[500px]">
            <h6 className="footaddress">1532 Slocum St <br /> Dallas, Texas 75207</h6>
            <div className="flex gap-[8px]"><div className="flex gap-[8px]"><img src="/logos/icon/vector (5).svg" alt="" /><h6 className="footaddress">info@stone.boutique</h6></div><hr className="w-[1px] h-[17px] bg-[#E4C9AF]" /> <div className="flex gap-[8px]"><img src="/logos/icon/vector (4).svg" alt="" /><h6 className="footaddress">(972) 635-4000</h6></div></div>
          </div>
          <div className="w-full flex justify-center">
            <img src="/Vector (2).svg" alt="" /></div>
          <p className="mt-4 text-sm rc">© 2024 Stone Boutique. All rights reserved.</p>
          </div>
            </div>
        </div>
        </div>
  
        
        
        
      </footer>
    );
  };
  
  export default Footer;