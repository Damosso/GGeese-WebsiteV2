import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Check, ArrowRight, Building2, TrendingUp, Users, Zap, DollarSign, BarChart3, Headphones, Shield } from 'lucide-react';
import SEO from '../components/SEO';

export const Locations = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Strong Revenue Potential",
      description: "Sessions priced at €30 per player with 4-6 players generating €120-180 per hour, creating consistent revenue streams"
    },
    {
      icon: Users,
      title: "Repeat Customer Base",
      description: "High replayability with multiple game modes keeps customers coming back regularly"
    },
    {
      icon: Zap,
      title: "Turnkey Solution",
      description: "Complete platform including hardware, software, operator training, and ongoing support"
    },
    {
      icon: Building2,
      title: "Flexible Space Requirements",
      description: "Compact design works in 15x15m to 20x30m spaces - perfect for existing venues"
    }
  ];

  const investment = [
    {
      title: "Hardware Package",
      items: [
        "8x Meta Quest 3 headsets with prescription lens inserts",
        "8x Custom drift karts with integrated controls",
        "Arena anchoring and tracking system",
        "Operator management tablet"
      ]
    },
    {
      title: "Software & Platform",
      items: [
        "ArcadiaX platform license",
        "5+ party games at launch",
        "Operator management dashboard",
        "Regular game updates and new content"
      ]
    },
    {
      title: "Setup & Support",
      items: [
        "On-site installation and setup",
        "Comprehensive operator training",
        "24/7 technical support",
        "Marketing materials and assets"
      ]
    }
  ];

  const idealVenues = [
    "Entertainment centers and arcades",
    "Shopping mall activity zones",
    "Corporate event spaces",
    "Tourist attractions and activity parks",
    "Gaming cafes and esports venues",
    "Hotel and resort entertainment areas"
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <SEO 
        title="Venue Partnerships | ArcadiaX Location-Based Entertainment"
        description="Partner with GGeese Studio to bring ArcadiaX to your venue. Turnkey mixed reality gaming solution with proven ROI for entertainment centers, malls, and activity venues."
        keywords="venue partnership, location-based entertainment, VR arcade franchise, entertainment center equipment, ArcadiaX partnership, mixed reality business"
      />
      
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Partner With ArcadiaX</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-10">
            Bring the future of entertainment to your venue. ArcadiaX offers a complete mixed reality gaming solution with proven ROI and ongoing support.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-12 py-6 text-lg font-semibold bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl">
              Request Partnership Info
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why ArcadiaX Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Why Choose ArcadiaX?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A proven mixed reality entertainment solution designed for venue operators and investors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                >
                  <CardContent className="p-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
                        <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Breakdown Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">What's Included</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to launch and operate a successful ArcadiaX gaming center.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {investment.map((category, index) => (
              <Card 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
                  <ul className="space-y-4">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Revenue Potential</h2>
              <p className="text-xl text-slate-300">
                Premium entertainment with strong unit economics and multiple revenue streams.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
                <CardContent className="p-8">
                  <DollarSign className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">€30</div>
                  <p className="text-slate-300">Per Player / Session</p>
                  <p className="text-sm text-slate-400 mt-2">60-minute gameplay</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">4-6</div>
                  <p className="text-slate-300">Players Per Session</p>
                  <p className="text-sm text-slate-400 mt-2">€120-180 per session</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
                <CardContent className="p-8">
                  <BarChart3 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">High</div>
                  <p className="text-slate-300">Repeat Business</p>
                  <p className="text-sm text-slate-400 mt-2">Multiple game modes</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border-purple-500/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Additional Revenue Streams</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    'Corporate team building events',
                    'Private party bookings',
                    'Tournament hosting',
                    'Merchandise and refreshments',
                    'Spectator access fees',
                    'Premium membership packages'
                  ].map((stream, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white">{stream}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal Venues Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Ideal Venues</h2>
              <p className="text-xl text-slate-300">
                ArcadiaX is perfect for established entertainment venues looking to offer cutting-edge experiences.
              </p>
            </div>
            
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardContent className="p-10">
                <ul className="grid md:grid-cols-2 gap-6">
                  {idealVenues.map((venue, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg text-white">{venue}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support & Training Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white">Comprehensive Support</h2>
              <p className="text-xl text-slate-300">
                We're with you every step of the way, from installation to daily operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardContent className="p-8">
                  <Headphones className="w-12 h-12 text-purple-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-white">24/7 Technical Support</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Our dedicated support team is available around the clock to ensure smooth operations and quick issue resolution.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">Remote troubleshooting</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">Software updates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">Hardware replacement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardContent className="p-8">
                  <Shield className="w-12 h-12 text-pink-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Operator Training</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Comprehensive training program ensures your team can confidently operate and maintain the ArcadiaX platform.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">On-site training sessions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">Video tutorials library</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">Best practices guide</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 cta-gradient" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Ready to Partner?</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Join the mixed reality revolution and bring ArcadiaX to your venue. Contact us today to discuss partnership opportunities.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-12 py-8 text-xl font-semibold bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl">
              Contact Us Today
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
