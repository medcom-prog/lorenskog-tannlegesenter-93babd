import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { SplitText } from '@/components/site/SplitText';
import { useT } from '@/i18n';

export default function Behandlinger() {
  const t = useT();

  const treatments = [
    { num: '01', title: t.behandlinger.examination, body: t.behandlinger.examinationBody, tag: 'Rutine' },
    { num: '02', title: t.behandlinger.fillings, body: t.behandlinger.fillingsBody, tag: 'Behandling' },
    { num: '03', title: t.behandlinger.rootCanal, body: t.behandlinger.rootCanalBody, tag: 'Behandling' },
    { num: '04', title: t.behandlinger.crown, body: t.behandlinger.crownBody, tag: 'Estetikk' },
    { num: '05', title: t.behandlinger.bridge, body: t.behandlinger.bridgeBody, tag: 'Estetikk' },
    { num: '06', title: t.behandlinger.denture, body: t.behandlinger.dentureBody, tag: 'Behandling' },
    { num: '07', title: t.behandlinger.whitening, body: t.behandlinger.whiteningBody, tag: 'Estetikk' },
    { num: '08', title: t.behandlinger.extraction, body: t.behandlinger.extractionBody, tag: 'Behandling' },
  ];

  return (
    <>
      <section className="bg-bg pt-32 md:pt-40 pb-16 md:pb-24">
        <Container size="lg">
          <Eyebrow>{t.behandlinger.eyebrow}</Eyebrow>
          <SplitText
            as="h1"
            unit="word"
            stagger={0.085}
            delay={0.15}
            italic={[1]}
            className="font-display text-display-lg md:text-display-xl text-ink leading-[1.04] max-w-4xl"
          >
            {t.behandlinger.heroH1}
          </SplitText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: 'easeOut' }}
            className="mt-8 font-display italic text-lg md:text-xl text-ink/72 max-w-2xl leading-relaxed"
          >
            {t.behandlinger.heroSub}
          </motion.p>
        </Container>
      </section>

      <section className="bg-bg pb-32 md:pb-48">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-3xl overflow-hidden">
            {treatments.map((tr, i) => (
              <motion.article
                key={tr.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="bg-bg p-7 md:p-9 group/card hover:bg-cream-50 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                    {tr.num}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-cream-200 text-ink/70">
                    {tr.tag}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-ink italic mb-4">
                  {tr.title}
                </h2>
                <p className="font-sans text-sm text-ink-light leading-relaxed">{tr.body}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mt-14 md:mt-20 flex flex-wrap items-center justify-between gap-6 px-6"
          >
            <p className="font-display italic text-xl md:text-2xl text-ink max-w-md">
              Usikker på hva du trenger? Vi finner det ut sammen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/bestill"
                className="inline-flex items-center gap-2 px-7 h-12 rounded-full bg-brand text-bg font-sans text-sm font-medium hover:bg-ink transition-colors group/cta"
              >
                {t.common.bookATime}
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-1.5" strokeWidth={1.5} />
              </Link>
              <Link
                to="/priser"
                className="inline-flex items-center gap-2 px-7 h-12 rounded-full border border-ink/15 text-ink font-sans text-sm font-medium hover:bg-ink hover:text-bg transition-colors"
              >
                {t.nav.prices}
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
