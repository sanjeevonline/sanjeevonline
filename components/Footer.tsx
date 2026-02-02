import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          © {new Date().getFullYear()} Sanjeev Kumar
        </div>
        
        <div className="flex gap-8 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          <a href="mailto:sk@sanjeevonline.com" className="hover:text-blue-600 transition-colors">Email</a>
          <a href="https://linkedin.com/in/sanjeevsprofile" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="https://github.com/sanjeevonline/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;