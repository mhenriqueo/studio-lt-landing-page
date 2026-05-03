import { Palette, Shirt, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ImageConsultancy() {
    const { ref, isVisible } = useScrollAnimation(0.15);

    const services = [
        {
            icon: Palette,
            label: 'Escolha de Cores',
            description: 'Paleta personalizada para realçar sua beleza natural'
        },
        {
            icon: Shirt,
            label: 'Figurino',
            description: 'Seleção de peças que harmonizam com o ensaio'
        },
        {
            icon: Sparkles,
            label: 'Direção de Estilo',
            description: 'Orientação completa para um resultado impecável'
        }
    ];

    return (
        <section className="section-padding bg-gradient-to-b from-gold-100 to-gold-50/30 fabric-texture relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gold-300/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
            <div className="max-w-7xl mx-auto" ref={ref}>
                <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="section-title">Consultoria de Imagem</h2>
                    <p className="section-subtitle">Um cuidado especial em cada detalhe</p>
                    <div className="divider-ornament">
                        <Sparkles className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
                        <h3 className="font-serif text-2xl sm:text-3xl text-gold-800 mb-6 leading-snug">
                            Estilo e{' '}
                            <span className="font-script text-gold-400 text-3xl sm:text-4xl">
                personalidade
              </span>
                            {' '}em perfeita harmonia
                        </h3>

                        <p className="text-gold-700/80 leading-relaxed mb-6">
                            Nosso estúdio conta com uma consultoria de imagem e estilo pensada para tornar cada ensaio ainda mais especial, harmônico e personalizado.
                        </p>

                        <p className="text-gold-700/80 leading-relaxed mb-8">
                            A consultora orienta na escolha da paleta de cores ideal para cada cliente, respeitando características individuais e valorizando a beleza natural. Também auxilia na definição dos figurinos, combinando peças, texturas e estilos alinhados com a proposta do ensaio.
                        </p>

                        <p className="text-gold-700/80 leading-relaxed mb-8">
                            Esse acompanhamento garante não apenas um resultado mais bonito, mas também uma experiência mais tranquila, organizada e confiante do início ao fim.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`flex flex-col items-center gap-2 p-4 bg-white/50 rounded-xl border border-gold-200/30 transition-all duration-300 hover:bg-white/70 hover:border-gold-300/50 hover:shadow-lg hover:shadow-gold-300/10 ${
                                            isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                                        }`}
                                        style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: 'forwards' }}
                                    >
                                        <Icon className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                                        <span className="text-sm text-gold-800 font-medium text-center">{service.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gold-300/15">
                            <img
                                src="/consultora.jpg"
                                alt="Consultoria de imagem e estilo"
                                className="w-full h-[400px] sm:h-[500px] object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gold-900/20 to-transparent" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold-400/10 rounded-2xl -z-10" />
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-champagne-200/30 rounded-2xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
