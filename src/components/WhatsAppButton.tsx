import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+254716068548';
    const message = encodeURIComponent('Hello, I am interested in your container services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg elevation-3 hover:elevation-4 transition-all duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <div className="flex flex-col items-center">
        <MessageCircle className="w-5 h-5 mb-1" />
        <span className="text-xs font-medium">WhatsApp</span>
        <span className="text-xs">+254716068548</span>
      </div>
    </button>
  );
};

export default WhatsAppButton;