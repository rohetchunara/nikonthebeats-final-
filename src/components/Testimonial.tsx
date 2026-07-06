import { useState, useEffect } from 'react';

const testimonials = [
  { quote: "THE PRODUCTION QUALITY IS INCREDIBLE.", name: "Alex Reed", role: "Verified Collaborator" },
  { quote: "TRANSFORMED MY TRACKS. PURE CREATIVITY.", name: "K. Singh", role: "Verified Artist" },
  { quote: "A VISIONARY IN SONIC ARCHITECTURE.", name: "Sarah J.", role: "Film Director" },
  { quote: "THE BEST MIXING WORK I'VE EVER RECEIVED.", name: "Marcus T.", role: "Recording Artist" },
  { quote: "NIKONTHEBEATS BROUGHT MY SOUND TO LIFE.", name: "Elena V.", role: "Producer" },
  { quote: "PROFESSIONAL, PUNCTUAL, AND INSPIRED.", name: "J. Doe", role: "Label Executive" },
  { quote: "ABSOLUTELY STUNNING ATTENTION TO DETAIL.", name: "Chris L.", role: "Audio Engineer" }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 border-t border-white/10">
      <div className="container-tight overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full flex-shrink-0 px-4">
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg max-w-lg mx-auto text-center">
                <p className="font-serif text-lg md:text-xl mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-editorial-muted text-xs uppercase tracking-widest mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}