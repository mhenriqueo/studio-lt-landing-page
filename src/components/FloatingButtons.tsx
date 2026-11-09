import { MessageCircle, Instagram } from 'lucide-react';
import { WHATSAPP_URL, INSTAGRAM_URL } from '@/data/contato';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
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
        className="group flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
