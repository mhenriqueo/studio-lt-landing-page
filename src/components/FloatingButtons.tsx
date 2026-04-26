import { MessageCircle, Instagram } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5511992340676?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20ensaio%20fotogr%C3%A1fico.';
const INSTAGRAM_URL = 'https://www.instagram.com/studio.l_t?igsh=MXFkaGsxN2dtM2E5Ng%3D%3D&utm_source=qr';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 text-white rounded-full shadow-lg shadow-pink-500/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/30"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 animate-float"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
