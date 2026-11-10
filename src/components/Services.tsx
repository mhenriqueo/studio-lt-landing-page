import { Link } from '@tanstack/react-router';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { servicos } from '@/data/servicos';
import { WHATSAPP_URL } from '@/data/contato';

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="servicos" className="section-padding bg-gold-50/50 fabric-texture relative">
      <div className="max-w-7xl 2xl:max-w-[1440px] min-[120rem]:max-w-[1760px] mx-auto" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Cada momento tem seu estilo</p>
          <div className="divider-ornament">
            <CameraIcon />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-4">
          {servicos.map((service, index) => (
            <div
              key={service.slug}
              className={`card-elegant min-w-0 overflow-hidden group transition-all duration-700 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}
            >
              <Link
                to="/servicos/$slug"
                params={{ slug: service.slug }}
                className="block gallery-item rounded-none aspect-[4/5]"
              >
                {service.previa ? (
                  <img
                    src={service.previa}
                    alt={service.nome}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="block w-full h-full bg-gold-100 fabric-texture" aria-hidden="true" />
                )}
              </Link>
              <div className="p-2 sm:p-6 text-center">
                <h3 className="font-serif text-xl text-gold-800 mb-4 [overflow-wrap:anywhere]">{service.nome}</h3>
                <Link
                  to="/servicos/$slug"
                  params={{ slug: service.slug }}
                  className="btn-secondary max-w-full justify-center px-1 sm:px-6 py-2.5 text-sm"
                >
                  <span className="min-w-0">Ver Galeria</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl text-gold-800">Gostou de algum dos nossos serviços?</h3>
          <p className="mt-3 text-gold-600/80 max-w-xl mx-auto">
            Entre em contato pelo WhatsApp e vamos conversar sobre seu momento especial.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function CameraIcon() {
  return (
    <svg className="w-5 h-5 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
