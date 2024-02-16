import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Travels from "@/components/travels/Travels";

export default function Home() {
  return (
    <main className="main flex min-h-screen flex-col w-full max-w-[125rem]">
      <Header />
      <Hero />
      <Travels />
    </main>
  );
}
