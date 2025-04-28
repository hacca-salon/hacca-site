import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Information } from './components/Information';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Staff } from './components/Staff';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageToggle } from './components/LanguageToggle';
import { Navigation } from './components/Navigation';
import { useTranslation } from 'react-i18next';
import '@fontsource/poppins';
import '@fontsource/lora';
import '@fontsource/noto-sans-jp';
import '@fontsource/roboto';
import './i18n';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Navigation />
          <LanguageToggle />
        </div>
      </header>
      <main className="relative z-0">
        <Hero />
        <Information />
        <About />
        <Menu />
        <Staff />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;