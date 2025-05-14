import React from 'react';
import { Clock, Award, Users, MessageSquare } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title font-serif text-amber-800">About Us</h2>
        <div className="w-24 h-1 mx-auto mt-2 mb-8 bg-amber-700"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3637739/pexels-photo-3637739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Craftsman at work" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-700 text-white p-6 rounded shadow-lg hidden md:block">
              <p className="font-serif text-3xl font-bold">30+</p>
              <p className="text-sm text-amber-100">Years of Experience</p>
            </div>
          </div>
          
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              With over 30 years of industry experience, French Finish Pro is a trusted name in premium wood and glass 
              restoration. We specialize in modern lacquer finishes, custom stain color matching, scratch and dent repairs, 
              professional glass polishing, and high-precision spray applications — all delivered with exceptional 
              craftsmanship at competitive prices.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Our team is committed to providing expert consultation and tailored solutions to enhance and protect the beauty 
              of your wood and glass surfaces. Whether restoring fine furniture, refinishing interiors, or revitalizing glass, 
              we combine traditional techniques with modern innovations to achieve outstanding, lasting results.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Clock className="text-amber-700" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 font-serif">Timely Delivery</h3>
                  <p className="text-gray-600">We respect your time and deliver on schedule.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Award className="text-amber-700" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 font-serif">Quality Guaranteed</h3>
                  <p className="text-gray-600">Premium materials and exceptional craftsmanship.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Users className="text-amber-700" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 font-serif">Expert Team</h3>
                  <p className="text-gray-600">Highly skilled and experienced professionals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <MessageSquare className="text-amber-700" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 font-serif">Personalized Service</h3>
                  <p className="text-gray-600">Tailored solutions to meet your specific needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;