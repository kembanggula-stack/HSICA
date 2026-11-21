import React from 'react';
import { GraduationCap, Users, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      step: '01',
      title: 'Belajar',
      subtitle: 'Kelas Terapan',
      color: '#A7D948',
      description: 'Kelas terapan yang langsung menghasilkan karya. Bukan cuma teori panjang yang membuat bingung, tapi materi padat praktik.',
      details: [
        'Langsung studi kasus riil',
        'Alur kerja efisien dan modern',
        'Output karya jadi dalam tiap sesi',
      ],
      icon: GraduationCap,
    },
    {
      step: '02',
      title: 'Praktik',
      subtitle: 'Didampingi Mentor',
      color: '#297DD5',
      description: 'Latihan di divisi HSI, didampingi mentor. Praktisi yang tiap hari berkarya di dakwah membimbingmu memperbaiki karya.',
      details: [
        'Review karya langsung satu-satu',
        'Simulasi workflow divisi media',
        'Umpan balik konstruktif & suportif',
      ],
      icon: Users,
    },
    {
      step: '03',
      title: 'Berkarya',
      subtitle: 'Untuk Umat & Dakwah',
      color: '#FF531D',
      description: 'Karyamu dipakai untuk dakwah dan pendidikan. Tidak sekadar tersimpan di laptop, tapi dipublikasikan untuk ribuan santri HSI.',
      details: [
        'Kontribusi nyata materi taklim',
        'Amal jariyah lewat keahlian visual',
        'Portofolio teruji di ranah profesional',
      ],
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="tentang" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#02152b]">
      <ScrollReveal className="max-w-6xl mx-auto">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF531D] mb-3">
            Apa itu HSICA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Tempat belajar sekaligus praktik
          </h2>
          <p className="text-base sm:text-xl text-[#E8F1FB]/90 leading-relaxed font-normal">
            HSI Creative Academy lahir dari komunitas dakwah HSI AbdullahRoy. Pengajarnya relawan profesional yang mengerjakan bidangnya setiap hari, dan kamu belajar dengan cara yang sama.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="relative group p-8 rounded-2xl bg-[#0B2A4A] border border-[#D9DEE5]/20 hover:border-[#A9CBEF]/50 transition-all duration-300 flex flex-col justify-between shadow-md shadow-[#071C33]/40"
              >
                {/* Background glow on hover */}
                <div
                  className="absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none opacity-10 group-hover:opacity-25 transition-opacity"
                  style={{ backgroundColor: c.color }}
                />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="font-mono text-2xl font-bold transition-colors"
                      style={{ color: c.color }}
                    >
                      {c.step}
                    </span>
                    <div
                      className="w-11 h-11 rounded-xl border flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: `${c.color}20`,
                        borderColor: `${c.color}40`,
                        color: c.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-xs font-semibold tracking-wider uppercase text-[#A9CBEF] mb-1">
                    {c.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#E8F1FB] leading-relaxed mb-6">
                    {c.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#D9DEE5]/15 space-y-2.5">
                  {c.details.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs text-[#E8F1FB]/90">
                      <CheckCircle2
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: c.color }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
};
