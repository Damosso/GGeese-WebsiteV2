import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import ScrollProgress from './ScrollProgress';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'ArcadiaX', path: '/arcadiax' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-slate-950 ${
        isScrolled ? 'border-b border-slate-800' : ''
      }`}
    >
      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <ScrollProgress />
      </div>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://customer-assets.emergentagent.com/job_228b3afe-8d02-4e8c-8604-2bc2379db9f3/artifacts/47uq5hwj_LogoNoText.png"
              alt="GGeese Studio"
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent">
              GGeese Studio
            </span>
          </Link>

          {/* Desktop Navigation - Aligned Left */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-lg font-medium transition-all duration-300 group ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-slate-300'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Gradient underline on hover */}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`} />
                {/* Glow effect on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 -z-10" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-auto">
            <Link to="/contact">
              <Button className="relative px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold overflow-hidden group">
                <span className="relative z-10">Book a Demo</span>
                {/* Animated gradient overlay on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Glow effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-purple-400 to-pink-400" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-slate-700 pt-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium ${
                    location.pathname === link.path
                      ? 'text-white'
                      : 'text-slate-300'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
