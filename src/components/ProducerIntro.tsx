import React, { useState } from 'react';
import StudioGallery from './StudioGallery'; // Ensure this file exists in the same folder

const ProducerIntro = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <section className="bg-black text-white w-full py-20 px-8 flex flex-col md:flex-row items-center gap-12 border-t border-white/10">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 h-[500px] bg-gray-900 overflow-hidden">
        <img 
          src="https://i.postimg.cc/jjZd6w80/producer.jpg" 
          alt="Producer" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
        />
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 space-y-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">/ THE PRODUCER</p>
          <h2 className="text-5xl font-light tracking-tighter">Nik on the Beats.</h2>
        </div>

        <p className="text-gray-300 leading-relaxed max-w-lg">
          Producer, engineer, songwriter. Building a body of work from a professional studio — proving that high-end production can happen anywhere on the map.
        </p>

        <div className="flex gap-16 pt-4">
          <div>
            <p className="text-xs uppercase text-gray-500 mb-2">Discipline</p>
            <p className="text-sm">Hip-Hop • R&B • Pop</p>
          </div>
          <div>
            <p className="text-xs uppercase text-gray-500 mb-2">Practice</p>
            <p className="text-sm">Production • Engineering • Mix/Master</p>
          </div>
        </div>

        {/* Updated Trigger Button */}
        <button 
          onClick={() => setIsGalleryOpen(true)}
          className="text-sm uppercase tracking-widest border-b border-white hover:text-gray-400 transition-colors"
        >
          Step inside the studio →
        </button>
      </div>

      {/* Gallery Overlay Component */}
      <StudioGallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </section>
  );
};

export default ProducerIntro;