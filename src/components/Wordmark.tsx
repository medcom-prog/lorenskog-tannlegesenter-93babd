type Variant = 'light' | 'dark';

export function Wordmark({
  variant = 'light',
  className = '',
}: {
  variant?: Variant;
  className?: string;
}) {
  const isLight = variant === 'light';
  return (
    <a
      href="#top"
      className={`inline-flex items-end gap-2 group ${className}`}
      aria-label="Lørenskog Tannlegesenter"
    >
      <img
        src={isLight ? '/wordmark.svg' : '/wordmark-dark.svg'}
        alt="Lørenskog Tannlegesenter"
        className="h-7 md:h-8 w-auto"
        width={647}
        height={60}
      />
    </a>
  );
}
