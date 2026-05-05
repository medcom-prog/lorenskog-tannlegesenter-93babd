import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { SplitText } from '@/components/site/SplitText';
import { useT } from '@/i18n';

export default function Kontakt() {
  const t = useT();
  return (
    <section className="bg-bg pt-32 md:pt-40 pb-32 md:pb-48 min-h-screen">
      <Container size="lg">
        <Eyebrow>{t.kontakt.eyebrow}</Eyebrow>
        <SplitText
          as="h1"
          unit="word"
          stagger={0.075}
          delay={0.15}
          italic={[2]}
          className="font-display text-display-lg md:text-display-xl text-ink leading-[1.04] max-w-3xl"
        >
          {t.kontakt.heroH1}
        </SplitText>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: 'easeOut' }}
          className="mt-8 font-display italic text-lg md:text-xl text-ink/72 max-w-2xl leading-relaxed"
        >
          {t.kontakt.heroSub}
        </motion.p>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {[
            {
              Icon: Phone,
              label: t.kontakt.phoneLabel,
              value: '67 90 40 90',
              href: 'tel:+4767904090',
              accent: true,
            },
            {
              Icon: Mail,
              label: t.kontakt.emailLabel,
              value: 'kontakt@lorenskogtannlege.no',
              href: 'mailto:kontakt@lorenskogtannlege.no',
            },
            {
              Icon: MapPin,
              label: t.kontakt.addressLabel,
              value: (
                <>
                  Skårersletta 10
                  <br />
                  1473 Lørenskog
                  <br />
                  <span className="font-sans text-sm text-ink/55 mt-2 inline-block">
                    {t.kontakt.parking}
                  </span>
                </>
              ),
              href: 'https://maps.google.com/?q=Skårersletta+10,+1473+Lørenskog',
              external: true,
            },
            {
              Icon: Clock,
              label: t.kontakt.hoursLabel,
              value: (
                <>
                  Mandag–fredag · 08:00–16:00
                  <br />
                  <span className="font-sans text-sm text-ink/55 mt-2 inline-block">
                    Akutt på kveld og helg etter avtale
                  </span>
                </>
              ),
            },
          ].map((item, i) => {
            const card = (
              <>
                <span
                  className={`inline-flex items-center justify-center h-12 w-12 rounded-2xl mb-5 ${
                    item.accent ? 'bg-brand text-bg' : 'bg-cream-200 text-brand'
                  }`}
                >
                  <item.Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55 mb-3">
                  {item.label}
                </p>
                <p className="font-display text-2xl md:text-3xl text-ink leading-tight">
                  {item.value}
                </p>
              </>
            );
            const className = `block p-7 md:p-8 rounded-3xl border border-ink/8 hover:border-brand/40 hover:bg-cream-50 transition-colors group/card ${
              item.accent ? 'bg-cream-100' : 'bg-bg'
            }`;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className={className}
                  >
                    {card}
                  </a>
                ) : (
                  <div className={className}>{card}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
