import React from 'react';
import { Mail, Linkedin, Github, MapPin, Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-8 md:py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 md:mb-12">
          <a 
            href="mailto:sk@sanjeevonline.com" 
            className="flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-white hover:border-cyan-500 dark:hover:border-cyan-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
          >
            <Mail size={18} />
            sk@sanjeevonline.com
          </a>
          
          <a 
            href="https://www.linkedin.com/in/sanjeevsprofile" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-white hover:border-blue-500 dark:hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a 
            href="https://github.com/sanjeevonline/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-500 dark:hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-500 text-sm font-medium">
          <MapPin size={14} />
          <span>New York, NY</span>
          <span className="mx-2 opacity-50">|</span>
          <span>© {new Date().getFullYear()} Sanjeev Kumar. System Status: Nominal.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;