import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#staff', label: 'Staff' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="relative flex items-center">
      {/* Logo */}
      <a href="/" className="mr-8">
        <img 
          src="/logo2.png" 
          alt="hacca" 
          className="h-16 w-auto" // Changed from h-12 to h-16
        />
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-text hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 bg-white/60 backdrop-blur-md z-[90]"
            />
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="fixed top-16 left-0 right-0 bg-white/60 z-[91] md:hidden"
            >
              <ul className="flex flex-col items-center space-y-6 pt-8 pb-8">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-text hover:text-primary transition-colors duration-300 text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};