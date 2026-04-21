import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-50 mb-12 flex items-center">
          Education
          <div className="ml-6 flex-grow h-px bg-slate-800"></div>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg hover:border-blue-500/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <GraduationCap className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-2">
                  <h3 className="text-xl font-semibold text-slate-100">
                    B.E. Computer Science and Engineering
                  </h3>
                  <span className="text-slate-400 text-sm whitespace-nowrap mt-2 md:mt-0">
                    Expected July 2027
                  </span>
                </div>
                <h4 className="text-blue-500 font-medium mb-4">
                  Coimbatore Institute of Technology
                </h4>
                <div className="inline-block bg-slate-950 border border-slate-800 px-3 py-1 rounded-md text-slate-300 font-mono text-sm">
                  CGPA: 8.97 / 10
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg hover:border-blue-500/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <GraduationCap className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">
                  Higher Secondary Education
                </h3>
                <div className="inline-block bg-slate-950 border border-slate-800 px-3 py-1 rounded-md text-slate-300 font-mono text-sm">
                  Percentage: 96.6%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
