
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Youtube, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-100/40 via-transparent to-blue-100/40 dark:from-teal-900/20 dark:via-transparent dark:to-blue-900/20"></div>
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-teal-200/20 via-blue-200/20 to-purple-200/20 dark:from-teal-600/10 dark:via-blue-600/10 dark:to-purple-600/10 opacity-50"></div>
      </div>

      {/* Floating particles/dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-purple-500 dark:bg-purple-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-20 w-1.5 h-1.5 bg-teal-400 dark:bg-teal-300 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Enhanced Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 mb-8 text-sm text-teal-600 dark:text-teal-300 animate-fade-in">
              <Sparkles size={16} className="animate-pulse" />
              Open to Work
            </div>

            <div className="mb-8">
              <p className="text-teal-600 dark:text-teal-400 text-lg mb-4 font-medium tracking-wide animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Hello, I'm
              </p>
              <h1 className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-teal-600 to-blue-600 dark:from-white dark:via-teal-200 dark:to-blue-400 bg-clip-text text-transparent leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Nethmi
                <br />
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-500 bg-clip-text text-transparent">
                  Herath
                </span>
              </h1>
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-200 font-light">
                  Passionate Software Engineering Undergraduate
                </p>
                <p className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Full Stack Developer & UI/UX Designer
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
              I'm a problem-solver and lifelong learner who combines creativity with logic to build
              meaningful digital experiences. Focused on creating user-centered solutions that make a difference.
            </p>

            {/* Enhanced buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 border border-teal-500/20"
              >
                View My Work
                <ArrowDown className="ml-2 animate-bounce" size={20} />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-teal-600/70 dark:border-teal-400/50 text-teal-700 dark:text-teal-300 hover:bg-teal-600/10 dark:hover:bg-teal-400/10 hover:border-teal-600 dark:hover:border-teal-400 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm bg-white/50 dark:bg-white/5 hover:shadow-xl"
              >
                Get In Touch
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <a href="https://github.com/nethmiherath" target="_blank" rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-600/50 dark:hover:border-teal-400/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Github size={24} className="group-hover:animate-pulse" />
              </a>
              <a href="https://linkedin.com/in/nethmiherath" target="_blank" rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600/50 dark:hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Linkedin size={24} className="group-hover:animate-pulse" />
              </a>
              <a href="https://youtube.com/@nethmi_th01" target="_blank" rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:border-red-600/50 dark:hover:border-red-400/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Youtube size={24} className="group-hover:animate-pulse" />
              </a>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/30 to-blue-600/30 blur-2xl animate-pulse"></div>

              {/* Main profile container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 p-1 shadow-2xl animate-float">
                <div className="w-full h-full rounded-full bg-white/20 dark:bg-slate-900/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-slate-200/50 dark:border-white/10">
                  <img
                    src="https://i.postimg.cc/9XR2ywsq/Whats-App-Image-2024-11-12-at-21-52-04-a705b449.jpg"
                    alt="Nethmi Herath"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-teal-600/30 dark:border-teal-400/20 animate-spin" style={{ animationDuration: '10s' }}></div>
              <div className="absolute -inset-8 rounded-full border border-blue-600/20 dark:border-blue-400/10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-teal-600/70 dark:border-teal-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-teal-600 dark:bg-teal-400 rounded-full animate-bounce mt-2"></div>
            </div>
            <ArrowDown className="text-teal-600 dark:text-teal-400 animate-pulse" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
