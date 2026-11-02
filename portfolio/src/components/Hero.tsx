import { links } from '../data/links.ts';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <div className="absolute inset-0 bg-network-grid opacity-50 pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 w-fit border border-white/10">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="font-code-sm text-code-sm text-primary">Disponível para oportunidades</span>
          </div>
          
          <h1 className="font-display-lg text-4xl font-bold sm:text-display-lg text-on-background max-w-2xl leading-tight">
            Estudante de Engenharia da Computação & <br />
            <span className="text-gradient-cyan-orange">Profissional de Infraestrutura de TI</span>
          </h1>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Estou no 8º período na Uninorte, em Manaus (turno da noite). No estágio no CBA, cuido da infraestrutura de TI (Windows Server, Proxmox e redes UniFi) e desenvolvo sistemas web internos com Node.js e Docker. Na faculdade, trabalho com IoT e sistemas embarcados com ESP32. Busco oportunidades que unam infraestrutura, software e hardware.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#projects"
              className="font-body-md text-body-md font-medium text-surface-dim bg-gradient-to-r from-cyan to-blue px-6 py-3 rounded-lg transition-transform hover:scale-105 active:scale-95 glow-accent flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">rocket_launch</span>
              Ver Projetos
            </a>
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body-md text-body-md font-medium text-on-background glass-panel px-6 py-3 rounded-lg transition-all hover:bg-surface-container-highest hover:shadow-[inset_0_0_15px_rgba(6,182,212,0.2)] active:scale-95 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">description</span>
              Ver Currículo
            </a>
          </div>
        </div>
        
        <div className="md:col-span-5 relative mt-12 md:mt-0 hidden md:block" aria-hidden="true">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-4 -right-4 -bottom-4 glass-panel rounded-xl opacity-40 rotate-6 border border-white/5" />
            <div className="absolute inset-2 -right-2 -bottom-2 glass-panel rounded-xl opacity-70 rotate-3 border border-cyan/20" />
            <div className="absolute inset-0 glass-panel rounded-xl border border-white/20 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-orange/5 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest border border-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">router</span>
                  </div>
                  <div>
                    <h3 className="font-label-caps text-label-caps text-on-surface">ARSENS · Sensor IoT</h3>
                    <p className="font-code-sm text-code-sm text-on-surface-variant text-[10px]">ESP32 • MQ-7 • BME280</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-cyan glow-accent text-[18px]">wifi_tethering</span>
              </div>
              
              <div className="flex-grow flex flex-col gap-2 justify-center relative z-10">
                <div className="flex items-end gap-1 h-24">
                  <div className="w-1/6 bg-surface-container-highest rounded-t-sm h-1/3 hover:bg-primary transition-colors" />
                  <div className="w-1/6 bg-surface-container-highest rounded-t-sm h-2/3 hover:bg-primary transition-colors" />
                  <div className="w-1/6 bg-cyan/40 border-t border-cyan rounded-t-sm h-full hover:bg-cyan/60 transition-colors shadow-[0_-5px_15px_rgba(6,182,212,0.2)]" />
                  <div className="w-1/6 bg-surface-container-highest rounded-t-sm h-1/2 hover:bg-primary transition-colors" />
                  <div className="w-1/6 bg-surface-container-highest rounded-t-sm h-1/4 hover:bg-primary transition-colors" />
                  <div className="w-1/6 bg-orange/40 border-t border-orange rounded-t-sm h-3/4 hover:bg-orange/60 transition-colors shadow-[0_-5px_15px_rgba(255,140,0,0.2)]" />
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2">
                  <span className="font-code-sm text-code-sm text-on-surface-variant text-[10px]">CO / Temp / Umid</span>
                  <span className="font-code-sm text-code-sm text-cyan text-[10px]">Normal</span>
                </div>
              </div>
              
              <div className="mt-4 border-t border-white/10 pt-4 relative z-10">
                <div className="font-code-sm text-code-sm text-on-surface-variant text-[12px] flex flex-col gap-1">
                  <div className="flex justify-between"><span className="text-tertiary">{'>'} Lendo sensores...</span> <span className="text-cyan">[OK]</span></div>
                  <div className="flex justify-between"><span>{'>'} Enviando dados...</span> <span className="text-cyan">[OK]</span></div>
                  <div className="flex justify-between text-on-surface"><span>{'>'} Aguardando limite</span> <span className="animate-pulse">_</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}