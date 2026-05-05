import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useT } from '@/i18n';
import { cn } from '@/lib/utils';

interface NavProps {
  variant?: 'transparent' | 'solid';
}

export function Nav({ variant = 'solid' }: NavProps) {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const location = useLocation();

  const ROUTES = [
    { href: '/', label: t.nav.home },
    { href: '/behandlinger', label: t.nav.treatments },
    { href: '/tannlegeskrekk', label: t.nav.fearOfDentist },
    { href: '/tannlegevakt', label: t.nav.emergency },
    { href: '/priser', label: t.nav.prices },
    { href: '/bestill', label: t.nav.booking },
    { href: '/om-oss', label: t.nav.about },
    { href: '/kontakt', label: t.nav.contact },
  ];

  // Show in desktop bar (logo handles home, so skip Hjem)
  const desktopRoutes = ROUTES.filter((r) => r.href !== '/' && r.href !== '/bestill');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const dy = y - lastY.current;
      if (y > 240 && Math.abs(dy) > 6) {
        setHidden(dy > 0);
      } else if (y <= 240) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isOnSurface = variant === 'solid' || scrolled;

  return (
    <motion.header
      animate={{ y: hidden ? '-110%' : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-300',
        isOnSurface
          ? 'bg-bg/85 backdrop-blur-md border-b border-ink/8'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between h-16 md:h-20 gap-6">
          <Logo size="md" tone={isOnSurface ? 'ink' : 'bg'} className="shrink-0" />

          {/* Desktop nav */}
          <nav
            aria-label={t.nav.home}
            className="hidden lg:flex items-center gap-7 xl:gap-8"
          >
            {desktopRoutes.map((r) => (
              <NavLink
                key={r.href}
                to={r.href}
                className={({ isActive }) =>
                  cn(
                    'relative font-sans text-[13px] tracking-tight transition-opacity duration-200 py-2',
                    isOnSurface ? 'text-ink' : 'text-bg',
                    isActive ? 'opacity-100' : 'opacity-65 hover:opacity-100'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {r.label}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="tannlege-nav-underline"
                          aria-hidden="true"
                          className={cn(
                            'absolute left-0 right-0 -bottom-0.5 h-px',
                            isOnSurface ? 'bg-brand' : 'bg-bg'
                          )}
                          transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                        />
                      )}
                    </AnimatePresence>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right cluster: lang + phone + book CTA (desktop) / lang + hamburger (mobile) */}
          <div className="flex items-center gap-2 md:gap-4">
            <LanguageSwitcher
              tone={isOnSurface ? 'ink' : 'bg'}
              className="hidden md:inline-flex"
            />
            <a
              href="tel:+4767904090"
              className={cn(
                'hidden md:inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] tabular-nums transition-colors',
                isOnSurface ? 'text-ink hover:text-brand' : 'text-bg hover:opacity-80'
              )}
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
              <span>67 90 40 90</span>
            </a>
            <Link
              to="/bestill"
              className={cn(
                'hidden md:inline-flex items-center px-5 h-11 rounded-full font-sans text-sm font-medium transition-colors',
                isOnSurface
                  ? 'bg-brand text-bg hover:bg-ink'
                  : 'bg-bg text-ink hover:bg-bg/90'
              )}
            >
              {t.nav.bookCta}
            </Link>

            {/* Mobile cluster */}
            <LanguageSwitcher
              tone={isOnSurface ? 'ink' : 'bg'}
              className="md:hidden"
            />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                aria-label={t.nav.home}
                className={cn(
                  'md:hidden inline-flex items-center justify-center h-11 w-11 -mr-2 transition-colors',
                  isOnSurface ? 'text-ink' : 'text-bg'
                )}
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              </SheetTrigger>
              <SheetContent side="right" className="bg-bg text-ink flex flex-col p-7 sm:p-9 max-w-sm">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <Logo size="md" tone="ink" />
                  <LanguageSwitcher tone="ink" />
                </div>
                <nav className="flex flex-col gap-1" aria-label={t.nav.home}>
                  {ROUTES.map((r, i) => (
                    <motion.div
                      key={r.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.06 + i * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        to={r.href}
                        className={cn(
                          'block font-display text-2xl md:text-3xl py-2.5 transition-colors',
                          location.pathname === r.href
                            ? 'text-ink'
                            : 'text-ink/55 hover:text-ink'
                        )}
                      >
                        {r.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-auto pt-10 border-t border-ink/15 space-y-2">
                  <a
                    href="tel:+4767904090"
                    className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-ink"
                  >
                    <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
                    67 90 40 90
                  </a>
                  <a
                    href="mailto:kontakt@lorenskogtannlege.no"
                    className="block font-sans text-sm text-ink/70 hover:text-ink transition-colors"
                  >
                    kontakt@lorenskogtannlege.no
                  </a>
                  <p className="font-sans text-sm text-ink/55 pt-2 leading-relaxed">
                    Skårersletta 10<br />1473 Lørenskog
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
