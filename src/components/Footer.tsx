import { Camera, Heart } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/studio.l_t?igsh=MXFkaGsxN2dtM2E5Ng%3D%3D&utm_source=qr';

export default function Footer() {
  return (
    <footer className="bg-gold-900 text-gold-200/60 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Camera className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
            <span className="font-serif text-lg text-gold-300">
              Studio <span className="font-script text-gold-400">L&T</span>
            </span>
          </div>

          <p className="text-sm max-w-md leading-relaxed mb-4">
            Registrando momentos e criando memórias com amor, arte e dedicação.
          </p>

          <div className="flex items-center gap-6 mb-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400/60 hover:text-gold-400 transition-colors duration-300 text-sm"
            >
              @studio.l_t
            </a>
          </div>

          <div className="w-full h-px bg-gold-700/30 mb-6" />

          <p className="text-xs flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-gold-400" fill="currentColor" /> por Studio L&T Fotografia
          </p>
        </div>
      </div>
    </footer>
  );
}
