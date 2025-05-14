import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Elegant wooden dresser'
  },
  {
    src: 'https://images.pexels.com/photos/4004372/pexels-photo-4004372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Modern interior with wooden elements'
  },
  {
    src: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Restored wooden dining table'
  },
  {
    src: 'https://images.pexels.com/photos/6782582/pexels-photo-6782582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Wooden cabinet with glass doors'
  },
  {
    src: 'https://images.pexels.com/photos/5824884/pexels-photo-5824884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Custom wood staining project'
  },
  {
    src: 'https://images.pexels.com/photos/5490401/pexels-photo-5490401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
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
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            <img 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt} 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;