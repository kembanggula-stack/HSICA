import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Send, Sparkles, User, Mail, Compass, HelpCircle, Copy, Share2, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface WaitlistEntry {
  id: string;
  name: string;
  contact: string;
  field: string;
  source: string;
  timestamp: string;
}

export const WaitlistSection: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [field, setField] = useState('Desain');
  const [source, setSource] = useState('Instagram HSICA');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<WaitlistEntry | null>(null);
  const [copied, setCopied] = useState(false);
  const [totalCount, setTotalCount] = useState(342);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('hsica_waitlist');
      if (stored) {
        const parsed = JSON.parse(stored) as WaitlistEntry[];
        setTotalCount(342 + parsed.length);
      }
    } catch (e) {
      // Ignore
    }
  }, [submittedData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newEntry: WaitlistEntry = {
        id: `HSICA-${Math.floor(1000 + Math.random() * 9000)}`,
        name: name.trim(),
        contact: contact.trim(),
        field,
        source,
        timestamp: new Date().toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      };

      try {
        const existing = JSON.parse(localStorage.getItem('hsica_waitlist') || '[]');
        localStorage.setItem('hsica_waitlist', JSON.stringify([...existing, newEntry]));
      } catch (err) {
        // localStorage fallback
      }

      setSubmittedData(newEntry);
      setIsSubmitting(false);
    }, 600);
  };

  const handleCopyId = () => {
    if (!submittedData) return;
    navigator.clipboard.writeText(`Tiket Daftar Tunggu HSICA: ${submittedData.id} a.n ${submittedData.name}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setName('');
    setContact('');
    setSubmittedData(null);
  };

  return (
    <section id="daftar-tunggu" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#02152b] border-t border-[#D9DEE5]/15">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#A9CBEF]/10 blur-[140px] rounded-full pointer-events-none" />

      <ScrollReveal className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF531D] mb-3">
            Pendaftaran Awal
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Kabari saya saat kelas dibuka
          </h2>
          <p className="text-base sm:text-lg text-[#E8F1FB]/90 max-w-xl mx-auto leading-relaxed">
            Isi data singkat. Kami kabari begitu pendaftaran dibuka, pelan-pelan dulu, biar matang.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#A9CBEF]">
            <span className="w-2 h-2 rounded-full bg-[#FFE9E2]" />
            <span>{totalCount} calon peserta telah mendaftar daftar tunggu</span>
          </div>
        </div>

        {/* Content Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#000e1f] border border-[#D9DEE5]/20 backdrop-blur-xl shadow-2xl shadow-[#071C33]/60">
          <AnimatePresence mode="wait">
            {!submittedData ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Nama */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#E8F1FB] uppercase tracking-wider mb-2">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Abdullah Pratama"
                      className="w-full px-4 py-3.5 pl-11 rounded-xl bg-[#002042]/30 border border-[#D9DEE5]/25 text-white placeholder-[#A9CBEF]/60 focus:outline-none focus:border-[#A9CBEF] focus:ring-1 focus:ring-[#A9CBEF] transition-all text-sm"
                    />
                    <User className="w-4 h-4 text-[#A9CBEF] absolute left-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* WhatsApp atau Email */}
                <div>
                  <label htmlFor="contact" className="block text-xs font-semibold text-[#E8F1FB] uppercase tracking-wider mb-2">
                    WhatsApp atau Email
                  </label>
                  <div className="relative">
                    <input
                      id="contact"
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Contoh: 08123456789 atau email@domain.com"
                      className="w-full px-4 py-3.5 pl-11 rounded-xl bg-[#002042]/30 border border-[#D9DEE5]/25 text-white placeholder-[#A9CBEF]/60 focus:outline-none focus:border-[#A9CBEF] focus:ring-1 focus:ring-[#A9CBEF] transition-all text-sm"
                    />
                    <Mail className="w-4 h-4 text-[#A9CBEF] absolute left-4 top-1/2 -translate-y-1/2" />
                  </div>
                  <p className="text-[11px] text-[#A9CBEF]/90 mt-1.5">
                    Kami menghormati privasimu. Kontak hanya digunakan untuk pengumuman jadwal dan link kelas HSICA.
                  </p>
                </div>

                {/* Bidang yang diminati */}
                <div>
                  <label className="block text-xs font-semibold text-[#E8F1FB] uppercase tracking-wider mb-2">
                    Bidang yang Diminati
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {['Desain', 'Video', 'Content Writing', 'Belum tahu'].map((opt) => {
                      const isSelected = field === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setField(opt)}
                          className={`py-3 px-3 rounded-xl border text-xs font-medium transition-all cursor-pointer whitespace-nowrap truncate ${
                            isSelected
                              ? 'bg-slate-700 border-slate-400 text-white font-semibold shadow-sm'
                              : 'bg-[#02152b] border-[#D9DEE5]/20 text-[#E8F1FB] hover:text-white hover:border-[#A9CBEF]/40'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Tahu HSICA dari mana? */}
                <div>
                  <label className="block text-xs font-semibold text-[#E8F1FB] uppercase tracking-wider mb-2">
                    Tahu HSICA dari mana?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {['Instagram HSICA', 'Akun HSI', 'Teman', 'Lainnya'].map((opt) => {
                      const isSelected = source === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSource(opt)}
                          className={`py-3 px-3 rounded-xl border text-xs font-medium transition-all cursor-pointer whitespace-nowrap truncate ${
                            isSelected
                              ? 'bg-slate-700 border-slate-400 text-white font-semibold shadow-sm'
                              : 'bg-[#02152b] border-[#D9DEE5]/20 text-[#A9CBEF] hover:text-white hover:border-[#A9CBEF]/40'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl text-sm font-semibold text-white bg-[#297dd5] hover:bg-[#1f6cbd] active:bg-[#e04513] shadow-lg shadow-[#297dd5]/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  {isSubmitting ? (
                    <span>Menyimpan data...</span>
                  ) : (
                    <>
                      <span>Kabari saya</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#E8F1FB]/15 border border-[#A9CBEF]/40 flex items-center justify-center text-[#E8F1FB] mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#A9CBEF]" />
                </div>

                <div className="text-xs font-semibold text-[#A9CBEF] uppercase tracking-wider mb-2">
                  Pendaftaran Daftar Tunggu Berhasil
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Jazakallahu Khairan, {submittedData.name}!
                </h3>
                <p className="text-sm text-[#E8F1FB] max-w-md mx-auto leading-relaxed mb-8">
                  Data antreanmu sudah tersimpan dengan aman. Begitu jadwal kelas uji coba November 2026 dibuka, kamu akan menerima pesan prioritas di <span className="text-white font-semibold">{submittedData.contact}</span>.
                </p>

                {/* Virtual Priority Ticket Card */}
                <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#002042] border border-[#D9DEE5]/25 text-left relative overflow-hidden mb-8 shadow-xl">
                  <div className="flex items-center justify-between border-b border-[#D9DEE5]/15 pb-4 mb-4">
                    <img
                      src="/assets/aistudio/HSICA_logo_horizontal_negatif_990ddd92.svg"
                      alt="HSI Creative Academy"
                      className="h-8 w-auto object-contain"
                    />
                    <span className="font-mono text-sm font-bold text-[#FF531D]">
                      {submittedData.id}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                    <div>
                      <span className="text-[#A9CBEF] block text-[11px]">Nama:</span>
                      <span className="text-white font-medium">{submittedData.name}</span>
                    </div>
                    <div>
                      <span className="text-[#A9CBEF] block text-[11px]">Peminatan:</span>
                      <span className="text-white font-medium">{submittedData.field}</span>
                    </div>
                    <div>
                      <span className="text-[#A9CBEF] block text-[11px]">Periode Mulai:</span>
                      <span className="text-white font-medium">November 2026</span>
                    </div>
                    <div>
                      <span className="text-[#A9CBEF] block text-[11px]">Status:</span>
                      <span className="text-[#E8F1FB] font-medium">Terverifikasi</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyId}
                    className="w-full py-2.5 px-3 rounded-lg bg-[#E8F1FB]/10 hover:bg-[#E8F1FB]/20 border border-[#D9DEE5]/20 text-xs font-medium text-[#E8F1FB] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#FFE9E2]" />
                    <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Kode Tiket'}</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Daftarkan nama lain
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ScrollReveal>
    </section>
  );
};
