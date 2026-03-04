import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Features } from './components/Features';
import { Documentation } from './components/Documentation';
import { Geography } from './components/Geography';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Features />
        <Documentation />
        <Geography />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
