import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Process from "@/components/process/Process";
import Reviews from "@/components/reviews/Reviews";
import Footer from "@/components/footer/Footer";
import FAQ from "@/components/faq/FAQ";

export default function Home() {
  return (
    <main className="main flex min-h-screen flex-col w-full max-w-[125rem]">
      <Header />
      <Hero />
      <Process />
      <Reviews />
      <FAQ />
      <Footer />
    </main>
  );
}
