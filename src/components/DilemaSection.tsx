import React from 'react';
import { Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const DilemaSection: React.FC = () => {
  const comparisons = [
    {
      id: 'desain',
      category: 'Desain Grafis',
      color: '#A7D948',
      dilema: 'Tanpa gambar makhluk bernyawa (manusia & hewan)',
      mitos: 'Sering dianggap kaku, membosankan, atau kehilangan daya tarik visual.',
      alternatif: 'Eksplorasi tipografi berkarakter kuat, kaligrafi kontemporer, pola geometri sakral Islam, ornamen arsitektur, dan komposisi ruang negatif.',
      hasil: 'Karya visual elegan, timeless, dan berwibawa tanpa melanggar batas syar\'i.',
    },
    {
      id: 'video',
      category: 'Video & Motion',
      color: '#FF531D',
      dilema: 'Penyuntingan video tanpa iringan instrumen musik',
      mitos: 'Dianggap sepi, hampa, atau audiens cepat bosan saat menonton.',
      alternatif: 'Fokus pada kekuatan narasi suara (voice over) yang berbobot, teks bergerak (kinetic typography), rekaman layar informatif, dan tata bunyi alami (foley/ambience halal).',
      hasil: 'Pesan tersampaikan jernih, menggetarkan akal dan hati, tanpa distraksi musik.',
    },
    {
      id: 'tulisan',
      category: 'Content Writing',
      color: '#21BFC1',
      dilema: 'Setiap dalil dan kutipan harus dicek shahih sumbernya',
      mitos: 'Terasa lambat, butuh riset panjang, dan takut salah mengutip.',
      alternatif: 'Alur kerja verifikasi sumber tsiqah, metode takhrij rujukan kitab, serta penyusunan naskah ringkas dan lugas yang menenangkan hati pembaca.',
      hasil: 'Tulisan yang kokoh hujjah-nya, berkah, dan membangun kepercayaan santri & umat.',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#071C33]/40 backdrop-blur-md border-t border-b border-[#D9DEE5]/15 overflow-hidden">

      <ScrollReveal className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF531D] mb-3">
            Dilema Kreator Muslim
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Ingin berkarya, tapi bingung batasannya?
          </h2>
          <p className="text-base sm:text-lg text-[#E8F1FB]/90 leading-relaxed">
            Desain tanpa gambar makhluk bernyawa. Video tanpa musik. Tulisan yang dalilnya harus dicek dulu. Kedengarannya ribet. Di sini, batasan itu justru jadi bahan belajar. Kamu tahu aturannya, dan kamu tahu alternatifnya.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {comparisons.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#02152b] border border-[#D9DEE5]/20 hover:border-[#A9CBEF]/50 transition-all duration-300 shadow-md shadow-[#071C33]/40"
            >
              <div>
                {/* Header label */}
                <div
                  className="text-xs font-semibold tracking-wider uppercase mb-3 text-[#A9CBEF]"
                >
                  {item.category}
                </div>

                {/* Tantangan / Dilema */}
                <div className="mb-5 pb-5 border-b border-[#D9DEE5]/15">
                  <div className="text-xs text-[#FFE9E2] font-medium mb-1">Kekhawatiran Umum:</div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {item.dilema}
                  </h3>
                  <p className="text-xs text-[#A9CBEF]/80 leading-relaxed">
                    {item.mitos}
                  </p>
                </div>

                {/* Alternatif Kreatif */}
                <div>
                  <div className="text-xs text-[#A9CBEF] font-semibold mb-1.5 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#E8F1FB]" />
                    <span>Solusi Teruji di HSICA:</span>
                  </div>
                  <p className="text-sm text-[#E8F1FB] leading-relaxed mb-4">
                    {item.alternatif}
                  </p>
                </div>
              </div>

              {/* Hasil Karya */}
              <div className="mt-5 border-t border-[#D9DEE5]/15 text-xs text-[#E8F1FB] bg-[#002042] border border-[#D9DEE5]/15 p-3 rounded-xl leading-relaxed">
                <span>{item.hasil}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};
