import { motion } from 'framer-motion';

// Warm modern dental clinic — NOT a doctor portrait, NOT a stethoscope photo
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1800&q=85&auto=format&fit=crop';

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end bg-[#FAF6F0] overflow-hidden"
      id="hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Warm gradient — cream paper effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, #FAF6F0 18%, rgba(250,246,240,0.78) 52%, rgba(250,246,240,0.15) 100%), linear-gradient(to right, rgba(250,246,240,0.88) 0%, rgba(250,246,240,0.48) 55%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pb-16 md:pb-24 pt-32 md:pt-36">
        <div className="max-w-2xl">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8B5A3C]/10 border border-[#8B5A3C]/20 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A3C] animate-pulse" />
            <span className="font-mono text-xs text-[#8B5A3C] tracking-wide">
              Lørenskog · Akutt hjelp tilgjengelig
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-xl text-[#1A1008] mb-5"
          >
            Tannbehandling
            <br />
            <em className="not-italic text-[#8B5A3C]">uten å vente.</em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#3D2C1E] text-lg leading-relaxed mb-8 max-w-lg"
          >
            Akutt time på dagen. Kvelds- og helgeåpent. Smertefri behandling
            for deg som er redd. Vis-a-vis Metro-senteret, Lørenskog.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3 items-center"
          >
            <a
              href="tel:+4767904090"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#8B5A3C] text-[#FAF6F0] font-semibold text-base hover:bg-[#6B3A1C] transition-colors duration-150"
              style={{ boxShadow: '0 4px 24px rgba(139,90,60,0.30)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              Ring 67 90 40 90
            </a>
            <a
              href="#timebestilling"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border-2 border-[#8B5A3C] text-[#8B5A3C] font-semibold text-base hover:bg-[#F0E2D0] transition-colors duration-150"
            >
              Bestill time online
            </a>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            {[
              '30% rabatt for nye pasienter',
              'Helfo dekker odontofobi',
              'Gratis konsultasjon',
            ].map((text) => (
              <span key={text} className="flex items-center gap-1.5 text-sm text-[#5A4B3C]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5A3C] inline-block shrink-0" />
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-[#8B5A3C]/35 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#8B5A3C]/55" />
        </motion.div>
      </motion.div>
    </section>
  );
}
