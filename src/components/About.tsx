import React from 'react';
import { Users, Award, Clock, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '1000+', label: 'Happy Customers', color: 'cyan' },
    { icon: Award, number: '5+', label: 'Years Experience', color: 'green' },
    { icon: Clock, number: '24/7', label: 'Support Available', color: 'blue' },
    { icon: Zap, number: '500+', label: 'Conversions Done', color: 'yellow' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/10 to-green-900/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                About The Hub & Spoke
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We're passionate about revolutionizing urban transportation through innovative 
                electric bike solutions. Founded by cycling enthusiasts and tech experts, 
                we believe everyone deserves access to clean, efficient, and enjoyable mobility.
              </p>
              
              <p>
                Our team combines decades of cycling experience with cutting-edge electric 
                vehicle technology to deliver premium conversion kits, professional maintenance 
                services, and flexible rental solutions.
              </p>
              
              <p>
                Whether you're looking to convert your beloved bike, need expert maintenance, 
                or want to try an e-bike before buying, we're here to electrify your journey.
              </p>
            </div>

            <div className="mt-8">
              <button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Learn Our Story
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative mb-4">
                    <Icon className={`w-12 h-12 mx-auto text-${stat.color}-400`} />
                    <div className={`absolute inset-0 bg-${stat.color}-400/20 blur-lg rounded-full animate-pulse`} />
                  </div>
                  
                  <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  
                  <div className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;