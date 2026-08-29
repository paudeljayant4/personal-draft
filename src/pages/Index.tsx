import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Interests } from "@/components/Interests";
import { Creations } from "@/components/Creations";
import { Journey } from "@/components/Journey";
import { Library } from "@/components/Library";
import { Skills } from "@/components/Skills";
import { Currently } from "@/components/Currently";
import { Vision } from "@/components/Vision";
import { Mindset } from "@/components/Mindset";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-shiro dark:bg-kuro text-kuro dark:text-shiro selection:bg-sakura/25 transition-colors duration-500 relative">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Interests />
        <Creations />
        <Journey />
        <Library />
        <Skills />
        <Currently />
        <Vision />
        <Mindset />
        <Contact />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;