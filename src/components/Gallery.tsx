import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'natural', labelKey: 'gallery.filters.natural' },
    { id: 'color', labelKey: 'gallery.filters.color' },
    { id: 'perm', labelKey: 'gallery.filters.perm' },
  ];

  const allImages = {
    natural: [
      '/style/natural/484794995_3096781233811010_8245547223702960723_n.jpg',
      '/style/natural/481003051_3078940542261746_7282043101634897228_n.jpg',
      '/style/natural/481270208_3075895595899574_5260563041220652422_n.jpg',
      '/style/natural/481085232_3075327155956418_3528109088934377210_n.jpg',
      '/style/natural/173877147_1928827260606419_3030142815533682925_n.jpg',
      '/style/natural/480031615_3066212273534573_4290584851320992312_n.jpg',
    ],
    color: [
      '/style/color/481978467_3089323134556820_3174714418594640685_n.jpg',
      '/style/color/480701733_3075905069231960_4421553487886459956_n.jpg',
      '/style/color/450055133_1027860862674529_1764343468884207515_n (1).jpg',
      '/style/color/449823307_1027015536092395_4179670198685991845_n.jpg',
      '/style/color/467170360_18124746874389990_4072283374359520262_n.jpg',
      '/style/color/473570374_1186141553513125_1292264263323527262_n (1).jpg',
    ],
    perm: [
      '/style/perm/484491369_3097045437117923_7862467767083775820_n.jpg',
      '/style/perm/481702908_3084243165064817_8941222785130107590_n.jpg',
      '/style/perm/467327463_18124746865389990_7798075038304401461_n.jpg',
      '/style/perm/467223713_18124746868389990_1560082692652633423_n.jpg',
      '/style/perm/448070722_1009994291127853_616629748855045517_n.jpg',
      '/style/perm/478444106_3064843540338113_949483768691409293_n.jpg',
    ],
  };

  // ALLビュー用の画像（各カテゴリーから2枚ずつ）
  const featuredImages = [
    { src: allImages.natural[0], filter: 'natural' },
    { src: allImages.natural[1], filter: 'natural' },
    { src: allImages.color[0], filter: 'color' },
    { src: allImages.color[1], filter: 'color' },
    { src: allImages.perm[0], filter: 'perm' },
    { src: allImages.perm[1], filter: 'perm' },
  ];

  const getFilteredImages = () => {
    if (activeFilter === 'all') {
      return featuredImages;
    }
    return allImages[activeFilter as keyof typeof allImages].map(src => ({
      src,
      filter: activeFilter
    }));
  };

  return (
    <section id="gallery" className="py-20 bg-accent-gray">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-h2 text-center font-lora mb-12"
        >
          {t('gallery.title')}
        </motion.h2>

        <div className="flex justify-center space-x-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-text hover:bg-primary hover:text-white'
              }`}
            >
              {filter.labelKey ? t(filter.labelKey) : filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {getFilteredImages().map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt="Hairstyle"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Selected hairstyle"
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};