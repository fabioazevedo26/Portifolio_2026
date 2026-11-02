import { useState } from 'react';
import { links } from '../data/links.ts';

const email = links.email.replace('mailto:', '');

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sem permissão para a área de transferência: o email continua visível para copiar à mão
    }
  };

  return (
    <section id="contact" className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <div className="relative overflow-hidden glass-panel rounded-xl p-8 md:p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-orange/10 pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <p className="font-code-sm text-code-sm text-tertiary mb-3">Disponível para oportunidades</p>
            <h2 className="font-headline-md text-headline-sm sm:text-headline-md text-on-background mb-4">Vamos conversar?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Busco uma oportunidade como Analista de TI Júnior ou Engenheiro de Computação Júnior. Se o meu perfil combina com a sua equipe, me mande um email ou uma mensagem no WhatsApp ou no LinkedIn.
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="flex items-stretch gap-2">
              <a
                href={links.email}
                className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan to-blue px-5 py-3 font-body-md text-body-md font-medium text-surface-dim transition-transform hover:scale-[1.02] active:scale-95 glow-accent"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">mail</span>
                Enviar email
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? 'Email copiado' : `Copiar email ${email}`}
                className="flex w-12 flex-shrink-0 items-center justify-center rounded-lg glass-panel text-on-surface transition-colors hover:bg-surface-container-highest"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{copied ? 'check' : 'content_copy'}</span>
              </button>
            </div>
            <p className="font-code-sm text-code-sm text-on-surface-variant text-center break-all" aria-live="polite">
              {copied ? 'Email copiado!' : email}
            </p>

            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${links.whatsappDisplay}`}
              className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 px-5 py-3 font-body-md text-body-md font-medium text-on-background transition-colors hover:bg-[#25D366]/20"
            >
              <span className="material-symbols-outlined text-[20px] text-[#25D366]" aria-hidden="true">chat</span>
              WhatsApp
              <span className="font-code-sm text-code-sm text-on-surface-variant whitespace-nowrap">{links.whatsappDisplay}</span>
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg glass-panel px-5 py-3 font-body-md text-body-md font-medium text-on-background transition-colors hover:bg-surface-container-highest"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">person</span>
              LinkedIn
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg glass-panel px-4 py-3 font-body-md text-body-md font-medium text-on-background transition-colors hover:bg-surface-container-highest"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">code</span>
                GitHub
              </a>
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg glass-panel px-4 py-3 font-body-md text-body-md font-medium text-on-background transition-colors hover:bg-surface-container-highest"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">description</span>
                Currículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
