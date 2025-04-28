import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export const Information: React.FC = () => {
  const { t } = useTranslation();

  // 記事オブジェクトを取得し、最大5件まで表示
  const itemsObj = t('information.items', { returnObjects: true }) as Record<
    string,
    { title?: string; description?: string; image?: string; date?: string }
  >;
  const itemKeys = Object.keys(itemsObj)
    .filter((key) => !!itemsObj[key]?.title)
    .slice(0, 5);

  // 記事が一件もない場合はセクションを表示しない
  if (itemKeys.length === 0) return null;

  const [activeId, setActiveId] = useState<string | null>(null);
  const toggle = (id: string) => setActiveId(activeId === id ? null : id);

  return (
    <section id="information" className="py-20 bg-accent-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-center font-lora mb-12">
          {t('information.title')}
        </h2>

        <div className="space-y-4">
          {itemKeys.map((id) => {
            const { title, description, image, date } = itemsObj[id] as {
              title: string;
              description: string;
              image: string;
              date?: string;
            };
            const hasImage = Boolean(image);

            return (
              <div
                key={id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggle(id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex flex-col text-left">
                    <h3 className="text-h3 font-noto-jp">{title}</h3>
                    {date && (
                      <span className="text-sm text-gray-600 mt-1">
                        {date}
                      </span>
                    )}
                  </div>
                  <motion.span
                    className={`text-primary transition-transform duration-200 ${
                      activeId === id ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {activeId === id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100"
                    >
                      <div className="flex flex-col md:flex-row p-6 gap-4">
                        {hasImage && (
                          <div className="w-full md:w-[30%] flex-shrink-0">
                            <img
                              src={image}
                              alt={`${title} img`}
                              className="w-full h-auto object-cover rounded-lg"
                            />
                          </div>
                        )}

                        <div className={hasImage ? 'w-full md:w-[70%]' : 'w-full'}>
                          {/* 改行対応: description を改行で分割して複数の段落として表示 */}
                          {description.split('\n').map((line, idx) => (
                            <p key={idx} className="text-gray-700 mb-2">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
