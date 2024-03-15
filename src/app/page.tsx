import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Travels from "@/components/travels/Travels";
import OurWork from "@/components/OurWork/OurWork";
import Explore from "@/components/explore/Explore";
import Process from "@/components/process/Process";
import Reviews from "@/components/reviews/Reviews";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="main flex min-h-screen flex-col w-full max-w-[125rem]">
      <Header />
      <Hero />
      <Travels />
      <OurWork />
      <Explore />
      <Process />
      <Reviews />
      <Footer />
    </main>
  );
}
