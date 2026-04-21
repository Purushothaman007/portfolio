import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-6 tracking-tight mt-10">
            Purushothaman B.
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-400 mb-8">
            AI & Full Stack Developer
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Building intelligent, data-driven systems using machine learning and scalable backend technologies.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-12">
            <Link
              href="#projects"
              className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-md bg-blue-600 px-8 font-medium text-white duration-300 hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://drive.google.com/file/d/1IZOfKEbiSOVO8V7w8rBcnQOFDVlzM3Et/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md border border-slate-700 bg-transparent px-8 font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </a>
            
            <div className="flex items-center gap-6 mt-4 sm:mt-0 sm:ml-2">
              <a
                href="https://github.com/Purushothaman007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
              >
                <span className="sr-only">GitHub</span>
                <GithubIcon className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/purushothaman007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
