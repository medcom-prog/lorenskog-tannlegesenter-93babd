import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useT } from '@/i18n';

/**
 * Bottom-right sticky phone CTA. Reveals after the user has scrolled
 * past the hero so it doesn't compete with the in-hero call-to-action.
 * Always visible on mobile, where the brand promise (akutt) makes
 * one-tap calling the most important interaction.
 */
export function StickyPhone() {
  const t = useT();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="tel:+4767904090"
          aria-label={`${t.common.callUs} 67 90 40 90`}
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.92 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 inline-flex items-center gap-3 pl-4 pr-5 py-3.5 rounded-full bg-brand text-bg shadow-warm hover:bg-ink transition-colors group/sp"
        >
          <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-bg/20 backdrop-blur-sm">
            <Phone className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.18em] tabular-nums">
            67 90 40 90
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
