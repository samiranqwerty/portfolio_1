import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300">
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Aboutme />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </main>
  );
}
