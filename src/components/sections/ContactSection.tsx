import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-slate-900/50 text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-blue-500 font-semibold tracking-wide uppercase mb-4">
          What's Next?
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
          Get In Touch
        </h3>
        
        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
          I am open to internships, collaborations, and opportunities in AI/ML and backend development. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>



        <div className="flex flex-col items-center gap-6 pt-12 border-t border-slate-800">
          <div className="flex items-center gap-8">
            <a
              href="https://github.com/Purushothaman007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <GithubIcon className="w-6 h-6" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/purushothaman007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <LinkedinIcon className="w-6 h-6" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="mailto:purushothamanbala10@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <Mail className="w-6 h-6" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Phone className="w-5 h-5 text-blue-500" />
            <span>+91 9042256045</span>
          </div>
        </div>
      </div>
    </section>
  );
}
