import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Layers, Box, Wand2, ArrowRight, Zap, Paintbrush, Ghost, Target, Trophy, Plus } from 'lucide-react';
import { siteData } from '../mock';

const gameIconMap = {
  Zap,
  Paintbrush,
  Ghost,
  Target,
  Trophy,
  Plus
};

export const Experience = () => {
  const [isTransformed, setIsTransformed] = useState(false);

  const steps = [
    {
      number: '01',
      title: 'Empty Venue',
      description: 'Start with any warehouse or empty space (15x15m to 20x30m)',
      icon: Box
    },
    {
      number: '02',
      title: 'MR Anchoring',
      description: 'Our platform maps the space and anchors virtual elements',
      icon: Layers
    },
    {
      number: '03',
      title: 'Game Selection',
      description: 'Choose from our library of party games and start playing',
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

      {/* Interactive Transformation Visual */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 text-white">Space Transformation</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Watch how ArcadiaX transforms an ordinary empty warehouse into an immersive gaming environment.
            </p>
          </div>
          
          {/* Transformation Visual */}
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-800">
              {!isTransformed ? (
                <div className="w-full h-full flex items-center justify-center p-12">
                  <div className="text-center">
                    <Box className="w-24 h-24 text-slate-600 mx-auto mb-6" />
                    <p className="text-3xl font-semibold text-slate-400 mb-2">Empty Warehouse</p>
                    <p className="text-slate-500 mb-8">Concrete floors, bare walls - 400m² space</p>
                    <Badge className="bg-slate-700 text-slate-300">Before ArcadiaX</Badge>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 animate-pulse">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="text-center">
                      <Wand2 className="w-24 h-24 text-white mx-auto mb-6 drop-shadow-2xl animate-pulse" />
                      <p className="text-4xl font-bold text-white drop-shadow-lg mb-2">
                        Mixed Reality Gaming Arena
                      </p>
                      <p className="text-white/90 text-lg drop-shadow-md mb-8">
                        Virtual environments, game elements, and interactive challenges
                      </p>
                      <div className="flex gap-3 justify-center flex-wrap">
                        <Badge className="bg-purple-500/80 backdrop-blur-sm border-0 text-white text-sm">
                          Paint Battle Ready
                        </Badge>
                        <Badge className="bg-pink-500/80 backdrop-blur-sm border-0 text-white text-sm">
                          Ghost Hunt Active
                        </Badge>
                        <Badge className="bg-orange-500/80 backdrop-blur-sm border-0 text-white text-sm">
                          Drift Mode On
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
              <p className="text-slate-400 mt-4">Click to see the transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Showcase */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">The Game Library</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              ArcadiaX features multiple party games designed for social fun. Each game transforms the same physical space in unique ways.
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
                  <div className={`h-2 bg-gradient-to-r ${game.color}`} />
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-white">{game.name}</h3>
                        <p className="text-slate-300">{game.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
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
