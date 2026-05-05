import { cn } from '@/lib/utils';
import type { JSX } from 'react';

interface SplitTextProps {
  children: string;
  unit?: 'word' | 'line';
  className?: string;
  stagger?: number;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  italic?: number[];
}

/**
 * Word-by-word reveal — pure CSS keyframes, fires on element insertion
 * regardless of parent state (proven reliable on rambergstranda).
 */
export function SplitText({
  children,
  unit = 'word',
  className,
  stagger = 0.07,
  delay = 0.15,
  as = 'h1',
  italic = [],
}: SplitTextProps) {
  const words: string[] =
    unit === 'line' ? children.split('\n') : children.trim().split(/\s+/);

  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(className)}>
      <style>{`
        @keyframes split-text-rise {
          from { opacity: 0; transform: translateY(0.55em); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {words.map((w, i) => (
        <span key={i} className="inline">
          <span
            className={cn(
              'inline-block will-change-transform',
              italic.includes(i) && 'italic'
            )}
            style={{
              opacity: 0,
              transform: 'translateY(0.55em)',
              animation: `split-text-rise 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay + i * stagger}s forwards`,
            }}
          >
            {w}
          </span>
          {i < words.length - 1 ? (unit === 'line' ? <br /> : ' ') : null}
        </span>
      ))}
    </Tag>
  );
}
