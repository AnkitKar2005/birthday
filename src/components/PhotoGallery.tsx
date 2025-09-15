import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Import photos
import mamun1 from '@/assets/mamun-1.jpg';
import mamun2 from '@/assets/mamun-2.jpg';
import mamun3 from '@/assets/mamun-3.jpg';
import mamun4 from '@/assets/mamun-4.jpg';
import mamun5 from '@/assets/mamun-5.jpg';
import mamun6 from '@/assets/mamun-6.jpg';
import mamun7 from '@/assets/mamun-7.jpg';

const photos = [
  {
    src: mamun1,
    caption: "Your beautiful style always shines through 💫",
    quote: "A sister's love is like a warm hug that never fades"
  },
  {
    src: mamun2,
    caption: "Moments of pure joy and beauty 🌸",
    quote: "In black and white, your radiance still glows"
  },
  {
    src: mamun3,
    caption: "Your smile lights up every room 😊",
    quote: "Twenty years of bringing sunshine wherever you go"
  },
  {
    src: mamun4,
    caption: "Natural beauty in nature's embrace 🌾",
    quote: "As free-spirited and beautiful as the golden fields"
  },
  {
    src: mamun5,
    caption: "Elegant and graceful in every moment 👗",
    quote: "Your traditional beauty captures hearts and souls"
  },
  {
    src: mamun6,
    caption: "Adventures by the water 🌊",
    quote: "Life's beautiful moments are even more beautiful with you"
  },
  {
    src: mamun7,
    caption: "Confident and stunning always ✨",
    quote: "Your confidence is as beautiful as your smile"
  }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-6xl font-bold sparkle-text mb-6">
            Gallery of Memories
          </h2>
          <p className="text-2xl text-muted-foreground font-medium">
            Each photo tells a story of your beautiful journey 📸
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <Card 
              key={index}
              className="gallery-item cursor-pointer group bg-card shadow-soft hover:shadow-birthday overflow-hidden border-2 border-border/50 hover:border-primary/30"
              onClick={() => setSelectedPhoto(index)}
            >
              <div className="relative">
                <img 
                  src={photo.src} 
                  alt={photo.caption}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-script text-xl font-semibold">{photo.caption}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="font-script text-lg text-center text-primary font-medium italic">
                  "{photo.quote}"
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Photo Dialog */}
        <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            {selectedPhoto !== null && (
              <div className="relative">
                <img 
                  src={photos[selectedPhoto].src} 
                  alt={photos[selectedPhoto].caption}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-glow"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <p className="text-white font-script text-2xl font-semibold mb-2">
                    {photos[selectedPhoto].caption}
                  </p>
                  <p className="text-white/90 font-script text-lg italic">
                    "{photos[selectedPhoto].quote}"
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotoGallery;