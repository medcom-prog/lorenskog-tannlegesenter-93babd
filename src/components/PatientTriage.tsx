import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TriageOption = 'akutt' | 'skrekk' | 'rutine' | null;

export function PatientTriage() {
  const [selected, setSelected] = useState<TriageOption>(null);

  const options = [
    {
      id: 'akutt' as const,
      label: 'Akutt tannverk',
      sublabel: 'Time på dagen',
      description:
        'Ring oss direkte. Vi tilbyr akutt tannbehandling på dagen, også kveld og helg.',
      ctaLabel: 'Ring 67 90 40 90',
      ctaHref: 'tel:+4767904090',
      ctaSecLabel: 'Les om tannlegevakt',
      ctaSecHref: '#tannlegevakt',
      activeBg: '#8B5A3C',
      activeText: '#FAF6F0',
      activeAccent: '#D4A373',
      icon: '⚡',
    },
    {
      id: 'skrekk' as const,
      label: 'Redd for tannlegen',
      sublabel: 'Gratis konsultasjon',
      description:
        'Du trenger ikke ringe om det føles for mye. Skriv til oss i stedet. Vi svarer, og vi dømmer ikke.',
      ctaLabel: 'Skriv til oss',
      ctaHref: '#kontakt',
      ctaSecLabel: 'Les om tannlegeskrekk',
      ctaSecHref: '#tannlegeskrekk',
      activeBg: '#F0E2D0',
      activeText: '#1A1008',
      activeAccent: '#8B5A3C',
      icon: '🤝',
    },
    {
      id: 'rutine' as const,
      label: 'Rutinetime',
      sublabel: '30% rabatt (ny pasient)',
      description:
        'Første undersøkelse med 30% rabatt. Kvelds- og helgetimer tilgjengelig for deg som er opptatt på dagtid.',
      ctaLabel: 'Bestill time online',
      ctaHref: '#timebestilling',
      ctaSecLabel: 'Se priser',
      ctaSecHref: '#priser',
      activeBg: '#FAF6F0',
      activeText: '#1A1008',
      activeAccent: '#8B5A3C',
      icon: '📅',
    },
  ];

  const activeOption = options.find((o) => o.id === selected);

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
            Velg det som passer deg.
          </h2>
          <p className="mt-3 text-[#5A4B3C] max-w-md mx-auto text-sm">
            Vi viser deg riktig neste steg.
          </p>
        </motion.div>

        {/* Triage cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {options.map((opt, i) => {
            const isSelected = selected === opt.id;
            return (
              <motion.div
                key={opt.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(isSelected ? null : opt.id)}
                className={`relative text-left rounded-2xl p-6 border-2 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-[#8B5A3C] shadow-[0_4px_32px_rgba(139,90,60,0.18)]'
                    : 'border-[#E0C9B0] hover:border-[#D4A373] bg-[#FDFAF6]'
                }`}
                style={isSelected ? { background: opt.activeBg } : {}}
              >
                <span className="text-3xl mb-4 block">{opt.icon}</span>
                <h3
                  className="font-display text-xl font-medium mb-1 transition-colors"
                  style={{ color: isSelected ? opt.activeText : '#1A1008' }}
                >
                  {opt.label}
                </h3>
                <p
                  className="text-sm font-medium transition-colors"
                  style={{ color: isSelected ? opt.activeAccent : '#8B5A3C' }}
                >
                  {opt.sublabel}
                </p>

                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p
                        className="mt-3 text-sm leading-relaxed"
                        style={{ color: opt.activeText, opacity: 0.85 }}
                      >
                        {opt.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Action row — shown when a card is selected */}
        <AnimatePresence>
          {activeOption && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <a
                href={activeOption.ctaHref}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#8B5A3C] text-[#FAF6F0] font-semibold text-sm hover:bg-[#6B3A1C] transition-colors shadow-[0_4px_20px_rgba(139,90,60,0.25)]"
              >
                {activeOption.ctaLabel}
              </a>
              <a
                href={activeOption.ctaSecHref}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#8B5A3C] text-[#8B5A3C] font-medium text-sm hover:bg-[#F0E2D0] transition-colors"
              >
                {activeOption.ctaSecLabel}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
