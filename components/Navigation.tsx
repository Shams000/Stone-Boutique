"use client";

export default function NavigationMenu() {
  


  return (
    
    <nav className="fixed octagonheader xl:h-[100vh] h-[70px] w-full xl:w-[70px] bg-gradient-to-r from-white to-[#AE6C3E] xl:bg-gradient-to-t xl:from-white xl:to-[#AE6C3E] flex items-center z-[100]">
    <div className="absolute bottom-[2px] xl:right-[3px] xl:top-[0px] xl:h-[100vh] h-[68px] w-full xl:border-r-[#AE6C3E] bg-white xl:w-[68px] octagonheader00 ">
      <div className="flex w-full xl:flex-col h-full xl:justify-between justify-between octagonheader00 xl:mr-[1px] items-center px-6 py-4">
        {/* Logo Section */}
    <div className="xl:-rotate-90 xl:transform-gpu h-[20px] w-[650px]">
      {/* Show different logo orientation for large and small screens */}
      <img src="logos/Logo-White.svg" className="h-[20px]" alt="" />
        {/* <img src="/logos/Vector (1).png" className="inline-block xl:hidden" alt="Logo" />
        <img src="/logos/Vector (1).svg" className="xl:inline-block hidden" alt="Rotated Logo" /> */}
    </div>

    

    {/* Social Icons Section */}
    <div className="flex gap-4 ">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/logos/instagram alt 1.svg" alt="Instagram" className="w-6 h-6 hidden md:inline-block" />
      </a>
    </div>
    </div></div>
  </nav>
  
  );
}