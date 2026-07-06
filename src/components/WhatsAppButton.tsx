import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9779868573730"
      target="_blank"
      rel="noopener noreferrer"
      // Updated bg to #075E54 and hover shadow to match
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#075E54] rounded-full shadow-lg hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(7,94,84,0.6)]"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </a>
  );
};

export default WhatsAppButton;