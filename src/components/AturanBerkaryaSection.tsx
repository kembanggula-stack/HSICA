import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, Layers, Palette, Video, SearchCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AturanBerkaryaSection: React.FC = () => {
  const rules = [
    {
      title: 'Visual Tanpa Gambar Makhluk Bernyawa',
      color: '#A7D948',
      rule: 'Tidak memuat visual makhluk bernyawa utuh (manusia dan hewan) sesuai pemahaman syariat di HSI.',
      alternatives: [
        { label: 'Tipografi Dinamis', desc: 'Permainan tata huruf yang dramatis dan estetik' },
        { label: 'Kaligrafi Islam', desc: 'Khat kontemporer dan gubahan lafaz bermakna' },
        { label: 'Ilustrasi Benda & Alam', desc: 'Arsitektur, lanskap, perkakas, buku, dan simbol' },
        { label: 'Pola Ornamen Geometri', desc: 'Geometri sakral tradisi seni Islam yang kaya' },
      ],
      icon: Palette,
    },
    {
      title: 'Penyuntingan Video Tanpa Musik',
      color: '#FF531D',
      rule: 'Audio murni tanpa instrumen musik konvensional maupun digital yang melalaikan.',
      alternatives: [
        { label: 'Narasi Suara (Voice Over)', desc: 'Vokal jernih bertutur hangat dan berwibawa' },
        { label: 'Teks Bergerak (Kinetic)', desc: 'Transisi kata berirama yang memikat mata' },
        { label: 'Rekaman Layar & Infografis', desc: 'Visualisasi alur langkah materi taklim' },
        { label: 'Sound FX Halal & Ambience', desc: 'Gemersik kertas, klik halus, dan atmosfer alam' },
      ],
      icon: Video,
    },
    {
      title: 'Dalil dan Kutipan Dicek ke Sumbernya',
      color: '#21BFC1',
      rule: 'Tidak ada kutipan hadits atau ayat yang dicomot sembarangan tanpa verifikasi sanad dan teks.',
      alternatives: [
        { label: 'Verifikasi Nomor Hadits', desc: 'Pengecekan ke kitab-kitab induk rujukan tsiqah' },
        { label: 'Penjelasan Makna Sahih', desc: 'Rujukan syarah ulama mu\'tabar yang terpercaya' },
        { label: 'Review Tim Ilmiah', desc: 'Karya melewati kurasi redaksi sebelum publikasi' },
        { label: 'Ketenangan Hati', desc: 'Karya berkah, bebas dari fitnah menyebarkan kabar palsu' },
      ],
      icon: SearchCheck,
    },
  ];

  return (
    <section id="aturan" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#071C33]/50">
      <ScrollReveal className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF531D] mb-3">
            Prinsip & Keberkahan
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Aturan berkarya kami
          </h2>
          <p className="text-base sm:text-xl text-[#E8F1FB]/90 leading-relaxed font-normal">
            Kami berkarya dalam batasan syariat yang sudah dipahami bersama di HSI.
          </p>
        </div>

        {/* 3 Main Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {rules.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-[#02152b] border border-[#D9DEE5]/20 hover:border-[#A9CBEF]/50 transition-all duration-300 flex flex-col justify-between shadow-md shadow-[#071C33]/40"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${item.color}25`,
                        color: item.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#A9CBEF]">Prinsip 0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E8F1FB]/85 leading-relaxed mb-6">
                    {item.rule}
                  </p>

                  <div className="pt-5 border-t border-[#D9DEE5]/15">
                    <div
                      className="text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{ color: item.color }}
                    >
                      Alternatif Kreatifnya:
                    </div>
                    <div className="space-y-2.5">
                      {item.alternatives.map((alt, aIdx) => (
                        <div key={aIdx} className="text-xs">
                          <span className="font-semibold text-white">{alt.label}: </span>
                          <span className="text-[#A9CBEF]">{alt.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Penutup quote callout */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#02152b] border border-[#D9DEE5]/25 text-center max-w-4xl mx-auto shadow-xl shadow-[#071C33]/50">
          <blockquote className="text-lg sm:text-2xl font-display font-semibold text-white leading-relaxed mb-3">
            “Kami menganggap batasan ini tantangan kreatif, bukan larangan. Masih banyak cara untuk tampil menarik.”
          </blockquote>
          <p className="text-xs text-[#A9CBEF]">
            Komitmen HSI Creative Academy dalam melahirkan karya dakwah visual bermartabat.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};
