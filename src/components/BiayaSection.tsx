import React from 'react';
import { Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface BiayaSectionProps {
  onOpenWaitlist: () => void;
}

export const BiayaSection: React.FC<BiayaSectionProps> = ({ onOpenWaitlist }) => {
  const tiers = [
    {
      name: 'Sesi Pengenalan',
      price: 'Gratis',
      period: 'Terbuka untuk Umum',
      desc: 'Webinar pengantar tentang kaidah berkarya syar\'i dan bedah portofolio dakwah.',
      features: [
        'Akses sesi live 60 menit',
        'Tanya jawab langsung seputar batas syariat',
        'Panduan checklist alternatif halal',
        'Masuk grup komunitas peminat HSICA',
      ],
      highlight: false,
      cta: 'Daftar Tunggu Gratis',
    },
    {
      name: 'Short Course',
      price: 'Rp 49.000',
      period: 'per sesi (Estimasi terjangkau)',
      badge: 'Rekomendasi Pemula',
      desc: 'Satu sesi 90 menit langsung praktik menghasilkan 1 karya siap tayang.',
      features: [
        'Live workshop interaktif 90 menit',
        'Praktik studi kasus langsung didampingi',
        'Materi template & asset pack syar\'i',
        'Akses rekaman kelas & materi pendukung',
        'Umpan balik langsung pada hasil karya',
      ],
      highlight: true,
      cta: 'Pilih Short Course',
    },
    {
      name: 'Workshop Terapan',
      price: 'Rp 149.000',
      period: 'per program intensif',
      desc: 'Lebih intensif dengan pengerjaan proyek riil kebutuhan divisi HSI AbdullahRoy.',
      features: [
        '2–3 sesi live pertemuan intensif',
        'Pengerjaan proyek riil kebutuhan HSI',
        'Review one-on-one bersama mentor',
        'Sertifikat penyelesaian proyek',
        'Jalur rekomendasi ke Anggota Praktik',
      ],
      highlight: false,
      cta: 'Pilih Workshop',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#02152b] border-t border-[#D9DEE5]/15">
      <ScrollReveal className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF531D] mb-3">
            Transparansi & Komitmen
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Biaya yang ringan
          </h2>
          <p className="text-base sm:text-lg text-[#E8F1FB]/90 leading-relaxed">
            Kelas berbayar terjangkau supaya pengajar tetap terbayar dan kelas terus berjalan. Kami tidak mencari untung. Ada juga sesi pengenalan gratis.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                t.highlight
                  ? 'bg-gradient-to-b from-[#0B2A4A] to-[#002042] border-2 border-[#A9CBEF] shadow-xl shadow-[#071C33]/50 -translate-y-1'
                  : 'bg-[#000e1f] border border-[#D9DEE5]/20 shadow-md shadow-[#071C33]/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{t.name}</h3>
                  {t.badge && (
                    <span className="text-xs font-semibold text-[#0B2A4A] bg-[#E8F1FB] px-2.5 py-1 rounded-md">
                      {t.badge}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-white font-display">
                    {t.price}
                  </div>
                  <div className="text-xs text-[#A9CBEF] mt-0.5">{t.period}</div>
                </div>

                <p className="text-xs text-[#E8F1FB] leading-relaxed mb-6">
                  {t.desc}
                </p>

                <div className="pt-6 border-t border-[#D9DEE5]/15 space-y-3 mb-8">
                  {t.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#E8F1FB]/90">
                      <Check className="w-3.5 h-3.5 text-[#A9CBEF] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenWaitlist}
                className={`w-full py-3 px-4 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  t.highlight
                    ? 'bg-[#FF531D] text-white hover:bg-[#ff6938] shadow-md shadow-[#FF531D]/20'
                    : 'bg-[#E8F1FB]/10 hover:bg-[#E8F1FB]/20 text-[#E8F1FB] border border-[#D9DEE5]/20'
                }`}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};
