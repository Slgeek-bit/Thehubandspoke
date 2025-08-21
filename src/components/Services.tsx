import React from 'react';
import { Battery, Wrench, Bike, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Battery,
      title: 'Conversion Kits',
      description: 'Premium electric bike conversion kits that transform your regular bike into a powerful e-bike. Easy installation, long-lasting batteries, and superior performance.',
      features: ['High-capacity batteries', 'Powerful motors', 'Easy installation', 'Warranty included'],
      color: 'cyan'
    },
    {
      icon: Wrench,
      title: 'Parts & Maintenance',
      description: 'Professional maintenance services and genuine e-bike parts. Keep your electric bike running at peak performance with our expert technicians.',
      features: ['Expert technicians', 'Genuine parts', 'Quick turnaround', 'Full diagnostics'],
      color: 'green'
    },
    {
      icon: Bike,
      title: 'E-bike Rentals',
      description: 'Rent premium electric bikes for daily commutes, weekend adventures, or special events. Flexible rental periods and competitive pricing.',
      features: ['Premium e-bikes', 'Flexible periods', 'Delivery available', 'Competitive pricing'],
      color: 'blue'
    }
  ];

  const colorClasses = {
    cyan: {
      gradient: 'from-cyan-500/20 to-cyan-600/20',
      border: 'border-cyan-500/30',
      icon: 'text-cyan-400',
      button: 'from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500'
    },
    green: {
      gradient: 'from-green-500/20 to-green-600/20',
      border: 'border-green-500/30',
      icon: 'text-green-400',
      button: 'from-green-500 to-green-600 hover:from-green-400 hover:to-green-500'
    },
    blue: {
      gradient: 'from-blue-500/20 to-blue-600/20',
      border: 'border-blue-500/30',
      icon: 'text-blue-400',
      button: 'from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500'
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From conversion kits to maintenance and rentals, we provide everything you need 
            for your electric bike journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClass = colorClasses[service.color];
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${colorClass.gradient} backdrop-blur-sm border ${colorClass.border} rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-${service.color}-500/10`}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClass.icon} mb-6 relative`}>
                    <Icon className="w-8 h-8" />
                    <div className={`absolute inset-0 bg-${service.color}-400/20 blur-lg rounded-full animate-pulse`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className={`w-2 h-2 ${colorClass.icon} rounded-full mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button className={`group/btn w-full bg-gradient-to-r ${colorClass.button} text-white py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}>
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-cyan-500 via-green-500 to-blue-500 hover:from-cyan-400 hover:via-green-400 hover:to-blue-400 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;