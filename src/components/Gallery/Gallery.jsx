import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Gallery.css';

const Gallery = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock gallery images - replace with actual images
  const galleryImages = [
    { id: 1, title: "Restaurant Ambiance", category: "interior" },
    { id: 2, title: "Culinary Masterpiece", category: "food" },
    { id: 3, title: "Craft Cocktails", category: "drinks" },
    { id: 4, title: "Private Dining", category: "interior" },
    { id: 5, title: "Fresh Ingredients", category: "food" },
    { id: 6, title: "Wine Selection", category: "drinks" },
    { id: 7, title: "Chef's Special", category: "food" },
    { id: 8, title: "Evening Atmosphere", category: "interior" }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <motion.div
          ref={ref}
          className="gallery-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">A visual journey through Sol House Tavern</p>
          <div className="title-decoration"></div>
        </motion.div>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotate: index % 2 === 0 ? 1 : -1
              }}
              onClick={() => openLightbox(image, index)}
            >
              <div className="image-placeholder">
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h4>{image.title}</h4>
                    <span className="category-tag">{image.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button className="close-btn" onClick={closeLightbox}>
                <FiX />
              </button>
              
              <button className="nav-btn prev" onClick={() => navigateImage('prev')}>
                <FiChevronLeft />
              </button>
              
              <button className="nav-btn next" onClick={() => navigateImage('next')}>
                <FiChevronRight />
              </button>

              <div className="lightbox-image">
                <div className="image-placeholder-large">
                  <div className="image-info">
                    <h3>{selectedImage.title}</h3>
                    <p>{selectedImage.category.toUpperCase()}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;