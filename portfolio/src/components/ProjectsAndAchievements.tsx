import HoverTooltip from './HoverTooltip.tsx';

const projects = [
  {
    title: 'Sistema de Monitoramento IoT (TCC)',
    description: 'Sistema de monitoramento ambiental usando ESP32, sensor de monóxido de carbono (MQ-7) e BME280 (temperatura, umidade, pressão), com envio de alertas em tempo real para o Telegram via MQTT/HTTP.',
    tech: ['ESP32', 'C++', 'MQ-7', 'BME280', 'MQTT', 'Telegram Bot API'],
    type: 'tcc',
    status: 'Em desenvolvimento',
    link: 'https://github.com/fabioazevedo26',
  },
  {
    title: 'Página de Check-in WordPress + UniFi',
    description: 'Página de check-in desenvolvida em WordPress integrada ao portal cativo do painel UniFi para autenticação de visitantes em redes corporativas.',
    tech: ['WordPress', 'PHP', 'UniFi Controller', 'Captive Portal', 'HTML/CSS/JS'],
    type: 'web',
    status: 'Concluído',
    link: 'https://github.com/fabioazevedo26',
  },
];

const achievements = [
  {
    title: '2º Lugar - Competição Robô Sumô',
    description: 'Vice-campeão na competição de Robô Sumô da universidade. Desenvolvimento de robô autônomo com sensores de proximidade e estratégia de busca e ataque.',
    icon: 'emoji_events',
    image: '/robo_sumo.jpeg',
    tech: ['Arduino', 'C++', 'Sensores IR', 'Motores DC', 'Estratégia Autônoma'],
  },
];

export default function ProjectsAndAchievements() {
  return (
    <section id="projects" className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <header className="mb-16">
        <h2 className="font-headline-md text-headline-md text-primary mb-4">Projetos & Conquistas</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Projetos acadêmicos e pessoais focados em sistemas embarcados, IoT e automação, além de conquistas em competições técnicas.
        </p>
      </header>

      <div className="mb-16">
        <h3 className="font-headline-sm text-headline-sm text-on-background mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-cyan">terminal</span>
          Projetos
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {projects.map((project, index) => (
            <article key={index} className="glass-panel rounded-xl overflow-hidden flex flex-col group hover:glow-accent transition-shadow duration-300">
              <div className="h-32 relative overflow-hidden bg-surface-container-highest flex items-center justify-center">
                {project.type === 'tcc' && (
                  <div className="text-center p-4">
                    <span className="material-symbols-outlined text-6xl text-cyan/50">memory</span>
                    <p className="font-label-caps text-label-caps text-on-surface-variant mt-2">IoT Hardware</p>
                  </div>
                )}
                {project.type === 'web' && (
                  <div className="text-center p-4">
                    <span className="material-symbols-outlined text-6xl text-orange/50">cloud</span>
                    <p className="font-label-caps text-label-caps text-on-surface-variant mt-2">Web Integration</p>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <HoverTooltip key={i} info={`${tech} - ${project.type === 'tcc' ? 'Hardware/Embarcado' : 'Web/Infraestrutura'}`}>
                      <span className={`font-code-sm text-code-sm px-2 py-1 rounded ${project.type === 'tcc' ? 'tag-hardware' : 'tag-software'} border`}>
                        {tech}
                      </span>
                    </HoverTooltip>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="font-code-sm text-code-sm px-2 py-1 rounded bg-surface-container-highest text-on-surface-variant border border-white/10">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <h4 className="font-headline-sm text-headline-sm text-on-background mb-2">{project.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">{project.description}</p>
                
                <div className="mt-auto border-t border-white/10 pt-4 flex justify-between items-center font-code-sm text-code-sm text-on-surface-variant">
                  <span className="text-tertiary font-medium">{project.status}</span>
                  <a 
                    className="text-primary hover:text-primary-fixed transition-colors flex items-center gap-1" 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Detalhes <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-headline-sm text-headline-sm text-on-background mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-orange">emoji_events</span>
          Conquistas
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {achievements.map((achievement, index) => (
            <article key={index} className="glass-panel rounded-xl overflow-hidden flex flex-col hover:border-orange/50 transition-colors duration-300 relative">
              {achievement.image && (
                <div className="h-48 md:h-56 relative overflow-hidden bg-surface-container-highest">
                  <img 
                    src={achievement.image} 
                    alt={`${achievement.title} - Premiação`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent" />
                </div>
              )}
              
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-orange text-2xl">{achievement.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-background">{achievement.title}</h4>
                  </div>
                </div>
                
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">{achievement.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {achievement.tech.map((tech, i) => (
                    <HoverTooltip key={i} info={tech}>
                      <span className="font-code-sm text-code-sm px-2 py-1 rounded tag-hardware border cursor-help">
                        {tech}
                      </span>
                    </HoverTooltip>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}