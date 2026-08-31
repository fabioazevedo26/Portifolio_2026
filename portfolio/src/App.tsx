import Hero from './components/Hero.tsx';
import Experience from './components/Experience.tsx';
import ProjectsAndAchievements from './components/ProjectsAndAchievements.tsx';

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(207,188,255,0.1)]">
      <nav className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Portfolio Logo" className="h-8 w-8 rounded-sm object-contain bg-surface-container-highest" />
          <span className="font-headline-sm text-headline-sm font-bold text-primary tracking-tighter hidden sm:block">Fábio Azevedo</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a className="font-body-md text-body-md font-medium text-on-surface-variant hover:text-primary transition-colors hover:bg-white/5 px-2 py-1 rounded" href="#experience">Experiência</a>
          <a className="font-body-md text-body-md font-medium text-on-surface-variant hover:text-primary transition-colors hover:bg-white/5 px-2 py-1 rounded" href="#projects">Projetos</a>
          <a className="font-body-md text-body-md font-medium text-on-surface-variant hover:text-primary transition-colors hover:bg-white/5 px-2 py-1 rounded" href="#contact">Contato</a>
        </div>
        <button className="font-body-md text-body-md font-medium text-surface-dim bg-cyan hover:bg-blue px-4 py-2 rounded-lg transition-colors glow-accent hidden sm:block">
          Currículo
        </button>
      </nav>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-surface-container-lowest/80 backdrop-blur-xl border-t border-white/10 w-full py-8 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="font-label-caps text-label-caps text-on-surface-variant">Fábio Azevedo</span>
          <span className="hidden md:inline text-white/20">|</span>
          <p className="font-code-sm text-code-sm text-tertiary">© {currentYear} Terminal_Protocol. All rights reserved.</p>
        </div>
        <div className="flex gap-6" id="contact">
          <a className="font-code-sm text-code-sm text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100" href="https://github.com/fabioazevedo26" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="font-code-sm text-code-sm text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/fabio-azevedo-8b7407241" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="font-code-sm text-code-sm text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100" href="mailto:fabiorodriges08@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="dark min-h-screen flex flex-col font-body-md overflow-x-hidden bg-background text-on-background">
      <Header />
      <main className="flex-grow pt-16 md:pt-24">
        <Hero />
        <Experience />
        <ProjectsAndAchievements />
      </main>
      <Footer />
      
      <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    </div>
  );
}

export default App;