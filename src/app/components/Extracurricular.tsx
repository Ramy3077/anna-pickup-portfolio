import { Trophy, Users, Target, Calendar } from "lucide-react";

export function Extracurricular() {
  const activities = [
    {
      icon: Users,
      title: "Korfball Club Leadership",
      description: "Serving as Secretary and Coach for the university's korfball club, managing administrative duties, coordinating practices, and fostering an inclusive team environment.",
      achievements: [
        "Recruited 50+ members through strategic outreach",
        "Coordinated weekly training sessions and match schedules",
        "Managed club communications and external partnerships"
      ]
    },
    {
      icon: Trophy,
      title: "Sports Coaching Experience",
      description: "Led youth netball coaching programs, developing tailored training strategies and mentoring young athletes to reach their potential.",
      achievements: [
        "Coached teams across multiple age groups and skill levels",
        "Implemented progressive training programs",
        "Built strong relationships with parents and stakeholders"
      ]
    },
    {
      icon: Target,
      title: "Team Coordination",
      description: "Extensive experience in organizing team activities, managing logistics, and ensuring smooth operations across multiple sports and social events.",
      achievements: [
        "Coordinated inter-university competitions",
        "Managed team budgets and equipment",
        "Facilitated team bonding and social activities"
      ]
    }
  ];

  return (
    <section id="extracurricular" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Leadership & Extracurricular
          </h2>
          <p className="text-lg text-slate-600">
            Developing leadership capabilities through active involvement
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <activity.icon className="w-7 h-7 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {activity.title}
              </h3>
              
              <p className="text-slate-700 mb-5 leading-relaxed">
                {activity.description}
              </p>
              
              <ul className="space-y-2">
                {activity.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sports Involvement Highlight */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Active Sports Involvement
              </h3>
              <p className="text-slate-700">
                Balancing academic excellence with active participation in university sports, 
                demonstrating time management, commitment, and the ability to thrive in 
                team-oriented environments while maintaining strong academic performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
