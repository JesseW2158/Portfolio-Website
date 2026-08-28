import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Experience } from "../components/Experience";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
