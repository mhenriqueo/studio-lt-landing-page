import { useState, useEffect } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { Menu, X, Camera } from 'lucide-react';

const navLinks = [
  { label: 'Início', id: 'hero' },
  { label: 'Nossos Serviços', id: 'servicos' },
  { label: 'Sobre o Estúdio', id: 'sobre' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export function BrandName({ className = '' }: { className?: string }) {
  return (
    <span className={className}>
      Studio <span className="font-script text-gold-400">L</span>{' '}
      <span className="font-sans text-gold-400">&amp;</span>{' '}
      <span className="font-script text-gold-400">T</span>
    </span>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isHome = useLocation({ select: (l) => l.pathname === '/' });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sobre o fundo escuro da Hero (topo da página inicial), o texto fica claro.
  const onDark = isHome && !isScrolled && !isMobileOpen;

  const handleClick = (e: React.MouseEvent, id: string) => {
    setIsMobileOpen(false);
    if (!isHome) return; // navegação normal para "/#id"
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const linkColor = onDark ? 'text-gold-200 hover:text-white' : 'text-gold-700 hover:text-gold-400';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileOpen
          ? 'navbar-blur bg-gold-100/90 shadow-md shadow-gold-300/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" hash="hero" onClick={(e) => handleClick(e, 'hero')} className="flex items-center gap-2 group">
          <Camera className="w-7 h-7 text-gold-400 transition-transform duration-300 group-hover:rotate-12" />
          <BrandName
            className={`font-serif text-xl sm:text-2xl tracking-wide transition-colors duration-500 ${onDark ? 'text-white' : 'text-gold-800'}`}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to="/"
              hash={link.id}
              onClick={(e) => handleClick(e, link.id)}
              className={`text-sm font-medium ${linkColor} transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className={`md:hidden p-2 transition-colors ${linkColor}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="md:hidden navbar-blur bg-gold-100/95 border-t border-gold-200/50 animate-fade-in-down">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to="/"
                hash={link.id}
                onClick={(e) => handleClick(e, link.id)}
                className="block py-3 px-4 text-gold-700 hover:text-gold-400 hover:bg-gold-200/30 rounded-lg transition-all duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
