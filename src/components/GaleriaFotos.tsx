import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Foto } from '@/data/servicos';

export default function GaleriaFotos({ fotos }: { fotos: Foto[] }) {
  const [aberta, setAberta] = useState<number | null>(null);

  useEffect(() => {
    if (aberta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberta(null);
      if (e.key === 'ArrowRight') setAberta((i) => (i === null ? i : (i + 1) % fotos.length));
      if (e.key === 'ArrowLeft') setAberta((i) => (i === null ? i : (i - 1 + fotos.length) % fotos.length));
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [aberta, fotos.length]);

  const atual = aberta === null ? null : fotos[aberta];

  if (fotos.length === 0) {
    return (
      <p className="py-16 text-center text-gold-600/80">
        Em breve, novas fotografias deste ensaio.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
        {fotos.map((foto, i) => (
          <button
            key={foto.src}
            type="button"
            onClick={() => setAberta(i)}
            className="gallery-item min-w-0 relative aspect-[4/5] shadow-sm hover:shadow-xl hover:shadow-gold-300/20 transition-shadow duration-300 animate-fade-in-up opacity-0"
            style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
            aria-label={`Ampliar foto: ${foto.alt}`}
          >
            <img src={foto.src} alt={foto.alt} loading="lazy" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {atual && aberta !== null && (
        <div
          className="fixed inset-0 z-[60] bg-gold-900/90 navbar-blur flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setAberta(null)}
          role="dialog"
          aria-modal="true"
        >
          <button className="absolute top-4 right-4 p-2 text-white/80 hover:text-white" aria-label="Fechar" onClick={() => setAberta(null)}>
            <X className="w-7 h-7" />
          </button>
          <button
            className="absolute left-2 sm:left-6 p-2 text-white/80 hover:text-white"
            aria-label="Foto anterior"
            onClick={(e) => { e.stopPropagation(); setAberta((aberta - 1 + fotos.length) % fotos.length); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img
            src={atual.src}
            alt={atual.alt}
            className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-2 sm:right-6 p-2 text-white/80 hover:text-white"
            aria-label="Próxima foto"
            onClick={(e) => { e.stopPropagation(); setAberta((aberta + 1) % fotos.length); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
}
