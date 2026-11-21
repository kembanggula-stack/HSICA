import React from 'react';
import { Cpu, CheckCircle, Shield, Lightbulb, Compass, UserCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AiPhilosophySection: React.FC = () => {
  const principles = [
    {
      title: 'AI Sebagai Asisten Draf, Bukan Penentu',
      desc: 'Membantu brainstorming ide, menyusun kerangka tulisan, dan eksplorasi palet warna secara efisien.',
      icon: Lightbulb,
    },
    {
      title: 'Tanggung Jawab Penuh pada Kreator',
      desc: 'Setiap karya diperiksa, diverifikasi, dan dipertanggungjawabkan langsung oleh pembuatnya.',
      icon: UserCheck,
    },
    {
      title: 'Kepatuhan Syariat Tanpa Kompromi',
      desc: 'Prompt dan output AI tetap wajib tunduk pada aturan tanpa gambar makhluk bernyawa & tanpa musik.',
      icon: Shield,
    },
    {
      title: 'Transparansi & Kejujuran Intelektual',
      desc: 'Kami mengajarkan etika terbuka bila sebuah karya dibantu AI, dengan bimbingan praktis di kelas.',
      icon: Compass,
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#02152b] border-t border-b border-[#D9DEE5]/15">
      <ScrollReveal className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#FF531D] mb-3">
              Sikap Kami Terhadap Teknologi
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Soal AI, kami tidak anti
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[#E8F1FB]/90 leading-relaxed">
              <p>
                AI sangat membantu untuk mencari ide dan menyusun draf. Kami memakainya dengan bijak dan dengan ilmu.
              </p>
              <p>
                Hasilnya diperiksa dan dipertanggungjawabkan oleh pembuatnya, mengikuti aturan berkarya yang sama, dan kami terbuka bila sebuah karya dibantu AI. Di kelas, kamu belajar caranya.
              </p>
            </div>
          </div>

          {/* Right Grid of Principles */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0B2A4A] border border-[#D9DEE5]/20 hover:border-[#A9CBEF]/50 transition-all duration-200 shadow-md shadow-[#071C33]/40"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#002042] border border-[#A9CBEF]/25 flex items-center justify-center text-[#E8F1FB] mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#E8F1FB]/85 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
