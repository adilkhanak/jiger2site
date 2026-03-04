import { motion } from 'motion/react';
import { FileText, BookOpen, Award, Download } from 'lucide-react';

const documents = [
  {
    icon: FileText,
    title: 'Технические паспорта',
    description: 'Подробные спецификации и данные о производительности всех линеек продукции.',
    count: '200+ документов',
  },
  {
    icon: BookOpen,
    title: 'Руководства по установке',
    description: 'Исчерпывающие руководства по установке и документация с лучшими практиками.',
    count: '50+ руководств',
  },
  {
    icon: Award,
    title: 'Сертификаты',
    description: 'Полный портфель сертификатов включая UL, FM, CE и региональные разрешения.',
    count: '30+ сертификатов',
  },
];

export function Documentation() {
  return (
    <section id="documentation" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Центр загрузок
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Доступ к полной технической документации и сертификационным файлам
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <doc.icon className="text-red-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{doc.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{doc.description}</p>
                <span className="inline-block text-sm text-blue-400 font-medium">
                  {doc.count}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#download"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 font-medium shadow-xl shadow-red-500/25"
          >
            <Download size={20} />
            Получить доступ к библиотеке документации
          </a>
        </motion.div>
      </div>
    </section>
  );
}