import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Layers, Users, Sparkles, Maximize2, ArrowRight, Play, Linkedin, Instagram, MessageSquare } from 'lucide-react';
import { siteData } from '../mock';

const iconMap = {
  Layers,
  Users,
  Sparkles,
  Maximize2
};

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Diagonal stripes pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)'
          }} />
        </div>
        
        {/* Large floating orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className={`relative z-10 container mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Large bold logo */}
          <div className="mb-16 relative">
            <img 
              src="https://customer-assets.emergentagent.com/job_ggeese-nextgen/artifacts/789fh31c_ArcadiaX-Logo.png" 
              alt="ArcadiaX" 
              className="h-64 md:h-80 mx-auto drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black mb-10 text-white leading-none tracking-tight">
            The Future of<br />
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Social Gaming
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-14 text-white/95 max-w-4xl mx-auto font-medium leading-relaxed">
            Transform any space into an epic mixed reality arena where friends race, compete, and play together in immersive party games.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/locations">
              <Button size="lg" className="px-14 py-8 text-xl font-bold bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl">
                Partner With Us
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
            
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="px-14 py-8 text-xl font-bold bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <Play className="mr-3 w-6 h-6" />
                See It In Action
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">The ArcadiaX Platform</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A complete mixed reality gaming solution that brings social party games and competitive entertainment to any venue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.platformFeatures.map((feature, index) => {
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

      {/* Technology Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                Built for Venues, Designed for Fun
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                ArcadiaX combines Meta Quest 3 headsets with custom drift karts, operator management tools, and spectator engagement features to create the ultimate social gaming experience.
              </p>
              <ul className="space-y-4 mb-10">
                {siteData.technology.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-300">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/experience">
                <Button size="lg" className="px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                  See How It Works
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 p-8 flex items-center justify-center">
                <img 
                  src="https://customer-assets.emergentagent.com/job_228b3afe-8d02-4e8c-8604-2bc2379db9f3/artifacts/47uq5hwj_LogoNoText.png" 
                  alt="GGeese Studio Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Community Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Join the Community</h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
              Be part of the mixed reality revolution. Connect with venue operators, game developers, and XR enthusiasts shaping the future of entertainment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={siteData.contactInfo.socialMedia.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="px-10 py-7 text-lg font-semibold bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl">
                  Follow on LinkedIn
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              
              <Link to="/locations">
                <Button size="lg" variant="outline" className="px-10 py-7 text-lg font-semibold bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  Partner With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Meet Our Founders</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The visionaries behind GGeese Studio and ArcadiaX, pioneering the future of mixed reality entertainment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {siteData.team.map((member, index) => (
              <Card 
                key={member.id}
                className="group relative bg-slate-800/40 backdrop-blur-md border-slate-700 overflow-hidden hover:border-purple-500/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-0 relative">
                  <div className="aspect-square overflow-hidden bg-slate-900">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-white mb-3">{member.name}</h3>
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold">
                        {member.role}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-purple-300 mb-4">{member.title}</p>
                    <p className="text-slate-300 leading-relaxed">{member.description}</p>
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
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Ready to Transform Your Venue?</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Bring the future of entertainment to your location with ArcadiaX. Contact us to learn more about licensing and setup.
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
