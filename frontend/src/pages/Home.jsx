import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Gamepad2, Users, Sparkles, Zap, ArrowRight, Play, Star } from 'lucide-react';
import { siteData } from '../mock';

const iconMap = {
  Gamepad2,
  Users,
  Sparkles,
  Zap
};

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-pattern opacity-10" />
        
        <div className={`relative z-10 container mx-auto px-6 text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
            The Future of Social Gaming
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight">
            {siteData.heroTitle}
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto font-light">
            {siteData.heroSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl">
                Book Experience
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Why Choose GGeese?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're pioneering the next generation of entertainment by merging physical thrills with virtual possibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <Card 
                  key={feature.id} 
                  className="group bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 px-6 py-2 bg-purple-500/20 border-purple-500/50 text-purple-300">
                Innovation Meets Fun
              </Badge>
              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                Transform Any Space Into An Epic Gaming Arena
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Our cutting-edge mixed reality technology takes ordinary warehouses and transforms them into extraordinary gaming worlds. Race through cyberpunk cities, fantasy realms, or futuristic landscapes - all while physically drifting in our custom-built karts.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Real-time multiplayer with up to 12 players',
                  'Customizable virtual environments',
                  'Professional drift kart equipment',
                  'Suitable for events, parties, and competitions'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-200">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/experience">
                <Button size="lg" className="px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                  Explore the Experience
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 p-8 flex items-center justify-center">
                <img 
                  src="https://customer-assets.emergentagent.com/job_228b3afe-8d02-4e8c-8604-2bc2379db9f3/artifacts/47uq5hwj_LogoNoText.png" 
                  alt="GGeese Logo" 
                  className="w-full h-full object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">What Players Say</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from those who've experienced the future of gaming.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {siteData.testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="border-t border-slate-700 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 cta-gradient" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Ready to Experience the Future?</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Book your mixed reality drift racing experience today and step into a world where imagination becomes reality.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-12 py-8 text-xl font-semibold bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl">
              Get in Touch
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
