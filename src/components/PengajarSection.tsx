import React from 'react';
import { Palette, Film, Feather, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const PengajarSection: React.FC = () => {
  const mentors = [
    {
      initials: 'AM',
      name: 'Abu Maryam Pratama',
      role: 'Praktisi Desain & Identitas Visual HSI',
      bidang: 'Desain Grafis & Tipografi',
      color: '#A7D948',
      experience: '7+ tahun pengalaman desain grafis, koordinator tim visual materi dakwah HSI AbdullahRoy.',
      karya: 'Membuat ratusan poster kajian resmi, identitas visual program taklim, dan panduan tipografi syar\'i.',
      icon: Palette,
    },
    {
      initials: 'RH',
      name: 'Rizki Hanif Robbani',
      role: 'Lead Video Editor & Motion Graphics',
      bidang: 'Video & Audio Halal',
      color: '#FF531D',
      experience: '6+ tahun di industri video broadcast & motion dakwah, spesialis editing video tanpa instrumen musik.',
      karya: 'Menyunting seri video ringkas faedah HSI, rekaman taklim ilmiah, serta motion kinetic berirama suara narasi.',
      icon: Film,
    },
    {
      initials: 'UK',
      name: 'Umm Khalid Farhana',
      role: 'Redaktur Naskah & Takhrij Rujukan',
      bidang: 'Content Writing & Storytelling',
      color: '#21BFC1',
      experience: '5+ tahun penulis naskah edukasi Islam dan verifikator literatur keagamaan di komunitas santri.',
      karya: 'Menulis ratusan artikel renungan, caption edukatif viral tanpa clickbait, dan modul panduan belajar.',
      icon: Feather,
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#071C33]">
      <ScrollReveal className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF531D] mb-3">
            Praktisi & Pendamping
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Siapa yang mengajar
          </h2>
          <p className="text-base sm:text-xl text-[#E8F1FB]/90 leading-relaxed font-normal">
            Relawan profesional HSI dari bidang desain, video, dan penulisan. Mereka mengajarkan apa yang mereka kerjakan sehari-hari.
          </p>
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentors.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.name}
                className="p-8 rounded-2xl bg-[#02152b] border border-[#D9DEE5]/20 hover:border-[#A9CBEF]/50 transition-all duration-300 flex flex-col justify-between shadow-md shadow-[#071C33]/40"
              >
                <div>
                  {/* Monogram Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl border flex items-center justify-center font-display text-xl font-bold"
                      style={{
                        backgroundColor: `${m.color}20`,
                        borderColor: `${m.color}40`,
                        color: m.color,
                      }}
                    >
                      {m.initials}
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-[#002042] border border-[#D9DEE5]/15 flex items-center justify-center text-[#E8F1FB]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: m.color }}
                  >
                    {m.bidang}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{m.name}</h3>
                  <div className="text-xs text-[#A9CBEF] mb-4">{m.role}</div>

                  <p className="text-sm text-[#E8F1FB] leading-relaxed mb-6">
                    {m.experience}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#D9DEE5]/15 text-xs text-[#A9CBEF]">
                  <div className="text-[#E8F1FB] font-semibold mb-1">Kiprah Nyata di HSI:</div>
                  <p className="leading-relaxed">{m.karya}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
};
