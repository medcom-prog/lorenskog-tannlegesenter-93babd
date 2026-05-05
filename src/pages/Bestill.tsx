import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, Phone } from 'lucide-react';
import { Container } from '@/components/site/Container';
import { Eyebrow } from '@/components/site/Eyebrow';
import { SplitText } from '@/components/site/SplitText';
import { useT, useLang } from '@/i18n';
import { cn } from '@/lib/utils';

type Avail = 'available' | 'limited' | 'booked';

function buildAvailability(year: number, month: number): Record<string, Avail> {
  const out: Record<string, Avail> = {};
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const dow = date.getDay();
    const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
    if (isPast) {
      out[fmtKey(date)] = 'booked';
      continue;
    }
    const seed = (d * 7 + month * 11 + year) % 13;
    if (dow === 0) {
      // Sundays: clinic closed for routine
      out[fmtKey(date)] = 'booked';
    } else if (dow === 6) {
      out[fmtKey(date)] = seed < 5 ? 'limited' : 'available';
    } else if (seed < 3) {
      out[fmtKey(date)] = 'booked';
    } else if (seed < 6) {
      out[fmtKey(date)] = 'limited';
    } else {
      out[fmtKey(date)] = 'available';
    }
  }
  return out;
}

function fmtKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

const monthNamesByLang = {
  no: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};

const weekdayShortByLang = {
  no: ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø'],
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};

type StayType = 'acute' | 'routine' | 'fear' | 'aesthetic';

export default function Bestill() {
  const t = useT();
  const { lang } = useLang();
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<string | null>(null);
  const [type, setType] = useState<StayType>('routine');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const availability = useMemo(() => buildAvailability(viewYear, viewMonth), [viewYear, viewMonth]);

  const monthLabel = monthNamesByLang[lang][viewMonth];

  const firstDayOfMonth = new Date(viewYear, viewMonth, 1);
  let firstWeekday = firstDayOfMonth.getDay() - 1;
  if (firstWeekday < 0) firstWeekday = 6;
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells: Array<{ day: number; key: string; avail: Avail } | null> = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    const key = fmtKey(new Date(viewYear, viewMonth, d));
    cells.push({ day: d, key, avail: availability[key] });
  }
  while (cells.length % 7 !== 0) cells.push(null);

  const goPrev = () => {
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
  };
  const goNext = () => {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isAtCurrentMonth =
    viewYear === today.getFullYear() && viewMonth === today.getMonth();

  return (
    <>
      <section className="bg-bg pt-32 md:pt-40 pb-12 md:pb-16">
        <Container size="lg">
          <Eyebrow>{t.bestill.eyebrow}</Eyebrow>
          <SplitText
            as="h1"
            unit="word"
            stagger={0.075}
            delay={0.15}
            italic={[3, 4, 5]}
            className="font-display text-display-lg md:text-display-xl text-ink leading-[1.04] max-w-4xl"
          >
            {t.bestill.heroH1}
          </SplitText>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
            className="mt-8 font-display italic text-lg md:text-xl text-ink/72 max-w-2xl leading-relaxed"
          >
            {t.bestill.heroSub}
          </motion.p>
        </Container>
      </section>

      <section className="bg-bg pb-32 md:pb-48">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl border border-ink/10 bg-bg overflow-hidden">
                <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-ink/8">
                  <button
                    type="button"
                    onClick={goPrev}
                    disabled={isAtCurrentMonth}
                    aria-label={t.common.previous}
                    className={cn(
                      'inline-flex items-center justify-center h-10 w-10 rounded-full transition-colors',
                      isAtCurrentMonth
                        ? 'text-ink/20 cursor-not-allowed'
                        : 'text-ink/65 hover:text-ink hover:bg-ink/[0.04]'
                    )}
                  >
                    <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                  <p className="font-display text-xl md:text-2xl text-ink italic">
                    {monthLabel}
                    <span className="font-mono text-base text-ink/55 not-italic ml-2 tabular-nums">
                      {viewYear}
                    </span>
                  </p>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label={t.common.next}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full text-ink/65 hover:text-ink hover:bg-ink/[0.04] transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-px bg-ink/8 border-b border-ink/8">
                  {weekdayShortByLang[lang].map((w) => (
                    <div
                      key={w}
                      className="bg-bg py-3 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55"
                    >
                      {w}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-px bg-ink/8">
                  {cells.map((c, i) => {
                    if (!c) {
                      return <div key={`pad-${i}`} className="bg-bg aspect-square" />;
                    }
                    const isSelected = selected === c.key;
                    const dotColor =
                      c.avail === 'available'
                        ? 'bg-brand'
                        : c.avail === 'limited'
                        ? 'bg-brand/40'
                        : 'bg-ink/15';
                    const isClickable = c.avail !== 'booked';

                    return (
                      <button
                        key={c.key}
                        type="button"
                        disabled={!isClickable}
                        onClick={() => isClickable && setSelected(c.key)}
                        aria-label={`${c.day} ${monthLabel}`}
                        aria-pressed={isSelected}
                        className={cn(
                          'relative bg-bg aspect-square flex flex-col items-center justify-center transition-colors',
                          isClickable
                            ? 'hover:bg-cream-100 cursor-pointer'
                            : 'cursor-not-allowed opacity-50',
                          isSelected && 'bg-brand text-bg hover:bg-brand'
                        )}
                      >
                        <span
                          className={cn(
                            'font-display text-base md:text-lg',
                            isSelected ? 'text-bg' : 'text-ink'
                          )}
                        >
                          {c.day}
                        </span>
                        <span
                          aria-hidden="true"
                          className={cn(
                            'mt-1 h-1 w-1 rounded-full',
                            isSelected ? 'bg-bg' : dotColor
                          )}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 px-4 md:px-6 py-4 border-t border-ink/8 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {t.bestill.legendAvailable}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand/40" />
                    {t.bestill.legendLimited}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
                    {t.bestill.legendBooked}
                  </span>
                </div>
              </div>

              <a
                href="tel:+4767904090"
                className="inline-flex items-center gap-2 mt-6 px-5 h-11 rounded-full font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70 hover:text-ink hover:bg-cream-100 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
                {t.bestill.callInstead}
              </a>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="bg-cream-100 p-6 md:p-8 rounded-3xl space-y-7"
                  >
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand mb-2">
                        {t.bestill.eyebrow}
                      </p>
                      <p className="font-display text-2xl md:text-3xl text-ink italic min-h-[2.4em]">
                        {selected
                          ? (() => {
                              const [y, m, d] = selected.split('-').map(Number);
                              return `${d}. ${monthNamesByLang[lang][m - 1].toLowerCase()} ${y}`;
                            })()
                          : (
                            <span className="text-ink/40">{t.bestill.pickDate}</span>
                          )}
                      </p>
                    </div>

                    <fieldset>
                      <legend className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55 mb-3">
                        {t.bestill.typeLabel}
                      </legend>
                      <div className="space-y-2">
                        {[
                          { id: 'acute' as const, label: t.bestill.typeAcute },
                          { id: 'routine' as const, label: t.bestill.typeRoutine },
                          { id: 'fear' as const, label: t.bestill.typeFear },
                          { id: 'aesthetic' as const, label: t.bestill.typeAesthetic },
                        ].map((opt) => (
                          <label
                            key={opt.id}
                            className={cn(
                              'flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-colors',
                              type === opt.id
                                ? 'border-brand bg-bg'
                                : 'border-ink/10 bg-bg/50 hover:bg-bg/80'
                            )}
                          >
                            <span
                              className={cn(
                                'h-3 w-3 rounded-full border transition-colors',
                                type === opt.id ? 'border-brand bg-brand' : 'border-ink/30'
                              )}
                            />
                            <input
                              type="radio"
                              name="booking-type"
                              value={opt.id}
                              checked={type === opt.id}
                              onChange={() => setType(opt.id)}
                              className="sr-only"
                            />
                            <span className="font-sans text-sm text-ink">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div>
                      <label
                        htmlFor="booking-msg"
                        className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55 mb-2"
                      >
                        {t.bestill.messageLabel}
                      </label>
                      <textarea
                        id="booking-msg"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t.bestill.messagePlaceholder}
                        rows={4}
                        className="w-full bg-bg border border-ink/10 rounded-xl p-3 font-sans text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-brand transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!selected}
                      className={cn(
                        'w-full inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full font-sans text-sm font-medium transition-colors',
                        selected
                          ? 'bg-brand text-bg hover:bg-ink'
                          : 'bg-ink/12 text-ink/45 cursor-not-allowed'
                      )}
                    >
                      {t.bestill.submitCta}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-ink text-bg p-8 md:p-12 rounded-3xl"
                  >
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-brand mb-6">
                      <Check className="h-5 w-5 text-bg" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-bg italic mb-4">
                      {t.bestill.successTitle}
                    </h2>
                    <p className="font-sans text-base text-bg/72 leading-relaxed">
                      {t.bestill.successBody}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
