import { useState } from 'react';
import Hero from './components/Hero.tsx';
import Experience from './components/Experience.tsx';
import ProjectsAndAchievements from './components/ProjectsAndAchievements.tsx';
import Contact from './components/Contact.tsx';
import { links } from './data/links.ts';

const navItems = [
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(207,188,255,0.1)]">
      <nav aria-label="Navegação principal" className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo.webp" alt="" width={32} height={32} className="h-8 w-8 rounded-sm object-contain" />
          <span className="font-headline-sm text-headline-sm font-bold text-primary tracking-tighter">Fábio Azevedo</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} className="font-body-md text-body-md font-medium text-on-surface-variant hover:text-primary transition-colors hover:bg-white/5 px-2 py-1 rounded" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body-md text-body-md font-medium text-surface-dim bg-cyan hover:bg-blue px-4 py-2 rounded-lg transition-colors glow-accent hidden sm:block"
          >
            Currículo
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-on-surface hover:bg-white/5"
          >
            <span className="material-symbols-outlined" aria-hidden="true">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-surface border-t border-white/10 px-margin-mobile py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="font-body-md text-body-md text-on-surface hover:text-primary hover:bg-white/5 px-3 py-3 rounded-lg">
              {item.label}
            </a>
          ))}
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className="sm:hidden font-body-md text-body-md font-medium text-surface-dim bg-cyan px-3 py-3 rounded-lg mt-2 text-center">
            Currículo
          </a>
        </div>
      )}
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
          <p className="font-code-sm text-code-sm text-tertiary">© {currentYear} Fábio Azevedo. Todos os direitos reservados.</p>
        </div>
        <div className="flex gap-6">
          <a className="font-code-sm text-code-sm text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="font-code-sm text-code-sm text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="font-code-sm text-code-sm text-on-surface-variant hover:text-tertiary transition-colors opacity-80 hover:opacity-100" href={links.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div id="top" className="min-h-screen flex flex-col font-body-md overflow-x-hidden bg-background text-on-background">
      <Header />
      <main className="flex-grow pt-16 md:pt-24">
        <Hero />
        <Experience />
        <ProjectsAndAchievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
