import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Interests } from "@/components/Interests";
import { Journey } from "@/components/Journey";
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
    <div className="min-h-screen bg-shiro dark:bg-kuro relative">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Interests />
        <Journey />
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