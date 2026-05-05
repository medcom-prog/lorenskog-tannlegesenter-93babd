import { motion } from 'framer-motion';
import { Phone, MapPin, AlertCircle } from 'lucide-react';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { SplitText } from '@/components/site/SplitText';
import { useT } from '@/i18n';

export default function Tannlegevakt() {
  const t = useT();

  return (
    <>
      <section className="relative bg-ink text-bg pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
            <div className="md:col-span-7">
              <Eyebrow tone="bg" className="!text-accent">{t.tannlegevakt.eyebrow}</Eyebrow>
              <SplitText
                as="h1"
                unit="word"
                stagger={0.085}
                delay={0.15}
                italic={[2, 3, 4, 5]}
                className="font-display text-display-lg md:text-display-xl text-bg leading-[1.04]"
              >
                {t.tannlegevakt.heroH1}
              </SplitText>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
                className="mt-8 font-display italic text-lg md:text-xl text-bg/75 max-w-xl leading-relaxed"
              >
                {t.tannlegevakt.heroSub}
              </motion.p>
            </div>
            <motion.a
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
              href="tel:+4767904090"
              className="md:col-span-5 inline-flex items-center justify-between gap-4 px-7 py-7 rounded-3xl bg-accent text-ink hover:bg-bg transition-colors"
            >
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55 mb-2">
                  {t.common.callUs}
                </span>
                <span className="block font-display text-3xl md:text-4xl text-ink tabular-nums">
                  67 90 40 90
                </span>
              </span>
              <span className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-ink text-bg shrink-0">
                <Phone className="h-5 w-5" strokeWidth={1.75} />
              </span>
            </motion.a>
          </div>
        </Container>
      </section>

      {/* Body + typical visits */}
      <section className="bg-bg py-24 md:py-36">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-7 prose-clinic space-y-6 text-ink-light"
            >
              <p>{t.tannlegevakt.body1}</p>
              <p>{t.tannlegevakt.body2}</p>
              <p className="text-ink font-medium">{t.tannlegevakt.body3}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-5"
            >
              <Eyebrow>{t.tannlegevakt.typicalTitle}</Eyebrow>
              <ul className="space-y-px bg-ink/8 rounded-2xl overflow-hidden">
                {[
                  t.tannlegevakt.typical1,
                  t.tannlegevakt.typical2,
                  t.tannlegevakt.typical3,
                  t.tannlegevakt.typical4,
                  t.tannlegevakt.typical5,
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3 px-5 py-4 bg-cream-50"
                  >
                    <AlertCircle className="h-4 w-4 text-brand shrink-0" strokeWidth={1.5} />
                    <span className="font-sans text-base text-ink">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="bg-cream-100 py-20 md:py-28 border-y border-ink/8">
        <Container size="md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <Eyebrow>{t.tannlegevakt.pricingTitle}</Eyebrow>
              <p className="font-display text-display-md text-brand leading-none">
                700–3 500
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55 mt-2">
                NOK · veiledende
              </p>
            </div>
            <div className="md:col-span-8 prose-clinic text-ink-light md:pt-2">
              <p>{t.tannlegevakt.pricingBody}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="bg-bg py-24 md:py-32">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow>{t.tannlegevakt.locationTitle}</Eyebrow>
              <h2 className="font-display text-display-md text-ink leading-[1.1] mb-6">
                Skårersletta 10, Lørenskog.
              </h2>
              <p className="prose-clinic text-ink-light">
                {t.tannlegevakt.locationBody}
              </p>
              <a
                href="https://maps.google.com/?q=Skårersletta+10,+1473+Lørenskog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-brand hover:text-ink transition-colors"
              >
                <MapPin className="h-4 w-4" strokeWidth={1.5} />
                Åpne i Google Maps
              </a>
            </motion.div>
            <motion.figure
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1.0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src="/images/try-undersokelse.jpeg"
                alt="Lørenskog Tannlegevakt — klinikk"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-1000 ease-out hover:scale-[1.04] [filter:saturate(1.08)_contrast(1.05)]"
              />
            </motion.figure>
          </div>
        </Container>
      </section>
    </>
  );
}
