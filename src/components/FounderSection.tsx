import eventData from '@/content/event.json';
import { Award, Globe } from 'lucide-react';
// Import the founder image
import akkaImg from '@/assets/akka.jpg';

const FounderSection = () => {
  return (
    <section id="founder" className="py-20 bg-cosmic-mist">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl text-cosmic-indigo mb-6">
              Meet the{' '}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Founder
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-cosmic p-1">
                <div className="w-full h-full bg-cosmic-mist rounded-3xl overflow-hidden">
                  <img
                    src={akkaImg}
                    alt={eventData.founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Achievement Badges */}
              <div className="absolute -bottom-4 -right-4 flex flex-col gap-2">
                <div className="bg-golden-sun text-midnight rounded-full p-3 shadow-cosmic">
                  <Award className="w-6 h-6" />
                </div>
                <div className="bg-neon-magenta text-white rounded-full p-3 shadow-cosmic">
                  <Globe className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {eventData.founder.bio}
                </p>
              </div>

              {/* Key Achievements */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-card rounded-xl p-4 text-center shadow-cosmic">
                  <Award className="w-8 h-8 text-golden-sun mx-auto mb-2" />
                  <h4 className="font-display font-bold text-cosmic-indigo text-sm">
                    4th New Generation Awards
                  </h4>
                  <p className="text-muted-foreground text-xs">
                    Culture & Arts Recognition (2023)
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-4 text-center shadow-cosmic">
                  <Globe className="w-8 h-8 text-neon-magenta mx-auto mb-2" />
                  <h4 className="font-display font-bold text-cosmic-indigo text-sm">
                    Global Reach
                  </h4>
                  <p className="text-muted-foreground text-xs">
                    Millions of views worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
