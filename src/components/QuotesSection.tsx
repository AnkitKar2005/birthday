import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Star, Sparkles } from 'lucide-react';

const quotes = [
  {
    text: "A sister is a forever friend, a keeper of secrets, and a source of endless love.",
    icon: Heart,
    color: "text-primary"
  },
  {
    text: "Twenty years ago, the world became a brighter place because you were born.",
    icon: Star,
    color: "text-rose-gold"
  },
  {
    text: "Your beauty radiates from within and touches every heart you meet.",
    icon: Sparkles,
    color: "text-warm-pink"
  },
  {
    text: "In this big world, having you as my sister is my greatest blessing.",
    icon: Heart,
    color: "text-primary"
  },
  {
    text: "You are not just my sister, you are my inspiration, my pride, and my joy.",
    icon: Star,
    color: "text-rose-gold"
  },
  {
    text: "May your 20th year be filled with dreams coming true and love surrounding you.",
    icon: Sparkles,
    color: "text-warm-pink"
  }
];

const QuotesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.quote-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 celebration-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-6xl font-bold text-white mb-6">
            Words from the Heart
          </h2>
          <p className="text-2xl text-white/90 font-medium">
            Special messages for a special sister 💝
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((quote, index) => {
            const IconComponent = quote.icon;
            return (
              <Card 
                key={index}
                className="quote-card p-8 bg-red/95 backdrop-blur-sm shadow-birthday hover:shadow-glow transition-all duration-500 border-2 border-white/50 group"
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-rose-gold/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className={quote.color} />
                  </div>
                  
                  <blockquote className="font-script text-xl font-medium text-foreground italic leading-relaxed">
                    "{quote.text}"
                  </blockquote>
                  
                  <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary to-rose-gold mx-auto rounded-full"></div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
