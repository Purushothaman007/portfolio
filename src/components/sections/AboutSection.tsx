export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-50 mb-12 flex items-center">
          About Me
          <div className="ml-6 flex-grow h-px bg-slate-800"></div>
        </h2>
        
        <div className="text-slate-300 text-lg leading-relaxed max-w-3xl">
          <p className="mb-6">
            I am a Computer Science undergraduate at Coimbatore Institute of Technology (CGPA: 8.97) with a strong focus on building intelligent, data-driven systems.
          </p>
          <p className="mb-6">
            My work combines machine learning and backend engineering, where I design end-to-end solutions—from data processing and model development to API design and deployment. I have hands-on experience with time-series forecasting, RESTful APIs, and database-driven applications.
          </p>
          <p>
            I am particularly interested in solving real-world problems using AI, computer vision, and scalable system design.
          </p>
        </div>
      </div>
    </section>
  );
}
