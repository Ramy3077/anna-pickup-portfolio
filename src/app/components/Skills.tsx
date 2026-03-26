import { Users, MessageCircle, ClipboardList } from "lucide-react";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Leadership & Management",
      icon: Users,
      skills: [
        "Team Leadership",
        "Project Coordination",
        "Strategic Planning",
        "Recruitment & Onboarding",
        "Conflict Resolution"
      ],
      color: "blue"
    },
    {
      title: "Communication & Teamwork",
      icon: MessageCircle,
      skills: [
        "Interpersonal Communication",
        "Public Speaking",
        "Active Listening",
        "Stakeholder Management",
        "Coaching & Mentoring"
      ],
      color: "green"
    },
    {
      title: "Organisation & Administration",
      icon: ClipboardList,
      skills: [
        "Time Management",
        "Event Coordination",
        "Administrative Support",
        "Attention to Detail",
        "Problem Solving"
      ],
      color: "purple"
    }
  ];

  const colorClasses: Record<string, { bg: string; text: string; badge: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
    green: { bg: "bg-green-50", text: "text-green-600", badge: "bg-green-100 text-green-700" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", badge: "bg-purple-100 text-purple-700" }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Skills
          </h2>
          <p className="text-lg text-slate-600">
            Core competencies developed through academic and practical experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color];
            return (
              <div 
                key={index}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <category.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-5">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      className={`${colors.badge} border-0 px-3 py-1.5 rounded-full`}
                      variant="secondary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
