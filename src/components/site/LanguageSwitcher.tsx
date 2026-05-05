import { useLang } from '@/i18n';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  tone?: 'ink' | 'bg';
  className?: string;
}

export function LanguageSwitcher({ tone = 'ink', className }: LanguageSwitcherProps) {
  const { lang, setLang } = useLang();
  const colors =
    tone === 'bg'
      ? { active: 'text-bg', inactive: 'text-bg/45 hover:text-bg/85', sep: 'text-bg/30' }
      : { active: 'text-ink', inactive: 'text-ink/45 hover:text-ink/85', sep: 'text-ink/25' };

  return (
    <div
      role="group"
      aria-label="Language / Språk"
      className={cn('inline-flex items-center font-mono text-[11px] uppercase tracking-[0.2em] gap-1.5', className)}
    >
      <button
        type="button"
        onClick={() => setLang('no')}
        aria-pressed={lang === 'no'}
        className={cn('transition-colors', lang === 'no' ? colors.active : colors.inactive)}
      >
        NO
      </button>
      <span aria-hidden="true" className={colors.sep}>·</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={cn('transition-colors', lang === 'en' ? colors.active : colors.inactive)}
      >
        EN
      </button>
    </div>
  );
}
