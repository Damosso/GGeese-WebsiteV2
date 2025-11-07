import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Home, Search, ArrowLeft } from 'lucide-react';
import DarkAccents from '../components/DarkAccents';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">
      <DarkAccents />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              404
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Page Not Found
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Oops! Looks like you've drifted off course. This page doesn't exist in our mixed reality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button size="lg" className="px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                <Home className="mr-2 w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            
            <Link to="/arcadiax">
              <Button size="lg" variant="outline" className="px-8 py-6 bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                <Search className="mr-2 w-5 h-5" />
                Explore ArcadiaX
              </Button>
            </Link>
          </div>

          <div className="mt-12">
            <p className="text-slate-400 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">
                Contact Us
              </Link>
              <span className="text-slate-600">•</span>
              <Link to="/locations" className="text-purple-400 hover:text-purple-300 transition-colors">
                Locations
              </Link>
              <span className="text-slate-600">•</span>
              <Link to="/gallery" className="text-purple-400 hover:text-purple-300 transition-colors">
                Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
