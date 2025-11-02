import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { siteData } from '../mock';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success(data.message || 'Message sent successfully! We\'ll get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        toast.error(data.detail || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Twitter, url: siteData.contactInfo.socialMedia.twitter, label: 'Twitter' },
    { icon: Linkedin, url: siteData.contactInfo.socialMedia.linkedin, label: 'LinkedIn' },
    { icon: Instagram, url: siteData.contactInfo.socialMedia.instagram, label: 'Instagram' },
    { icon: Youtube, url: siteData.contactInfo.socialMedia.youtube, label: 'YouTube' }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 contact-gradient" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white">Let's Create Something Amazing</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Ready to bring mixed reality racing to your venue? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-white">Send Us a Message</h2>
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 block">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+31 (0)20 123 4567"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="text-white mb-2 block">Company / Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-white mb-2 block">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your project or inquiry..."
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-white">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-500">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <a href={`mailto:${siteData.contactInfo.email}`} className="text-slate-300 hover:text-purple-400 transition-colors">
                        {siteData.contactInfo.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-500">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <a href={`tel:${siteData.contactInfo.phone}`} className="text-slate-300 hover:text-purple-400 transition-colors">
                        {siteData.contactInfo.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-500">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                      <p className="text-slate-300">{siteData.contactInfo.address}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:border-purple-500 hover:bg-slate-800 hover:scale-110 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6 text-slate-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-12">
                <div className="aspect-video rounded-xl overflow-hidden border border-slate-700">
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                      <p className="text-slate-400">Map view coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                q: 'What is the minimum group size?',
                a: 'We accommodate groups from 4 to 12 players for optimal racing experience.'
              },
              {
                q: 'How long is a typical session?',
                a: 'Standard sessions are 60 minutes including briefing, practice, and competitive racing.'
              },
              {
                q: 'Do you host corporate events?',
                a: 'Absolutely! We specialize in corporate team building and private events.'
              },
              {
                q: 'What equipment is provided?',
                a: 'We provide all MR headsets, safety gear, and our custom drift karts.'
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-slate-300">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
