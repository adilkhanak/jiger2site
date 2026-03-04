import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    title: 'Спринклеры Upright',
    description: 'Высокопроизводительные вертикальные спринклеры для промышленных и коммерческих потолочных установок с оптимальным покрытием.',
    image: 'https://images.unsplash.com/photo-1698319801633-17acc31a50c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc3ByaW5rbGVyJTIwaGVhZCUyMGNsb3NldXB8ZW58MXx8fHwxNzcyNjQyODI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Спринклеры Pendent',
    description: 'Надежные подвесные спринклеры для потолочного монтажа, обеспечивающие комплексную защиту от пожара.',
    image: 'https://images.unsplash.com/photo-1666056939314-854c42c2ffa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3ByaW5rbGVyJTIwc3lzdGVtJTIwY2VpbGluZ3xlbnwxfHx8fDE3NzI2NDI4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Спринклеры Sidewall',
    description: 'Компактные настенные спринклеры, идеальные для коридоров, холлов и помещений с ограниченным доступом к потолку.',
    image: 'https://images.unsplash.com/photo-1716789763006-6f195e77a7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmR1c3RyaWFsJTIwYnVpbGRpbmclMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NzI2NDI4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Комплектующие',
    description: 'Полный спектр клапанов, фитингов и компонентов управления для комплексной интеграции систем пожаротушения.',
    image: 'https://images.unsplash.com/photo-1762740295935-276b7e95426c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwcHJvdGVjdGlvbiUyMGVxdWlwbWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI2NDI4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Категории продукции
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Комплексная линейка сертифицированных спринклерных систем и компонентов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 hover:border-red-500/30 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{product.description}</p>
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                >
                  View Details
                  <ArrowRight
                    size={18}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}