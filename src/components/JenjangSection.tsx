import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Briefcase, GraduationCap, Users2, Award, ChevronRight, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const JenjangSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'Short Course',
      duration: '1 Sesi · 90 Menit',
      status: 'Terbuka untuk Pemula',
      description: 'Satu sesi 90 menit, terbuka untuk pemula. Kamu pulang membawa satu karya.',
      highlight: 'Fokus pada 1 skill spesifik yang langsung bisa kamu terapkan hari itu juga tanpa perlu pengalaman desain sebelumnya.',
      icon: Clock,
      deliverable: '1 Karya siap unggah (Poster / Video Pendek / Caption)',
    },
    {
      step: '02',
      title: 'Workshop',
      duration: '2 - 3 Pertemuan Intensif',
      status: 'Pendalaman Keterampilan',
      description: 'Lebih intensif, dengan proyek nyata untuk HSI.',
      highlight: 'Mengerjakan studi kasus rill dari kebutuhan divisi media HSI dengan bimbingan dan feedback mendalam.',
      icon: Briefcase,
      deliverable: 'Proyek riil materi dakwah dengan standarisasi HSI',
    },
    {
      step: '03',
      title: 'Bootcamp',
      duration: 'Program Bertahap (Menyusul)',
      status: 'Dalam Persiapan',
      description: 'Belajar bertahap lebih panjang, hasilnya portofolio komprehensif.',
      highlight: 'Kurikulum mendalam dari hulu ke hilir untuk mencetak kreator dakwah handal dan mandiri.',
      icon: GraduationCap,
      deliverable: 'Portofolio lengkap multi-karya dakwah terstruktur',
    },
    {
      step: '04',
      title: 'Anggota Praktik',
      duration: 'Magang Terbimbing',
      status: 'Seleksi Lulusan',
      description: 'Praktik di divisi HSI bersama pendamping.',
      highlight: 'Terjun langsung dalam alur kerja harian tim media dakwah HSI AbdullahRoy di bawah bimbingan supervisor relawan senior.',
      icon: Users2,
      deliverable: 'Karya publikasi resmi yang dinikmati ribuan santri',
    },
    {
      step: '05',
      title: 'Pengajar',
      duration: 'Kaderisasi Pendidik',
      status: 'Tingkat Lanjutan',
      description: 'Yang sudah siap mengajar peserta berikutnya.',
      highlight: 'Melanjutkan estafet ilmu dakwah dengan menjadi mentor dan pengajar di kelas HSICA generasi berikutnya.',
      icon: Award,
      deliverable: 'Amal jariyah ilmu yang bermanfaat secara berkelanjutan',
    },
  ];

  const current = stages[selectedStage];
  const CurrentIcon = current.icon;

  return (
    <section id="jenjang" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#02152b] border-t border-b border-[#D9DEE5]/15">
      <ScrollReveal className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF531D] mb-3">
            Jalur Pembelajaran & Kaderisasi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Dari pemula sampai jadi pengajar
          </h2>
          <p className="text-base sm:text-lg text-[#E8F1FB]/90 leading-relaxed">
            HSICA dirancang bukan sekadar tempat kursus sekali selesai. Kami membangun ekosistem berkesinambungan: mulai dari orang yang belum pernah mengedit, hingga siap mengajar dan membimbing generasi berikutnya.
          </p>
        </div>

        {/* Desktop Pipeline Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stepper Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {stages.map((stg, idx) => {
              const isSelected = selectedStage === idx;
              return (
                <button
                  key={stg.step}
                  onClick={() => setSelectedStage(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B2A4A] border-[#A9CBEF] text-white shadow-md shadow-[#071C33]/50'
                      : 'bg-[#002042]/90 border-[#D9DEE5]/15 text-[#A9CBEF] hover:text-white hover:border-[#A9CBEF]/40'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs font-bold text-[#A9CBEF]">
                       {stg.step}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">{stg.title}</div>
                      <div className="text-xs text-[#A9CBEF]/80">{stg.duration}</div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#A9CBEF] translate-x-1' : 'text-[#5B6675]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Details Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#0B2A4A] border border-[#D9DEE5]/20 relative overflow-hidden shadow-md shadow-[#071C33]/40">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#D9DEE5]/15">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#002042] border border-[#A9CBEF]/30 flex items-center justify-center text-[#E8F1FB]">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#A9CBEF] uppercase tracking-wider">
                    Tahap {current.step} · {current.status}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{current.title}</h3>
                </div>
              </div>
              <div className="text-xs text-[#A9CBEF]/80 font-mono hidden sm:block">
                {current.duration}
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#E8F1FB] font-medium leading-relaxed mb-6">
              {current.description}
            </p>

            <div className="p-4 rounded-xl bg-[#002042] border border-[#D9DEE5]/15 mb-6">
              <div className="text-xs text-[#A9CBEF] mb-1 font-semibold">Fokus Pelaksanaan:</div>
              <p className="text-sm text-[#E8F1FB] leading-relaxed">
                {current.highlight}
              </p>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#E8F1FB]/90">
              <div className="w-4 h-4 rounded-full bg-[#A9CBEF]/25 flex items-center justify-center text-[#E8F1FB] shrink-0">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span>
                <strong className="text-white">Hasil yang kamu bawa:</strong> {current.deliverable}
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
