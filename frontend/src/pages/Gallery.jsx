import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Play, X, Image as ImageIcon } from 'lucide-react';
import { siteData } from '../mock';
import SEO from '../components/SEO';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(siteData.gallery.map(item => item.category))];
  
  const filteredGallery = selectedCategory === 'All' 
    ? siteData.gallery 
    : siteData.gallery.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950">
      <SEO 
        title="Gallery | GGeese Studio - ArcadiaX in Action"
        description="Watch gameplay videos and see photos of ArcadiaX mixed reality drift karting in action. Experience the future of location-based entertainment."
        keywords="ArcadiaX gallery, mixed reality videos, VR karting photos, gameplay footage, behind the scenes"
      />
      
      {/* Header */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 gallery-gradient" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Experience In Action</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            See our mixed reality drift racing in action through gameplay videos and behind-the-scenes moments.
          </p>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Play className="w-10 h-10 text-purple-400 mr-4" />
            <h2 className="text-4xl font-bold text-white">Demo Videos</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {siteData.videos.map((video, index) => (
              <Card 
                key={video.id}
                className="group bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                  </div>
                  {video.placeholder && (
                    <Badge className="absolute top-4 right-4 bg-purple-500/80 backdrop-blur-sm border-0 text-white">
                      Coming Soon
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{video.title}</h3>
                  <p className="text-slate-300">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <ImageIcon className="w-10 h-10 text-pink-400 mr-4" />
            <h2 className="text-4xl font-bold text-white">Photo Gallery</h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg'
                    : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-purple-500/50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGallery.map((image, index) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <div 
                    className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-semibold">{image.title}</p>
                        <Badge className="mt-2 bg-purple-500/80 backdrop-blur-sm border-0 text-white text-xs">
                          {image.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl bg-slate-900 border-slate-700">
                  <div className="relative">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="mt-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                      <Badge className="bg-purple-500/20 border-purple-500/50 text-purple-300">
                        {image.category}
                      </Badge>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
