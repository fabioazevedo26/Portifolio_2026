import { useEffect, useRef, useState } from 'react';

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

// Miniaturas de 480px geradas ao lado de cada imagem (nome-thumb.webp)
const thumbnail = (src: string) => src.replace(/\.webp$/, '-thumb.webp');

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const image = images[current];

  const total = images.length;
  const go = (step: number) => setCurrent((i) => (i + step + total) % total);

  // Setas do teclado navegam enquanto a imagem ampliada está aberta (Esc fecha pelo próprio <dialog>)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrent((i) => (i + 1) % total);
      if (e.key === 'ArrowLeft') setCurrent((i) => (i - 1 + total) % total);
    };
    dialog.addEventListener('keydown', handleKeyDown);
    return () => dialog.removeEventListener('keydown', handleKeyDown);
  }, [total]);

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="group relative block overflow-hidden rounded-lg border border-white/10 bg-surface-container-highest focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={`Ampliar imagem: ${image.caption}`}
      >
        <img src={image.src} alt={image.alt} width={1600} height={1000} loading="lazy" decoding="async" className="w-full aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
        <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-surface-container-lowest/80 px-2 py-1 font-code-sm text-[12px] text-on-surface">
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">zoom_in</span>
          Ampliar
        </span>
      </button>

      <p className="font-code-sm text-code-sm text-on-surface-variant" aria-live="polite">{image.caption}</p>

      <div className="grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Mostrar: ${img.caption}`}
            aria-current={i === current}
            className={`overflow-hidden rounded border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${i === current ? 'border-primary' : 'border-white/10 opacity-60 hover:opacity-100'}`}
          >
            <img src={thumbnail(img.src)} alt="" width={480} height={300} loading="lazy" decoding="async" className="w-full aspect-[16/10] object-cover object-top" />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClick={(e) => { if (e.target === dialogRef.current) dialogRef.current.close(); }}
        className="w-[min(1200px,95vw)] max-h-[95vh] rounded-xl border border-white/10 bg-surface p-0 text-on-surface backdrop:bg-black/80"
        aria-label={image.caption}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
          <p className="font-code-sm text-code-sm text-on-surface">{image.caption} <span className="text-on-surface-variant">({current + 1}/{images.length})</span></p>
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Fechar" className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-white/5">
            <span className="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
        </div>
        <div className="relative">
          <img src={image.src} alt={image.alt} className="w-full h-auto max-h-[80vh] object-contain bg-white" />
          <button type="button" onClick={() => go(-1)} aria-label="Imagem anterior" className="absolute left-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest">
            <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Próxima imagem" className="absolute right-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest">
            <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
          </button>
        </div>
      </dialog>
    </div>
  );
}
