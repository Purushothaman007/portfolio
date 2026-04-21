import { Folder, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Stock Sense",
      description:
        "Hybrid stock forecasting system using LSTM and Random Forest models achieving an RMSE < 9.7. Engineered a complete end-to-end pipeline covering data fetching, model execution, and user interface.",
      techStack: ["Python", "Streamlit", "MySQL", "yfinance"],
    },
    {
      title: "ScribblePad",
      description:
        "A FastAPI-based note management system providing a robust REST API with SQLAlchemy ORM. Includes advanced features like tagging, email notifications, and PDF export capabilities.",
      techStack: ["FastAPI", "Python", "SQLAlchemy"],
    },
    {
      title: "CrowdGuard",
      description:
        "An AI-based real-time crowd risk and stampede detection system. Leverages computer vision, density estimation, and motion analysis algorithms to flag potential safety hazards.",
      techStack: ["Python", "PyTorch", "OpenCV"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-50 mb-12 flex items-center">
          Projects
          <div className="ml-6 flex-grow h-px bg-slate-800"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="flex justify-between items-center mb-6">
                <Folder className="w-10 h-10 text-blue-500" />
                <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                  <span className="sr-only">External Link</span>
                  {/* Could be updated with GitHub/Live URL later */}
                  <ExternalLink className="w-5 h-5 flex-shrink-0" />
                </a>
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, tIndex) => (
                  <li key={tIndex} className="text-slate-400 text-xs font-mono">
                    {tech}
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
