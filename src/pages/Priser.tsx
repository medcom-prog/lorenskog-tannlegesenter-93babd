import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { SplitText } from '@/components/site/SplitText';
import { useT } from '@/i18n';

const priceCategories: Array<{ key: 'catExam' | 'catFillings' | 'catRoot' | 'catCrown' | 'catCleaning' | 'catExtraction'; items: Array<[string, string]> }> = [
  {
    key: 'catExam',
    items: [
      ['Undersøkelse m/røntgen, rens, polering, forebygging', '1 340 kr'],
      ['Akuttundersøkelse', '690 kr'],
      ['Hygienetiltak', '199 kr'],
      ['Tannrøntgen', '200 kr'],
      ['Bedøvelse', '190 kr'],
    ],
  },
  {
    key: 'catFillings',
    items: [
      ['Fylling 1 flate', '1 500 kr'],
      ['Fylling 2 flater', '1 890 kr'],
      ['Fylling 3+ flater', 'fra 2 100 kr'],
      ['Midlertidig fylling', '590 kr'],
    ],
  },
  {
    key: 'catRoot',
    items: [
      ['Rotfylling fortann', 'fra 4 200 kr'],
      ['Rotfylling liten jeksel', 'fra 4 800 kr'],
      ['Rotfylling jeksel', 'fra 5 500 kr'],
    ],
  },
  {
    key: 'catCrown',
    items: [
      ['Tannkrone', '7 400–7 990 kr'],
      ['Tannbro per ledd', '7 400 kr'],
      ['Tannprotese', 'fra 14 000 kr'],
    ],
  },
  {
    key: 'catCleaning',
    items: [
      ['Dyprens (egenandel)', 'fra 690 kr'],
      ['Vanlig rens (omfattende tannstein)', 'fra 650 kr'],
      ['Bittskinne (egenandel)', '3 190 kr'],
      ['Tannbleking (2 kjever)', '3 990 kr'],
    ],
  },
  {
    key: 'catExtraction',
    items: [
      ['Enkel tanntrekking', 'fra 1 890 kr'],
      ['Komplisert tanntrekking', 'fra 2 600 kr'],
      ['Periodontal tanntrekking', '890 kr'],
    ],
  },
];

export default function Priser() {
  const t = useT();
  return (
    <>
      <section className="bg-bg pt-32 md:pt-40 pb-12 md:pb-16">
        <Container size="lg">
          <Eyebrow>{t.priser.eyebrow}</Eyebrow>
          <SplitText
            as="h1"
            unit="line"
            stagger={0.16}
            delay={0.15}
            italic={[1]}
            className="font-display text-display-lg md:text-display-xl text-ink leading-[1.02] max-w-4xl"
          >
            {`Klare priser.\nIngen overraskelser.`}
          </SplitText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
            className="mt-8 font-display italic text-lg md:text-xl text-ink/72 max-w-2xl leading-relaxed"
          >
            {t.priser.heroSub}
          </motion.p>
        </Container>
      </section>

      {/* Discount strip */}
      <section className="bg-cream-100 py-16 md:py-20 border-y border-ink/8">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: t.priser.discount30, body: t.priser.discount30Body, accent: 'bg-brand text-bg' },
              { title: t.priser.discount10, body: t.priser.discount10Body, accent: 'bg-bg text-ink border border-ink/12' },
              { title: t.priser.discountFree, body: t.priser.discountFreeBody, accent: 'bg-bg text-ink border border-ink/12' },
            ].map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`p-7 md:p-8 rounded-3xl ${d.accent}`}
              >
                <p className="font-display text-2xl md:text-3xl mb-3">{d.title}</p>
                <p className="font-sans text-sm leading-relaxed opacity-80">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Price tables */}
      <section className="bg-bg py-24 md:py-32">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceCategories.map((cat, ci) => (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: (ci % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-ink/10 overflow-hidden bg-bg"
              >
                <div className="px-6 py-4 bg-cream-100 border-b border-ink/10">
                  <h3 className="font-display text-lg text-ink italic">{t.priser[cat.key]}</h3>
                </div>
                <ul className="divide-y divide-ink/8">
                  {cat.items.map(([name, price]) => (
                    <li
                      key={name}
                      className="flex items-baseline justify-between gap-4 px-6 py-4 hover:bg-cream-50 transition-colors"
                    >
                      <span className="font-sans text-sm text-ink-light flex-1">{name}</span>
                      <span className="font-mono text-sm font-medium text-brand tabular-nums shrink-0">
                        {price}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="font-sans text-sm text-ink/65 leading-relaxed p-6 rounded-2xl bg-cream-50 border border-ink/8">
              {t.priser.cancellation}
            </p>
            <p className="font-sans text-sm text-ink/65 leading-relaxed p-6 rounded-2xl bg-cream-50 border border-ink/8">
              {t.priser.estimateNote}
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            <Link
              to="/bestill"
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full bg-brand text-bg font-sans text-sm font-medium hover:bg-ink transition-colors group/cta"
            >
              {t.common.bookATime}
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-1.5" strokeWidth={1.5} />
            </Link>
            <a
              href="tel:+4767904090"
              className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-ink/65 hover:text-ink transition-colors px-2"
            >
              {t.bestill.callInstead}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
