import { MessageCircle, Instagram, Leaf } from 'lucide-react';

import { WHATSAPP_URL, INSTAGRAM_URL } from '@/data/contato';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-12 lg:pt-24"
    >
      {/* Mesmo fundo da chamada final ("Pronto para eternizar seu momento?") */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-800 via-gold-700 to-gold-900" />
      <div className="absolute inset-0 fabric-texture opacity-30" />
      <div className="absolute inset-0 pointer-events-none">
        <Leaf className="absolute top-16 left-8 w-20 h-20 text-white/5 leaf-sway" />
        <Leaf className="absolute top-32 right-12 w-16 h-16 text-white/5 leaf-sway delay-500" />
        <Leaf className="absolute bottom-24 left-16 w-14 h-14 text-white/5 leaf-sway delay-300" />
        <Leaf className="absolute bottom-40 right-8 w-18 h-18 text-white/5 leaf-sway delay-700" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-300/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-champagne-300/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">

          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight animate-fade-in-up opacity-0"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            Registrando momentos,{' '}
            <span className="font-script text-gold-200 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              criando memórias
            </span>
          </h1>

          <p
            className="mt-6 text-base sm:text-lg text-gold-200/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up opacity-0"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            Cada clique é uma história. Cada retrato guarda um sentimento que o tempo não consegue apagar. Deixe que a gente eternize os seus.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="w-5 h-5" />
              Agendar pelo WhatsApp
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-on-dark">
              <Instagram className="w-5 h-5" />
              Ver Instagram
            </a>
          </div>
        </div>

        <div
          className="flex-1 max-w-md lg:max-w-lg w-full animate-fade-in-up opacity-0"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-gold-300/10 rounded-3xl blur-2xl" />
            <img
              src="/images/hero/imagem-principal.jpeg"
              alt="Ensaio fotográfico profissional"
              className="relative w-full h-[360px] sm:h-[440px] lg:h-[520px] object-cover object-[center_30%] rounded-2xl shadow-2xl shadow-gold-300/20 border border-gold-200/30"
              loading="eager"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gold-900/10 to-transparent" />
          </div>
        </div>
      </div>

      <div
        className="relative z-10 mt-8 lg:mt-20 flex justify-center animate-fade-in opacity-0"
        style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
      >
        <a href="#servicos" className="inline-flex flex-col items-center text-gold-200/60 hover:text-gold-200 transition-colors duration-300">
          <span className="text-xs tracking-widest uppercase mb-2">Explore</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
