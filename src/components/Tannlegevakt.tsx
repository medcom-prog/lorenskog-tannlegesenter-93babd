import { motion } from 'framer-motion';

export function Tannlegevakt() {
  return (
    <section id="tannlegevakt" className="py-20 md:py-28 bg-[#F0E2D0]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#8B5A3C] mb-3">
              (03) Tannlegevakt
            </p>
            <h2 className="font-display text-display-lg text-[#1A1008] mb-5">
              Vondt nå?
              <br />
              <span className="italic">Vi har time i dag.</span>
            </h2>
            <p className="text-[#3D2C1E] leading-relaxed mb-4 max-w-md">
              Lørenskog Tannlegevakt ligger i samme lokaler som Lørenskog
              Tannlegesenter. Vi tilbyr akutt tannbehandling på dagen — inkludert
              kvelder og helg.
            </p>
            <p className="text-[#3D2C1E] leading-relaxed mb-6 max-w-md">
              Mistede fyllinger, knekte tenner, infeksjon, vond visdomstann. Du
              får alltid et eksakt kostnadsoverslag før behandlingen starter.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="tel:+4767904090"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8B5A3C] text-[#FAF6F0] font-semibold hover:bg-[#6B3A1C] transition-colors shadow-warm"
              >
                Ring 67 90 40 90
              </a>
            </div>

            {/* Price callout */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E0C9B0]">
                <p className="font-display text-2xl text-[#8B5A3C]">690 kr</p>
                <p className="text-xs text-[#5A4B3C] mt-0.5">Akuttundersøkelse</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E0C9B0]">
                <p className="font-display text-2xl text-[#8B5A3C]">700–3 500 kr</p>
                <p className="text-xs text-[#5A4B3C] mt-0.5">Typisk totalbehandling</p>
              </div>
            </div>
          </motion.div>

          {/* Right: situations */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            <p className="text-sm font-medium text-[#5A4B3C] mb-4">
              Typiske akuttbesøk:
            </p>
            {[
              'Mistet en fylling',
              'Knekt en bit av tannen',
              'Akutt betennelse i tann eller tannkjøtt',
              'Vond visdomstann',
              'Tannbyll',
              'Kraftig tannverk som ikke gir seg',
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF6F0] border border-[#E0C9B0]"
              >
                <span className="w-2 h-2 rounded-full bg-[#8B5A3C] shrink-0" />
                <span className="text-sm text-[#1A1008]">{item}</span>
              </motion.div>
            ))}

            <div className="mt-4 p-4 rounded-2xl bg-[#8B5A3C] text-[#FAF6F0]">
              <p className="text-sm font-semibold mb-1">Sentralt beliggenhet</p>
              <p className="text-xs text-[#D4A373]">
                Vis-a-vis Metro-senteret, Skårersletta 10, Lørenskog.
                Fri parkering. Kort vei fra Lillestrøm, Rælingen, Skedsmo og Rasta.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
