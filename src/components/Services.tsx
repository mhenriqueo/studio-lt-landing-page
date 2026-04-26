import { Baby, Heart, Cake, PartyPopper, Sparkles, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Heart,
    name: 'Gestante',
    description: 'A beleza da vida que cresce',
  },
  {
    icon: Cake,
    name: 'Smash the Cake',
    description: 'Diversão e bagunça memoráveis',
  },
  {
    icon: Baby,
    name: 'Ensaio Kids',
    description: 'Momentos de pureza e alegria',
  },
  {
    icon: PartyPopper,
    name: 'B-Day',
    description: 'Celebrações que merecem ser lembradas',
  },
  {
    icon: Users,
    name: 'Casal / Familiar',
    description: 'Amor e união em cada clique',
  },
  {
    icon: Sparkles,
    name: 'Eventos',
    description: 'Cada detalhe imortalizado',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="servicos" className="section-padding bg-gold-50/50 fabric-texture relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Cada momento tem seu estilo</p>
          <div className="divider-ornament">
            <CameraIcon />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`card-elegant p-6 sm:p-8 text-center group cursor-default transition-all duration-700 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-100 border border-gold-200/50 mb-5 transition-all duration-300 group-hover:bg-gold-400 group-hover:border-gold-400 group-hover:shadow-lg group-hover:shadow-gold-400/20">
                <service.icon className="w-6 h-6 text-gold-400 transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-gold-800 mb-2">{service.name}</h3>
              <p className="text-sm text-gold-600/70 font-sans">{service.description}</p>
            </div>
          ))}
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
