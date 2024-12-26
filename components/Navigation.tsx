"use client";

export default function NavigationMenu() {
  


  return (
    
    <nav className="fixed octagonheader -top-[20px] lg:-left-[20px] lg:pl-[20px] lg:h-[100vh] h-[90px] pt-[20px] w-full lg:w-[90px] bg-white flex items-center z-[100]">
    <div className="flex w-full lg:flex-col lg:h-full lg:justify-between justify-between items-center px-6 py-4">
        {/* Logo Section */}
    <div className="text-2xl font-bold">
      {/* Show different logo orientation for large and small screens */}
        <img src="/logos/Vector (1).png" className="inline-block lg:hidden" alt="Logo" />
        <img src="/logos/Vector (1).svg" className="lg:inline-block hidden" alt="Rotated Logo" />
    </div>

    

    {/* Social Icons Section */}
    <div className="flex gap-4 lg:mt-auto">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/logos/instagram alt 1.svg" alt="Instagram" className="w-6 h-6" />
      </a>
    </div>
    </div>
  </nav>
    // <nav className=" sticky  top-0 left-0 h-16 justify-end octagon xl:w-16 bg-white flex lg:flex-col flex-row items-center z-[100]">
    //   {/* Logo */}
     
    // <div className="absolute  flex  xl:flex-col lg:w-[100%]">
    // <div className=" lg:mb-[200px] h-[328px] p-4  xl:h-full">
    //     <img src="/logos/Vector (1).png" className="lg:rotate-90 w-[362px] " alt="" />
    //   </div>

    //   <div className=" lg:left-0 m-4 ">
    //     <img src="/logos/instagram alt 1.svg" alt="" />
    //   </div>
    // </div>
    
    // </nav>
  
  );
}