import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const treatments = [
  {
    n: '01',
    title: 'Tannlegevakt',
    tag: 'Akutt',
    lead: 'Akutt tannbehandling på dagen — også kveld og helg.',
    body: 'Mistede fyllinger, knekte tenner, infeksjoner, visdomstann. Du trenger ikke vente til hverdagen. Ring oss, og vi finner en løsning samme dag. Pris: vanligvis 700–3 500 kr. Akuttundersøkelse 690 kr.',
    href: '#tannlegevakt',
  },
  {
    n: '02',
    title: 'Tannlegeskrekk',
    tag: 'Spesialtilbud',
    lead: 'Smertefri behandling. Du bestemmer tempoet.',
    body: 'Vi tar oss god tid. Du kan stoppe behandlingen når som helst ved å løfte hånden. Konsultasjon, sedasjon og narkose er tilgjengelig. Helfo dekker store deler av kostnaden for deg med stor odontofobi. Gratis første konsultasjon.',
    href: '#tannlegeskrekk',
  },
  {
    n: '03',
    title: 'Undersøkelse',
    tag: 'Rutine',
    lead: 'Grundig undersøkelse med digitale røntgenbilder.',
    body: 'Vi setter av nok tid til å kartlegge munnhelsen din skikkelig — inkludert klinisk og røntgenologisk undersøkelse. Pris: 1 340 kr (inkl. røntgen, rens, polering, forebygging). 30% rabatt for nye pasienter.',
    href: '#timebestilling',
  },
  {
    n: '04',
    title: 'Fyllinger',
    tag: 'Behandling',
    lead: 'Fra enkle fyllinger til komplekse restaureringer.',
    body: '1 flate: 1 500 kr. 2 flater: 1 890 kr. 3+ flater: fra 2 100 kr. Midlertidig fylling 590 kr. Behandlingen er smertefri og utføres under lokalbedøvelse.',
    href: '#timebestilling',
  },
  {
    n: '05',
    title: 'Krone & bro',
    tag: 'Behandling',
    lead: 'Solid og holdbar løsning for tenner som mangler eller er skadet.',
    body: 'Tannkrone: 7 400–7 990 kr. Tannbro per ledd: 7 400 kr. Broen limes fast på nabotenner og ser ut som naturlige tenner. Behandlingen er smertefri og utføres under lokalbedøvelse.',
    href: '#timebestilling',
  },
  {
    n: '06',
    title: 'Tannbleking & estetikk',
    tag: 'Estetikk',
    lead: 'Tannbleking, porselensfasetter og estetiske behandlinger.',
    body: 'Tannbleking (2 kjever): 3 990 kr. Vi tilbyr også porselensfasetter for deg som ønsker en mer permanent estetisk forbedring. Uforpliktende konsultasjon er tilgjengelig.',
    href: '#timebestilling',
  },
  {
    n: '07',
    title: 'Rotfylling',
    tag: 'Behandling',
    lead: 'Redder tenner som ellers måtte trekkes.',
    body: 'Rotfylling fortann: fra 4 200 kr. Liten jeksel: fra 4 800 kr. Jeksel: fra 5 500 kr. Behandlingen er smertefri og utføres under lokalbedøvelse. Gratis konsultasjon ved stort behandlingsbehov.',
    href: '#timebestilling',
  },
  {
    n: '08',
    title: 'Tannprotese & tanntrekking',
    tag: 'Behandling',
    lead: 'Proteser og ekstraksjon utført skånsomt.',
    body: 'Tannprotese: fra 14 000 kr. Enkel tanntrekking: fra 1 890 kr. Komplisert tanntrekking: fra 2 600 kr. Periodontal tanntrekking: 890 kr. Vi gir alltid et eksakt kostnadsoverslag før behandlingsstart.',
    href: '#timebestilling',
  },
];

export function Behandlinger() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#FAF6F0]" id="behandlinger">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#8B5A3C] mb-3">
            (01) Behandlinger
          </p>
          <h2 className="font-display text-display-lg text-[#1A1008] max-w-xl">
            Alt du trenger.
            <br />
            <span className="italic">Ingenting du ikke trenger.</span>
          </h2>
        </motion.div>

        <div className="divide-y divide-[#E0C9B0]">
          {treatments.map((t, i) => (
            <motion.div
              key={t.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                className="w-full text-left py-5 flex items-start gap-4 group"
                onClick={() => setExpanded(expanded === t.n ? null : t.n)}
                aria-expanded={expanded === t.n}
              >
                <span className="font-mono text-xs text-[#8B5A3C] pt-1 shrink-0 w-7">{t.n}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display text-xl text-[#1A1008] group-hover:text-[#8B5A3C] transition-colors">
                      {t.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#F0E2D0] text-[#8B5A3C] text-xs font-medium">
                      {t.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#5A4B3C]">{t.lead}</p>

                  <AnimatePresence initial={false}>
                    {expanded === t.n && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-1">
                          <p className="text-sm text-[#3D2C1E] leading-relaxed mb-3">{t.body}</p>
                          <a
                            href={t.href}
                            className="inline-flex items-center text-sm font-semibold text-[#8B5A3C] hover:text-[#6B3A1C] transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Book time
                            <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div
                  animate={{ rotate: expanded === t.n ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 w-6 h-6 flex items-center justify-center text-[#8B5A3C] mt-0.5"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#timebestilling"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-[#8B5A3C] text-[#FAF6F0] font-semibold text-sm hover:bg-[#6B3A1C] transition-colors"
          >
            Bestill time
          </a>
          <a
            href="#priser"
            className="inline-flex items-center px-6 py-3 rounded-xl border border-[#8B5A3C] text-[#8B5A3C] font-medium text-sm hover:bg-[#F0E2D0] transition-colors"
          >
            Se full prisliste
          </a>
        </motion.div>
      </div>
    </section>
  );
}
