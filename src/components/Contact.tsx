import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Shop',
      details: ['123 Electric Avenue', 'Tech City, TC 12345'],
      color: 'cyan'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon-Sun 9AM-8PM'],
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@hubandspoke.com', 'support@hubandspoke.com'],
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9AM-7PM', 'Sat-Sun: 10AM-6PM'],
      color: 'yellow'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to electrify your ride? Contact us today for expert advice, 
            quotes, or to schedule a service appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div>
                <select className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300">
                  <option value="">Select Service Interest</option>
                  <option value="conversion">Conversion Kits</option>
                  <option value="maintenance">Parts & Maintenance</option>
                  <option value="rental">E-bike Rentals</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
              
              <div>
                <textarea
                  placeholder="Tell us about your project or question..."
                  rows={4}
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <Icon className={`w-8 h-8 text-${info.color}-400 mt-1`} />
                      <div className={`absolute inset-0 bg-${info.color}-400/20 blur-lg rounded-full animate-pulse`} />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-8">
            Book a free consultation and let's discuss how we can electrify your cycling experience.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 via-green-500 to-blue-500 hover:from-cyan-400 hover:via-green-400 hover:to-blue-400 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;