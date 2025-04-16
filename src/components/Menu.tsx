import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Wand2, Palette, Sparkles, Flower2, Brush, Bomb as Comb, ChevronDown } from 'lucide-react';

export const Menu: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'cut',
      icon: <Scissors className="w-8 h-8" />,
      items: ['cutTopStylist', 'cutJrStylist', 'bangs', 'student', 'kids', 'reset'],
    },
    {
      id: 'set',
      icon: <Comb className="w-8 h-8" />,
      items: ['hairSet', 'shampoo', 'blow'],
    },
    {
      id: 'color',
      icon: <Palette className="w-8 h-8" />,
      items: ['colorSingle', 'colorDouble', 'collagenColor', 'highlight', 'colorRetouch', 'mensColor', 'protect'],
    },
    {
      id: 'perm',
      icon: <Wand2 className="w-8 h-8" />,
      items: ['permShort', 'permMedium', 'permLong', 'pointPerm', 'straightShort', 'straightMedium', 'straightLong', 'digitalPermShort', 'digitalPermMedium', 'digitalPermLong'],
    },
    {
      id: 'treatment',
      icon: <Sparkles className="w-8 h-8" />,
      items: ['moistTreatment', 'repairTreatment', 'minecollaTreatment'],
    },
    {
      id: 'spa',
      icon: <Flower2 className="w-8 h-8" />,
      items: ['tansanSpa', 'agingSpa', 'ikumoSpa', 'kanpoSpa', 'ganseiMassage'],
    },
    {
      id: 'make',
      icon: <Brush className="w-8 h-8" />,
      items: ['fullMake', 'pointMake', 'eyebrow', 'makeLesson'],
    },
  ];

  const noteItems = t('menu.note.items', { returnObjects: true });
  const notes = Array.isArray(noteItems) ? noteItems : [noteItems];

  const toggleCategory = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="menu" className="py-20 bg-accent-gray">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-h2 text-center font-lora mb-12"
        >
          {t('menu.title')}
        </motion.h2>

        <div className="space-y-4">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="text-h3 font-noto-jp">
                    {t(`menu.categories.${category.id}`)}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-200 ${
                    activeCategory === category.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100"
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                      {category.items.map((itemId) => (
                        <div
                          key={itemId}
                          className="bg-gray-50 p-4 rounded-lg"
                        >
                          <h4 className="text-lg font-noto-jp mb-2">
                            {t(`menu.items.${itemId}.title`)}
                          </h4>
                          <p className="text-xl font-medium mb-2 text-primary">
                            {t(`menu.items.${itemId}.price`)}đ
                          </p>
                          {t(`menu.items.${itemId}.description`) && (
                            <p className="text-sm text-gray-600">
                              {t(`menu.items.${itemId}.description`)}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-h3 font-noto-jp mb-4">{t('menu.note.title')}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {notes.map((note: string, index: number) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};