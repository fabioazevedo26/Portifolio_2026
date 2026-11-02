import HoverTooltip from './HoverTooltip.tsx';
import CaseStudy, { CaseStudyData } from './CaseStudy.tsx';

const arsens: CaseStudyData = {
  title: 'ARSENS · Monitoramento Ambiental IoT',
  subtitle: 'TCC em equipe · em desenvolvimento',
  icon: 'sensors',
  role: 'Participei das três frentes do projeto: hardware (ESP32 e sensores), software e testes em campo na parada de ônibus.',
  context: 'Estação de monitoramento instalada na parada de ônibus da Av. Djalma Batista, em frente ao Millennium Shopping e ao lado da Uninorte, um dos trechos de maior movimento de Manaus. Ela mede monóxido de carbono, temperatura e umidade e traduz os dados em informação clara para quem espera o ônibus.',
  features: [
    'Painel Cidadão com a qualidade do ar em linguagem simples e escala educativa baseada nos limites da EPA',
    'Painel Técnico com séries das últimas 24 h, diagnóstico do sensor e histórico de leituras',
    'Exportação do histórico em CSV e Excel para pesquisa acadêmica',
    'Alertas no Telegram quando um limite crítico de segurança é ultrapassado',
  ],
  highlights: [
    'Correção dinâmica da leitura de CO de acordo com a temperatura e a umidade de Manaus, medidas pelo BME280',
    'Validação de cada leitura, com diagnóstico e opção de ocultar leituras com erro',
    'Dados enviados ao ThingSpeak para histórico e exibidos no painel web, que se atualiza a cada 15 s',
  ],
  tech: [
    { name: 'ESP32', info: 'Microcontrolador com Wi-Fi que lê os sensores e envia os dados' },
    { name: 'MQ-7', info: 'Sensor de monóxido de carbono (CO)' },
    { name: 'BME280', info: 'Sensor de temperatura e umidade usado na correção da leitura de CO' },
    { name: 'C++', info: 'Firmware do ESP32' },
    { name: 'ThingSpeak', info: 'Plataforma em nuvem que guarda o histórico das leituras' },
    { name: 'Next.js', info: 'Painel web com dados em tempo real' },
    { name: 'Telegram Bot API', info: 'Envio de alertas quando os limites são ultrapassados' },
  ],
  tagStyle: 'hardware',
  links: [{ label: 'Ver projeto online', href: 'https://projeto-arsens-kappa.vercel.app/', kind: 'site' }],
  gallery: [
    { src: '/projetos/arsens/cidadao.webp', alt: 'Painel Cidadão do ARSENS mostrando qualidade do ar boa, concentração de CO, temperatura e umidade', caption: 'Painel Cidadão: como está o ar agora' },
    { src: '/projetos/arsens/escala.webp', alt: 'Escala educativa de monóxido de carbono com quatro faixas, de qualidade boa a perigo', caption: 'Escala educativa baseada nos limites da EPA' },
    { src: '/projetos/arsens/tecnico.webp', alt: 'Painel Técnico com leituras do MQ-7 e do BME280, resistência do sensor e mapa do ponto de coleta', caption: 'Painel Técnico de telemetria' },
    { src: '/projetos/arsens/tecnico-historico.webp', alt: 'Tabela com o histórico de leituras de CO, temperatura, umidade e diagnóstico', caption: 'Histórico de leituras com diagnóstico' },
  ],
};

const caseStudies: CaseStudyData[] = [
  {
    title: 'EstacionamentoCBA',
    subtitle: 'Controle de acesso da portaria',
    icon: 'local_parking',
    context: 'Sistema web usado pelos porteiros no computador da guarita para registrar a entrada e a saída de veículos e pedestres. Substituiu a planilha Excel usada até então e funciona sem internet, direto na rede local.',
    features: [
      'Busca por placa ou nome enquanto digita, com cadastro rápido para placa nova',
      'Entrada e saída de veículos e pedestres, com alerta para quem passou do horário',
      'Relatórios com filtros e exportação para Excel',
      'Auditoria de todas as ações e backup diário automático',
    ],
    highlights: [
      'Operação completa pelo teclado (Enter, setas, Esc, F2) para agilizar a guarita',
      'Acessibilidade: fonte Atkinson Hyperlegible, texto base de 18px, botões de 48px e modo noturno',
      'Segurança: senhas com bcrypt, proteção CSRF, helmet e limite de tentativas de login',
    ],
    tech: [
      { name: 'Node.js', info: 'Runtime do servidor (versão 22)' },
      { name: 'Express 5', info: 'Rotas, sessões e middlewares de segurança' },
      { name: 'EJS', info: 'Telas renderizadas no servidor' },
      { name: 'Bootstrap 5', info: 'Interface servida localmente, sem depender de CDN' },
      { name: 'SQLite', info: 'Banco em arquivo com better-sqlite3 em modo WAL' },
      { name: 'ExcelJS', info: 'Exportação dos relatórios em .xlsx' },
      { name: 'node-cron', info: 'Agendamento do backup diário' },
      { name: 'Docker', info: 'Deploy com Docker Compose na VM da empresa' },
    ],
    links: [{ label: 'Ver código no GitHub', href: 'https://github.com/fabioazevedo26/estacionamentocba', kind: 'code' }],
    gallery: [
      { src: '/projetos/estacionamentocba/portaria.webp', alt: 'Tela da portaria com busca por placa mostrando o veículo encontrado e as últimas movimentações', caption: 'Portaria com busca por placa enquanto digita' },
      { src: '/projetos/estacionamentocba/estacionamento.webp', alt: 'Lista de veículos no estacionamento com contadores e destaque para saídas pendentes', caption: 'Veículos no estacionamento agora' },
      { src: '/projetos/estacionamentocba/pedestres.webp', alt: 'Tela de pedestres com formulário de entrada e lista de pessoas no CBA', caption: 'Controle de pedestres' },
      { src: '/projetos/estacionamentocba/relatorios.webp', alt: 'Tela de relatórios com filtros, totais e exportação para Excel', caption: 'Relatórios com exportação para Excel' },
    ],
  },
  {
    title: 'TermoCBA',
    subtitle: 'Termos de responsabilidade de equipamentos de TI',
    icon: 'contract',
    context: 'Sistema do Setor de TI para cadastrar equipamentos e colaboradores, emitir o termo de responsabilidade em PDF no momento da entrega e registrar a devolução, mantendo o histórico de cada equipamento.',
    features: [
      'Painel com equipamentos disponíveis, em uso e termos ativos',
      'Emissão de termo com um ou mais equipamentos, cadastrando o colaborador na hora se preciso',
      'Termo em PDF para visualizar, imprimir ou baixar, e registro de devolução',
      'Busca por número, nome, CPF, patrimônio ou número de série',
    ],
    highlights: [
      'Emissão em uma única transação: um equipamento nunca é entregue em dois termos ao mesmo tempo',
      'Se a geração do PDF falhar, a emissão é desfeita e os equipamentos voltam a ficar disponíveis',
      'PDF gerado com Puppeteer a partir de um template e guardado no próprio banco',
    ],
    tech: [
      { name: 'Node.js', info: 'Runtime do servidor (versão 22)' },
      { name: 'Express 5', info: 'Rotas e autenticação' },
      { name: 'EJS', info: 'Telas e template do PDF' },
      { name: 'Bootstrap 5', info: 'Interface servida localmente, sem depender de CDN' },
      { name: 'SQLite', info: 'Banco em arquivo com transações' },
      { name: 'Puppeteer', info: 'Gera o PDF do termo com o Chromium' },
      { name: 'Docker', info: 'Deploy com Docker Compose na VM da empresa' },
    ],
    links: [{ label: 'Ver código no GitHub', href: 'https://github.com/fabioazevedo26/termocba', kind: 'code' }],
    gallery: [
      { src: '/projetos/termocba/painel.webp', alt: 'Painel do TermoCBA com contadores de equipamentos e termos recentes', caption: 'Painel com contadores e termos recentes' },
      { src: '/projetos/termocba/novo-termo.webp', alt: 'Tela de emissão de termo com seleção de colaborador e equipamentos', caption: 'Emissão de termo' },
      { src: '/projetos/termocba/termo-detalhe.webp', alt: 'Detalhe do termo com o PDF gerado ao lado', caption: 'Termo emitido com o PDF gerado' },
      { src: '/projetos/termocba/termos.webp', alt: 'Lista de termos com busca e situação', caption: 'Lista de termos' },
    ],
  },
];

const achievements = [
  {
    title: '2º Lugar - Competição Robô Sumô',
    event: 'Robô Sumô · 2026',
    description: 'Vice-campeão na competição Robô Sumô 2026 da universidade. Desenvolvimento de robô autônomo com sensores de proximidade e estratégia de busca e ataque.',
    icon: 'emoji_events',
    image: { src: '/robo_sumo.webp', width: 962, height: 972 },
    tech: [
      { name: 'Arduino', info: 'Placa que controla sensores e motores do robô' },
      { name: 'C++', info: 'Lógica de controle e estratégia do robô' },
      { name: 'Sensores IR', info: 'Sensores de proximidade que detectam o adversário' },
      { name: 'Motores DC', info: 'Tração e movimentação do robô' },
      { name: 'Estratégia Autônoma', info: 'Busca e ataque ao adversário sem controle remoto' },
    ],
  },
];

export default function ProjectsAndAchievements() {
  return (
    <section id="projects" className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <header className="mb-16">
        <h2 className="font-headline-md text-headline-md text-primary mb-4">Projetos & Conquistas</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Projetos acadêmicos e profissionais em IoT, sistemas embarcados e aplicações web, além de conquistas em competições técnicas.
        </p>
      </header>

      <div className="mb-16">
        <h3 className="font-headline-sm text-headline-sm text-on-background mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-cyan" aria-hidden="true">terminal</span>
          Projetos
        </h3>

        <CaseStudy study={arsens} />
      </div>

      <div id="sistemas-cba" className="mb-16">
        <h3 className="font-headline-sm text-headline-sm text-on-background mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-cyan" aria-hidden="true">dns</span>
          Sistemas internos · CBA
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-3xl">
          Sistemas que desenvolvi no estágio e que rodam em Docker na rede local do CBA. O código está aberto no GitHub, e as telas abaixo usam dados fictícios.
        </p>

        <div className="space-y-gutter">
          {caseStudies.map((study) => (
            <CaseStudy key={study.title} study={study} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-headline-sm text-headline-sm text-on-background mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-orange" aria-hidden="true">emoji_events</span>
          Conquistas
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {achievements.map((achievement) => (
            <article key={achievement.title} className="glass-panel rounded-xl overflow-hidden flex flex-col hover:border-orange/50 transition-colors duration-300 relative">
              <div className="h-48 md:h-56 relative overflow-hidden bg-surface-container-highest">
                <img
                  src={achievement.image.src}
                  width={achievement.image.width}
                  height={achievement.image.height}
                  loading="lazy"
                  decoding="async"
                  alt="Robô sumô na competição da universidade"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <span className="material-symbols-outlined text-orange text-2xl">{achievement.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-background">{achievement.title}</h4>
                    <p className="font-code-sm text-code-sm text-tertiary mt-1">{achievement.event}</p>
                  </div>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">{achievement.description}</p>

                <div className="flex flex-wrap gap-2">
                  {achievement.tech.map((tech) => (
                    <HoverTooltip key={tech.name} info={tech.info}>
                      <span className="font-code-sm text-code-sm px-2 py-1 rounded tag-hardware border">
                        {tech.name}
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
