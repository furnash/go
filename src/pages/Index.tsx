import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tickets from '@/components/Tickets';
import Sponsors from '@/components/Sponsors';
import GettingThere from '@/components/GettingThere';
import FounderSection from '@/components/FounderSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Tickets />
        <Sponsors />
        <GettingThere />
        <FounderSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;