import React from 'react';
import { ArrowUp, Instagram, Globe, Mail, MessageCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071C33] border-t border-[#D9DEE5]/15 py-16 px-4 sm:px-6 lg:px-8 text-[#A9CBEF]">
      <ScrollReveal className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/assets/aistudio/HSICA_logo_vertical_warna__1__b726a171.svg"
                alt="HSI Creative Academy Logo"
                className="h-28 sm:h-32 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-[#E8F1FB]/70 max-w-sm">
              Lahir dari komunitas dakwah HSI AbdullahRoy. Belajar, Praktik, Berkarya untuk Dakwah sesuai kaidah syariat.
            </p>
          </div>

          {/* Nav / Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#E8F1FB]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#FF531D]" />
              <span>Instagram HSICA</span>
            </a>
            <a
              href="https://hsi.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4 text-[#A9CBEF]" />
              <span>HSI AbdullahRoy</span>
            </a>
            <a
              href="mailto:info@hsicreative.id"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#A9CBEF]" />
              <span>Kontak: info@hsicreative.id</span>
            </a>
            <a
              href="https://wa.me/6281200000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#A9CBEF]" />
              <span>WhatsApp Admin HSI</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#E8F1FB]/10 hover:bg-[#E8F1FB]/20 border border-[#D9DEE5]/20 text-[#E8F1FB] hover:text-white transition-colors cursor-pointer self-end md:self-auto"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D9DEE5]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A9CBEF]/70">
          <div>
            © {new Date().getFullYear()} HSI Creative Academy · Bagian dari Ekosistem Dakwah HSI AbdullahRoy.
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};
