import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { Pullquote } from '@/components/site/Pullquote';
import { SplitText } from '@/components/site/SplitText';
import { useT } from '@/i18n';

export default function Tannlegeskrekk() {
  const t = useT();

  const advice = [
    t.tannlegeskrekk.advice1,
    t.tannlegeskrekk.advice2,
    t.tannlegeskrekk.advice3,
    t.tannlegeskrekk.advice4,
    t.tannlegeskrekk.advice5,
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-32 md:pt-40 pb-16 md:pb-20">
        <Container size="lg">
          <Eyebrow>{t.tannlegeskrekk.eyebrow}</Eyebrow>
          <SplitText
            as="h1"
            unit="word"
            stagger={0.07}
            delay={0.15}
            italic={[1, 2]}
            className="font-display text-display-lg md:text-display-xl text-ink leading-[1.04] max-w-4xl"
          >
            {t.tannlegeskrekk.heroH1}
          </SplitText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
            className="mt-8 font-display italic text-lg md:text-xl text-ink/72 max-w-2xl leading-relaxed"
          >
            {t.tannlegeskrekk.heroSub}
          </motion.p>
        </Container>
      </section>

      {/* Hero image */}
      <section className="bg-bg">
        <Container size="lg">
          <motion.figure
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1.0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src="/images/try-tannlegeskrekk.jpeg"
              alt="Trygg behandling for pasienter med tannlegeskrekk"
              loading="eager"
              className="w-full aspect-[16/9] md:aspect-[16/7] object-cover object-[center_30%] transition-transform duration-1000 ease-out hover:scale-[1.02] [filter:saturate(1.05)_contrast(1.02)]"
            />
          </motion.figure>
        </Container>
      </section>

      {/* Body */}
      <section className="bg-bg py-24 md:py-36">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="prose-clinic space-y-6 text-ink-light"
          >
            <p>{t.tannlegeskrekk.body1}</p>
            <p>{t.tannlegeskrekk.body2}</p>
            <p>{t.tannlegeskrekk.body3}</p>
            <p>{t.tannlegeskrekk.body4}</p>
          </motion.div>
        </Container>
      </section>

      <Pullquote variant="ink" cite="Lørenskog Tannlegesenter">
        {t.tannlegeskrekk.pullquote}
      </Pullquote>

      {/* Sedation + Free consult */}
      <section className="bg-bg py-24 md:py-32">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-10 rounded-3xl bg-cream-100 border border-ink/8"
            >
              <Eyebrow className="!mb-3">01</Eyebrow>
              <h3 className="font-display text-2xl md:text-3xl text-ink italic mb-4">
                {t.tannlegeskrekk.sedationTitle}
              </h3>
              <p className="prose-clinic text-ink-light">
                {t.tannlegeskrekk.sedationBody}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-10 rounded-3xl bg-brand text-bg"
            >
              <Eyebrow tone="bg" className="!text-bg/55 !mb-3">02</Eyebrow>
              <h3 className="font-display text-2xl md:text-3xl text-bg italic mb-4">
                {t.tannlegeskrekk.freeConsultTitle}
              </h3>
              <p className="prose-clinic !text-bg/85">
                {t.tannlegeskrekk.freeConsultBody}
              </p>
              <a
                href="tel:+4767904090"
                className="inline-flex items-center gap-3 mt-8 px-5 h-11 rounded-full bg-bg text-ink font-mono text-[11px] uppercase tracking-[0.18em] tabular-nums hover:bg-accent transition-colors"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                67 90 40 90
              </a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Advice */}
      <section className="bg-cream-100 py-24 md:py-32 border-y border-ink/8">
        <Container size="lg">
          <Eyebrow>{t.tannlegeskrekk.adviceTitle}</Eyebrow>
          <h2 className="font-display text-display-md text-ink max-w-3xl leading-[1.1] mb-12 md:mb-16">
            {t.tannlegeskrekk.adviceTitle}
          </h2>
          <ol className="space-y-px bg-ink/8 rounded-2xl overflow-hidden">
            {advice.map((a, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-baseline gap-6 px-6 md:px-10 py-6 md:py-8 bg-cream-100 group/advice"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand/80 tabular-nums shrink-0 w-7">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-lg md:text-2xl text-ink leading-snug transition-transform duration-500 group-hover/advice:translate-x-1">
                  {a}
                </span>
              </motion.li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Helfo */}
      <section className="bg-bg py-24 md:py-36">
        <Container size="md">
          <Eyebrow>{t.tannlegeskrekk.helfoTitle}</Eyebrow>
          <h2 className="font-display text-display-md md:text-display-lg text-ink leading-[1.1] mb-10">
            Helfo dekker store deler av kostnadene.
          </h2>
          <div className="prose-clinic space-y-5 text-ink-light">
            <p>{t.tannlegeskrekk.helfoBody1}</p>
            <p>{t.tannlegeskrekk.helfoBody2}</p>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              to="/bestill"
              className="inline-flex items-center gap-3 px-7 h-12 rounded-full bg-brand text-bg font-sans text-sm font-medium hover:bg-ink transition-colors group/cta"
            >
              {t.common.bookATime}
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-1.5" strokeWidth={1.5} />
            </Link>
            <a
              href="tel:+4767904090"
              className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-ink/65 hover:text-ink transition-colors"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              {t.common.callUs} · 67 90 40 90
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
