import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';

const BirthdayHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🎈</div>
        <div className="absolute top-32 right-16 text-4xl animate-bounce" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-bounce" style={{ animationDelay: '2s' }}>🎂</div>
        <div className="absolute bottom-32 right-12 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>💕</div>
        <div className="absolute top-1/2 left-8 text-4xl animate-bounce" style={{ animationDelay: '1.5s' }}>🌸</div>
        <div className="absolute top-1/3 right-8 text-5xl animate-bounce" style={{ animationDelay: '2.5s' }}>🎀</div>
      </div>

      <div className={`text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="relative">
          <h1 className="font-script text-8xl md:text-9xl font-bold sparkle-text mb-6 relative">
            Happy Birthday
            <Sparkles className="absolute top-0 right-0 text-primary animate-spin" size={40} />
          </h1>
          
          <div className="relative floating-hearts">
            <h2 className="text-6xl md:text-7xl font-bold text-primary mb-8">
              Mamun!
            </h2>
          </div>
          
          <div className="birthday-gradient text-white p-8 rounded-3xl shadow-birthday mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <p className="text-3xl md:text-4xl font-script font-semibold mb-4">
                🎉 Twenty Years of Amazing! 🎉
              </p>
              <p className="text-xl md:text-2xl font-medium">
                Celebrating the most beautiful, adorable, and wonderful sister in the world
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="birthday-gradient hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-4 text-lg shadow-glow"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="mr-2" />
              See Your Beautiful Memories
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 text-lg"
              onClick={() => document.getElementById('message')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="mr-2" />
              A Message for You
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayHero;