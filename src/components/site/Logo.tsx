import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  tone?: 'ink' | 'bg';
  className?: string;
}

const sizes = {
  sm: 'text-base',
  md: 'text-lg md:text-xl',
  lg: 'text-2xl md:text-3xl',
};

export function Logo({ size = 'md', tone = 'ink', className }: LogoProps) {
  const colorClass = tone === 'bg' ? 'text-bg' : 'text-ink';
  return (
    <Link
      to="/"
      className={cn('block group', className)}
      aria-label="Lørenskog Tannlegesenter — Hjem"
    >
      <span
        className={cn(
          'font-display whitespace-nowrap',
          sizes[size],
          colorClass,
          'tracking-tight'
        )}
      >
        Lørenskog{' '}
        <span className="italic">Tannlegesenter</span>
      </span>
    </Link>
  );
}
