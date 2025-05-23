import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: '/images/gallery/G1.jpeg',
    alt: 'Elegant wooden dresser'
  },
  {
    src: '/images/gallery/G2.jpeg',
    alt: 'Modern interior with wooden elements'
  },
  {
    src: '/images/gallery/G3.jpeg',
    alt: 'Restored wooden dining table'
  },
  {
    src: '/images/gallery/G4.jpeg',
    alt: 'Wooden cabinet with glass doors'
  },
  {
    src: '/images/gallery/G5.jpeg',
    alt: 'Custom wood staining project'
  },
  {
    src: '/images/gallery/G6.jpeg',
    alt: 'Polished wood floor'
  },
  {
    src: '/images/gallery/G7.jpeg',
    alt: 'Polished wood floor'
  },
  {
    src: '/images/gallery/G8.jpeg',
    alt: 'Polished wood floor'
  },
  {
    src: '/images/gallery/G9.jpeg',
    alt: 'Polished wood floor'
  },
  {
    src: '/images/gallery/G10.jpeg',
    alt: 'Polished wood floor'
  },  
  {
    src: '/images/gallery/G11.jpeg',
    alt: 'Polished wood floor'
  },
  {
    src: '/images/gallery/G12.jpeg',
    alt: 'Polished wood floor'
  }
  
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const showNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const showPrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (event.key === 'ArrowRight') showNextImage();
      if (event.key === 'ArrowLeft') showPrevImage();
      if (event.key === 'Escape') closeLightbox();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title font-serif text-amber-800">Our Gallery</h2>
          <div className="w-24 h-1 mx-auto mt-2 mb-8 bg-amber-700"></div>
          <p className="section-subtitle mb-16">
            Explore our portfolio of restoration projects and finished works
          </p>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
                <div
                    key={index}
                    className="gallery-item"
                    onClick={() => openLightbox(index)}
                >
                  <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-60 object-cover rounded-lg transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">+</span>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  {/* Close button */}
                  <button
                      className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                      onClick={closeLightbox}
                  >
                    <X size={32} />
                  </button>

                  {/* Previous button */}
                  <button
                      className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                      onClick={showPrevImage}
                  >
                    <ChevronLeft size={32} />
                  </button>

                  {/* Next button */}
                  <button
                      className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                      onClick={showNextImage}
                  >
                    <ChevronRight size={32} />
                  </button>

                  {/* Image */}
                  <div className="relative max-w-[90vw] max-h-[90vh]">
                    <img
                        src={galleryImages[selectedImage].src}
                        alt={galleryImages[selectedImage].alt}
                        className="max-w-full max-h-[90vh] object-contain"
                    />

                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                      {selectedImage + 1} / {galleryImages.length}
                    </div>
                  </div>
                </div>
              </div>
          )}
        </div>
      </section>
  );
};

export default Gallery;