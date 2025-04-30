import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Calendar, ExternalLink } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [address] = useLocalStorage('address', '159 Đ. Nguyễn Du, Phường Bến Thành, Quận 1, Hồ Chí Minh 700000');

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-h2 text-center font-lora mb-12"
        >
          {t('contact.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" />
              <p>{address}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-primary flex-shrink-0" />
              <p>079-6776-848</p>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="text-primary flex-shrink-0" />
              <p>{t('contact.hours')}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Calendar className="text-primary flex-shrink-0" />
              <p>{t('contact.holiday')}</p>
            </div>

            <a
              href="https://line.me/R/ti/p/%40ktc3244q"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark transition-colors duration-300 text-white px-8 py-4 rounded-full font-medium mt-8"
            >
              {t('contact.book')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="/map4.jpg"
                alt="Map location"
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/8JXaGUEorEgshdXy7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary-dark transition-colors duration-300 text-white px-6 py-3 rounded-full font-medium gap-2"
            >
              <ExternalLink size={20} />
              Google Maps で見る
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};