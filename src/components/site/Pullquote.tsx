import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface PullquoteProps {
  children: ReactNode;
  cite?: string;
  variant?: 'cream' | 'ink';
  size?: 'md' | 'lg';
  className?: string;
}

export function Pullquote({ children, cite, variant = 'cream', size = 'lg', className }: PullquoteProps) {
  const isCream = variant === 'cream';
  const sizeClass = size === 'lg' ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl';
  return (
    <figure
      className={cn(
        'relative py-16 md:py-24 px-6 md:px-12',
        isCream ? 'bg-cream-100 text-ink' : 'bg-ink text-bg',
        className
      )}
    >
      <div className="mx-auto max-w-4xl">
        <span
          aria-hidden="true"
          className={cn(
            'block font-display text-7xl md:text-8xl leading-none mb-2 -ml-1',
            isCream ? 'text-brand/60' : 'text-bg/30'
          )}
        >
          “
        </span>
        <blockquote
          className={cn(
            'font-display italic leading-[1.2]',
            sizeClass,
            isCream ? 'text-ink' : 'text-bg'
          )}
        >
          {children}
        </blockquote>
        {cite && (
          <figcaption
            className={cn(
              'mt-8 font-mono text-[11px] uppercase tracking-[0.22em] not-italic',
              isCream ? 'text-ink/55' : 'text-bg/55'
            )}
          >
            — {cite}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
