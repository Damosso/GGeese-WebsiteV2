import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Layers, Users, Sparkles, Maximize2, ArrowRight, Play, Linkedin, Instagram, MessageSquare, Calendar } from 'lucide-react';
import { siteData } from '../mock';
import BookDemoSection from '../components/BookDemoSection';
import DarkAccents from '../components/DarkAccents';

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
      {/* Hero Section - GGeese Studio XR Studio */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32">
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Dark Accents Background */}
        <DarkAccents />
        
        <div className={`relative z-10 container mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* GGeese Studio Logo */}
          <div className="mb-12">
            <img 
              src="https://customer-assets.emergentagent.com/job_228b3afe-8d02-4e8c-8604-2bc2379db9f3/artifacts/05ax7qxt_Logo.png" 
              alt="GGeese Studio" 
              className="h-48 md:h-64 mx-auto drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-white leading-tight tracking-tight">
            Pioneering Mixed Reality Entertainment
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 text-white/80 max-w-4xl mx-auto font-light tracking-wide uppercase">
            XR Game Studio
          </p>
          
          <p className="text-2xl md:text-3xl mb-6 text-white/95 max-w-4xl mx-auto font-medium leading-relaxed">
            Creating next-generation location-based entertainment experiences
          </p>
          
          <p className="text-xl md:text-2xl mb-16 text-white/85 max-w-3xl mx-auto font-light">
            We design and develop immersive mixed reality gaming platforms that transform venues into unforgettable social entertainment destinations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-40">
            <Link to="/contact">
              <Button size="lg" className="relative px-16 py-8 text-xl font-bold bg-white text-purple-600 hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden group">
                <Calendar className="mr-3 w-6 h-6 relative z-10" />
                <span className="relative z-10">Book a Demo</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-purple-400 to-pink-400" />
              </Button>
            </Link>
            
            <Link to="/arcadiax">
              <Button size="lg" variant="outline" className="relative px-16 py-8 text-xl font-bold bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 overflow-hidden group">
                <span className="relative z-10">Discover ArcadiaX</span>
                <ArrowRight className="ml-3 w-6 h-6 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
          </div>

          {/* Featured Product Callout - More Spacing */}
          <div className="max-w-5xl mx-auto mt-32">
            <div className="bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-3xl p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_ggeese-nextgen/artifacts/789fh31c_ArcadiaX-Logo.png" 
                    alt="ArcadiaX" 
                    className="h-56 w-auto"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-4xl font-bold text-white mb-4">Our Flagship Product</h3>
                  <p className="text-xl text-white/95 mb-6 leading-relaxed">
                    The ultimate mixed reality drift karting platform featuring multiple party games, spectator modes, and turnkey venue solutions.
                  </p>
                  <Link to="/arcadiax">
                    <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/20 px-8 py-3">
                      Learn More About ArcadiaX
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">What We Do</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              GGeese Studio specializes in creating cutting-edge location-based mixed reality entertainment that drives revenue and creates unforgettable experiences.
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

      {/* For Venues Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                The Next Big Thing in Entertainment
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Location-based mixed reality entertainment is revolutionizing how venues attract and engage customers. Our platform combines cutting-edge technology with proven business models to deliver exceptional ROI.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Turnkey mixed reality gaming solutions',
                  'Multiple revenue streams from a single platform',
                  'Ongoing content updates and support',
                  'Perfect for entertainment venues, malls, and activity centers'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-lg text-slate-200">{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/locations">
                  <Button size="lg" className="px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                    Venue Partnership Info
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/arcadiax">
                  <Button size="lg" variant="outline" className="px-8 py-6 bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:scale-105 transition-all duration-300">
                    Explore ArcadiaX
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
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
      <section className="py-24 hero-gradient relative overflow-hidden">
        <DarkAccents />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Join the Community</h2>
            <p className="text-xl md:text-2xl mb-12 text-white/95 leading-relaxed">
              Connect with venue operators, game developers, and XR enthusiasts shaping the future of entertainment.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a 
              href="https://www.linkedin.com/company/ggeese-studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group">
                <CardContent className="p-8 text-center">
                  <Linkedin className="w-16 h-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                  <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">LinkedIn</h3>
                  <p className="text-white/80 text-sm mt-2">Professional network</p>
                </CardContent>
              </Card>
            </a>
            
            <a 
              href="https://discord.gg/ggeese" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 group">
                <CardContent className="p-8 text-center">
                  <MessageSquare className="w-16 h-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]" />
                  <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Discord</h3>
                  <p className="text-white/80 text-sm mt-2">Chat & support</p>
                </CardContent>
              </Card>
            </a>
            
            <a 
              href="https://www.reddit.com/r/ggeesestudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group">
                <CardContent className="p-8 text-center">
                  <svg className="w-16 h-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                  </svg>
                  <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Reddit</h3>
                  <p className="text-white/80 text-sm mt-2">Discussions</p>
                </CardContent>
              </Card>
            </a>
            
            <a 
              href="https://www.instagram.com/ggeesestudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 group">
                <CardContent className="p-8 text-center">
                  <Instagram className="w-16 h-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]" />
                  <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Instagram</h3>
                  <p className="text-white/80 text-sm mt-2">Behind the scenes</p>
                </CardContent>
              </Card>
            </a>
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

      {/* Book a Demo CTA Section */}
      <BookDemoSection />
    </div>
  );
};
