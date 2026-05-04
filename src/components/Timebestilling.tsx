import { motion } from 'framer-motion';

export function Timebestilling() {
  return (
    <section id="timebestilling" className="py-20 md:py-28 bg-[#8B5A3C]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#D4A373] mb-3">
              (08) Timebestilling
            </p>
            <h2 className="font-display text-display-lg text-[#FAF6F0] mb-4">
              Bestill time.
              <br />
              <span className="italic text-[#D4A373]">Vi svarer i dag.</span>
            </h2>
            <p className="text-[#F0E2D0]/80 leading-relaxed mb-8">
              Fyll ut skjemaet, eller ring oss direkte. Kvelds- og helgetimer
              tilgjengelig.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+4767904090"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF6F0]/10 hover:bg-[#FAF6F0]/20 transition-colors"
                aria-label="Ring oss på 67 90 40 90"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4A373] flex items-center justify-center shrink-0" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1008" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#FAF6F0]">67 90 40 90</p>
                  <p className="text-xs text-[#D4A373]">Ring oss direkte</p>
                </div>
              </a>

              <a
                href="mailto:kontakt@lorenskogtannlege.no"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF6F0]/10 hover:bg-[#FAF6F0]/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4A373] flex items-center justify-center shrink-0" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1008" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#FAF6F0]">kontakt@lorenskogtannlege.no</p>
                  <p className="text-xs text-[#D4A373]">Send oss en e-post</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#FAF6F0] rounded-3xl p-6 md:p-8"
          >
            <h3 className="font-display text-xl text-[#1A1008] mb-6">
              Send oss en forespørsel
            </h3>
            <form
              onSubmit={(e) => { e.preventDefault(); }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="booking-fornavn" className="block text-xs font-medium text-[#5A4B3C] mb-1.5">
                    Fornavn
                  </label>
                  <input
                    id="booking-fornavn"
                    type="text"
                    placeholder="Kari"
                    autoComplete="given-name"
                    className="w-full px-4 py-3 rounded-xl border border-[#E0C9B0] bg-white text-[#1A1008] text-sm placeholder-[#C4A882] focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]/40 focus:border-[#8B5A3C] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="booking-etternavn" className="block text-xs font-medium text-[#5A4B3C] mb-1.5">
                    Etternavn
                  </label>
                  <input
                    id="booking-etternavn"
                    type="text"
                    placeholder="Nordmann"
                    autoComplete="family-name"
                    className="w-full px-4 py-3 rounded-xl border border-[#E0C9B0] bg-white text-[#1A1008] text-sm placeholder-[#C4A882] focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]/40 focus:border-[#8B5A3C] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-telefon" className="block text-xs font-medium text-[#5A4B3C] mb-1.5">
                  Telefon
                </label>
                <input
                  id="booking-telefon"
                  type="tel"
                  placeholder="+47 000 00 000"
                  autoComplete="tel"
                  className="w-full px-4 py-3 rounded-xl border border-[#E0C9B0] bg-white text-[#1A1008] text-sm placeholder-[#C4A882] focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]/40 focus:border-[#8B5A3C] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="booking-type" className="block text-xs font-medium text-[#5A4B3C] mb-1.5">
                  Type besøk
                </label>
                <select
                  id="booking-type"
                  className="w-full px-4 py-3 rounded-xl border border-[#E0C9B0] bg-white text-[#1A1008] text-sm focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]/40 focus:border-[#8B5A3C] transition-colors"
                >
                  <option value="">Velg type</option>
                  <option>Akutt / tannlegevakt</option>
                  <option>Undersøkelse (ny pasient)</option>
                  <option>Undersøkelse (eksisterende pasient)</option>
                  <option>Tannlegeskrekk — gratis konsultasjon</option>
                  <option>Fylling</option>
                  <option>Rotfylling</option>
                  <option>Krone / bro</option>
                  <option>Tannbleking</option>
                  <option>Annet</option>
                </select>
              </div>

              <div>
                <label htmlFor="booking-melding" className="block text-xs font-medium text-[#5A4B3C] mb-1.5">
                  Melding (valgfri)
                </label>
                <textarea
                  id="booking-melding"
                  rows={3}
                  placeholder="Beskriv kort hva det gjelder..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E0C9B0] bg-white text-[#1A1008] text-sm placeholder-[#C4A882] focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]/40 focus:border-[#8B5A3C] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#8B5A3C] text-[#FAF6F0] font-semibold text-sm hover:bg-[#6B3A1C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5A3C] focus:ring-offset-2"
              >
                Send forespørsel
              </button>
              <p className="text-xs text-center text-[#7A6555]">
                Eller ring oss direkte:{' '}
                <a href="tel:+4767904090" className="text-[#8B5A3C] hover:underline font-medium">
                  67 90 40 90
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
