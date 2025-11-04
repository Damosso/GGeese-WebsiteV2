import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Calendar, ArrowRight, Zap } from 'lucide-react';

export default function BookDemoSection({ variant = 'default' }) {
  if (variant === 'hero') {
    return (
      <div className="mt-12">
        <Link to="/contact">
          <Button 
            size="lg" 
            className="px-10 py-7 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50"
          >
            <Calendar className="mr-3 w-6 h-6" />
            Book a Demo
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </Link>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="inline-block">
        <Link to="/contact">
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Book a Demo
          </Button>
        </Link>
      </div>
    );
  }

  // Default full section
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      <DarkAccents />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <Zap className="w-16 h-16 text-cyan-400 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Ready to Transform Your Venue?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            See ArcadiaX in action. Book a personalized demo and discover how mixed reality can revolutionize your entertainment space.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="px-12 py-7 text-xl font-bold bg-white text-purple-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-auto"
              >
                <Calendar className="mr-3 w-6 h-6" />
                Book Your Demo
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>

            <Link to="/locations">
              <Button 
                size="lg" 
                variant="outline"
                className="px-12 py-7 text-xl font-bold border-2 border-white/50 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                View Pricing
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-white/70 text-sm">
            🎯 No obligation • 💬 Personalized consultation • ⚡ Quick response time
          </p>
        </div>
      </div>
    </section>
  );
}
