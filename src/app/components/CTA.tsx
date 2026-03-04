import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-10"></div>
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-3xl"></div>

          {/* Content */}
          <div className="relative border border-slate-800 rounded-3xl p-12 md:p-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Ищете надежного партнера в области пожарной безопасности?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
            >
              Свяжитесь с нашей инженерной командой для технической консультации и поддержки проекта
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 font-medium shadow-xl shadow-red-500/25 flex items-center justify-center gap-2"
              >
                Связаться с нами
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="tel:+1234567890"
                className="px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-lg hover:bg-slate-700 transition-all duration-300 font-medium flex items-center justify-center"
              >
                +7 (800) 555-35-35
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}