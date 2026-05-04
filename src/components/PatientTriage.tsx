import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TriageOption = 'akutt' | 'skrekk' | 'rutine' | null;

export function PatientTriage() {
  const [selected, setSelected] = useState<TriageOption>(null);

  const options = [
    {
      id: 'akutt' as const,
      label: 'Akutt tannverk',
      sublabel: 'Nå — time på dagen',
      description:
        'Ring oss direkte. Vi tilbyr akutt tannbehandling på dagen, også kveld og helg.',
      cta: { label: 'Ring 67 90 40 90', href: 'tel:+4767904090' },
      ctaSecondary: { label: 'Les om tannlegevakt', href: '#tannlegevakt' },
      bg: '#8B5A3C',
      textColor: '#FAF6F0',
      accentColor: '#D4A373',
      icon: '⚡',
    },
    {
      id: 'skrekk' as const,
      label: 'Redd for tannlegen',
      sublabel: 'Gratis konsultasjon — ingen forpliktelse',
      description:
        'Du trenger ikke ringe om det føles for mye. Skriv til oss i stedet. Vi svarer, og vi dømmer ikke.',
      cta: { label: 'Skriv til oss', href: '#kontakt' },
      ctaSecondary: { label: 'Les om tannlegeskrekk', href: '#tannlegeskrekk' },
      bg: '#F0E2D0',
      textColor: '#1A1008',
      accentColor: '#8B5A3C',
      icon: '🤝',
    },
    {
      id: 'rutine' as const,
      label: 'Rutinetime',
      sublabel: 'Undersøkelse og rens',
      description:
        '30% rabatt på første undersøkelse. Kvelds- og helgetimer tilgjengelig for deg som er opptatt på dagtid.',
      cta: { label: 'Bestill time online', href: '#timebestilling' },
      ctaSecondary: { label: 'Se priser', href: '#priser' },
      bg: '#FAF6F0',
      textColor: '#1A1008',
      accentColor: '#8B5A3C',
      icon: '📅',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF6F0]" id="velg-besok">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#8B5A3C] mb-3">
            Hva gjelder det?
          </p>
          <h2 className="font-display text-display-lg text-[#1A1008]">
            Fortell oss litt om besøket.
          </h2>
          <p className="mt-3 text-[#5A4B3C] max-w-md mx-auto">
            Velg det som passer best — vi viser deg riktig neste steg.
          </p>
        </motion.div>

        {/* Triage cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {options.map((opt, i) => (
            <motion.button
              key={opt.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(selected === opt.id ? null : opt.id)}
              className={`relative text-left rounded-2xl p-6 border-2 transition-all duration-200 cursor-pointer ${
                selected === opt.id
                  ? 'border-[#8B5A3C] shadow-warm'
                  : 'border-[#E0C9B0] hover:border-[#D4A373]'
              }`}
              style={{
                background: selected === opt.id ? opt.bg : '#FDFAF6',
              }}
            >
              <span className="text-2xl mb-3 block">{opt.icon}</span>
              <h3
                className="font-display text-xl font-medium mb-1 transition-colors"
                style={{ color: selected === opt.id ? opt.textColor : '#1A1008' }}
              >
                {opt.label}
              </h3>
              <p
                className="text-sm font-medium transition-colors"
                style={{ color: selected === opt.id ? opt.accentColor : '#8B5A3C' }}
              >
                {opt.sublabel}
              </p>

              {selected === opt.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: opt.textColor, opacity: 0.85 }}>
                    {opt.description}
                  </p>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Expanded action */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              {options
                .filter((o) => o.id === selected)
                .map((opt) => (
                  <>
                    <a
                      key={`${opt.id}-primary`}
                      href={opt.cta.href}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#8B5A3C] text-[#FAF6F0] font-semibold text-sm hover:bg-[#6B3A1C] transition-colors shadow-warm"
                    >
                      {opt.cta.label}
                    </a>
                    <a
                      key={`${opt.id}-secondary`}
                      href={opt.ctaSecondary.href}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#8B5A3C] text-[#8B5A3C] font-medium text-sm hover:bg-[#F0E2D0] transition-colors"
                    >
                      {opt.ctaSecondary.label}
                    </a>
                  </>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
