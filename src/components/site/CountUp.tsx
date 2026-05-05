import { animate, useInView, useMotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
}

export function CountUp({
  to,
  from = 0,
  duration = 1.6,
  format = (n) => Math.round(n).toString(),
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const value = useMotionValue(from);
  const display = useTransform(value, (latest) => format(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, to, duration, value]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
