import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Siapa yang bisa ikut?',
      a: 'Siapa saja yang ingin belajar, santri HSI maupun umum, laki-laki maupun perempuan. Short Course terbuka untuk pemula.',
    },
    {
      q: 'Perlu bisa desain atau edit video dulu?',
      a: 'Tidak. Untuk Short Course, laptop atau HP dan sedikit kenal Canva sudah cukup.',
    },
    {
      q: 'Kelasnya bagaimana?',
      a: 'Online dan langsung. Rekaman dan materi pendukung dibagikan setelah sesi.',
    },
    {
      q: 'Apa bedanya dengan kursus online lain?',
      a: 'Aturan berkarya yang jelas dan sesuai syariat, tempat praktik nyata di HSI, dan jalur untuk jadi pengajar.',
    },
    {
      q: 'Bagaimana kalau ingin jadi anggota praktik atau pengajar?',
      a: 'Setelah mengikuti kelas, peserta yang berminat bisa lanjut praktik di divisi HSI. Syarat naik jenjang akan diumumkan.',
    },
    {
      q: 'Kapan kelas dibuka dan berapa biayanya?',
      a: 'Kelas uji coba pertama mulai November 2026. Isi daftar tunggu supaya kamu dapat kabar paling awal.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#071C33]">
      <ScrollReveal className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF531D] mb-3">
            Pertanyaan yang Sering Diajukan
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Pertanyaan Umum (FAQ)
          </h2>
          <p className="text-[#E8F1FB]/90 text-base sm:text-lg max-w-xl mx-auto">
            Semua hal mendasar yang perlu kamu ketahui sebelum bergabung di HSI Creative Academy.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#000e1f] border border-[#D9DEE5]/20 hover:border-[#A9CBEF]/50 transition-colors overflow-hidden shadow-md shadow-[#071C33]/40"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CBEF]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#A9CBEF] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#FF531D]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#E8F1FB] leading-relaxed border-t border-[#D9DEE5]/15">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
};
