import { Star, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Liandra Santana',
    initial: 'L',
    stars: 5,
    comment: 'Realizei meu ensaio de dia das mães, super atenciosas, ambiente super agradável e as fotos ficaram perfeitas',
  },
  {
    name: 'Ana Flavia Trigueiro',
    initial: 'A',
    stars: 5,
    comment: 'Meninas obrigado pelo carinho, dedicação e cuidado conosco, nos deixaram tão à vontade quero agradecer imensamente pelo trabalho incrível que fizeram vcs simplesmente arrasam. Amei cada foto cada detalhe. Com toda certeza irei fazer muito mais fotos com vcs!!!',
  },
  {
    name: 'Leticia S M Brito',
    initial: 'L',
    stars: 5,
    comment: 'Encantada com o trabalho das fotógrafas! Muito atenciosas, carinhosas e profissionais. Criaram um ambiente leve e acolhedor para minha filha, e o resultado ficou simplesmente perfeito! Fotos lindas, cheias de sensibilidade e emoção. Recomendo muito!',
  },
  {
    name: 'Flavia Carolina',
    initial: 'F',
    stars: 5,
    comment: 'Muito profissionalismo, as fotos do meu filho de primeiro aninho ficaram muito lindas, maravilhoso, todos nós amamos. Superou minhas expectativas, super indico, parabéns.',
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="depoimentos" className="section-padding bg-gold-100/30 fabric-texture relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">O que dizem sobre nós</p>
          <div className="divider-ornament">
            <Star className="w-5 h-5 text-gold-400" fill="currentColor" strokeWidth={0} />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`testimonial-card card-elegant p-6 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold-200 border-2 border-gold-300/50 flex items-center justify-center">
                  <span className="font-serif text-lg text-gold-700">{testimonial.initial}</span>
                </div>
                <div>
                  <h4 className="font-serif text-sm text-gold-800">{testimonial.name}</h4>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-gold-400" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gold-700/70 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-10 flex justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://www.google.com/search?sca_esv=58faf45c7c4dd337&rlz=1C5GCCM_enBR1171BR1171&sxsrf=ANbL-n4Fm9qHukK0IRJpLf2gR10rCt4gPA:1776964062501&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOT47iS2tqzK55lEiyZvz1N3-YM8vtfRMn2_H6Dgi5M_DZxWaLb1wX4FFVgWV3ftSQfkTQwUSgyBqlQ2o5ps0isuvTgHKI9y9E1RXP8bcrt1ntv5P5UlhOI3j76z12dtT65A5Ues%3D&q=Studio+L+%26+T+%7C+Fotografia+Osasco+Coment%C3%A1rios&sa=X&ved=2ahUKEwicieX9uoSUAxWlK7kGHeG0AYkQ0bkNegQINRAF&biw=1680&bih=904&dpr=2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <ExternalLink className="w-5 h-5" />
            Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
