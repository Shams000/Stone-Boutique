"use client";

export default function NavigationMenu() {
  


  return (
    
    <nav className="fixed octagonheader  xl:h-[100vh] h-[70px] w-full xl:w-[70px] bg-gradient-to-r from-white to-[#AE6C3E] xl:bg-gradient-to-t xl:from-white xl:to-[#AE6C3E] flex items-center z-[100]">
    <div className="absolute bottom-[2px] xl:right-[2px] xl:h-[100vh] h-[68px] w-full bg-white xl:w-[68px] octagonheader00">
      <div className="flex w-full xl:flex-col xl:h-full xl:justify-between justify-between items-center px-6 py-4">
        {/* Logo Section */}
    <div className="text-2xl xl:-rotate-90 h-[30px] w-[488px] font-bold">
      {/* Show different logo orientation for large and small screens */}
      <h5 className="h-[30px] w-[488px] navlog tracking-widest">STONE BOUTIQUE</h5>
        {/* <img src="/logos/Vector (1).png" className="inline-block xl:hidden" alt="Logo" />
        <img src="/logos/Vector (1).svg" className="xl:inline-block hidden" alt="Rotated Logo" /> */}
    </div>

    

    {/* Social Icons Section */}
    <div className="flex gap-4 ">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/logos/instagram alt 1.svg" alt="Instagram" className="w-6 h-6" />
      </a>
    </div>
    </div></div>
  </nav>
  
  );
}