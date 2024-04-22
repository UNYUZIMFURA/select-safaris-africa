import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Process from "@/components/process/Process";
import Testimonials from "@/components/testimonials/Testimonials";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/footer/Footer";
import LiveChat from "@/components/live-chat/LiveChat";

export default function Home() {
  return (
    <main className="main flex min-h-screen flex-col w-full max-w-[125rem]">
      <Header />
      <Hero />
      <Process />
      <Testimonials />
      <FAQ />
      <Footer />
      <LiveChat />
    </main>
  );
}
