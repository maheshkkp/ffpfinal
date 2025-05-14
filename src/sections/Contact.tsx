import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="section-title font-serif text-amber-800">Contact Us</h2>
        <div className="w-24 h-1 mx-auto mt-2 mb-8 bg-amber-700"></div>
        <p className="section-subtitle mb-16">
          Get in touch with our team for inquiries, quotes, or to discuss your restoration needs
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-amber-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-serif">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="text-amber-700" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold font-serif">Email</h4>
                  <a href="mailto:Info@frenchfinishpro.co.uk" className="text-gray-600 hover:text-amber-700 transition-colors">
                    Info@frenchfinishpro.co.uk
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="text-amber-700" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold font-serif">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+447399394154" className="hover:text-amber-700 transition-colors">
                      (+44) 7399 394154
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+447958604042" className="hover:text-amber-700 transition-colors">
                      (+44) 7958 604042
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="text-amber-700" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold font-serif">Address</h4>
                  <p className="text-gray-600">51, Botha Road, London, E13 8PG</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-6 font-serif">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">Monday - Friday:</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Saturday:</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Sunday:</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
          </div>
          
          {/* Map */}
          <div className="relative w-full h-0 pb-[100%] lg:pb-[75%]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2944370936813!2d0.027133976572801077!3d51.5144624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7e6a77e7e15%3A0x1086df2ee60cc9a9!2s51%20Botha%20Rd%2C%20London%20E13%208PG%2C%20UK!5e0!3m2!1sen!2sus!4v1699440251707!5m2!1sen!2sus" 
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="French Finish Pro Location"
            ></iframe>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center font-serif">Send Us a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message *
              </label>
              <textarea 
                id="message" 
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit"
                className="btn btn-primary bg-amber-700 hover:bg-amber-800 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;