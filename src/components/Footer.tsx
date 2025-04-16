import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-accent-sand py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo */}
            <a href="/" className="block">
              <img 
                src="/logo.png" 
                alt="hacca" 
                className="h-24 w-auto" // Increased size from h-16 to h-24
              />
            </a>

            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              <a
                href="https://www.facebook.com/haccaforhair/?locale=ja_JP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://line.me/R/ti/p/%40ktc3244q"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary transition-colors duration-300"
              >
                <img 
                  src="/icons8-line-144.png" 
                  alt="LINE" 
                  className="w-6 h-6" 
                />
              </a>
            </div>
          </div>

          <div className="text-sm text-text text-center">
            {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
};