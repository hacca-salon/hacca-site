import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-accent-sand">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-h2 font-lora">{t('about.title')}</h2>
            <p className="text-lg leading-relaxed font-noto-jp">
              {t('about.description')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px]"
          >
            <img
              src="/about_hacca.jpg"
              alt="About hacca"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              width="800"
              height="600"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};