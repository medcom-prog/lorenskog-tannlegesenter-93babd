import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, HeartHandshake, CalendarCheck, ArrowRight, Phone, MapPin } from 'lucide-react';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { SplitText } from '@/components/site/SplitText';
import { CountUp } from '@/components/site/CountUp';
import { useT } from '@/i18n';

const STATS_ICON_CLASS = 'h-5 w-5 text-brand';

export default function Home() {
  const t = useT();

  return (
    <>
      {/* Hero — full-bleed dental procedure photo */}
      <section className="relative min-h-[88vh] md:min-h-[90vh] flex flex-col justify-end overflow-hidden bg-ink">
        <motion.img
          src="/images/hero-treatment.jpeg"
          alt="Tannbehandling — Lørenskog Tannlegesenter"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Gradient — top edges fade for nav legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/15 to-ink/75" />
        <Container size="xl" className="relative z-10 pb-16 md:pb-24">
          <Eyebrow tone="bg" number="—">{t.home.heroEyebrow}</Eyebrow>
          <SplitText
            as="h1"
            unit="word"
            stagger={0.07}
            delay={0.2}
            italic={[3, 4, 5]}
            className="font-display text-display-lg md:text-display-xl text-bg leading-[1.05] max-w-4xl"
          >
            {t.home.heroH1}
          </SplitText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
            className="mt-8 font-display text-lg md:text-xl text-bg/85 max-w-2xl leading-relaxed italic"
          >
            {t.home.heroSub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap items-center gap-3 md:gap-5"
          >
            <Link
              to="/bestill"
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full bg-bg text-ink font-sans text-sm font-medium hover:bg-accent transition-colors group/cta"
            >
              {t.nav.bookCta}
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-1.5" strokeWidth={1.5} />
            </Link>
            <a
              href="tel:+4767904090"
              className="inline-flex items-center gap-3 px-6 h-12 rounded-full border border-bg/40 text-bg font-mono text-[12px] uppercase tracking-[0.18em] tabular-nums hover:bg-bg/10 transition-colors"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              67 90 40 90
            </a>
          </motion.div>
        </Container>
      </section>

      {/* Smart-routing triage — line icons, NO emojis */}
      <section className="bg-bg py-20 md:py-28">
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <Eyebrow className="!mb-4">{t.home.triageEyebrow}</Eyebrow>
            <SplitText
              as="h2"
              unit="word"
              stagger={0.08}
              delay={0.1}
              italic={[3]}
              className="font-display text-display-md md:text-display-lg text-ink"
            >
              {t.home.triageHeading}
            </SplitText>
            <p className="mt-4 font-sans text-base text-ink/65">{t.home.triageSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                href: 'tel:+4767904090',
                icon: Zap,
                title: t.home.triageAcuteTitle,
                body: t.home.triageAcuteBody,
                cta: t.home.triageAcuteCta,
                accent: 'border-brand bg-brand-soft/35',
              },
              {
                href: '/tannlegeskrekk',
                icon: HeartHandshake,
                title: t.home.triageAnxietyTitle,
                body: t.home.triageAnxietyBody,
                cta: t.home.triageAnxietyCta,
                accent: 'border-ink/10 bg-cream-50 hover:border-brand/40',
              },
              {
                href: '/bestill',
                icon: CalendarCheck,
                title: t.home.triageRoutineTitle,
                body: t.home.triageRoutineBody,
                cta: t.home.triageRoutineCta,
                accent: 'border-ink/10 bg-cream-50 hover:border-brand/40',
              },
            ].map((card, i) => {
              const isExternal = card.href.startsWith('tel:');
              const inner = (
                <>
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand text-bg mb-6">
                    <card.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-3">{card.title}</h3>
                  <p className="font-sans text-sm text-ink-light leading-relaxed mb-6 max-w-sm">{card.body}</p>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-brand group-hover/card:text-ink transition-colors">
                    {card.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover/card:translate-x-1" strokeWidth={1.5} />
                  </span>
                </>
              );
              const className = `block group/card p-7 md:p-8 rounded-3xl border-2 transition-colors duration-300 ${card.accent}`;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {isExternal ? (
                    <a href={card.href} className={className}>
                      {inner}
                    </a>
                  ) : (
                    <Link to={card.href} className={className}>
                      {inner}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="bg-cream-100 py-16 md:py-20 border-y border-ink/8">
        <Container size="xl">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
            {[
              { icon: Zap, value: t.home.statsAcute, label: t.home.statsAcuteLabel },
              { icon: CalendarCheck, value: t.home.statsHours, label: t.home.statsHoursLabel },
              { icon: HeartHandshake, value: t.home.statsHelfo, label: t.home.statsHelfoLabel },
              { icon: ArrowRight, value: t.home.statsDiscount, label: t.home.statsDiscountLabel },
            ].map((s, i) => {
              const isPercent = s.value.endsWith('%');
              const numericValue = isPercent ? parseInt(s.value, 10) : null;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <s.icon className={STATS_ICON_CLASS} strokeWidth={1.5} />
                  <p className="mt-3 font-display text-3xl md:text-4xl text-ink leading-none">
                    {numericValue !== null ? (
                      <>
                        <CountUp to={numericValue} duration={1.4} />%
                      </>
                    ) : (
                      s.value
                    )}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                    {s.label}
                  </p>
                </motion.div>
              );
            })}
          </dl>
        </Container>
      </section>

      {/* About / clinic */}
      <section className="bg-bg py-24 md:py-36">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <motion.figure
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1.0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-5 overflow-hidden rounded-3xl"
            >
              <img
                src="/images/om-oss.jpeg"
                alt="Lørenskog Tannlegesenter — pasient-omsorg"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 ease-out hover:scale-[1.04]"
              />
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-7"
            >
              <Eyebrow>{t.home.aboutEyebrow}</Eyebrow>
              <h2 className="font-display text-display-md md:text-display-lg text-ink leading-[1.1] mb-8">
                {t.home.aboutHeading}
              </h2>
              <div className="prose-clinic space-y-5 text-ink-light">
                <p>{t.home.aboutBody1}</p>
                <p>{t.home.aboutBody2}</p>
                <p>{t.home.aboutBody3}</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-cream-100 py-24 md:py-36 border-t border-ink/8">
        <Container size="xl">
          <h2 className="font-display text-display-md md:text-display-lg text-ink max-w-3xl leading-[1.1]">
            {t.home.pillarsHeading}
          </h2>
          <ul className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 md:gap-y-2">
            {[
              t.home.pillarFocusFear,
              t.home.pillarWisdomTeeth,
              t.home.pillarWhitening,
              t.home.pillarCrowns,
              t.home.pillarSafeHygienic,
              t.home.pillarEmergency,
              t.home.pillarShortWait,
            ].map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-baseline gap-4 py-4 border-b border-ink/8 last:border-b-0 sm:border-b-0 md:border-b md:border-ink/8"
              >
                <span className="font-mono text-[10px] tabular-nums text-brand/70 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-xl md:text-2xl text-ink italic">{p}</span>
              </motion.li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA strip — book or call */}
      <section className="bg-ink text-bg py-20 md:py-28">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <Eyebrow tone="bg">{t.nav.contact}</Eyebrow>
              <h2 className="font-display text-display-md text-bg leading-[1.1]">
                {t.common.tagline}.
              </h2>
              <p className="mt-6 font-sans text-base text-bg/72 max-w-md leading-relaxed">
                Skårersletta 10, 1473 Lørenskog · Vis-a-vis Metro-senteret · Gratis parkering.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="tel:+4767904090"
                className="flex items-center gap-4 p-5 rounded-3xl bg-bg/[0.06] border border-bg/12 hover:border-bg/30 hover:bg-bg/[0.10] transition-colors group/cell"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-accent text-ink shrink-0">
                  <Phone className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-bg/55 mb-1">
                    {t.common.callUs}
                  </span>
                  <span className="block font-display text-2xl text-bg tabular-nums">67 90 40 90</span>
                </span>
              </a>
              <Link
                to="/kontakt"
                className="flex items-center gap-4 p-5 rounded-3xl bg-bg/[0.06] border border-bg/12 hover:border-bg/30 hover:bg-bg/[0.10] transition-colors group/cell"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-accent text-ink shrink-0">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-bg/55 mb-1">
                    {t.kontakt.addressLabel}
                  </span>
                  <span className="block font-display text-xl md:text-2xl text-bg">
                    Skårersletta 10, 1473 Lørenskog
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
