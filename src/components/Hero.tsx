import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    '/hero_1.jpg',
    '/hero_2.jpg',
    '/hero_3.jpg',
  ];

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = images.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = (error) => {
              console.error(`Failed to load image: ${src}`, error);
              reject(error);
            };
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [imagesLoaded]);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        {imagesLoaded && (
          <>
            {/* Current Image */}
            <motion.div
              key={`current-${currentImageIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 2,
                ease: "easeInOut"
              }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${images[currentImageIndex]})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30" />
              </div>
            </motion.div>

            {/* Previous Image (for cross-fade effect) */}
            <motion.div
              key={`prev-${currentImageIndex}`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ 
                duration: 2,
                ease: "easeInOut"
              }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${images[(currentImageIndex - 1 + images.length) % images.length]})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30" />
              </div>
            </motion.div>
          </>
        )}
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-3xl"
        >
          <motion.h1 
            className="font-noto-jp text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight tracking-[.25em] font-extralight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            五感を満たし、<br className="hidden sm:block" />
            あなたの美しさを<br className="hidden sm:block" />
            目覚めさせるサロン
          </motion.h1>
          <motion.a
            href="https://www.facebook.com/haccaforhair/?profile_tab_item_selected=mentions&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark transition-all duration-300 text-white px-12 py-4 rounded-full font-medium text-lg mt-8 hover:scale-105 transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -3 }}
          >
            {t('hero.cta')}
          </motion.a>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};