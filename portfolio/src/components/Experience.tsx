import HoverTooltip from './HoverTooltip.tsx';

const experiences = [
  {
    role: 'Estagiário de Suporte de TI',
    company: 'CBA - Centro de Bionegócios da Amazônia',
    period: 'Agosto 2025 - Presente',
    technologies: [
      { name: 'Windows Server 2022', tooltip: 'Administração de servidores Windows em ambiente corporativo' },
      { name: 'AD', tooltip: 'Active Directory: Criação e gestão de usuários do domínio' },
      { name: 'Roteadores UniFi', tooltip: 'Instalação e configuração de roteadores UniFi para redes corporativas' },
      { name: 'Proxmox', tooltip: 'Virtualização com Proxmox VE para consolidação de servidores' },
      { name: 'Ubuntu Server', tooltip: 'Administração de servidores Linux Ubuntu Server' },
      { name: 'Help Desk', tooltip: 'Configuração de pastas de rede, impressoras e gestão de reuniões no Google Meet' },
    ],
    description: 'Atuação em suporte de infraestrutura TI com foco em administração de ambientes Windows/Linux, virtualização, redes UniFi e atendimento help desk.',
    // Sistemas desenvolvidos no estágio (detalhados em Projetos > Sistemas internos)
    built: [
      { name: 'EstacionamentoCBA', summary: 'controle de acesso de veículos e pedestres da portaria' },
      { name: 'TermoCBA', summary: 'termos de responsabilidade de equipamentos de TI em PDF' },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <header className="mb-16">
        <h2 className="font-headline-md text-headline-md text-primary mb-4">Experiência Profissional</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Experiência prática em infraestrutura de TI, administração de servidores, virtualização e redes corporativas.
        </p>
      </header>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <article key={`${exp.company}-${exp.period}`} className="glass-panel rounded-xl p-6 md:p-8 hover:border-cyan/50 transition-colors duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-white/5 pb-4">
              <div>
                <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-primary">{exp.role}</h3>
                <div className="font-code-sm text-code-sm text-on-surface-variant mt-2">{exp.company}</div>
              </div>
              <div className="font-label-caps text-label-caps text-cyan bg-cyan/10 px-3 py-1 rounded-full mt-4 md:mt-0">
                {exp.period}
              </div>
            </div>
            
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              {exp.description}
            </p>

            {exp.built.length > 0 && (
              <div className="mb-6 rounded-lg border border-cyan/20 bg-cyan/5 p-4">
                <p className="font-label-caps text-label-caps text-on-surface mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-cyan" aria-hidden="true">code</span>
                  Sistemas que desenvolvi no estágio
                </p>
                <ul className="space-y-1 mb-3">
                  {exp.built.map((system) => (
                    <li key={system.name} className="font-body-md text-body-md text-on-surface-variant">
                      <span className="font-medium text-on-surface">{system.name}</span>: {system.summary}
                    </li>
                  ))}
                </ul>
                <a href="#sistemas-cba" className="inline-flex items-center gap-1 font-code-sm text-code-sm text-primary hover:text-primary-fixed transition-colors">
                  Ver estudos de caso
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
                </a>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <HoverTooltip key={tech.name} info={tech.tooltip}>
                  <span className="font-code-sm text-code-sm bg-surface-container-high px-2 py-1 rounded text-cyan border border-cyan/30 cursor-help">
                    {tech.name}
                  </span>
                </HoverTooltip>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}