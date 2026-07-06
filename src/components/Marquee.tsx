const clients = [
  'Kailali Records',
  'Nepali Cinema Sound',
  'Urban Kathmandu',
  'Himalayan Beats',
  'Deuda Fusion Collective',
  'Global Audio Agency',
  'Independent Film Network',
  'Sonic Productions',
];

const Marquee = () => {
  return (
    <section className="py-8 border-y border-zinc-800 overflow-hidden bg-zinc-900/30">
      <div className="flex">
        <div className="flex animate-marquee">
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-8 px-12 whitespace-nowrap"
            >
              <span className="text-sm tracking-widest uppercase text-zinc-500/50 font-medium">
                {client}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-800" />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee">
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={`dup-${i}`}
              className="flex items-center gap-8 px-12 whitespace-nowrap"
            >
              <span className="text-sm tracking-widest uppercase text-zinc-500/50 font-medium">
                {client}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-800" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
