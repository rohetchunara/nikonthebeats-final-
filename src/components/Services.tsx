import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  rate: string;
  summary: string;
  specs: string[];
  equipment: string[];
  deliverables: string[];
}

const services: Service[] = [
  {
    id: 'beat-making',
    title: 'Beat Making',
    rate: 'Rs. 6,999',
    summary: 'Custom-tailored instrumental production designed for your unique sound and creative vision.',
    specs: ['Bespoke arrangement', 'High-fidelity export', 'Rights-ready files'],
    equipment: ['UAD Apollo x16', 'Custom Sound Banks', 'Analog Synthesis'],
    deliverables: ['Full mix stems', 'Radio-ready master', 'Project files'],
  },
  {
    id: 'full-production',
    title: 'Beat + Vocal Mix/Master',
    rate: 'Rs. 8,999',
    summary: 'The total package. Professional production paired with elite-level mixing and mastering for a radio-standard finish.',
    specs: ['Custom beat production', 'Vocal pitch correction', 'Sonic balance & polish'],
    equipment: ['Neumann Monitoring', 'SSL Processing', 'iZotope Suite'],
    deliverables: ['Streaming-ready master', 'Reference mix', 'High-res WAVs'],
  },
  {
    id: 'vocal-engineering',
    title: 'Vocal Record + Mix/Master',
    rate: 'Rs. 3,999',
    summary: 'Professional tracking session followed by a meticulous mix and master to highlight your vocal performance.',
    specs: ['Studio-grade recording', 'Vocal comping & editing', 'Dynamic vocal processing'],
    equipment: ['Industry-standard mics', 'Preamps', 'Advanced EQ/Compression'],
    deliverables: ['Polished vocal stems', 'Mastered vocal track', 'Session mix'],
  },
  {
    id: 'vocal-tracking',
    title: 'Vocal Record Only',
    rate: 'Rs. 1,499',
    summary: 'Clean, professional-grade vocal capture in a precision-tuned environment.',
    specs: ['Acoustically treated space', 'Pro monitoring', 'Clean capture'],
    equipment: ['Professional Condensers', 'High-end interface', 'Clean signal chain'],
    deliverables: ['Raw, high-res WAV tracks'],
  },
];

const Services = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-padding pt-32 md:pt-40 bg-zinc-950 text-white">
      <div className="container-tight">
        <div className="mb-20 max-w-2xl">
          <span className="label-text mb-5 block text-zinc-500 uppercase tracking-widest text-xs">Capabilities</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] mb-6">Services & Rates</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Precision-tuned production. Professional engineering for your creative work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {services.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div key={service.id} className="border border-zinc-900 bg-zinc-900/20 hover:border-zinc-700 transition-all duration-500">
                <button
                  onClick={() => toggle(service.id)}
                  className="w-full text-left p-8 lg:p-10 flex items-start justify-between gap-8 group"
                >
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-4">
                      <h3 className="font-serif text-2xl lg:text-3xl text-white">{service.title}</h3>
                      <span className="text-zinc-300 font-mono text-sm tracking-wide">{service.rate}</span>
                    </div>
                    <p className="text-zinc-400 text-sm">{service.summary}</p>
                  </div>
                  <ChevronDown size={18} className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                <div className="grid transition-all duration-500" style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}>
                  <div className="overflow-hidden">
                    <div className="px-8 lg:px-10 pb-10 border-t border-zinc-900">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10">
                        <div>
                          <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-5">Technical Specs</h4>
                          <ul className="space-y-3">{service.specs.map((s) => <li key={s} className="text-sm text-zinc-400">{s}</li>)}</ul>
                        </div>
                        <div>
                          <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-5">Equipment</h4>
                          <ul className="space-y-3">{service.equipment.map((e) => <li key={e} className="text-sm text-zinc-400">{e}</li>)}</ul>
                        </div>
                        <div>
                          <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-5">Deliverables</h4>
                          <ul className="space-y-3">{service.deliverables.map((d) => <li key={d} className="text-sm text-zinc-400">{d}</li>)}</ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
