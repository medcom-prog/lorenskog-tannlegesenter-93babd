import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  number?: string;
  tone?: 'ink' | 'bg' | 'brand';
}

export function Eyebrow({ number, tone = 'brand', className, children, ...props }: EyebrowProps) {
  const colorClass = {
    ink: 'text-ink/55',
    bg: 'text-bg/65',
    brand: 'text-brand',
  }[tone];

  return (
    <p
      className={cn(
        'font-mono text-[11px] uppercase tracking-[0.25em] mb-5 md:mb-7',
        colorClass,
        className
      )}
      {...props}
    >
      {number && <span className="opacity-65 mr-3">{number}</span>}
      {children}
    </p>
  );
}
