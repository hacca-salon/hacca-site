import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'jp', label: 'JP' },
    { code: 'vi', label: 'VI' },
    { code: 'en', label: 'EN' },
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    document.documentElement.lang = langCode;
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          <button
            onClick={() => handleLanguageChange(lang.code)}
            className={`px-2 py-1 text-sm font-medium transition-colors ${
              i18n.language === lang.code
                ? 'text-primary'
                : 'text-text hover:text-primary'
            }`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-text">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};