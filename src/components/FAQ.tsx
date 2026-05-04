import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Kan jeg komme uten timeavtale ved akutt tannverk?',
    a: 'Ring oss på 67 90 40 90 og vi finner deg en tid samme dag. Vi har kvelds- og helgetimer tilgjengelig for akuttpasienter.',
  },
  {
    q: 'Hva om jeg er veldig redd for tannlegen?',
    a: 'Du trenger ikke ringe om det føles for mye. Send oss en e-post til kontakt@lorenskogtannlege.no — vi svarer og planlegger et møte i ditt tempo. Vi tilbyr gratis konsultasjon for pasienter med stor tannlegeskrekk og høyt behandlingsbehov.',
  },
  {
    q: 'Dekker Helfo behandlingen min?',
    a: 'Helfo dekker store deler av behandlingskostnadene for pasienter med stor tannlegeskrekk (odontofobi). Vi hjelper deg gjennom søknadsprosessen. For ordinær tannbehandling gjelder vanlige Helfo-satser.',
  },
  {
    q: 'Hvor mye koster akutt tannbehandling?',
    a: 'Akuttundersøkelse koster 690 kr. Total behandling er typisk mellom 700 og 3 500 kr, avhengig av hva som trengs. Du får alltid et eksakt kostnadsoverslag før vi begynner.',
  },
  {
    q: 'Tilbyr dere kvelds- og helgetimer?',
    a: 'Ja. Vi har kveldsåpent og tar i mot pasienter i helgene — både for rutine og akuttbehandling. Ring 67 90 40 90 for å sjekke tilgjengelighet.',
  },
  {
    q: 'Finnes det rabatter?',
    a: 'Ja: 30% rabatt på første undersøkelse for nye pasienter. 10% rabatt for pensjonister og studenter. Gratis konsultasjon for pasienter med stor tannlegeskrekk og høyt behandlingsbehov.',
  },
  {
    q: 'Hva er avbestillingsreglene?',
    a: 'Avbestilling må skje senest 24 timer før timen. Avbestilling med kortere varsel belastes med 75% av honoraret (tilsvarer 1 500 kr/time).',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF6F0]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#8B5A3C] mb-3">
            (07) Spørsmål og svar
          </p>
          <h2 className="font-display text-display-lg text-[#1A1008]">
            Vanlige spørsmål.
          </h2>
        </motion.div>

        <div className="divide-y divide-[#E0C9B0]">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <button
                className="w-full text-left py-5 flex items-start gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="flex-1 font-medium text-[#1A1008] group-hover:text-[#8B5A3C] transition-colors text-sm md:text-base">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 w-6 h-6 flex items-center justify-center text-[#8B5A3C] mt-0.5"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-[#3D2C1E] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
