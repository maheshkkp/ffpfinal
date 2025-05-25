import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
          }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
                src="/images/logo1.png"
                alt="French Finish Pro Logo"
                className={`h-8 md:h-12 transition-all duration-300 ${
                    isScrolled ? 'h-8' : 'h-12'
                }`}
            />
            <span className={`ml-2 text-xl font-semibold font-serif ${isScrolled ? 'text-amber-800' : 'text-white'}`}>
            French Finish Pro
          </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        className={`hover:text-amber-700 transition-colors ${
                            isScrolled ? 'text-gray-800' : 'text-white'
                        }`}
                    >
                      {item}
                    </a>
                  </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
          >
            {isMenuOpen ? (
                <X className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            ) : (
                <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="fixed inset-0 z-40 w-full h-full bg-white">
              <div className="container py-4">
                <div className="flex items-center justify-between">
                  <a href="#" className="flex items-center">
                    <img
                        src="/logo.png" // Update this path to your logo file
                        alt="French Finish Pro Logo"
                        className="h-8"
                    />
                    <span className="ml-2 text-xl font-semibold text-amber-800 font-serif">French Finish Pro</span>
                  </a>
                  <button onClick={toggleMenu} aria-label="Close menu">
                    <X className="text-gray-800" size={24} />
                  </button>
                </div>

                <nav className="mt-8">
                  <ul className="space-y-6">
                    {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
                        <li key={item}>
                          <a
                              href={`#${item.toLowerCase().replace(' ', '-')}`}
                              className="block text-xl text-gray-800 hover:text-amber-700"
                              onClick={toggleMenu}
                          >
                            {item}
                          </a>
                        </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
        )}
      </header>
  );
};

export default Header;