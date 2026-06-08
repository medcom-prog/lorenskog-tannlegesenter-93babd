import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ClipboardCheck,
  Wrench,
  HeartPulse,
  Crown,
  Link2,
  Layers,
  Sparkles,
  Scissors,
  MessageSquare,
  FileText,
  ShieldCheck,
  CalendarCheck,
  Phone,
} from 'lucide-react';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { SplitText } from '@/components/site/SplitText';
import { useT } from '@/i18n';

export default function Behandlinger() {
  const t = useT();

  // Featured (Undersøkelse) — gets its own card up top
  const featured = {
    icon: ClipboardCheck,
    duration: '45–60 min',
  };

  // Reparasjon — fillings, rotfylling, tanntrekking, tannprotese
  const repairTreatments = [
    { num: '01', icon: Wrench, title: t.behandlinger.fillings, body: t.behandlinger.fillingsBody, duration: '30–60 min' },
    { num: '02', icon: HeartPulse, title: t.behandlinger.rootCanal, body: t.behandlinger.rootCanalBody, duration: '60–90 min', helfo: true },
    { num: '03', icon: Scissors, title: t.behandlinger.extraction, body: t.behandlinger.extractionBody, duration: '30–45 min' },
    { num: '04', icon: Layers, title: t.behandlinger.denture, body: t.behandlinger.dentureBody, duration: t.behandlinger.durationMultipleVisits },
  ];

  // Estetikk — krone, bro, bleking
  const aestheticTreatments = [
    { num: '05', icon: Crown, title: t.behandlinger.crown, body: t.behandlinger.crownBody, duration: t.behandlinger.durationCrown, helfo: true },
    { num: '06', icon: Link2, title: t.behandlinger.bridge, body: t.behandlinger.bridgeBody, duration: t.behandlinger.durationBridge, helfo: true },
    { num: '07', icon: Sparkles, title: t.behandlinger.whitening, body: t.behandlinger.whiteningBody, duration: '60–90 min' },
  ];

  const processSteps = [
    { icon: MessageSquare, title: t.behandlinger.step1Title, body: t.behandlinger.step1Body },
    { icon: FileText, title: t.behandlinger.step2Title, body: t.behandlinger.step2Body },
    { icon: ShieldCheck, title: t.behandlinger.step3Title, body: t.behandlinger.step3Body },
    { icon: CalendarCheck, title: t.behandlinger.step4Title, body: t.behandlinger.step4Body },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-32 md:pt-40 pb-12 md:pb-16">
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

          {/* Stat strip — speaks to the quality promises */}
          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
            className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 max-w-3xl border-y border-ink/10 py-8"
          >
            {[
              { v: t.behandlinger.statTreatments, l: t.behandlinger.statTreatmentsLabel },
              { v: t.behandlinger.statPainfree, l: t.behandlinger.statPainfreeLabel },
              { v: '30%', l: t.behandlinger.statNewPatientsLabel },
              { v: t.behandlinger.statHelfo, l: t.behandlinger.statHelfoLabel },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-2xl md:text-3xl text-ink leading-none">{s.v}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">{s.l}</p>
              </div>
            ))}
          </motion.dl>
        </Container>
      </section>

      {/* Featured — Undersøkelse with new-patient discount */}
      <section className="bg-bg pt-16 md:pt-20 pb-20 md:pb-28">
        <Container size="xl">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-brand/25 bg-cream-50"
          >
            {/* Decorative side bar */}
            <span className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-brand" aria-hidden />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-7 md:p-12 lg:p-14">
              <div className="md:col-span-7 lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-brand text-bg">
                    <featured.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                    {t.behandlinger.categoryRoutine}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-brand/12 text-brand">
                    <Sparkles className="h-3 w-3" strokeWidth={1.75} />
                    {t.behandlinger.newPatientBadge}
                  </span>
                </div>
                <h2 className="font-display text-display-md md:text-display-lg text-ink italic leading-[1.08] mb-5">
                  {t.behandlinger.featuredTitle}
                </h2>
                <p className="font-sans text-base md:text-lg text-ink-light leading-relaxed max-w-xl">
                  {t.behandlinger.featuredBody}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Link
                    to="/bestill"
                    className="inline-flex items-center gap-2 px-7 h-12 rounded-full bg-ink text-bg font-sans text-sm font-medium hover:bg-brand transition-colors group/cta"
                  >
                    {t.behandlinger.featuredCta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-1.5" strokeWidth={1.5} />
                  </Link>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
                    <span className="text-ink/70">{t.behandlinger.durationLabel}:</span>{' '}
                    <span className="text-ink/85 tabular-nums">{featured.duration}</span>
                  </span>
                </div>
              </div>

              <div className="md:col-span-5 lg:col-span-4 md:border-l md:border-brand/15 md:pl-10 lg:pl-12 flex flex-col justify-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55 mb-3">
                  {t.behandlinger.featuredFromLabel}
                </p>
                <p className="font-display text-display-md md:text-display-lg text-brand leading-none">
                  940
                  <span className="font-mono text-base text-brand/70 ml-1">kr</span>
                </p>
                <p className="mt-4 font-sans text-sm text-ink-light leading-relaxed max-w-xs">
                  {t.behandlinger.featuredOriginalCopy}
                </p>
              </div>
            </div>
          </motion.article>
        </Container>
      </section>

      {/* Reparasjon — 4 cards */}
      <section className="bg-cream-100 py-20 md:py-28 border-y border-ink/8">
        <Container size="xl">
          <div className="flex items-baseline justify-between gap-6 mb-10 md:mb-14 flex-wrap">
            <div>
              <Eyebrow className="!mb-3">{t.behandlinger.categoryRepair}</Eyebrow>
              <h2 className="font-display text-display-md text-ink leading-[1.1] max-w-2xl">
                {t.behandlinger.repairHeading}
              </h2>
            </div>
            <Link
              to="/tannlegeskrekk"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/65 hover:text-brand transition-colors"
            >
              {t.behandlinger.anxietyCrossLink}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {repairTreatments.map((tr, i) => (
              <TreatmentCard key={tr.title} {...tr} i={i} t={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* Estetikk — 3 cards (darker visual treatment) */}
      <section className="bg-bg py-20 md:py-28">
        <Container size="xl">
          <div className="mb-10 md:mb-14">
            <Eyebrow className="!mb-3">{t.behandlinger.categoryAesthetic}</Eyebrow>
            <h2 className="font-display text-display-md text-ink leading-[1.1] max-w-2xl italic">
              {t.behandlinger.aestheticHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {aestheticTreatments.map((tr, i) => (
              <TreatmentCard key={tr.title} {...tr} i={i} t={t} accent />
            ))}
          </div>
        </Container>
      </section>

      {/* Slik foregår det — process */}
      <section className="bg-ink text-bg py-24 md:py-32">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end mb-14 md:mb-20">
            <div className="md:col-span-7">
              <Eyebrow tone="bg" className="!text-accent">{t.behandlinger.processEyebrow}</Eyebrow>
              <h2 className="font-display text-display-md md:text-display-lg text-bg leading-[1.05]">
                {t.behandlinger.processTitle.split('—')[0].trim()}
                <span className="block italic text-bg/80">
                  — {t.behandlinger.processTitle.split('—')[1]?.trim()}
                </span>
              </h2>
            </div>
            <p className="md:col-span-5 font-sans text-base md:text-lg text-bg/65 leading-relaxed">
              {t.behandlinger.processSub}
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bg/10 rounded-3xl overflow-hidden">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-ink p-7 md:p-9 relative group/step"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-bg/[0.08] text-accent">
                    <step.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bg/40 tabular-nums">
                    {t.behandlinger.stepLabel} {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl text-bg italic mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-bg/65 leading-relaxed">{step.body}</p>
              </motion.li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Outro CTA */}
      <section className="bg-bg py-20 md:py-28">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-between gap-8"
          >
            <p className="font-display italic text-2xl md:text-3xl text-ink max-w-xl leading-tight">
              {t.behandlinger.outroQuestion}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/bestill"
                className="inline-flex items-center gap-2 px-7 h-12 rounded-full bg-brand text-bg font-sans text-sm font-medium hover:bg-ink transition-colors group/cta"
              >
                {t.common.bookATime}
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-1.5" strokeWidth={1.5} />
              </Link>
              <a
                href="tel:+4767904090"
                className="inline-flex items-center gap-2 px-7 h-12 rounded-full border border-ink/15 text-ink font-sans text-sm font-medium hover:bg-ink hover:text-bg transition-colors"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                67 90 40 90
              </a>
              <Link
                to="/priser"
                className="inline-flex items-center gap-2 px-7 h-12 rounded-full text-ink/65 font-mono text-[11px] uppercase tracking-[0.22em] hover:text-ink transition-colors"
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

// --- Shared treatment card ---
type TreatmentCardProps = {
  num: string;
  icon: typeof ClipboardCheck;
  title: string;
  body: string;
  duration: string;
  helfo?: boolean;
  accent?: boolean;
  i: number;
  t: ReturnType<typeof useT>;
};

function TreatmentCard({ num, icon: Icon, title, body, duration, helfo, accent, i, t }: TreatmentCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group/card relative rounded-3xl p-7 md:p-8 border transition-colors duration-300 ${
        accent
          ? 'bg-cream-50 border-ink/10 hover:border-brand/40 hover:bg-cream-100'
          : 'bg-bg border-ink/8 hover:border-brand/40'
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <span className={`inline-flex items-center justify-center h-12 w-12 rounded-2xl transition-colors ${
          accent ? 'bg-ink text-bg group-hover/card:bg-brand' : 'bg-cream-200 text-brand group-hover/card:bg-brand group-hover/card:text-bg'
        }`}>
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand/70 tabular-nums">
          {num}
        </span>
      </div>

      <h3 className="font-display text-2xl md:text-[1.7rem] text-ink italic leading-snug mb-3">
        {title}
      </h3>
      <p className="font-sans text-sm text-ink-light leading-relaxed mb-6">{body}</p>

      <div className="pt-4 border-t border-ink/8 flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
          <span className="text-ink/45">{t.behandlinger.durationLabel}:</span>{' '}
          <span className="text-ink/80 tabular-nums">{duration}</span>
        </span>
        {helfo ? (
          <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-brand/10 text-brand">
            <ShieldCheck className="h-3 w-3" strokeWidth={1.75} />
            {t.behandlinger.helfoBadge}
          </span>
        ) : null}
      </div>
    </motion.article>
  );
}
