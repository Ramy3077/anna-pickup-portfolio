import { ArrowRight, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
              Anna Pickup
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 font-light">
              Philosophy Student | Aspiring HR & Retail Professional
            </p>
          </div>
          
          <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
            I'm passionate about understanding people and solving complex problems. 
            Through my philosophy studies and diverse leadership experiences, I've developed 
            strong communication skills and a people-first approach that I'm eager to bring 
            to HR and retail management roles.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8"
              onClick={() => scrollToSection("experience")}
            >
              View Experience
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-300 rounded-full px-8"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative lg:order-last">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto">
            <img
              src="/anna.png"
              alt="Anna Pickup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50" />
        </div>
      </div>
    </section>
  );
}
