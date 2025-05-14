import React from 'react';
import { Feather, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Feather className="mr-2 text-amber-500" size={28} />
              <span className="text-xl font-semibold font-serif">French Finish Pro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Excellence in craftsmanship, commitment to quality in premium wood and glass restoration.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 font-serif">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 font-serif">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Wood Restoration',
                'Lacquer Finishes',
                'Color Matching',
                'Scratch Repair',
                'Spray Finishing',
                'Glass Polishing'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 font-serif">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-2 text-amber-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">Info@frenchfinishpro.co.uk</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 text-amber-500 flex-shrink-0 mt-1" size={18} />
                <div className="text-gray-400">
                  <p>(+44) 7399 394154</p>
                  <p>(+44) 7958 604042</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 text-amber-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">51, Botha Road, London, E13 8PG</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} French Finish Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;