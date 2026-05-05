import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Separator } from '@/components/ui/separator';
import { useT } from '@/i18n';

export function Footer() {
  const t = useT();
  return (
    <footer className="bg-ink text-bg py-20 md:py-28 px-6 md:px-10 lg:px-14">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
          <div className="md:col-span-5">
            <Logo size="lg" tone="bg" />
            <p className="mt-6 font-display italic text-base md:text-lg text-bg/72 leading-relaxed max-w-md">
              {t.common.tagline}.
            </p>
            <div className="mt-8 space-y-1 font-sans text-sm text-bg/65 leading-relaxed">
              <p>Skårersletta 10</p>
              <p>1473 Lørenskog · Norway</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bg/45 mb-6">
              {t.footer.treatments}
            </p>
            <ul className="space-y-3 font-sans text-sm">
              {[
                ['/tannlegevakt', t.nav.emergency],
                ['/tannlegeskrekk', t.nav.fearOfDentist],
                ['/behandlinger', t.nav.treatments],
                ['/priser', t.nav.prices],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="text-bg/70 hover:text-bg transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bg/45 mb-6">
              {t.footer.info}
            </p>
            <ul className="space-y-3 font-sans text-sm">
              {[
                ['/om-oss', t.nav.about],
                ['/bestill', t.nav.booking],
                ['/kontakt', t.nav.contact],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="text-bg/70 hover:text-bg transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bg/45 mb-6">
              {t.footer.contact}
            </p>
            <div className="space-y-2 font-sans text-sm">
              <a
                href="tel:+4767904090"
                className="block text-bg hover:text-accent transition-colors font-mono tabular-nums"
              >
                67 90 40 90
              </a>
              <a
                href="mailto:kontakt@lorenskogtannlege.no"
                className="block text-bg/70 hover:text-bg transition-colors break-words"
              >
                kontakt@lorenskogtannlege.no
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-bg/10 my-14" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-bg/40">
          <p>{t.footer.copyright}</p>
          <p>Vis-a-vis Metro-senteret · Gratis parkering</p>
        </div>
      </div>
    </footer>
  );
}
