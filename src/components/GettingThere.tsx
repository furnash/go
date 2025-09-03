import { Car, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import eventData from '@/content/event.json';

const GettingThere = () => {
  return (
    <section id="getting-there" className="py-20 bg-midnight text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-6">
              Getting{' '}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                There
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Transportation Info */}
            <div className="space-y-8">
              {/* By Car */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl">By Car</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Limited parking available at the college premises. We recommend arriving early to secure parking.
                </p>
                <Button
                  variant="hero"
                  asChild
                  className="w-full"
                >
                  <a
                    href={eventData.venue.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-5 h-5" />
                    Get Directions
                  </a>
                </Button>
              </div>

              {/* Venue Address */}
              <div className="bg-gradient-card rounded-2xl p-6 border border-neon-magenta/20">
                <h4 className="font-display font-bold text-lg mb-4 text-golden-sun">
                  Venue Address
                </h4>
                <p className="text-white/90 text-lg">
                  {eventData.venue.name}
                  <br />
                  {eventData.venue.address}
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.154!2d80.6337!3d7.2906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae368c249d8b5e1%3A0x5c2f5c5c5c5c5c5c!2sHillwood%20College%2C%20Kandy!5e0!3m2!1sen!2slk!4v1690000000000!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingThere;