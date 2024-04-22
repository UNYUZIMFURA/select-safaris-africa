import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero"
import Process from "@/components/process/Process"
import Testimonials from "@/components/testimonials/Testimonials"
import FAQ from "@/components/faq/FAQ"
import Footer from "@/components/footer/Footer"

export default function Home() {
    return (
        <main className="main flex min-h-screen w-full max-w-[125rem] flex-col">
            <Header />
            <Hero />
            <Process />
            <Testimonials />
            <FAQ />
            <Footer />
        </main>
    )
}
