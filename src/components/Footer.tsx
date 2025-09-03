import { Heart, Instagram, Facebook } from 'lucide-react';
import eventData from '@/content/event.json';

const Footer = () => {
  return (
    <footer className="bg-midnight text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="font-display font-black text-2xl mb-4">
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  GROOVE ODYSSEY
                </span>
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                A cosmic dance concert experience by DanceInspire. 
                Join us for an interstellar journey through rhythm and movement.
              </p>
              <div className="flex gap-3">
                <a
                  href={eventData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-cosmic rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={eventData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-cosmic rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-4 text-golden-sun">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-white/70 hover:text-neon-magenta transition-colors">
                    About the Event
                  </a>
                </li>
                <li>
                  <a href="#tickets" className="text-white/70 hover:text-neon-magenta transition-colors">
                    Buy Tickets
                  </a>
                </li>
                <li>
                  <a href="#venue" className="text-white/70 hover:text-neon-magenta transition-colors">
                    Venue & Directions
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-white/70 hover:text-neon-magenta transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-neon-magenta transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Event Info & Contacts */}
            <div>
              <h4 className="font-display font-bold text-lg mb-4 text-golden-sun">
                Event Information
              </h4>
              <div className="space-y-3 text-white/70 text-sm">
                <p>
                  <strong className="text-white">Date:</strong> {new Date(eventData.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p>
                  <strong className="text-white">Time:</strong> 5:00 PM onwards
                </p>
                <p>
                  <strong className="text-white">Venue:</strong> {eventData.venue.name}, {eventData.venue.city}
                </p>
                <div className="pt-2">
                  <p className="text-white font-medium mb-2">Contact Numbers:</p>
                  {eventData.contacts.map((contact, index) => (
                    <p key={index}>
                      <a 
                        href={`tel:${contact.phone}`}
                        className="hover:text-neon-magenta transition-colors"
                      >
                        {contact.name}: {contact.phone}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-white/60 text-sm text-center md:text-left">
                <p>
                  © 2025 {eventData.organizer}. All rights reserved.
                </p>
                <p className="mt-1">
                  Made with <Heart className="w-4 h-4 inline text-neon-magenta" /> for the cosmic dance community
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Refund Policy
                </a>
              </div>
            </div>
          </div>

              {/* Final CTA */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-cosmic rounded-full text-white font-medium">
              <span className="animate-pulse">✨</span>
              <span>See you at Groove Odyssey 2.0!</span>
              <span className="animate-pulse">✨</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;