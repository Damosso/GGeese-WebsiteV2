import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Layers, Box, Wand2, ArrowRight, Zap, Paintbrush, Ghost, Target, Trophy, Plus, Headphones, Users, Monitor, Wifi, Gauge, Shield } from 'lucide-react';
import { siteData } from '../mock';
import BookDemoSection from '../components/BookDemoSection';
import DarkAccents from '../components/DarkAccents';
import SEO from '../components/SEO';

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
      title: "Player Setup",
      description:
        "Each player receives a Meta Quest 3 headset and gets seated in a custom drift kart equipped with integrated MR controls.",
    },
    {
      step: "02",
      title: "Arena Anchoring",
      description:
        "The system maps the physical arena (15x15m to 20x30m) and anchors virtual game elements precisely in the real space.",
    },
    {
      step: "03",
      title: "Game Selection",
      description:
        "Operators choose from 5+ party games through the management app. Players see the game overlay in their headsets.",
    },
    {
      step: "04",
      title: "Mixed Reality Play",
      description:
        "Players physically drive their karts while interacting with virtual objects, opponents, and game elements visible only in mixed reality.",
    },
    {
      step: "05",
      title: "Spectator Engagement",
      description:
        "Non-players watch the action on screens and can even interact through the spectator app, adding elements or controlling game features.",
    },
    {
      step: "06",
      title: "Share & Replay",
      description:
        "Game footage is captured and stored online for sharing, marketing, and player re-engagement.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <SEO 
        title="ArcadiaX | Mixed Reality Drift Karting Platform - GGeese Studio"
        description="ArcadiaX is the ultimate mixed reality drift karting platform featuring Meta Quest 3, custom karts, and 5+ multiplayer party games. Perfect for entertainment venues, events, and gaming centers."
        keywords="ArcadiaX, mixed reality karting, VR drift racing, Meta Quest 3 games, multiplayer VR, party games VR, location-based entertainment, venue gaming platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />

        {/* Dark Accents Background */}
        <DarkAccents />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-8">
            <img
              src="https://customer-assets.emergentagent.com/job_ggeese-nextgen/artifacts/789fh31c_ArcadiaX-Logo.png"
              alt="ArcadiaX"
              className="h-48 md:h-64 mx-auto drop-shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Mixed Reality Drift Karting</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
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

      {/* Video Gallery */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">See ArcadiaX in Action</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Watch gameplay footage and behind-the-scenes content from our mixed reality gaming platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.videos.map((video) => (
              <Card 
                key={video.id}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-500 group"
              >
                <div className="relative aspect-video bg-slate-800 overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {video.placeholder && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                        </div>
                        <p className="text-white text-sm">Video Coming Soon</p>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{video.title}</h3>
                  <p className="text-slate-300">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-400 mb-4">More videos coming soon! Upload your own gameplay to share.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-300">
                Everything you need to know about ArcadiaX
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-slate-800/50 border-slate-700 rounded-lg px-6 hover:bg-slate-800/70 transition-colors">
                <AccordionTrigger className="text-white text-lg font-semibold hover:no-underline">
                  What is ArcadiaX and how does it work?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  ArcadiaX is a mixed reality gaming platform that combines physical drift karts with virtual game elements. Players wear Meta Quest 3 headsets while driving real karts in a physical arena, seeing virtual obstacles, power-ups, and game elements overlaid on their actual surroundings. It's not fully immersive VR - players can still see the real world, making it safer and more social.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-slate-800/50 border-slate-700 rounded-lg px-6 hover:bg-slate-800/70 transition-colors">
                <AccordionTrigger className="text-white text-lg font-semibold hover:no-underline">
                  How many players can play at once?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  ArcadiaX supports 4-6 players per session, depending on your arena size. This creates the perfect balance for competitive multiplayer gaming while ensuring everyone has enough space to drift and compete effectively.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-slate-800/50 border-slate-700 rounded-lg px-6 hover:bg-slate-800/70 transition-colors">
                <AccordionTrigger className="text-white text-lg font-semibold hover:no-underline">
                  What space requirements do I need?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  The minimum space required is 15x15 meters (about 225 square meters) for 4 players. For the optimal experience with 6 players, we recommend 20x30 meters (600 square meters). The system is flexible and can be adapted to various venue configurations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-slate-800/50 border-slate-700 rounded-lg px-6 hover:bg-slate-800/70 transition-colors">
                <AccordionTrigger className="text-white text-lg font-semibold hover:no-underline">
                  What games are included?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  ArcadiaX currently includes 5+ party games: MR Drift Karting, Paint Battle, Ghost Hunt, Whack-a-Mole, and Holy Cows. We regularly add new games and update existing ones based on player feedback and seasonal themes. All games are included with the platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-slate-800/50 border-slate-700 rounded-lg px-6 hover:bg-slate-800/70 transition-colors">
                <AccordionTrigger className="text-white text-lg font-semibold hover:no-underline">
                  Is it safe? What about motion sickness?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  Safety is our top priority. Because ArcadiaX uses mixed reality (not full VR), players can see the real arena and their surroundings, significantly reducing motion sickness. The karts include safety features like emergency stop systems, speed controls, and protective bumpers. We also provide comprehensive safety briefings before each session.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-slate-800/50 border-slate-700 rounded-lg px-6 hover:bg-slate-800/70 transition-colors">
                <AccordionTrigger className="text-white text-lg font-semibold hover:no-underline">
                  What's included in the turnkey solution?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  Our turnkey solution includes: Meta Quest 3 headsets, custom drift karts with integrated controls, operator management tablet/PC app, spectator viewing app, complete infrastructure (server, Wi-Fi, licenses), installation and setup, staff training, ongoing support, and regular content updates. Everything you need to start operating immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-slate-800/50 border-slate-700 rounded-lg px-6 hover:bg-slate-800/70 transition-colors">
                <AccordionTrigger className="text-white text-lg font-semibold hover:no-underline">
                  Can spectators watch the games?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  Yes! ArcadiaX includes a spectator app that lets non-players watch the mixed reality action on screens. They can see what players see in their headsets and even interact with gameplay by controlling certain game elements like obstacles or ghosts - making it a truly social experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-slate-800/50 border-slate-700 rounded-lg px-6 hover:bg-slate-800/70 transition-colors">
                <AccordionTrigger className="text-white text-lg font-semibold hover:no-underline">
                  How long does a typical session last?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  Each game lasts 10-15 minutes, making sessions perfect for quick entertainment or extended play. Most venues offer 30-60 minute sessions that include equipment setup, safety briefing, practice round, and 2-3 competitive games. This format maximizes throughput while ensuring great experiences.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
