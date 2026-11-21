import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Film, Feather, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const BidangSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'desain' | 'video' | 'writing'>('desain');

  const disciplines = [
    {
      id: 'desain' as const,
      name: 'Desain Grafis Dakwah',
      tagline: 'Visual Menarik & Berwibawa',
      color: '#A7D948',
      summary: 'Tata letak, huruf, warna, dan identitas visual. Cocok untuk poster, carousel, dan materi dakwah.',
      image: '/src/assets/images/showcase_design_typography_1792750601768.jpg',
      alt: 'Karya desain grafis tipografi dan kaligrafi poster Islami',
      topics: [
        'Prinsip tata letak (grid, hierarki, visual balance)',
        'Pemilihan huruf & tipografi syar\'i tanpa figur',
        'Harmoni palet warna untuk konten taklim & poster kajian',
        'Eksplorasi ornamen geometri Islam & kaligrafi kontemporer',
        'Format carousel edukatif Instagram yang nyaman dibaca santri',
      ],
      output: 'Poster kajian modern & 1 seri Instagram carousel dakwah',
      tools: ['Adobe Illustrator', 'Figma', 'Canva'],
    },
    {
      id: 'video' as const,
      name: 'Penyuntingan Video & Motion',
      tagline: 'Rapi, Syahdu, Tanpa Musik',
      color: '#FF531D',
      summary: 'Teks bergerak, voice over, dan penyuntingan. Video yang rapi tanpa musik.',
      image: '/src/assets/images/showcase_motion_video_1792750604869.jpg',
      alt: 'Antarmuka editing video motion typography dan timeline audio voiceover',
      topics: [
        'Teknik kinetic typography (teks bergerak yang dinamis)',
        'Editing audio voice over (pembersihan noise, EQ, vokal bulat)',
        'Sound design halal: foley, efek transisi halus, ambience',
        'Penyusunan b-roll rekaman layar, teks penjelasan, & infografis',
        'Format reel/shorts 9:16 untuk dakwah berdurasi singkat',
      ],
      output: 'Video dakwah pendek 60 detik dengan teks bergerak & voice over jernih',
      tools: ['Premiere Pro', 'CapCut Desktop', 'DaVinci Resolve'],
    },
    {
      id: 'writing' as const,
      name: 'Content Writing Dakwah',
      tagline: 'Naskah Berbobot dengan Rujukan Shahih',
      color: '#21BFC1',
      summary: 'Caption, naskah, dan cerita, dengan rujukan yang dicek.',
      image: '/src/assets/images/showcase_writing_craft_1792750605391.jpg',
      alt: 'Meja kerja redaksi penulisan naskah dengan kitab referensi dan catatan riset',
      topics: [
        'Struktur hook caption dakwah yang tidak clickbait',
        'Metode takhrij ringkas dan verifikasi nomor hadits/ayat',
        'Seni storytelling materi ilmiah agar mudah dipahami awam',
        'Penulisan naskah voice over untuk video dakwah',
        'Penyusunan artikel reflektif dan bulletin pendek HSI',
      ],
      output: '3 draf caption siap tayang & 1 naskah voice over terverifikasi rujukan',
      tools: ['Notion', 'Google Docs', 'Maktabah Syamilah'],
    },
  ];

  const current = disciplines.find((d) => d.id === activeTab) || disciplines[0];

  return (
    <section id="bidang" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#071C33]/40 border-t border-[#D9DEE5]/15">
      <ScrollReveal className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#FF531D] mb-3">
              Kurikulum Spesialisasi
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Yang bisa kamu pelajari
            </h2>
            <p className="text-[#E8F1FB]/90 text-base sm:text-lg">
              Fokus pada keterampilan media digital terapan yang paling dibutuhkan di ekosistem dakwah saat ini.
            </p>
          </div>

          <div className="text-xs text-[#A9CBEF] bg-[#002042] border border-[#D9DEE5]/20 px-4 py-2 rounded-lg self-start md:self-auto shadow-sm">
            <span>Bidang lain menyusul bertahap.</span>
          </div>
        </div>

        {/* Interactive Discipline Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {disciplines.map((d) => {
            const isSelected = activeTab === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setActiveTab(d.id)}
                className={`p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B2A4A] text-white shadow-md shadow-[#071C33]/50 border-[#A9CBEF]'
                    : 'bg-[#002042]/90 border-[#D9DEE5]/15 text-[#A9CBEF] hover:text-white hover:border-[#A9CBEF]/40'
                }`}
              >
                <div
                  className="text-xs font-mono font-medium mb-1"
                  style={{ color: d.color }}
                >
                  Bidang 0{disciplines.indexOf(d) + 1}
                </div>
                <div className="text-base font-bold text-white mb-1">{d.name}</div>
                <div className="text-xs text-[#A9CBEF]/80 line-clamp-1">{d.tagline}</div>
              </button>
            );
          })}
        </div>

        {/* Detailed Showcase Card */}
        <div className="rounded-2xl bg-[#0B2A4A] border border-[#D9DEE5]/20 overflow-hidden shadow-md shadow-[#071C33]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content Column */}
            <div className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between">
              <div>
                <div
                  className="inline-block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: current.color }}
                >
                  {current.tagline}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {current.name}
                </h3>
                <p className="text-base text-[#E8F1FB] leading-relaxed mb-8">
                  {current.summary}
                </p>

                {/* Materi Pokok */}
                <div className="mb-8">
                  <div className="text-xs font-semibold text-[#A9CBEF] uppercase tracking-wider mb-4">
                    Materi yang dipelajari:
                  </div>
                  <div className="space-y-3">
                    {current.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-[#E8F1FB]">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{
                            backgroundColor: `${current.color}25`,
                            color: current.color,
                          }}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output & Tools Footnote */}
              <div className="pt-6 border-t border-[#D9DEE5]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#A9CBEF]">Target Output Karya:</div>
                  <div className="text-sm font-semibold text-[#E8F1FB] mt-0.5">{current.output}</div>
                </div>
                <div>
                  <div className="text-xs text-[#A9CBEF]">Aplikasi Rekomendasi:</div>
                  <div
                    className="text-xs font-mono mt-0.5"
                    style={{ color: current.color }}
                  >
                    {current.tools.join(' · ')}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Visual Column */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-[#071C33] border-t lg:border-t-0 lg:border-l border-[#D9DEE5]/15">
              <img
                src={current.image}
                alt={current.alt}
                className="w-full h-full object-cover object-center absolute inset-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002042]/95 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-[#002042]/90 backdrop-blur-md border border-[#D9DEE5]/20 text-xs text-[#E8F1FB]">
                <span className="font-semibold text-white">Studi Kasus Nyata:</span> Terinspirasi dari karya publikasi resmi HSI AbdullahRoy.
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
