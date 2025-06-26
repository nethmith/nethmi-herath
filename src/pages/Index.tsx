
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-200 dark:bg-slate-950 text-slate-800 dark:text-white py-8 border-t border-slate-300 dark:border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Nethmi Herath. Built with passion using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
