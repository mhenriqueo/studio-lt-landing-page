import { Heart, Award, Camera } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="sobre" className="section-padding bg-gold-50/50 fabric-texture relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold-300/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Sobre o Estúdio</h2>
          <p className="section-subtitle">Conheça a história por trás das lentes</p>
          <div className="divider-ornament">
            <Camera className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={`relative ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gold-300/15">
              <img
                src="/fotografas-two.jpg"
                alt="Studio L&T Fotografia"
                className="w-full h-[400px] sm:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-400/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-champagne-200/30 rounded-2xl -z-10" />
          </div>

          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}>
            <h3 className="font-serif text-2xl sm:text-3xl text-gold-800 mb-6 leading-snug">
              Cada foto conta uma história,{' '}
              <span className="font-script text-gold-400 text-3xl sm:text-4xl">
                cada momento é único
              </span>
            </h3>

            <p className="text-gold-700/80 leading-relaxed mb-6">
              No Studio L&T Fotografia, acreditamos que os momentos mais preciosos da vida
              merecem ser eternizados com arte, sensibilidade e dedicação. Cada ensaio é
              pensado com carinho para que você possa reviver essas memórias com a mesma
              emoção do dia em que aconteceram.
            </p>

            <p className="text-gold-700/80 leading-relaxed mb-8">
              Com um olhar atento aos detalhes, transformamos
              sorrisos, olhares e gestos em imagens que aquecem o coração. Porque
              memórias boas merecem ser guardadas para sempre.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-gold-200/30">
                <Heart className="w-5 h-5 text-gold-400 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-gold-700 font-medium">Amor em cada clique</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-gold-200/30">
                <Award className="w-5 h-5 text-gold-400 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-gold-700 font-medium">Qualidade premium</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-gold-200/30">
                <Camera className="w-5 h-5 text-gold-400 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-gold-700 font-medium">Experiência única</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
