import { motion } from 'framer-motion';

export function Reviews() {
  return (
    <section id="anmeldelser" className="py-20 md:py-24 bg-[#F0E2D0]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-4xl mx-auto">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#8B5A3C] mb-3">
              (06) Anmeldelser
            </p>
            <h2 className="font-display text-display-lg text-[#1A1008] mb-5">
              Hva pasienter
              <br />
              <span className="italic">sier om oss.</span>
            </h2>
            <p className="text-[#5A4B3C] leading-relaxed mb-6 text-sm">
              Vi henter anmeldelsene direkte fra Google, ufiltrerte. Du finner dem
              på vår Google-side.
            </p>
            <a
              href="https://www.google.com/search?q=Lørenskog+Tannlegesenter+anmeldelser"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1A1008] text-[#FAF6F0] font-semibold text-sm hover:bg-[#3D2C1E] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#D4A373" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#D4A373"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#D4A373"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#D4A373"/>
              </svg>
              Se anmeldelser på Google
            </a>
          </motion.div>

          {/* Right: callout card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-3xl bg-[#FAF6F0] p-8 border border-[#E0C9B0]">
              <p className="font-display text-4xl text-[#8B5A3C] mb-2">
                Ekte anmeldelser.
              </p>
              <p className="text-sm text-[#5A4B3C] leading-relaxed mb-6">
                Vi viser ikke fabricerte stjerner eller oppfunnede sitater.
                Gå til Google og les hva pasienter faktisk skriver.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#D4A373" aria-hidden="true">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#5A4B3C]">via Google</span>
              </div>
              <p className="mt-3 text-xs text-[#8B5A3C] italic">
                "De fleste er redd for å ta det første steget å ringe
                til et tannlegekontor." — Det vet vi. Det er derfor vi
                finnes.
              </p>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl bg-[#8B5A3C] opacity-20"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
