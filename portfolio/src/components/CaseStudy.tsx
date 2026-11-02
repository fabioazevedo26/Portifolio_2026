import HoverTooltip from './HoverTooltip.tsx';
import ImageGallery, { GalleryImage } from './ImageGallery.tsx';

export interface CaseStudyData {
  title: string;
  subtitle: string;
  icon: string;
  context: string;
  role?: string;
  features: string[];
  highlights: string[];
  tech: { name: string; info: string }[];
  gallery: GalleryImage[];
  tagStyle?: 'hardware' | 'software';
  links?: { label: string; href: string; kind: 'site' | 'code' }[];
}

export default function CaseStudy({ study }: { study: CaseStudyData }) {
  return (
    <article className="glass-panel rounded-xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 hover:border-cyan/50 transition-colors duration-300">
      <div className="order-2 lg:order-1">
        {study.gallery.length > 0 ? (
          <ImageGallery images={study.gallery} />
        ) : (
          <div className="flex aspect-[16/10] flex-col items-center justify-center rounded-lg border border-white/10 bg-surface-container-highest" aria-hidden="true">
            <span className="material-symbols-outlined text-6xl text-cyan/50">{study.icon}</span>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-2">Sistema interno</p>
          </div>
        )}
      </div>

      <div className="order-1 lg:order-2 flex flex-col">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <span className="material-symbols-outlined text-cyan">{study.icon}</span>
          </div>
          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-background">{study.title}</h4>
            <p className="font-code-sm text-code-sm text-tertiary mt-1">{study.subtitle}</p>
          </div>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant mb-6">{study.context}</p>

        {study.role && (
          <div className="mb-6 flex gap-3 rounded-lg border-l-2 border-tertiary bg-tertiary/5 px-4 py-3">
            <span className="material-symbols-outlined text-[20px] text-tertiary mt-0.5" aria-hidden="true">person</span>
            <p className="font-body-md text-body-md text-on-surface-variant">
              <span className="font-medium text-on-surface">Minha participação: </span>
              {study.role}
            </p>
          </div>
        )}

        <h5 className="font-label-caps text-label-caps text-on-surface mb-3">Funcionalidades</h5>
        <ul className="mb-6 space-y-2">
          {study.features.map((feature) => (
            <li key={feature} className="flex gap-2 font-body-md text-body-md text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px] text-cyan mt-0.5" aria-hidden="true">check_circle</span>
              {feature}
            </li>
          ))}
        </ul>

        <h5 className="font-label-caps text-label-caps text-on-surface mb-3">Destaques técnicos</h5>
        <ul className="mb-6 space-y-2">
          {study.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2 font-body-md text-body-md text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px] text-orange mt-0.5" aria-hidden="true">bolt</span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2">
          {study.tech.map((tech) => (
            <HoverTooltip key={tech.name} info={tech.info}>
              <span className={`font-code-sm text-code-sm px-2 py-1 rounded ${study.tagStyle === 'hardware' ? 'tag-hardware' : 'tag-software'} border`}>{tech.name}</span>
            </HoverTooltip>
          ))}
        </div>

        {study.links && (
          <div className="mt-6 flex flex-wrap gap-3">
            {study.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={link.kind === 'site'
                  ? 'inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan to-blue px-5 py-2.5 font-body-md text-body-md font-medium text-surface-dim transition-transform hover:scale-105 active:scale-95 glow-accent'
                  : 'inline-flex items-center gap-2 rounded-lg glass-panel px-5 py-2.5 font-body-md text-body-md font-medium text-on-background transition-all hover:bg-surface-container-highest active:scale-95'}
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{link.kind === 'site' ? 'open_in_new' : 'code'}</span>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
