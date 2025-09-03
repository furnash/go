import eventData from '@/content/event.json';
import { Users, Palette, Star, Building, Zap, Target } from 'lucide-react';

const About = () => {
  const iconMap = {
    0: Users,
    1: Palette,
    2: Star,
    3: Building,
    4: Zap,
    5: Target,
  };

  return (
    <section id="about" className="py-20 bg-cosmic-mist">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="font-display font-black text-4xl md:text-5xl text-cosmic-indigo mb-6">
            About{' '}
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Groove Odyssey
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {eventData.about.description}
          </p>
          
          {/* Highlighted Text */}
          <div className="bg-gradient-card rounded-2xl p-6 mb-16 border border-neon-magenta/20">
            <p className="text-lg md:text-xl text-cosmic-indigo font-semibold leading-relaxed">
              {eventData.about.highlight}
            </p>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {eventData.about.highlights.map((highlight, index) => {
              const Icon = iconMap[index as keyof typeof iconMap];
              
              return (
                <div
                  key={index}
                  className="group relative bg-card rounded-2xl p-8 shadow-cosmic hover:shadow-neon transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-card rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-display font-bold text-xl text-cosmic-indigo mb-4 group-hover:text-neon-magenta transition-colors">
                      {highlight.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Organizer Credit */}
          <div className="mt-16 p-8 bg-gradient-card rounded-2xl">
            <h3 className="font-display font-bold text-2xl text-cosmic-indigo mb-4">
              Presented by DanceInspire
            </h3>
            <p className="text-muted-foreground">
              DanceInspire brings you innovative dance experiences that transcend ordinary entertainment. 
              We create immersive journeys where movement meets artistry, connecting hearts through rhythm and energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;