import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <span className="text-white font-semibold text-lg">Jiger</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Современные спринклерные системы и компоненты для промышленных и коммерческих проектов по всему миру.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-300"
              >
                <Linkedin size={18} className="text-slate-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-300"
              >
                <Twitter size={18} className="text-slate-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-300"
              >
                <Facebook size={18} className="text-slate-400" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold mb-6">Продукция</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-slate-400 hover:text-white transition-colors">
                  Спринклеры Upright
                </a>
              </li>
              <li>
                <a href="#products" className="text-slate-400 hover:text-white transition-colors">
                  Спринклеры Pendent
                </a>
              </li>
              <li>
                <a href="#products" className="text-slate-400 hover:text-white transition-colors">
                  Спринклеры Sidewall
                </a>
              </li>
              <li>
                <a href="#products" className="text-slate-400 hover:text-white transition-colors">
                  Комплектующие
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-6">Ресурсы</h3>
            <ul className="space-y-3">
              <li>
                <a href="#documentation" className="text-slate-400 hover:text-white transition-colors">
                  Технические паспорта
                </a>
              </li>
              <li>
                <a href="#documentation" className="text-slate-400 hover:text-white transition-colors">
                  Руководства по установке
                </a>
              </li>
              <li>
                <a href="#documentation" className="text-slate-400 hover:text-white transition-colors">
                  Сертификаты
                </a>
              </li>
              <li>
                <a href="#download" className="text-slate-400 hover:text-white transition-colors">
                  Скачать каталог
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-red-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@jiger.ru"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  info@jiger.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-red-400 mt-1 flex-shrink-0" />
                <a
                  href="tel:+78005553535"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  +7 (800) 555-35-35
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  Промышленный парк 123
                  <br />
                  Москва, Россия 101000
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 Jiger. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">
                Условия использования
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}