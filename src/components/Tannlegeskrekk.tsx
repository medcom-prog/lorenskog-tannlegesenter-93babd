import { motion } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Du trenger ikke ringe.',
    body: 'Send oss en e-post eller bruk kontaktskjemaet. Vi svarer, og vi dømmer ikke. Det er ingen forpliktelse i å ta kontakt.',
  },
  {
    n: '02',
    title: 'Gratis konsultasjon.',
    body: 'Kom innom og møt oss. Ingen behandling, ingen boret — bare en samtale om hva du er redd for og hva vi kan gjøre annerledes.',
  },
  {
    n: '03',
    title: 'Du bestemmer tempoet.',
    body: 'Løft hånden når som helst og vi stopper. Vi informerer deg om hvert steg. Sedasjon og narkose er tilgjengelig om du trenger det.',
  },
  {
    n: '04',
    title: 'Helfo betaler.',
    body: 'Har du stor tannlegeskrekk (odontofobi)? Helfo dekker store deler av behandlingskostnadene. Vi hjelper deg å søke.',
  },
];

export function Tannlegeskrekk() {
  return (
    <section
      id="tannlegeskrekk"
      className="py-20 md:py-28 bg-[#1A1008] relative overflow-hidden"
    >
      {/* Warm texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 30% 50%, #D4A373 0%, transparent 60%), radial-gradient(circle at 80% 20%, #8B5A3C 0%, transparent 50%)',
      }} />

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#D4A373] mb-4">
              (02) Tannlegeskrekk
            </p>
            <h2 className="font-display text-display-lg text-[#FAF6F0] mb-5">
              Mellom 5 og 10%
              <br />
              <span className="italic text-[#D4A373]">er redd, som deg.</span>
            </h2>
            <p className="text-[#C4A882] leading-relaxed mb-6 max-w-sm">
              De fleste venter lenge før de ringer. Vi vet det. Derfor har vi
              gjort det mulig å ta det første steget uten å ringe.
            </p>
            <p className="text-[#C4A882] leading-relaxed mb-8 max-w-sm">
              Vi har lang erfaring med pasienter som oss. Gjennom konsultasjon,
              informasjon og smertefri behandling sørger vi for at du kan
              komme tilbake.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-[#D4A373] text-[#1A1008] font-semibold text-sm hover:bg-[#C49060] transition-colors"
              >
                Skriv til oss
              </a>
              <a
                href="tel:+4767904090"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-[#D4A373]/40 text-[#D4A373] font-medium text-sm hover:border-[#D4A373] transition-colors"
              >
                Ring 67 90 40 90
              </a>
            </div>

            {/* Helfo callout */}
            <div className="mt-8 p-4 rounded-2xl bg-[#D4A373]/10 border border-[#D4A373]/20">
              <p className="text-sm text-[#D4A373] font-medium">
                Helfo-refusjon for odontofobi
              </p>
              <p className="text-xs text-[#C4A882] mt-1 leading-relaxed">
                Har du stor tannlegeskrekk? Helfo dekker store deler av
                behandlingskostnadene. Vi hjelper deg gjennom søknadsprosessen.
              </p>
            </div>
          </motion.div>

          {/* Right: steps */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4"
              >
                <span className="font-mono text-xs text-[#D4A373]/60 pt-1 shrink-0 w-7">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-lg text-[#FAF6F0] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#7A6555] leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
