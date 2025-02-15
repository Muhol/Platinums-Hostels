import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs ";

export default function Home() {
  return (
    <div className="h-screen max-h-screen overflow-y-scroll w-full scroll-smooth snap-mandatory snap-y ">
      <section className="snap-start min-h-screen">
        <HeroSection/>
      </section>
      <section className="snap-start min-h-screen">
      <WhyChooseUs/>
      </section>
      <section className="snap-start min-h-screen">
      <AboutUs/>
      </section>
    </div>
  );
}
