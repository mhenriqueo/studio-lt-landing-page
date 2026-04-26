import { useScrollAnimation } from '../hooks/useScrollAnimation';

const galleryImages = [
  { src: '/gestante-one.jpg', alt: 'Ensaio Gestante', span: 'col-span-1 row-span-2' },
  { src: '/gestante-two.jpg', alt: 'Ensaio Gestante', span: 'col-span-1 row-span-1' },
  { src: '/mae-filho-one.jpg', alt: 'Mãe e Filho', span: 'col-span-1 row-span-1' },
  { src: '/mae-filho-two.jpg', alt: 'Mãe e Filho', span: 'col-span-1 row-span-1' },
  { src: '/smash-one.jpg', alt: 'Smash the Cake', span: 'col-span-1 row-span-2' },
  { src: '/kids-one.jpg', alt: 'Ensaio B-Day Kids', span: 'col-span-1 row-span-1' },
  { src: '/kids-two.jpg', alt: 'Ensaio Kids', span: 'col-span-1 row-span-1' },
  { src: '/smash-two.jpg', alt: 'Smash the Cake', span: 'col-span-1 row-span-1' },
  { src: '/casal-one.jpeg', alt: 'Ensaio Acadêmico', span: 'col-span-1 row-span-1' },
  { src: '/casal-two.jpeg', alt: 'Ensaio Casal / Familiar', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="portfolio" className="section-padding bg-gold-100/30 fabric-texture relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Portfólio</h2>
          <p className="section-subtitle">Alguns dos nossos momentos capturados</p>
          <div className="divider-ornament">
            <svg className="w-5 h-5 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`gallery-item group relative ${img.span} ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: 'forwards' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
