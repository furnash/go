import eventData from '@/content/event.json';
import { Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-cosmic-mist">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-6">
              Get in{' '}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about Groove Odyssey 2.0? We're here to help make your experience unforgettable.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-card rounded-2xl p-6 shadow-cosmic hover:shadow-neon transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-cosmic rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-cosmic-indigo">
                      {eventData.reservationContact}
                    </h3>
                    <a 
                      href={`tel:${eventData.reservationPhone}`}
                      className="text-muted-foreground hover:text-neon-magenta transition-colors"
                    >
                      {eventData.reservationPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Follow the Journey */}
              <div className="bg-gradient-card rounded-2xl p-6 border border-neon-magenta/20">
                <h3 className="font-display font-bold text-xl text-cosmic-indigo mb-6 text-center">
                  Follow the Journey
                </h3>
                
                <div className="flex justify-center gap-4">
                  <a
                    href={eventData.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  
                  <a
                    href={eventData.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  
                  <a
                    href={eventData.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Youtube className="w-6 h-6 text-white" />
                  </a>
                </div>
                
                <p className="text-muted-foreground text-center text-sm mt-4">
                  Stay updated with rehearsals, behind-the-scenes content, and event updates
                </p>
              </div>
            </div>

            {/* Ready to Join Section */}
            <div className="bg-card rounded-3xl p-8 shadow-cosmic text-center">
              <h3 className="font-display font-bold text-3xl text-cosmic-indigo mb-6">
                Ready to Join the{' '}
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  Cosmic Dance?
                </span>
              </h3>
              
              <p className="text-muted-foreground mb-8 text-lg">
                Don't miss out on this spectacular dance experience. Secure your tickets today and be part of Groove Odyssey 2.0!
              </p>
              
              <Button variant="cosmic" size="xl" asChild className="w-full mb-6">
                <a href="#tickets">Get Your Tickets Now</a>
              </Button>
              
              <div className="pt-6 border-t border-muted/20">
                <p className="text-muted-foreground text-sm">
                  Limited seating available • Book early to avoid disappointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;