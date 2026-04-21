export function ExperienceSection() {
  const experiences = [
    {
      title: "Student Coordinator — ACM Student Chapter",
      org: "Coimbatore Institute of Technology",
      period: "Sep 2025 – Present",
      bullets: [
        "Coordinated technical events and hackathons with cross-functional teams.",
        "Managed event planning, logistics, and execution workflows.",
        "Collaborated with faculty and organizers to streamline operations.",
        "Contributed to problem statement evaluation and team shortlisting.",
      ],
    },
    {
      title: "Summer Intern — Full Stack Development",
      org: "Project Development Cell (PDC), Coimbatore Institute of Technology",
      period: "May 2025 – Jun 2025",
      bullets: [
        "Developed full-stack applications using modular architecture and modern development practices.",
        "Integrated frontend and backend components to build scalable systems.",
        "Applied clean coding principles and structured application design.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-50 mb-12 flex items-center">
          Experience
          <div className="ml-6 flex-grow h-px bg-slate-800"></div>
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="md:text-right mt-1 mb-2 md:mb-0 text-slate-400 text-sm font-medium">
                  {exp.period}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {exp.title}
                  </h3>
                  <h4 className="text-blue-500 font-medium mb-4">{exp.org}</h4>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="text-slate-300 flex items-start">
                        <span className="text-blue-500 mr-2 mt-1.5 text-xs">▹</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
