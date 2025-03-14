
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Image {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: Image[];
  columnsDesktop?: number;
  columnsMobile?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columnsDesktop = 3,
  columnsMobile = 1,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") navigateImage("next");
    if (e.key === "ArrowLeft") navigateImage("prev");
  };

  return (
    <>
      <div
        className={`grid grid-cols-${columnsMobile} md:grid-cols-${columnsDesktop} gap-4`}
        style={{
          gridTemplateColumns: `repeat(${columnsMobile}, minmax(0, 1fr))`,
          "@media (min-width: 768px)": {
            gridTemplateColumns: `repeat(${columnsDesktop}, minmax(0, 1fr))`,
          },
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer relative group"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-w-4 aspect-h-3 w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-medium">{image.caption || "View larger"}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-tavern-gold transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          
          <button
            className="absolute left-4 text-white hover:text-tavern-gold transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
          
          <div
            className="max-w-4xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            {images[currentImageIndex].caption && (
              <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white p-3 text-center">
                {images[currentImageIndex].caption}
              </div>
            )}
          </div>
          
          <button
            className="absolute right-4 text-white hover:text-tavern-gold transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
