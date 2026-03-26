import { Brain, Users, Target } from "lucide-react";

export function About() {
  const traits = [
    {
      icon: Brain,
      title: "Critical Thinker",
      description: "Philosophy background fostering analytical and strategic problem-solving"
    },
    {
      icon: Users,
      title: "People-Focused",
      description: "Passionate about understanding people and building strong team dynamics"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Strong organisational skills with a track record of delivering outcomes"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            About Me
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            As a second-year Philosophy student at the University of Birmingham, I combine 
            academic rigour with hands-on leadership experience. My studies have sharpened my 
            critical thinking and communication abilities, while my roles in coaching, retail, 
            and club management have developed my practical people skills. I'm actively seeking 
            internship opportunities where I can apply my passion for HR and retail management 
            to create positive, people-centered environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {traits.map((trait, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <trait.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {trait.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {trait.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
