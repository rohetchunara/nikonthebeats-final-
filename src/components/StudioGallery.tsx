import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const StudioGallery = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Ensure the parent container covers the entire screen
      className="fixed inset-0 z-[100] bg-zinc-950 w-full h-screen overflow-hidden"
    >
      {/* Close button */}
      <button onClick={onClose} className="absolute top-8 right-8 text-white z-[101] p-4">
        <X size={32} />
      </button>

      {/* Corrected Full Screen Grid */}
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
        <motion.div whileHover={{ scale: 0.98 }} className="relative overflow-hidden">
          <img src="https://i.postimg.cc/L4ZPfSjQ/e6f2adc60cba701efcd40e42993d2fd4.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Studio Main" />
        </motion.div>
        
        <motion.div whileHover={{ scale: 0.98 }} className="relative overflow-hidden">
          <img src="https://i.postimg.cc/3wJpDDZp/1ee514f707d6099cda4da9e029153d8a.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Studio Gear" />
        </motion.div>
        
        <motion.div whileHover={{ scale: 0.98 }} className="relative overflow-hidden">
          <img src="https://i.postimg.cc/CLkjy01N/e520e15446bbee2464d85c18177e3435.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Studio View" />
        </motion.div>
        
        <motion.div whileHover={{ scale: 0.98 }} className="relative overflow-hidden">
          <img src="https://i.postimg.cc/fTmx4sLC/deb653eb951a81fbb27b9a73011ee9ce.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Studio Setup" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StudioGallery;