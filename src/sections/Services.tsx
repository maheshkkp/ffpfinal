import React from 'react';

const services = [
  {
    title: 'Wood Restoration and Refinishing',
    description: 'High-quality restoration for furniture, cabinetry, doors, and wood interiors using advanced techniques and premium finishes.',
    image: '/images/wood-restoration.jpg'
  },
  {
    title: 'Modern Lacquer Finishes',
    description: 'Durable, sleek, and flawless lacquer applications for a contemporary, polished appearance.',
    image: '/images/lacquer-finish.jpeg'
  },
  {
    title: 'Custom Stain Color Matching',
    description: 'Personalized stain solutions to match or create the perfect color for your wood surfaces.',
    image: '/images/color-matching.jpg'
  },
  {
    title: 'Scratch and Dent Repair',
    description: 'Expert repairs to restore the original beauty and structural integrity of your wood items.',
    image: '/images/repair.jpg'
  },
  {
    title: 'Professional Spray Finishing',
    description: 'Smooth, even, and high-quality spray finishes for furniture, woodwork, and architectural elements.',
    image: '/images/spray-finishing.jpg'
  },
  {
    title: 'Glass Polishing',
    description: 'Removal of scratches, stains, and imperfections to restore the clarity and brilliance of your glass surfaces.',
    image: '/images/glass-polishing.jpg'
  },
  {
    title: 'Floor Polishing',
    description: 'Professional floor polishing services to revive the shine, protect the surface, and enhance the durability of hardwood and other flooring materials.',
    image: '/images/floor-polishing.jpg'
  }
];

const Services: React.FC = () => {
  return (
      <section id="services" className="py-20">
        <div className="container">
          <h2 className="section-title font-serif text-amber-800">Our Services</h2>
          <div className="w-24 h-1 mx-auto mt-2 mb-8 bg-amber-700"></div>
          <p className="section-subtitle mb-16">
            We offer a comprehensive range of wood and glass restoration services,
            combining traditional craftsmanship with modern techniques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div key={index} className="service-card">
                  <img
                      src={service.image}
                      alt={service.title}
                      className="service-img w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-3 font-serif">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Services;