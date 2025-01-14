import HeroSection from "../../components/HeroSection";
import ExperienceSection from "../../components/ExperienceSection";
import GallerySlider from "../../components/GallerySlider";
import HeroSection2 from "../../components/HeroSection2";
import PerfectionSection from "../../components/PerfectionSection";
import Footer from "../../components/Footer";
import NavigationMenu from "../../components/Navigation";
import NavigationMenu2 from "../../components/Navigation2";


// import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="relative xl:w-[100vw]">
      <NavigationMenu />
      <NavigationMenu2 />
      <HeroSection />
      <ExperienceSection />
      <HeroSection2 />
      <GallerySlider />
      <PerfectionSection/>
     
      <Footer />
    </div>
  );
}