import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-slate-600">
            Academic foundation and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* University */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-blue-600" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      BA (Hons) Philosophy
                    </h3>
                    <p className="text-slate-600">
                      University of Birmingham
                    </p>
                  </div>
                  <span className="text-sm text-slate-500 font-medium whitespace-nowrap">
                    2023 - 2026
                  </span>
                </div>
                
                <p className="text-slate-700">
                  Second-year student developing critical thinking, analytical reasoning, and ethical 
                  decision-making skills through rigorous academic study.
                </p>
              </div>
            </div>
          </div>

          {/* A-Levels */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-green-600" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      A-Levels
                    </h3>
                    <p className="text-slate-600">
                      Secondary Education
                    </p>
                  </div>
                  <span className="text-sm text-slate-500 font-medium whitespace-nowrap">
                    2021 - 2023
                  </span>
                </div>
                
                <div className="space-y-3">
                  <p className="text-slate-700">
                    Strong academic performance across multiple subjects
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-slate-50 rounded-lg px-4 py-2 border border-slate-200">
                      <span className="text-slate-900 font-medium">Philosophy:</span>{" "}
                      <span className="text-slate-600">A</span>
                    </div>
                    <div className="bg-slate-50 rounded-lg px-4 py-2 border border-slate-200">
                      <span className="text-slate-900 font-medium">Psychology:</span>{" "}
                      <span className="text-slate-600">A</span>
                    </div>
                    <div className="bg-slate-50 rounded-lg px-4 py-2 border border-slate-200">
                      <span className="text-slate-900 font-medium">English Literature:</span>{" "}
                      <span className="text-slate-600">B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Academic Excellence Award
            </h3>
            <p className="text-slate-700">
              Recognized for outstanding academic performance and dedication to studies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
