import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, PartyPopper } from 'lucide-react';

const BirthdayCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set birthday date to December 26th
    const today = new Date();
    const currentYear = today.getFullYear();
    const thisYearBirthday = new Date(currentYear, 11, 26); // December 26
    
    let nextBirthday;
    
    // Check if birthday has already passed this year
    if (today > thisYearBirthday) {
      // Birthday has passed, set it for next year
      nextBirthday = new Date(currentYear + 1, 11, 26);
    } else {
      // Birthday hasn't happened yet this year
      nextBirthday = thisYearBirthday;
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextBirthday.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        // It's the birthday!
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isToday = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <section className="py-20 px-4 soft-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="font-script text-5xl font-bold sparkle-text mb-4">
            {isToday ? "🎉 It's Your Special Day! 🎉" : "Next Birthday Countdown"}
          </h2>
          <p className="text-xl text-muted-foreground">
            {isToday ? "Today we celebrate 20 amazing years of you!" : "Until another year of wonderful memories begins"}
          </p>
        </div>

        {isToday ? (
          <Card className="p-12 birthday-gradient text-white shadow-glow">
            <div className="space-y-6">
              <PartyPopper size={80} className="mx-auto animate-bounce" />
              <h3 className="font-script text-4xl font-bold">
                Happy 20th Birthday, Mamun! 🎂
              </h3>
              <p className="text-2xl font-script">
                May this day be filled with love, laughter, and all your favorite things! ✨
              </p>
              <div className="flex justify-center gap-4 text-6xl">
                <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎈</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎂</span>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎁</span>
                <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🌟</span>
              </div>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Days', value: timeLeft.days, icon: Calendar },
              { label: 'Hours', value: timeLeft.hours, icon: Clock },
              { label: 'Minutes', value: timeLeft.minutes, icon: Clock },
              { label: 'Seconds', value: timeLeft.seconds, icon: Clock }
            ].map(({ label, value, icon: Icon }) => (
              <Card key={label} className="p-6 bg-card shadow-soft hover:shadow-birthday transition-all duration-300 border-2 border-primary/20">
                <div className="text-center">
                  <Icon className="mx-auto mb-2 text-primary" size={32} />
                  <div className="text-4xl font-bold sparkle-text mb-2">{value}</div>
                  <div className="text-muted-foreground font-medium">{label}</div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12">
          <Card className="p-8 bg-card/80 backdrop-blur-sm shadow-soft border-2 border-primary/20">
            <h3 className="font-script text-2xl font-bold text-primary mb-4">
              Fun Birthday Facts About You! 📊
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold sparkle-text">20</div>
                <div className="text-muted-foreground">Years of Awesomeness</div>
              </div>
              <div>
                <div className="text-3xl font-bold sparkle-text">7,305</div>
                <div className="text-muted-foreground">Days of Being Amazing</div>
              </div>
              <div>
                <div className="text-3xl font-bold sparkle-text">∞</div>
                <div className="text-muted-foreground">Reasons We Love You</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCountdown;