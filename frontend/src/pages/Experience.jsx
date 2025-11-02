import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Layers, Box, Wand2, ArrowRight } from 'lucide-react';

export const Experience = () => {
  const [isTransformed, setIsTransformed] = useState(false);
  const [selectedEnvironment, setSelectedEnvironment] = useState('cyberpunk');

  const environments = [
    {
      id: 'cyberpunk',
      name: 'Cyberpunk City',
      color: 'from-cyan-500 to-purple-600',
      description: 'Neon-lit streets and futuristic skyscrapers'
    },
    {
      id: 'fantasy',
      name: 'Fantasy Realm',
      color: 'from-emerald-500 to-blue-600',
      description: 'Magical landscapes with mythical creatures'
    },
    {
      id: 'space',
      name: 'Space Station',
      color: 'from-indigo-500 to-pink-600',
      description: 'Zero-gravity racing through the cosmos'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Empty Space',
      description: 'Start with any warehouse or empty venue',
      icon: Box
    },
    {
      number: '02',
      title: 'MR Overlay',
      description: 'Our technology adds virtual elements in real-time',
      icon: Layers
    },
    {
      number: '03',
      title: 'Full Transformation',
      description: 'Experience completely immersive gaming worlds',
      icon: Wand2
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 experience-gradient" />
        <div className="absolute inset-0 hero-pattern opacity-5" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Badge className="mb-6 px-6 py-2 bg-white/10 backdrop-blur-md border-white/20 text-white">
            The Technology
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white">Transform Reality</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            See how we turn ordinary spaces into extraordinary mixed reality gaming arenas.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">How It Works</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our three-step process seamlessly blends physical and virtual worlds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                  )}
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
                    <CardContent className="p-8 text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-6xl font-bold text-purple-500/20 mb-4">{step.number}</div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive 3D Transformation Demo */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 text-white">Interactive Transformation</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Click the button below to see how we transform an empty space into an immersive gaming environment.
            </p>
          </div>
          
          {/* Environment Selector */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {environments.map((env) => (
              <Button
                key={env.id}
                onClick={() => {
                  setSelectedEnvironment(env.id);
                  setIsTransformed(false);
                }}
                variant={selectedEnvironment === env.id ? 'default' : 'outline'}
                className={`px-6 py-3 transition-all duration-300 ${
                  selectedEnvironment === env.id
                    ? `bg-gradient-to-r ${env.color} text-white border-0 shadow-lg`
                    : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {env.name}
              </Button>
            ))}
          </div>
          
          {/* 3D Viewport */}
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              <div className={`absolute inset-0 transition-all duration-1000 ${
                isTransformed ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}>
                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                  <div className="text-center">
                    <Box className="w-24 h-24 text-slate-600 mx-auto mb-6" />
                    <p className="text-2xl font-semibold text-slate-400">Empty Warehouse Space</p>
                    <p className="text-slate-500 mt-2">Basic concrete floor and walls</p>
                  </div>
                </div>
              </div>
              
              <div className={`absolute inset-0 transition-all duration-1000 ${
                isTransformed ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}>
                <div className={`w-full h-full bg-gradient-to-br ${
                  environments.find(e => e.id === selectedEnvironment)?.color
                } relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center transform-gpu animate-float">
                      <Wand2 className="w-24 h-24 text-white mx-auto mb-6 drop-shadow-2xl" />
                      <p className="text-3xl font-bold text-white drop-shadow-lg">
                        {environments.find(e => e.id === selectedEnvironment)?.name}
                      </p>
                      <p className="text-white/90 mt-2 drop-shadow-md">
                        {environments.find(e => e.id === selectedEnvironment)?.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Animated particles */}
                  <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-particle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${3 + Math.random() * 4}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button
                size="lg"
                onClick={() => setIsTransformed(!isTransformed)}
                className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {isTransformed ? 'Reset View' : 'Transform Space'}
                <Wand2 className="ml-3 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                Endless Possibilities
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Our mixed reality platform supports unlimited custom environments. Whether you want to race through a neon-lit cyberpunk city, drift across alien planets, or compete in fantasy realms, we make it possible.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Custom Tracks', desc: 'Design your own racing circuits with unique obstacles and power-ups' },
                  { title: 'Multiplayer Modes', desc: 'Compete with friends in various game modes and challenges' },
                  { title: 'Real-time Updates', desc: 'Environments change dynamically during gameplay for endless variety' },
                  { title: 'Event Packages', desc: 'Perfect for corporate events, birthdays, and competitions' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&q=80',
                'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&q=80',
                'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&q=80',
                'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80'
              ].map((img, index) => (
                <div 
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img src={img} alt={`Feature ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Ready to Race?</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Experience the future of gaming today. Book your session now.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-12 py-8 text-xl font-semibold bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl">
              Book Your Experience
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
