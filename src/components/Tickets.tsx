import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';
import eventData from '@/content/event.json';

// ⬇️ add these imports
import balconyImg from '@/assets/t1.jpg';
import groundImg from '@/assets/t2.jpg';

const Tickets = () => {
  // map images by normalized ticket name
  const imageByTier: Record<string, string> = {
    balcony: balconyImg,
    'ground card': groundImg,
    ground: groundImg,
  };

  const getTicketImage = (name: string) => {
    const key = name?.toLowerCase().trim();
    return imageByTier[key] || null;
  };

  return (
    <section id="tickets" className="py-20 bg-midnight text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-magenta rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-solar-orange rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-golden-sun rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-neon-magenta rounded-full animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-6">
              Secure Your{' '}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">Tickets</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Choose your seating preference and join us for Groove Odyssey 2.0
            </p>
          </div>

          {/* Tickets Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {eventData.tickets.map((ticket: any) => {
              const imgSrc = getTicketImage(ticket.name);
              return (
                <div
                  key={ticket.id}
                  className="relative rounded-3xl overflow-hidden bg-deep-violet/30 backdrop-blur-sm border border-white/10 hover:border-neon-magenta/30 transition-all duration-300 hover:-translate-y-2"
                >
                 
<div className="relative overflow-hidden">
  {imgSrc ? (
    <>
      <img
        src={imgSrc}
        alt={`${ticket.name} seating`}
        className="w-full h-auto object-contain"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
    </>
  ) : (
    // fallback if no image mapped
    <div className="w-full bg-gradient-cosmic">
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
    </div>
  )}

  {/* Title overlay */}
  <div className="absolute inset-0 flex items-center justify-center text-center px-4">
    <div className="text-white">
      {/* <h3 className="font-display font-bold text-3xl mb-2">{ticket.name}</h3>
      <p className="text-lg">Seating</p> */}
    </div>
  </div>

  {/* Price Badge */}
  <div className="absolute top-4 right-4">
    <div className="bg-golden-sun text-midnight font-display font-bold px-4 py-2 rounded-full">
      LKR {ticket.price.toLocaleString()}
    </div>
  </div>
</div>



                  {/* Ticket Content */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-2xl mb-4 text-center">
                      {ticket.name} Seating
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* How to Buy Tickets */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="font-display font-bold text-2xl mb-8 text-center text-golden-sun">
              How to Buy Tickets
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {eventData.ticketLocations.map((location: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-midnight/50 rounded-xl border border-white/10"
                >
                  <span className="font-medium">{location.name}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-golden-sun text-golden-sun hover:bg-golden-sun hover:text-midnight"
                  >
                    <a href={location.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg mb-4 text-white/80">OR CALL TO RESERVE TICKETS</p>
              <Button variant="cosmic" size="lg" asChild className="font-display font-bold">
                <a href={`tel:${eventData.reservationPhone}`} className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  {eventData.reservationPhone} - {eventData.reservationContact}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
