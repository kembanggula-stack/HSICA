import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Layers, BookOpen } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface HeroSectionProps {
  onOpenWaitlist: () => void;
  onExploreWays: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWaitlist, onExploreWays }) => {
  return (
    <section
      className="relative z-0 min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-x-clip bg-[#02152b]"
    >
      {/* Background Image Statis (Fixed, tidak ikut scroll, tertutup section dibawahnya) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img
          src="/assets/aistudio/_0B2A4A__Biru_Muda__E8F1FB__Biru_Langit__A9CBEF__Abu_Teks__5B6675__Abu_Garis__D9DEE5__Oranye_Muda__FFE9E2._9a4ff843.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02152b]/60 via-[#02152b]/20 to-[#02152b]/70" />
      </div>

      {/* Main Content Container */}
      <ScrollReveal className="relative z-10 max-w-5xl mx-auto w-full text-center">
        <div className="flex flex-col items-center">
          {/* Slogan Calligraphy Badge */}
          <div className="-mb-3 sm:-mb-5 md:-mb-7 flex justify-center">
            <img
              src="/assets/aistudio/_0B2A4A__Biru_Muda__E8F1FB__Biru_Langit__A9CBEF__Abu_Teks__5B6675__Abu_Garis__D9DEE5__Oranye_Muda__FFE9E2.__1__10d9f3bf.svg"
              alt="Learn - Share - Grow"
              className="h-20 sm:h-24 md:h-28 lg:h-32 max-w-[85vw] sm:max-w-lg md:max-w-xl w-auto object-contain drop-shadow-[0_3px_20px_rgba(41,125,213,0.38)]"
            />
          </div>

          {/* Judul Utama */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl text-balance mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A9CBEF] to-[#FFE9E2]">Berkarya, tanpa ragu soal syariat.
            </span>
          </h1>

          {/* Subjudul */}
          <p className="text-base sm:text-xl text-[#E8F1FB] max-w-2xl text-balance font-normal leading-relaxed mb-9">
            Belajar desain, video, dan menulis dari praktisi HSI. Lalu praktik langsung di proyek dakwah yang nyata.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
            <button
              onClick={onOpenWaitlist}
              className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#FF531D] hover:bg-[#ff6834] active:bg-[#e04513] rounded-xl shadow-lg shadow-[#FF531D]/25 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CBEF] group"
            >
              <span>Kabari saya saat kelas dibuka</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreWays}
              className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-medium text-[#E8F1FB] hover:text-white bg-[#E8F1FB]/10 hover:bg-[#E8F1FB]/15 active:bg-[#E8F1FB]/20 border border-[#D9DEE5]/30 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CBEF]"
            >
              <span>Lihat cara belajarnya</span>
              <ChevronDown className="w-4 h-4 text-[#A9CBEF]" />
            </button>
          </div>

          {/* Catatan Kecil */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#A9CBEF]">
            <span className="w-2 h-2 rounded-full bg-[#FFE9E2]" />
            <span>Kelas uji coba pertama mulai November 2026 (15 November 2026)</span>
          </div>
        </div>

        {/* Metric Bar */}
        <div
          className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto pt-6 border-t border-[#D9DEE5]/20"
        >
          <div className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-[#000e1f] border border-[#D9DEE5]/20 text-left shadow-sm shadow-[#071C33]/40">
            <div className="w-9 h-9 rounded-lg bg-[#002042] border border-[#A9CBEF]/30 flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-[#A9CBEF]">Prinsip Aman</div>
              <div className="text-sm font-semibold text-[#E8F1FB]">100% Panduan Syariat</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-[#000e1f] border border-[#D9DEE5]/20 text-left shadow-sm shadow-[#071C33]/40">
            <div className="w-9 h-9 rounded-lg bg-[#002042] border border-[#A9CBEF]/30 flex items-center justify-center text-white shrink-0">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-[#A9CBEF]">Portofolio Riil</div>
              <div className="text-sm font-semibold text-[#E8F1FB]">Langsung Proyek HSI</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-[#000e1f] border border-[#D9DEE5]/20 text-left shadow-sm shadow-[#071C33]/40">
            <div className="w-9 h-9 rounded-lg bg-[#002042] border border-[#A9CBEF]/30 flex items-center justify-center text-white shrink-0">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-[#A9CBEF]">Jalur Jenjang</div>
              <div className="text-sm font-semibold text-[#E8F1FB]">Pemula hingga Pengajar</div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
