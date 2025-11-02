import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Layers, Users, Sparkles, Maximize2, ArrowRight, Play, Zap, Paintbrush, Ghost, Target, Trophy, Plus } from 'lucide-react';
import { siteData } from '../mock';

const iconMap = {
  Layers,
  Users,
  Sparkles,
  Maximize2
};

const gameIconMap = {
  Zap,
  Paintbrush,
  Ghost,
  Target,
  Trophy,
  Plus
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
        
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }} />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }} />
        </div>
        
        <div className={`relative z-10 container mx-auto px-6 text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 animate-glow-pulse">
            Powered by GGeese Studio
          </Badge>
          
          <div className="mb-8">
            <img 
              src="https://customer-assets.emergentagent.com/job_ggeese-nextgen/artifacts/789fh31c_ArcadiaX-Logo.png" 
              alt="ArcadiaX Logo" 
              className="h-32 md:h-40 mx-auto mb-6 drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight drop-shadow-lg">
            {siteData.heroTitle}
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto font-light drop-shadow-md">
            {siteData.heroSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-white text-purple-600 hover:bg-white/90 hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:border-white/50">
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

      {/* Games Library Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-2 bg-purple-500/20 border-purple-500/50 text-purple-300">
              Game Library
            </Badge>
            <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
              Multiple Party Games, Endless Fun
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              ArcadiaX features a growing library of social party games designed for 4-8 players. From drift karting to ghost hunts and paint battles - there's something for everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.games.map((game, index) => {
              const Icon = gameIconMap[game.icon];
              return (
                <Card 
                  key={game.id}
                  className="group bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`h-3 bg-gradient-to-r ${game.color}`} />
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${game.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-white">{game.name}</h3>
                        <p className="text-slate-300 text-sm">{game.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/experience">
              <Button size="lg" className="px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                Explore All Games
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 px-6 py-2 bg-purple-500/20 border-purple-500/50 text-purple-300">
                Technology
              </Badge>
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

      {/* Use Cases Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Perfect For Any Venue</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From entertainment centers to corporate events, ArcadiaX transforms any space into an unforgettable XR gaming destination.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.useCases.map((useCase, index) => (
              <Card 
                key={useCase.id} 
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                    <div className="text-3xl font-bold text-white">{index + 1}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{useCase.title}</h3>
                  <p className="text-slate-300">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-2 bg-purple-500/20 border-purple-500/50 text-purple-300">
              The Team
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-white">Meet Our Founders</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The innovators behind GGeese Studio and ArcadiaX, pioneering the future of mixed reality entertainment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {siteData.team.map((member, index) => (
              <Card 
                key={member.id}
                className="group relative bg-slate-800/30 backdrop-blur-md border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-0 relative">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <div className="mb-4">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                        {member.role}
                      </Badge>
                    </div>
                    <p className="text-lg font-semibold text-purple-300 mb-3">{member.title}</p>
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
