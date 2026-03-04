import { motion } from 'motion/react';
import { Shield, Gauge, Factory, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Сертифицированное качество',
    description: 'Продукция с сертификатами UL, FM и CE, соответствующая международным стандартам безопасности и производительности.',
  },
  {
    icon: Gauge,
    title: 'Высокие стандарты производительности',
    description: 'Строгие протоколы испытаний, обеспечивающие надежность в критических ситуациях пожарной безопасности.',
  },
  {
    icon: Factory,
    title: 'Строгий контроль производства',
    description: 'Производственные процессы с сертификацией ISO и всесторонним контролем качества на каждом этапе.',
  },
  {
    icon: Headphones,
    title: 'Техническая поддержка',
    description: 'Полная техническая документация и специализированная инженерная поддержка для всех проектов.',
  },
];

export function Features() {
  return (
    <section id="solutions" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ведущие стандарты индустрии и комплексная поддержка для ваших нужд в области пожарной безопасности
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Card */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-red-400" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-600/0 via-red-600/5 to-orange-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}