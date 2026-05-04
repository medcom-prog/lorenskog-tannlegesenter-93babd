import { Wordmark } from './Wordmark';

const links = [
  {
    title: 'Behandlinger',
    items: [
      ['Tannlegevakt', '#tannlegevakt'],
      ['Tannlegeskrekk', '#tannlegeskrekk'],
      ['Undersøkelse', '#behandlinger'],
      ['Fyllinger', '#behandlinger'],
      ['Krone & bro', '#behandlinger'],
      ['Tannbleking', '#behandlinger'],
      ['Rotfylling', '#behandlinger'],
    ],
  },
  {
    title: 'Informasjon',
    items: [
      ['Priser', '#priser'],
      ['Spørsmål og svar', '#faq'],
      ['Om oss', '#om-oss'],
      ['Anmeldelser', '#anmeldelser'],
    ],
  },
  {
    title: 'Kontakt',
    items: [
      ['67 90 40 90', 'tel:+4767904090'],
      ['kontakt@lorenskogtannlege.no', 'mailto:kontakt@lorenskogtannlege.no'],
      ['Bestill time', '#timebestilling'],
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#1A1008] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Wordmark variant="dark" />
            <p className="mt-4 text-sm text-[#7A6555] leading-relaxed max-w-[200px]">
              Akutt hjelp, kort ventetid og kveldsbehandling.
            </p>
            <p className="mt-4 text-xs text-[#5A4B3C]">
              Skårersletta 10, 1473 Lørenskog
            </p>
          </div>

          {links.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-mono uppercase tracking-[0.12em] text-[#5A4B3C] mb-4">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.items.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-[#7A6555] hover:text-[#D4A373] transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#3D2C1E] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-[#5A4B3C]">
            © {new Date().getFullYear()} Lørenskog Tannlegesenter. Alle rettigheter forbeholdes.
          </p>
          <p className="text-xs text-[#3D2C1E]">
            Nettside av Medcom
          </p>
        </div>
      </div>
    </footer>
  );
}
