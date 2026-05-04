import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wordmark } from './Wordmark';

const navLinks = [
  { label: 'Behandlinger', href: '#behandlinger' },
  { label: 'Tannlegeskrekk', href: '#tannlegeskrekk' },
  { label: 'Tannlegevakt', href: '#tannlegevakt' },
  { label: 'Priser', href: '#priser' },
  { label: 'Om oss', href: '#om-oss' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        id="top"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF6F0]/95 backdrop-blur-sm shadow-soft border-b border-[#E0C9B0]/60'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Wordmark variant="light" className="shrink-0" />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-[#5A4B3C] hover:text-[#8B5A3C] transition-colors duration-150 rounded-lg hover:bg-[#F0E2D0]/60"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {/* Phone — always visible on desktop */}
              <a
                href="tel:+4767904090"
                className="hidden sm:flex items-center gap-2 font-mono text-sm font-medium text-[#8B5A3C] hover:text-[#6B3A1C] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                67 90 40 90
              </a>

              <a
                href="#timebestilling"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-xl bg-[#8B5A3C] text-[#FAF6F0] text-sm font-semibold hover:bg-[#6B3A1C] transition-colors duration-150"
              >
                Bestill time
              </a>

              {/* Mobile menu button */}
              <button
                className="md:hidden flex flex-col gap-[5px] p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
              >
                <span
                  className={`block w-5 h-0.5 bg-[#1A1008] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-[#1A1008] transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-[#1A1008] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#FAF6F0] pt-16 px-6 flex flex-col overflow-y-auto"
          >
            <nav className="flex flex-col gap-1 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-2xl font-display text-[#1A1008] border-b border-[#E0C9B0] hover:text-[#8B5A3C] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3 pb-10">
              <a
                href="tel:+4767904090"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border-2 border-[#8B5A3C] text-[#8B5A3C] font-semibold text-lg"
              >
                Ring 67 90 40 90
              </a>
              <a
                href="#timebestilling"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 rounded-2xl bg-[#8B5A3C] text-[#FAF6F0] font-semibold text-lg"
              >
                Bestill time
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
