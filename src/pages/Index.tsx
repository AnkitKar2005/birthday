import BirthdayHero from '@/components/BirthdayHero';
import PhotoGallery from '@/components/PhotoGallery';
import QuotesSection from '@/components/QuotesSection';
import BirthdayCountdown from '@/components/BirthdayCountdown';
import BirthdayMessage from '@/components/BirthdayMessage';

const Index = () => {
  return (
    <main className="min-h-screen">
      <BirthdayHero />
      <PhotoGallery />
      <QuotesSection />
      <BirthdayCountdown />
      <BirthdayMessage />
      
      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-script text-2xl font-bold mb-4">
            Made with 💕 for the most amazing sister in the world
          </p>
          <p className="text-lg opacity-90">
            Happy 20th Birthday, Mamun! Here's to many more years of joy, laughter, and beautiful memories together.
          </p>
          <div className="mt-6 text-4xl">
            🎉 ✨ 🎂 💖 🌟
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
