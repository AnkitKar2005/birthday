import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Gift, Cake } from 'lucide-react';

const BirthdayMessage = () => {
  return (
    <section id="message" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-6xl font-bold sparkle-text mb-6">
            A Special Message
          </h2>
          <p className="text-2xl text-muted-foreground font-medium">
            From your loving brother 💕
          </p>
        </div>

        <Card className="p-12 bg-gradient-to-br from-card to-soft-pink/20 shadow-birthday border-2 border-primary/20">
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-4 mb-8">
                <Cake className="text-primary" size={40} />
                <span className="text-4xl font-script font-bold text-primary">Dear Mamun</span>
                <Heart className="text-primary" size={40} />
              </div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p className="font-script text-2xl text-center italic text-primary">
                "On this special day, I want you to know how incredibly blessed I am to have you as my sister."
              </p>

              <p>
                Twenty years ago, you came into this world and made it infinitely more beautiful. From the moment you arrived, you've been nothing but pure joy, love, and light in our family. Watching you grow into the amazing woman you are today has been one of life's greatest privileges.
              </p>

              <p>
                You are not just pretty on the outside – though you absolutely are stunning – but your inner beauty shines even brighter. Your kindness, your laughter, your caring heart, and your incredible spirit make you truly one of a kind. You have this magical way of making everyone around you feel special and loved.
              </p>

              <p>
                As your brother, I couldn't be more proud of who you've become. You're intelligent, compassionate, strong, and absolutely adorable in every way. You face life with such grace and determination, and I admire you more than you'll ever know.
              </p>

              <p className="font-script text-xl text-center italic text-primary border-l-4 border-primary pl-6">
                "Having you as my one and only sister is the greatest gift life has given me. You are my treasure, my pride, and my constant source of happiness."
              </p>

              <p>
                On your 20th birthday, I wish you all the happiness your heart can hold, all the love you so freely give to others, and all the beautiful dreams you dare to dream. May this new decade bring you adventure, success, love, and countless moments of pure joy.
              </p>

              <p className="text-center font-semibold text-primary text-xl">
                Happy 20th Birthday, my beautiful, amazing, irreplaceable sister! 🎉✨
              </p>
            </div>

            <div className="text-center pt-8">
              <div className="inline-flex items-center gap-3">
                <Heart className="text-primary animate-pulse" />
                <span className="font-script text-2xl font-bold text-primary">
                  With all my love,
                </span>
                <Heart className="text-primary animate-pulse" />
              </div>
              <p className="font-script text-3xl font-bold text-primary mt-2">
                Your Loving Brother
              </p>
            </div>

            <div className="flex justify-center pt-8">
              <Button 
                size="lg"
                className="birthday-gradient hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-4 text-lg shadow-glow"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Gift className="mr-2" />
                Celebrate Again! 🎉
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BirthdayMessage;