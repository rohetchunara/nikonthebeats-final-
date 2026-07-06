import React, { useEffect } from 'react';

const AudioShowcase = () => {
  // This effect ensures the Elfsight script runs safely after the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="work" className="section-padding bg-black text-white">
      <div className="container-tight">
        <div className="mb-16">
          <h2 className="text-4xl font-bold">Audio Showcase</h2>
          <p className="mt-4 text-zinc-400">My latest productions.</p>
        </div>

        {/* Premium Glassmorphism Container */}
        <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden min-h-[400px]">
          {/* Elfsight Widget Target */}
          <div className="elfsight-app-a0af696c-d08b-4180-91e3-e95c2639f980" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};

export default AudioShowcase;
