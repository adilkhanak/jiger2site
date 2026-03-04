import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const regions = [
  { name: 'Северная Америка', countries: 'США, Канада, Мексика' },
  { name: 'Европа', countries: 'Великобритания, Германия, Франция, Италия, Испания' },
  { name: 'Ближний Восток', countries: 'ОАЭ, Саудовская Аравия, Катар, Кувейт' },
  { name: 'Азиатско-Тихоокеанский регион', countries: 'Китай, Япония, Сингапур, Австралия' },
  { name: 'Латинская Америка', countries: 'Бразилия, Аргентина, Чили, Колумбия' },
  { name: 'Африка', countries: 'ЮАР, Египет, Нигерия, Кения' },
];

export function Geography() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Глобальная дистрибуция
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Обслуживание проектов пожарной безопасности в более чем 45 странах мира
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-red-400" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{region.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{region.countries}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-lg">
            Нам доверяют ведущие подрядчики, застройщики и инжиниринговые компании по всему миру
          </p>
        </motion.div>
      </div>
    </section>
  );
}