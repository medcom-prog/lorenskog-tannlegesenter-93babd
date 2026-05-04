import { motion } from 'framer-motion';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1400&q=80&auto=format&fit=crop';

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end bg-[#FAF6F0] pt-16 overflow-hidden"
      id="hero"
    >
      {/* Background image — warm clinical interior, not a doctor portrait */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Warm gradient overlay — cream paper effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-[#FAF6F0]/70 to-[#FAF6F0]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/80 via-[#FAF6F0]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pb-16 md:pb-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-xs uppercase tracking-[0.18em] text-[#8B5A3C] mb-4"
          >
            Lørenskog · Akutt hjelp, kort ventetid
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-xl text-[#1A1008] mb-5 leading-[1.05]"
          >
            Tannbehandling
            <br />
            <span className="italic text-[#8B5A3C]">uten å vente.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#3D2C1E] text-lg leading-relaxed mb-8 max-w-lg"
          >
            Akutt time på dagen. Kvelds- og helgeåpent. Smertefri behandling for
            deg som er redd. Vis-a-vis Metro-senteret med fri parkering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3 items-center"
          >
            <a
              href="tel:+4767904090"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8B5A3C] text-[#FAF6F0] font-semibold text-base hover:bg-[#6B3A1C] transition-colors duration-150 shadow-warm"
            >
              Ring 67 90 40 90
            </a>
            <a
              href="#timebestilling"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#8B5A3C] text-[#8B5A3C] font-semibold text-base hover:bg-[#F0E2D0] transition-colors duration-150"
            >
              Bestill time online
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#5A4B3C]"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A3C] inline-block" />
              30% rabatt for nye pasienter
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A3C] inline-block" />
              Helfo dekker odontofobi-behandling
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A3C] inline-block" />
              Gratis konsultasjon ved stort behandlingsbehov
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-[#8B5A3C]/40 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#8B5A3C]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
