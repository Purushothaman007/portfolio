import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Purushothaman B. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/Purushothaman007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/purushothaman007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:purushothamanbala10@gmail.com"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
