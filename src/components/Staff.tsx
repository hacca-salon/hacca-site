import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Staff: React.FC = () => {
  const { t } = useTranslation();

  const staff = [
    {
      image: '/kenji.jpg',
      name: 'Kenji',
      role: t('staff.kenji.role'),
      description: t('staff.kenji.description'),
    },
    {
      image: '/yuko.jpg',
      name: 'Yuko',
      role: t('staff.yuko.role'),
      description: t('staff.yuko.description'),
    },
  ];

  return (
    <section id="staff" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-h2 text-center font-lora mb-12"
        >
          {t('staff.title')}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {staff.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative mb-6 aspect-square overflow-hidden rounded-lg max-w-md mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center filter hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-h3 font-noto-jp mb-2">{member.name}</h3>
              <p className={`text-primary font-medium mb-2 ${member.name === 'Yuko' ? 'text-primary' : ''}`}>{member.role}</p>
              <p className="text-gray-600 max-w-sm mx-auto">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};