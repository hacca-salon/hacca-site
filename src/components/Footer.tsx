import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [address] = useLocalStorage('address', '122 Lê Thánh Tôn, phường Bến Thành, Quận 1 Ho Chi Minh City, Vietnam 700000');

  return (
    <footer className="bg-accent-sand py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-text">
            <h3 className="font-lora text-xl mb-2">hacca</h3>
            <p className="text-sm">{address}</p>
          </div>

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

          <div className="text-sm text-text">
            {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
};