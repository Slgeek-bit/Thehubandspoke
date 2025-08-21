import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Conversion Kits', href: '#services' },
    { label: 'Maintenance', href: '#services' },
    { label: 'Rentals', href: '#services' },
    { label: 'About Us', href: '#about' },
  ];

  const supportLinks = [
    { label: 'FAQ', href: '#' },
    { label: 'Warranty', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Support', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'blue' },
    { icon: Twitter, href: '#', color: 'cyan' },
    { icon: Instagram, href: '#', color: 'pink' },
    { icon: Youtube, href: '#', color: 'red' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Zap className="w-8 h-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                The Hub & Spoke
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Electrifying urban transportation with premium e-bike conversion kits, 
              professional maintenance, and flexible rental solutions.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-${social.color}-500 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p>123 Electric Avenue</p>
              <p>Tech City, TC 12345</p>
              <p className="text-cyan-400">+1 (555) 123-4567</p>
              <p className="text-cyan-400">info@hubandspoke.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 The Hub & Spoke. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;