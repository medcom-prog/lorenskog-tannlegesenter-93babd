import { motion } from 'framer-motion';

const stats = [
  { value: 'Akutt', label: 'time på dagen', detail: 'ring 67 90 40 90' },
  { value: 'Kveld', label: '& helgetimer', detail: 'for deg med fullt program' },
  { value: '690 kr', label: 'akuttundersøkelse', detail: 'eksakt prisoverslag gis før start' },
  { value: 'Helfo', label: 'dekker odontofobi', detail: 'store deler av kostnadene' },
];

export function StatsBar() {
  return (
    <section className="bg-[#1A1008] py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="text-center md:text-left"
            >
              <p className="font-display text-2xl md:text-3xl text-[#D4A373] leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-[#FAF6F0] text-sm font-medium leading-tight">{stat.label}</p>
              <p className="text-[#7A6555] text-xs mt-0.5">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
