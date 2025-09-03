import eventData from '@/content/event.json';

// If your four images live in: src/assets/
import jblImg from '@/assets/jbl.jpg';
import isImg  from '@/assets/is.jpg';
import keImg  from '@/assets/ke.jpg';
import pkImg  from '@/assets/pk.jpg';

const placeholder = 'https://placehold.co/240x120/111827/FFFFFF?text=LOGO';

type Sponsor = {
  category: string;
  name: string;
  logo?: string; // from JSON (optional)
};

const byName: Record<string, string> = {
  'jbl': jblImg,
  'kelly felder': keImg,
  'oak ray': pkImg,
  'media partner': isImg,
};

const byCategory: Record<string, string> = {
  'powered by': jblImg,
  'official apparel partner': keImg,
  'digital media partner': isImg,
  'hospitality partner': pkImg,
};

const slug = (s: string) => (s || '').toLowerCase().trim();

function resolveLogo(s: Sponsor): string {
  // Allow real public paths or URLs only
  if (s.logo && (/^https?:\/\//i.test(s.logo) || s.logo.startsWith('/sponsors/'))) {
    return s.logo;
  }
  return byName[slug(s.name)] || byCategory[slug(s.category)] || placeholder;
}

// Soft pastel gradients per category
const gradientByCategory: Record<string, string> = {
  'powered by': 'from-amber-50 via-rose-50 to-fuchsia-100 dark:from-amber-900/20 dark:via-rose-900/20 dark:to-fuchsia-900/20',
  'official apparel partner': 'from-fuchsia-50 via-pink-50 to-purple-100 dark:from-fuchsia-900/20 dark:via-pink-900/20 dark:to-purple-900/20',
  'digital media partner': 'from-indigo-50 via-sky-50 to-cyan-100 dark:from-indigo-900/20 dark:via-sky-900/20 dark:to-cyan-900/20',
  'hospitality partner': 'from-emerald-50 via-teal-50 to-cyan-100 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20',
};
const defaultGradient =
  'from-indigo-50 via-sky-50 to-fuchsia-100 dark:from-indigo-900/20 dark:via-sky-900/20 dark:to-fuchsia-900/20';

const gradientFor = (cat: string) =>
  `bg-gradient-to-br ${gradientByCategory[slug(cat)] || defaultGradient}`;

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-cosmic-mist">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl text-cosmic-indigo mb-6">
              Our{' '}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Sponsors
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Special thanks to our amazing partners who make Groove Odyssey 2.0 possible
            </p>
          </div>

          {/* Sponsors Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {eventData.sponsors.map((s: Sponsor, i: number) => {
              const imgSrc = resolveLogo(s);
              const cardGrad = gradientFor(s.category);

              return (
                <div
                  key={i}
                  className={`relative rounded-2xl p-8 ${cardGrad} shadow-cosmic hover:shadow-neon transition-all duration-300 hover:-translate-y-2 text-center ring-1 ring-black/5`}
                >
                  {/* Subtle logo watermark */}
                  {/* <div className="pointer-events-none absolute inset-0 opacity-10 [mask-image:radial-gradient(black,transparent_70%)]">
                    <img
                      src={imgSrc}
                      alt=""
                      className="w-full h-full object-contain translate-y-2"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div> */}

                  {/* Foreground content */}
                  <div className="relative">
                    <div className="w-full flex items-center justify-center mb-6">
                      <img
                        src={imgSrc}
                        alt={`${s.name} logo`}
                        loading="lazy"
                        className="h-20 md:h-24 object-contain drop-shadow-sm"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = placeholder;
                        }}
                      />
                    </div>

                    <h3 className="font-display font-bold text-lg text-cosmic-indigo mb-2">
                      {s.category}
                    </h3>
                    <p className="text-muted-foreground">{s.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
