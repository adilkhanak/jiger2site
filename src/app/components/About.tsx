import { motion } from 'motion/react';
import { Award, Globe2, Settings, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    number: '15+',
    label: 'Лет опыта в индустрии',
  },
  {
    icon: Award,
    number: 'UL/FM/CE',
    label: 'Международные сертификаты',
  },
  {
    icon: Globe2,
    number: '45+',
    label: 'Стран глобальной дистрибуции',
  },
  {
    icon: Settings,
    number: '200+',
    label: 'Инженерных моделей продукции',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Доверие и превосходство
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ведущие решения в области пожарной безопасности, подкрепленные многолетним опытом и международными сертификациями
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-red-400" size={28} />
                </div>
                <div className="text-4xl font-bold text-white mb-3">{stat.number}</div>
                <div className="text-slate-400 leading-relaxed">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}