import { motion } from 'framer-motion';

const CLINIC_IMAGE =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop';

export function OmOss() {
  return (
    <section id="om-oss" className="py-20 md:py-28 bg-[#FDFAF6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src={CLINIC_IMAGE}
                alt="Lørenskog Tannlegesenter — moderne og hyggelige omgivelser"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 p-4 rounded-2xl bg-[#8B5A3C] shadow-warm max-w-[200px]"
            >
              <p className="font-display text-xl text-[#D4A373]">Fri parkering</p>
              <p className="text-xs text-[#F0E2D0]/80 mt-1">
                Vis-a-vis Metro-senteret
              </p>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#8B5A3C] mb-3">
              (05) Om oss
            </p>
            <h2 className="font-display text-display-lg text-[#1A1008] mb-5">
              Moderne klinikk.
              <br />
              <span className="italic">Hyggelige omgivelser.</span>
            </h2>
            <p className="text-[#3D2C1E] leading-relaxed mb-4">
              Lørenskog Tannlegesenter er en velutstyrt og moderne tannklinikk
              beliggende ved Lørenskog/Solheim, rett over for Metro-senteret.
            </p>
            <p className="text-[#3D2C1E] leading-relaxed mb-4">
              Vi tilbyr alle typer tannbehandlinger, inkludert estetiske
              behandlinger som krone, bro, porselensfasetter og tannbleking. Vi
              lytter til deg og dine behov.
            </p>
            <p className="text-[#3D2C1E] leading-relaxed mb-8">
              Vi tilbyr kvelds- og helgetimer og tar gjerne imot nye pasienter.
              Målet vårt er fornøyde pasienter. Det søker vi å oppnå ved
              kvalitet i alle deler av tannbehandlingen.
            </p>

            <div className="space-y-3">
              {[
                { label: 'Adresse', value: 'Skårersletta 10, 1473 Lørenskog' },
                { label: 'Telefon', value: '67 90 40 90', href: 'tel:+4767904090' },
                { label: 'E-post', value: 'kontakt@lorenskogtannlege.no', href: 'mailto:kontakt@lorenskogtannlege.no' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 text-sm">
                  <span className="font-medium text-[#8B5A3C] w-20 shrink-0">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="text-[#1A1008] hover:text-[#8B5A3C] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[#1A1008]">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
