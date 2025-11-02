import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { siteData } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, url: siteData.contactInfo.socialMedia.twitter, label: 'Twitter' },
    { icon: Linkedin, url: siteData.contactInfo.socialMedia.linkedin, label: 'LinkedIn' },
    { icon: Instagram, url: siteData.contactInfo.socialMedia.instagram, label: 'Instagram' },
    { icon: Youtube, url: siteData.contactInfo.socialMedia.youtube, label: 'YouTube' }
  ];

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Experience', path: '/experience' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contact', path: '/contact' }
    ],
    services: [
      { name: 'Corporate Events', path: '/contact' },
      { name: 'Private Parties', path: '/contact' },
      { name: 'Team Building', path: '/contact' },
      { name: 'Competitions', path: '/contact' }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src="https://customer-assets.emergentagent.com/job_228b3afe-8d02-4e8c-8604-2bc2379db9f3/artifacts/47uq5hwj_LogoNoText.png"
                alt="GGeese Logo"
                className="h-12 w-12 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl font-bold text-white">GGeese Studio</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Pioneering the future of entertainment with mixed reality drift racing. Where physical thrills meet virtual possibilities.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href={`mailto:${siteData.contactInfo.email}`} className="flex items-center gap-3 text-slate-400 hover:text-purple-400 transition-colors group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{siteData.contactInfo.email}</span>
              </a>
              <a href={`tel:${siteData.contactInfo.phone}`} className="flex items-center gap-3 text-slate-400 hover:text-purple-400 transition-colors group">
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
                    className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:border-purple-500 hover:bg-slate-800 hover:scale-110 transition-all duration-300"
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
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-purple-400 transition-colors"
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
                    className="text-slate-400 hover:text-purple-400 transition-colors"
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
