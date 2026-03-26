import { Briefcase, Users, Trophy, Scale } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      icon: Users,
      title: "Korfball Club Secretary & Coach",
      organization: "University of Birmingham",
      period: "2023 - Present",
      highlights: [
        "Led administrative operations and recruitment initiatives for 50+ members",
        "Coached and mentored players, fostering team cohesion and skill development"
      ],
      color: "blue"
    },
    {
      icon: Briefcase,
      title: "Sales Assistant",
      organization: "Clarks",
      period: "2022 - Present",
      highlights: [
        "Delivered exceptional customer service in fast-paced retail environment",
        "Built strong client relationships and consistently met sales targets"
      ],
      color: "green"
    },
    {
      icon: Trophy,
      title: "Netball Coach",
      organization: "Local Sports Club",
      period: "2021 - 2023",
      highlights: [
        "Mentored youth teams, developing coaching strategies for diverse skill levels",
        "Coordinated match schedules and communicated with parents and stakeholders"
      ],
      color: "purple"
    },
    {
      icon: Scale,
      title: "Legal Work Experience",
      organization: "Local Law Firm",
      period: "Summer 2022",
      highlights: [
        "Gained insight into professional legal operations and client communication",
        "Developed strong attention to detail and understanding of workplace professionalism"
      ],
      color: "slate"
    }
  ];

  const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
    blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200" },
    green: { bg: "bg-green-50", icon: "text-green-600", border: "border-green-200" },
    purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-200" },
    slate: { bg: "bg-slate-50", icon: "text-slate-600", border: "border-slate-200" }
  };

  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-600">
            Building leadership and people skills through diverse roles
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const colors = colorClasses[exp.color];
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <exp.icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {exp.title}
                        </h3>
                        <p className="text-slate-600">
                          {exp.organization}
                        </p>
                      </div>
                      <span className="text-sm text-slate-500 font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
