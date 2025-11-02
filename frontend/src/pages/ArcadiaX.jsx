import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Layers, Box, Wand2, ArrowRight, Zap, Paintbrush, Ghost, Target, Trophy, Plus, Headphones, Users, Monitor, Wifi, Gauge, Shield } from 'lucide-react';
import { siteData } from '../mock';
import SpaceTransformation3D from '../components/SpaceTransformation3D';
import BookDemoSection from '../components/BookDemoSection';

const gameIconMap = {
  Zap,
  Paintbrush,
  Ghost,
  Target,
  Trophy,
  Plus
};

export const ArcadiaX = () => {
  const technologyFeatures = [
    {
      icon: Headphones,
      title: "Meta Quest 3 Headsets",
      description: "State-of-the-art mixed reality headsets that seamlessly blend virtual game elements with the physical arena, creating truly immersive experiences."
    },
    {
      icon: Gauge,
      title: "Custom Drift Karts",
      description: "Specially designed karts with integrated MR systems, remote control capabilities, and safety features including emergency stop functionality."
    },
    {
      icon: Monitor,
      title: "Operator Management App",
      description: "Comprehensive tablet/PC interface for managing games, monitoring players, controlling scores, team names, playlists, and all system settings from one central dashboard."
    },
    {
      icon: Users,
      title: "Spectator & Interactive App",
      description: "\"Meekijk & meespeel\" (watch & play along) app lets spectators view the mixed reality action and even interact with gameplay, controlling elements like ghosts or obstacles."
    },
    {
      icon: Wifi,
      title: "Complete Infrastructure",
      description: "Integrated server hosting, Wi-Fi routing, VR license management, and seamless connectivity for smooth multiplayer experiences."
    },
    {
      icon: Shield,
      title: "Safety & Control",
      description: "Real-time monitoring, speed override controls, emergency stop systems, and comprehensive safety protocols for all players."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Players Gear Up",
      description: "Each player receives a Meta Quest 3 headset and gets seated in a custom drift kart equipped with integrated MR controls."
    },
    {
      step: "02",
      title: "Arena Anchoring",
      description: "The system maps the physical arena (15x15m to 20x30m) and anchors virtual game elements precisely in the real space."
    },
    {
      step: "03",
      title: "Game Selection",
      description: "Operators choose from 5+ party games through the management app. Players see the game overlay in their headsets."
    },
    {
      step: "04",
      title: "Mixed Reality Play",
      description: "Players physically drive their karts while interacting with virtual objects, opponents, and game elements visible only in mixed reality."
    },
    {
      step: "05",
      title: "Spectator Engagement",
      description: "Non-players watch the action on screens and can even interact through the spectator app, adding elements or controlling game features."
    },
    {
      step: "06",
      title: "Share & Replay",
      description: "Game footage is captured and stored online for sharing, marketing, and player re-engagement."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-8">
            <img 
              src="https://customer-assets.emergentagent.com/job_ggeese-nextgen/artifacts/789fh31c_ArcadiaX-Logo.png" 
              alt="ArcadiaX" 
              className="h-56 md:h-72 mx-auto drop-shadow-2xl"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white">Mixed Reality Drift Karting</h1>
          <p className="text-2xl md:text-3xl text-white/95 max-w-5xl mx-auto mb-6 font-medium">
            Where Physical Thrills Meet Virtual Worlds
          </p>
          <p className="text-xl md:text-2xl text-white/85 max-w-4xl mx-auto leading-relaxed">
            ArcadiaX merges the excitement of drift karting with immersive mixed reality gaming, creating unforgettable social entertainment experiences.
          </p>
        </div>
      </section>

      {/* What is ArcadiaX */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-white text-center">What is ArcadiaX?</h2>
            <div className="text-xl text-slate-300 space-y-6 leading-relaxed">
              <p>
                ArcadiaX is a revolutionary social gaming platform that seamlessly blends the digital and physical worlds. Players wear Meta Quest 3 mixed reality headsets while driving physical drift karts in a real arena, experiencing virtual game elements overlaid onto their physical surroundings.
              </p>
              <p>
                Unlike traditional VR where you're completely isolated, mixed reality lets players see the real arena, their actual karts, and other players - while also seeing virtual game elements like obstacles, power-ups, paint splatters, ghosts, and score indicators floating in the space around them.
              </p>
              <p className="text-2xl font-semibold text-white">
                It's not just racing - it's a complete party game platform with multiple game modes, spectator interaction, and turnkey venue solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Technology */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">The Technology</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A complete mixed reality entertainment system designed for venues and optimized for social gaming.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
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

      {/* How It Works */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">How It Works</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From setup to gameplay, ArcadiaX delivers a seamless mixed reality entertainment experience.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <Card 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 text-9xl font-black text-purple-500/5 group-hover:text-purple-500/10 transition-colors">
                  {item.step}
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="text-4xl font-black text-purple-400 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Games */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">The Game Library</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              5+ unique party games designed for 4-6 players, with new experiences added regularly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.games.map((game, index) => {
              const Icon = gameIconMap[game.icon];
              return (
                <Dialog key={game.id}>
                  <DialogTrigger asChild>
                    <Card 
                      className="group bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`h-2 bg-gradient-to-r ${game.color}`} />
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">{game.name}</h3>
                            <p className="text-slate-300">{game.description}</p>
                            <p className="text-sm text-purple-400 mt-2">Click to learn more →</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-2xl bg-slate-900 border-slate-700">
                    <DialogHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <DialogTitle className="text-3xl font-bold text-white">{game.name}</DialogTitle>
                      </div>
                    </DialogHeader>
                    
                    <div className="space-y-6 text-slate-300">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Game Overview</h4>
                        <p className="leading-relaxed">{game.fullDescription || game.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Players</h4>
                        <p>4-6 players per session</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Duration</h4>
                        <p>10-15 minutes per round</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">What Makes It Special</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {game.features?.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          )) || (
                            <>
                              <li>Immersive mixed reality environment</li>
                              <li>Real-time multiplayer competition</li>
                              <li>Spectator-friendly gameplay</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive 3D Transformation Demo */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 text-white">Interactive Space Transformation</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Experience how ArcadiaX transforms any empty venue into an immersive mixed reality gaming arena. Rotate, explore, and watch the magic happen.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <SpaceTransformation3D />
          </div>
        </div>
      </section>

      {/* Arena Specs */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-white text-center">Venue Requirements</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-purple-400 mb-2">15x15m</div>
                  <p className="text-xl text-white mb-2">Minimum Space</p>
                  <p className="text-slate-300">Compact arena for 4 players</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-pink-400 mb-2">20x30m</div>
                  <p className="text-xl text-white mb-2">Optimal Space</p>
                  <p className="text-slate-300">Full arena for 6 players</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">4-6</div>
                  <p className="text-xl text-white mb-2">Player Capacity</p>
                  <p className="text-slate-300">Per gaming session</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Demo CTA */}
      <BookDemoSection />
    </div>
  );
};
