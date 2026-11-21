/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DilemaSection } from './components/DilemaSection';
import { AboutSection } from './components/AboutSection';
import { BidangSection } from './components/BidangSection';
import { JenjangSection } from './components/JenjangSection';
import { AturanBerkaryaSection } from './components/AturanBerkaryaSection';
import { AiPhilosophySection } from './components/AiPhilosophySection';
import { PengajarSection } from './components/PengajarSection';
import { BiayaSection } from './components/BiayaSection';
import { FaqSection } from './components/FaqSection';
import { WaitlistSection } from './components/WaitlistSection';
import { Footer } from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleOpenWaitlist = () => {
    const el = document.getElementById('daftar-tunggu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWays = () => {
    const el = document.getElementById('tentang');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#071C33] text-slate-100 selection:bg-[#A9CBEF]/30 selection:text-white overflow-x-clip">
      {/* Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FF531D] via-[#FFE9E2] via-[#A9CBEF] to-[#E8F1FB] z-[60] origin-left shadow-sm shadow-[#A9CBEF]/40"
        style={{ scaleX }}
      />

      {/* Top Navigation */}
      <Navbar onOpenWaitlist={handleOpenWaitlist} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (z-0, contains fixed #0B2A4A bubble accent) */}
        <HeroSection
          onOpenWaitlist={handleOpenWaitlist}
          onExploreWays={handleExploreWays}
        />

        {/* Subsequent Sections (z-10 with solid backgrounds, smoothly covers the fixed hero bubble on scroll) */}
        <div className="relative z-10">
          {/* 2. Dilema: Ingin berkarya, tapi bingung batasannya? */}
          <DilemaSection />

          {/* 3. Apa itu HSICA: Belajar, Praktik, Berkarya */}
          <AboutSection />

          {/* 4. Bidang: Desain, Video, Content Writing (with rich artwork showcases) */}
          <BidangSection />

          {/* 5. Jenjang: Dari pemula sampai jadi pengajar (5 stages) */}
          <JenjangSection />

          {/* 6. Aturan Berkarya: Batasan syariat & alternatif solutif */}
          <AturanBerkaryaSection />

          {/* 7. Soal AI: Sikap bijak & berilmu */}
          <AiPhilosophySection />

          {/* 8. Pengajar: Relawan praktisi profesional HSI */}
          <PengajarSection />

          {/* 9. Biaya: Biaya ringan, transparan, non-profit */}
          <BiayaSection onOpenWaitlist={handleOpenWaitlist} />

          {/* 10. FAQ: Pertanyaan umum seputar pendaftaran & pelaksanaan */}
          <FaqSection />

          {/* 11. CTA Penutup: Formulir pendaftaran daftar tunggu prioritas */}
          <WaitlistSection />
        </div>
      </main>

      {/* 12. Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
