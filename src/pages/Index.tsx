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
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
        <Footer />
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;