import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { siteData } from '../mock';
import assets from '../config/assets';
// Newsletter removed per request

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, url: siteData.contactInfo.socialMedia.linkedin, label: 'LinkedIn' },
    { icon: Instagram, url: siteData.contactInfo.socialMedia.instagram, label: 'Instagram' },
    { icon: Youtube, url: siteData.contactInfo.socialMedia.youtube, label: 'YouTube' }
  ];

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'ArcadiaX', path: '/arcadiax' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contact', path: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' }
    ]
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter Section removed */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group transition-transform duration-300 hover:scale-105 will-change-transform">
              <img 
                src={assets.footerLogo}
                alt="GGeese Logo"
                className="h-12 w-12 group-hover:scale-110 transition-transform duration-300"
                loading="lazy" decoding="async"
                onError={(e) => { e.currentTarget.src = '/images/placeholder-logo.svg'; }}
              />
              <span className="text-2xl font-bold text-white">GGeese Studio</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Pioneering the future of entertainment with mixed reality gaming. Where physical thrills meet virtual possibilities.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href={`mailto:${siteData.contactInfo.email}`} className="flex items-center gap-3 text-slate-400 transition-transform duration-300 hover:scale-105 will-change-transform group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{siteData.contactInfo.email}</span>
              </a>
              <a href={`tel:${siteData.contactInfo.phone}`} className="flex items-center gap-3 text-slate-400 transition-transform duration-300 hover:scale-105 will-change-transform group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{siteData.contactInfo.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>{siteData.contactInfo.address}</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:border-purple-500 hover:bg-slate-800 hover:scale-110 transition-all duration-300 will-change-transform"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-slate-400" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} GGeese Studio. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Crafted with innovation and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
