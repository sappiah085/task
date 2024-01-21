import Belt from "@/components/landing_page/Belt";
import FAQ from "@/components/landing_page/FAQ";
import Hero from "@/components/landing_page/hero";
import Menus from "@/components/landing_page/menus";
import Ready from "@/components/landing_page/ready";
import Testimonial from "@/components/landing_page/testimonial";
import WhyChoose from "@/components/landing_page/why";

export default function Home() {
  return (
    <main className="w-full gap-12    flex flex-col items-center justify-center">
      <Hero />
      <Belt />
      <WhyChoose />
      <div className="w-full py-20 bg-[rgb(249,250,251)]">
        <Testimonial />
      </div>
      <FAQ />
      <Ready />
      <Menus/>
    </main>
  );
}
