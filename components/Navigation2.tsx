"use client";

import { useState } from "react";

export default function Navigation2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultMenuOpen, setIsConsultMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close the menu if it's already open
    } else {
      setIsMenuOpen(true); // Open the menu
      setIsConsultMenuOpen(false); // Ensure the other menu is closed
    }
  };
  
  const toggleConsultMenu = () => {
    if (isConsultMenuOpen) {
      setIsConsultMenuOpen(false); // Close the consultation menu if it's already open
    } else {
      setIsConsultMenuOpen(true); // Open the consultation menu
      setIsMenuOpen(false); // Ensure the other menu is closed
    }
  };

  return (
    <div className="top-right-nav flex gap-[20px]">
        <div className="oct-btnnav-border right-[100px] md:top-[100px] xl:top-[16px] md:w-[345px]">
        <button className="oct-btnnav  hidden md:inline-block bg-[#AE6C3E] text-white hover:bg-[#F7EAD7] hover:text-[#ae6c3e] hover:border hover:border-[#E4C9AF]">
          Schedule a Private Consultation
        </button>
        </div>
        
        <button className="menu-toggle top-[80px] md:top-[16px] right-[80px] inline-block md:hidden tetradecagonl" onClick={toggleConsultMenu}>
        <img src="/logos/calendar.svg" alt="" />
        </button>
        
        {isConsultMenuOpen && (
          <div className="absolute octagon2  top-[160px] md:top-[100px] right-10 z-50  shadow-lg w-80">
          <div className="relative  octagon1w bg-white top-[1px] left-[1px] w-[308px] h-[523px]">
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
            <div className="flex items-start gap-[15px] absolute top-[345px] justify-between">
              <h6 className="inputhead1 mt-[10px]">Designers Name</h6>
              
            <div className="oct-2fd">
            <input
              type="text"
              placeholder="Name"
              className="form-input1 p-4 focus:outline-none"
            />
            </div>
            
            </div>
            <div className="oct-btn-border top-[105px] w-[269px]">
            <button className="form-btn absolute left-[1px] oct-btnform bg-[#AE6C3E] text-white">
            BOOK NOW
          </button>
          </div>
            <div className="absolute flex flex-col text-center justify-center top-[470px]">
            <h6>1532 Slocum St, Dallas, Texas 75207</h6>
            <div className="flex gap-[8px]"><div className="flex gap-[8px]"><img src="/logos/icon/vector (3).svg" alt="" /><h6>info@stone.boutique,</h6></div><div className="flex gap-[8px]"><hr className="w-[1px] h-[17px] bg-[#E4C9AF]" /><img src="/logos/icon/vector (2).svg" alt="" /><h6>(972) 635-4000</h6></div>  </div>
          </div>
          </form>
          </div>
        </div>
        )}
          
        {/* Menu Toggle Button */}
        
        <button className="menu-toggle top-[80px] md:top-[95px] xl:top-[11px] right-[16px] tetradecagonl" onClick={toggleMenu}>
        {isMenuOpen ? <img src="logos/Group 4.svg" alt="" /> : <img src="logos/Group 4a.svg" alt="" />  }
        </button>

      {/* Navigation Menu */}
      <div className= {`menu gap[20px] octagon h-[450px] mt-[140px] md:mt-[150px] xl:mt-[80px] ${isMenuOpen ? "show" : ""}`}>
      <ul>
        <li className="navdetail">
            Home
          {/* <a href="#home">Home</a> */}
        </li>
        <li className="navdetail">
            Story
          {/* <a href="#story">Story</a> */}
        </li>
        <li className="navdetail">
            Leadership
          {/* <a href="#leadership">Leadership</a> */}
        </li>
        <li className="navdetail">
            Gallery
          {/* <a href="#gallery">Gallery</a> */}
        </li>
        <li className="navdetail">
            Products
          {/* <a href="#products">Products</a> */}
        </li>
        <li className="navdetail">
            Connect
          {/* <a href="#connect">Connect</a> */}
        </li>
        <li className="navdetail">
            Login
          {/* <a href="#login">Login</a> */}
        </li>
      </ul>
      </div>
        
    </div>
  );
}