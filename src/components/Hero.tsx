import { Button } from '@/components/ui/button';
// import heroImage from '@/assets/gen.png';
import heroImage from '@/assets/original.jpg';
import logoShort from '@/assets/logo-short.png';
import eventData from '@/content/event.json';
import titleWordmark from '@/assets/2.png';
import { MapPin, Clock, Calendar } from 'lucide-react';
import heroVideo from '@/assets/1.mp4';
import SeamlessVideo from '@/components/SeamlessVideo';




const Hero = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const time = new Date();
    time.setHours(parseInt(hours), parseInt(minutes));
    return time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform animate-kenburns-slow"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </div>


      {/* <div className="absolute inset-0 overflow-hidden motion-safe:animate-kenburns-slow">
        <SeamlessVideo src={heroVideo} poster={heroImage} overlap={0.5} />
      </div> */}

      
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-hero" /> */}
      
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          {/* <div className="mb-8">
            <img 
              src={logoShort} 
              alt="Groove Odyssey 2.0" 
              className="mx-auto h-20 md:h-24 w-auto object-contain"
            />
          </div> */}
          
          {/* Main Title */}
         <div role="heading" aria-level={1} className="mb-3 md:mb-2 leading-none">
          {/* Accessible text for SEO/screen readers */}
          <span className="sr-only">Groove Odyssey 2.0</span>

          {/* Wordmark image */}
          <img
            src={titleWordmark}
            alt="GROOVE ODYSSEY 2.0"
            loading="eager"
            decoding="async"
            draggable={false}
            className={[
            'mx-auto w-auto select-none pointer-events-none',
            'h-32 md:h-48 lg:h-72 xl:h-80', 
            'drop-shadow-[0_0_28px_rgba(255,255,255,0.18)]',
          ].join(' ')}
          />

          {/* “2.0” pulled closer to the image */}
              <span
            className="
              block -mt-1 md:-mt-1 lg:-mt-6
              text-white font-extrabold font-blacknova
              text-3xl md:text-4xl lg:text-5xl
              leading-none tracking-tight
            "
          >
            2.0
          </span>


        </div>

        {/* Subtitle (less bottom margin) */}
        <p className="text-lg md:text-xl text-white mt-0 mb-6 font-medium">
          by {eventData.organizer}
        </p>

          

          {/* Event Details - More Prominent */}
        <div
          className="relative rounded-2xl p-6 md:p-8 mb-10 text-white
                    bg-white/10 backdrop-blur-xl
                    border border-white/15
                    shadow-[0_12px_60px_rgba(0,0,0,0.45)]
                    before:content-[''] before:absolute before:inset-0 before:rounded-2xl
                    before:bg-gradient-to-br before:from-white/25 before:to-transparent before:opacity-30"
        >
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 relative z-10">
            {/* Date */}
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-6 h-6 text-golden-sun" />
              <span className="text-lg md:text-xl font-medium">
                {formatDate(eventData.date)}
              </span>
            </div>

            {/* Time */}
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6 text-golden-sun" />
              <span className="text-lg md:text-xl font-medium">
                {formatTime(eventData.time)} <span className="text-white/80">onwards</span>
              </span>
            </div>

            {/* Venue */}
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-golden-sun" />
              <span className="text-lg md:text-xl font-medium">
                {eventData.venue.name}, {eventData.venue.city}
              </span>
            </div>
          </div>
        </div>


          
          {/* Ticket Price */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
              Tickets from{' '}
              <span className="text-golden-sun">
                LKR {eventData.tickets[0].price.toLocaleString()}
              </span>
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button variant="cosmic" size="xl" asChild>
              <a href="#tickets">Get Your Tickets</a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;