import { MessageCircle, Instagram, Leaf } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WHATSAPP_URL = 'https://wa.me/5511992340676?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20ensaio%20fotogr%C3%A1fico.';
const INSTAGRAM_URL = 'https://www.instagram.com/studio.l_t?igsh=MXFkaGsxN2dtM2E5Ng%3D%3D&utm_source=qr';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="contato" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-800 via-gold-700 to-gold-900" />
      <div className="absolute inset-0 fabric-texture opacity-30" />

      <div className="absolute top-8 left-8 pointer-events-none">
        <Leaf className="w-16 h-16 text-white/5 leaf-sway" />
      </div>
      <div className="absolute bottom-8 right-8 pointer-events-none">
        <Leaf className="w-14 h-14 text-white/5 leaf-sway delay-500" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Pronto para eternizar{' '}
            <span className="font-script text-gold-200 text-4xl sm:text-5xl lg:text-6xl">
              seu momento?
            </span>
          </h2>

          <p className="mt-6 text-gold-200/70 max-w-xl mx-auto leading-relaxed">
            Entre em contato e vamos transformar seus momentos mais especiais em memórias que duram para sempre.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-full
                         transition-all duration-300 ease-out
                         hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5
                         active:translate-y-0 active:shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp agora
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-medium rounded-full
                         border-2 border-white/30
                         transition-all duration-300 ease-out
                         hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5
                         active:translate-y-0"
            >
              <Instagram className="w-5 h-5" />
              Acessar Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
