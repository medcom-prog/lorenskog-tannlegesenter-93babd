import { motion } from 'framer-motion';

const priceGroups = [
  {
    group: 'Undersøkelse og forebygging',
    items: [
      { name: 'Undersøkelse m/røntgen, rens, polering, forebygging', price: '1 340 kr' },
      { name: 'Akuttundersøkelse', price: '690 kr' },
      { name: 'Hygienetiltak', price: '199 kr' },
      { name: 'Tannrøntgen', price: '200 kr' },
      { name: 'Bedøvelse', price: '190 kr' },
    ],
  },
  {
    group: 'Fyllinger',
    items: [
      { name: 'Fylling 1 flate', price: '1 500 kr' },
      { name: 'Fylling 2 flater', price: '1 890 kr' },
      { name: 'Fylling 3+ flater', price: 'fra 2 100 kr' },
      { name: 'Midlertidig fylling', price: '590 kr' },
    ],
  },
  {
    group: 'Rotfylling',
    items: [
      { name: 'Rotfylling fortann', price: 'fra 4 200 kr' },
      { name: 'Rotfylling liten jeksel', price: 'fra 4 800 kr' },
      { name: 'Rotfylling jeksel', price: 'fra 5 500 kr' },
    ],
  },
  {
    group: 'Krone & bro',
    items: [
      { name: 'Tannkrone', price: '7 400–7 990 kr' },
      { name: 'Tannbro per ledd', price: '7 400 kr' },
      { name: 'Tannprotese', price: 'fra 14 000 kr' },
    ],
  },
  {
    group: 'Rens & annet',
    items: [
      { name: 'Dyprens (egenandel)', price: 'fra 690 kr' },
      { name: 'Vanlig rens (omfattende tannstein)', price: 'fra 650 kr' },
      { name: 'Bittskinne (egenandel)', price: '3 190 kr' },
      { name: 'Tannbleking (2 kjever)', price: '3 990 kr' },
    ],
  },
  {
    group: 'Tanntrekking',
    items: [
      { name: 'Enkel tanntrekking', price: 'fra 1 890 kr' },
      { name: 'Komplisert tanntrekking', price: 'fra 2 600 kr' },
      { name: 'Periodontal tanntrekking', price: '890 kr' },
    ],
  },
];

const rabatter = [
  { title: '30% rabatt', desc: 'på undersøkelse for nye pasienter' },
  { title: '10% rabatt', desc: 'for pensjonister og studenter' },
  { title: 'Gratis konsultasjon', desc: 'for pasienter med stor tannlegeskrekk og høye behandlingsbehov' },
];

export function Priser() {
  return (
    <section id="priser" className="py-20 md:py-28 bg-[#FAF6F0]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#8B5A3C] mb-3">
            (04) Priser
          </p>
          <h2 className="font-display text-display-lg text-[#1A1008]">
            Klare priser.
            <br />
            <span className="italic">Ingen overraskelser.</span>
          </h2>
          <p className="mt-3 text-[#5A4B3C] max-w-md">
            Du får alltid et eksakt kostnadsoverslag før behandlingen starter.
          </p>
        </motion.div>

        {/* Discounts highlight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {rabatter.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="p-5 rounded-2xl bg-[#8B5A3C] text-[#FAF6F0]"
            >
              <p className="font-display text-2xl text-[#D4A373] mb-1">{r.title}</p>
              <p className="text-sm text-[#F0E2D0]/80">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Price table */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priceGroups.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: gi * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#E0C9B0] overflow-hidden"
            >
              <div className="px-5 py-3 bg-[#F0E2D0] border-b border-[#E0C9B0]">
                <h3 className="text-sm font-semibold text-[#1A1008]">{group.group}</h3>
              </div>
              <div className="divide-y divide-[#E0C9B0]">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="px-5 py-3 flex items-center justify-between gap-4"
                  >
                    <span className="text-sm text-[#3D2C1E]">{item.name}</span>
                    <span className="text-sm font-mono font-medium text-[#8B5A3C] shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-xs text-[#7A6555] max-w-xl"
        >
          Avbestilling: senest 24 timer før time. Ved avbestilling kortere varsel belastes 75% av honoraret
          (1 500 kr/time). Prisene er veiledende — du får alltid eksakt pris ved konsultasjon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-6"
        >
          <a
            href="#timebestilling"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-[#8B5A3C] text-[#FAF6F0] font-semibold text-sm hover:bg-[#6B3A1C] transition-colors"
          >
            Bestill time
          </a>
        </motion.div>
      </div>
    </section>
  );
}
