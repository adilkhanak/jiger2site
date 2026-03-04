import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight hidden sm:block">
              Jiger
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#products"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              Продукция
            </a>
            <a
              href="#solutions"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              Решения
            </a>
            <a
              href="#documentation"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              Документация
            </a>
            <a
              href="#about"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              О компании
            </a>
            <a
              href="#contact"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              Контакты
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#download"
              className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-sm font-medium shadow-lg shadow-red-500/25"
            >
              Скачать каталог
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="px-6 py-4 space-y-3">
              <a
                href="#products"
                className="block text-slate-300 hover:text-white transition-colors py-2"
              >
                Продукция
              </a>
              <a
                href="#solutions"
                className="block text-slate-300 hover:text-white transition-colors py-2"
              >
                Решения
              </a>
              <a
                href="#documentation"
                className="block text-slate-300 hover:text-white transition-colors py-2"
              >
                Документация
              </a>
              <a
                href="#about"
                className="block text-slate-300 hover:text-white transition-colors py-2"
              >
                О компании
              </a>
              <a
                href="#contact"
                className="block text-slate-300 hover:text-white transition-colors py-2"
              >
                Контакты
              </a>
              <a
                href="#download"
                className="block px-5 py-2.5 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg text-center mt-4"
              >
                Скачать каталог
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}