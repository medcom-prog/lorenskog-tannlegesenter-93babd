import { motion } from 'framer-motion';

export function StickyPhone() {
  return (
    <motion.a
      href="tel:+4767904090"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 md:hidden flex items-center gap-2 px-4 py-3 rounded-full bg-[#8B5A3C] text-[#FAF6F0] shadow-warm font-semibold text-sm"
      aria-label="Ring oss"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
      </svg>
      67 90 40 90
    </motion.a>
  );
}
