import { Code2, Layout, Database, Brain, HardDrive, Terminal } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      skills: ["Python", "Java", "C", "C++"],
    },
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      skills: ["HTML", "CSS", "React"],
    },
    {
      title: "Backend",
      icon: <HardDrive className="w-6 h-6 text-blue-500" />,
      skills: ["FastAPI", "JDBC"],
    },
    {
      title: "Machine Learning & Data",
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      skills: ["LSTM", "Random Forest", "Pandas", "NumPy"],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-blue-500" />,
      skills: ["MySQL", "PostgreSQL", "SQL"],
    },
    {
      title: "Tools & Platforms",
      icon: <Terminal className="w-6 h-6 text-blue-500" />,
      skills: ["GitHub", "Docker", "Postman", "Streamlit", "VS Code", "Render"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-50 mb-12 flex items-center">
          Skills
          <div className="ml-6 flex-grow h-px bg-slate-800"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:-translate-y-1 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-slate-100 ml-3">
                  {category.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <li
                    key={sIndex}
                    className="bg-slate-950 text-slate-300 px-3 py-1 text-sm rounded-full border border-slate-800"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
