import { motion } from 'framer-motion';

export function Kontakt() {
  return (
    <section id="kontakt" className="py-16 bg-[#FDFAF6] border-t border-[#E0C9B0]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="font-display text-lg text-[#1A1008] mb-3">Kontakt</h3>
            <div className="space-y-2 text-sm text-[#5A4B3C]">
              <p>
                <a href="tel:+4767904090" className="hover:text-[#8B5A3C] transition-colors">
                  (+47) 67 90 40 90
                </a>
              </p>
              <p>
                <a href="mailto:kontakt@lorenskogtannlege.no" className="hover:text-[#8B5A3C] transition-colors">
                  kontakt@lorenskogtannlege.no
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <h3 className="font-display text-lg text-[#1A1008] mb-3">Adresse</h3>
            <div className="text-sm text-[#5A4B3C] space-y-1">
              <p>Skårersletta 10</p>
              <p>1473 Lørenskog</p>
              <p className="text-xs text-[#8B5A3C] mt-2">Vis-a-vis Metro-senteret. Fri parkering.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <h3 className="font-display text-lg text-[#1A1008] mb-3">Åpningstider</h3>
            <div className="text-sm text-[#5A4B3C] space-y-1">
              <p>Mandag–fredag: hverdagstimer og kveld</p>
              <p>Helg: tilgjengelig for akutt</p>
              <p className="text-xs text-[#8B5A3C] mt-2">Ring for å sjekke neste ledige time.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
