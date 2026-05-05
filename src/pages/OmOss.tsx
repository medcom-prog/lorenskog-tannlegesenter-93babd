import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { SplitText } from '@/components/site/SplitText';
import { useT } from '@/i18n';

export default function OmOss() {
  const t = useT();
  return (
    <>
      <section className="bg-bg pt-32 md:pt-40 pb-16 md:pb-24">
        <Container size="lg">
          <Eyebrow>{t.omoss.eyebrow}</Eyebrow>
          <SplitText
            as="h1"
            unit="word"
            stagger={0.075}
            delay={0.15}
            italic={[3]}
            className="font-display text-display-lg md:text-display-xl text-ink leading-[1.04] max-w-4xl"
          >
            {t.omoss.heroH1}
          </SplitText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: 'easeOut' }}
            className="mt-8 font-display italic text-lg md:text-xl text-ink/72 max-w-2xl leading-relaxed"
          >
            {t.omoss.heroSub}
          </motion.p>
        </Container>
      </section>

      <section className="bg-bg pb-24 md:pb-32">
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
                alt="Lørenskog Tannlegesenter — møte med behandler"
                loading="eager"
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 ease-out hover:scale-[1.04]"
              />
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-7 prose-clinic space-y-6 text-ink-light"
            >
              <p>{t.omoss.body1}</p>
              <p>{t.omoss.body2}</p>
              <p>{t.omoss.body3}</p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-20 md:py-28 border-y border-ink/8">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-10 rounded-3xl bg-bg border border-ink/8"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand text-bg mb-6">
                <Clock className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h2 className="font-display text-display-md text-ink italic mb-6">
                {t.omoss.hoursTitle}
              </h2>
              <dl className="space-y-3 font-sans text-base text-ink-light">
                <div className="flex justify-between gap-4 pb-3 border-b border-ink/8">
                  <dt>{t.omoss.hoursWeekday.split('·')[0].trim()}</dt>
                  <dd className="font-mono text-sm tabular-nums text-ink">
                    {t.omoss.hoursWeekday.split('·')[1]?.trim()}
                  </dd>
                </div>
                <p className="pt-2 italic font-display text-ink/72">{t.omoss.hoursAcute}</p>
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-10 rounded-3xl bg-ink text-bg"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-accent text-ink mb-6">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h2 className="font-display text-display-md text-bg italic mb-6">
                {t.omoss.locationTitle}
              </h2>
              <p className="font-sans text-base text-bg/72 leading-relaxed">
                {t.omoss.locationBody}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
