import { Award } from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    "3rd place at HackFest 2024 (AI-based website filtration system)",
    "Solved 650+ problems across various competitive programming coding platforms",
    "College-level finalist in Smart India Hackathon (SIH) 2025",
    "Top 8 team in Hyperverge 36-hour hackathon",
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-50 mb-12 flex items-center">
          Achievements
          <div className="ml-6 flex-grow h-px bg-slate-800"></div>
        </h2>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {achievements.map((item, index) => (
              <li
                key={index}
                className="flex items-start bg-slate-900 border border-slate-800 p-4 rounded-lg hover:border-blue-500/50 transition-colors"
               >
                <div className="flex-shrink-0 mr-4 mt-1">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-slate-300 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
