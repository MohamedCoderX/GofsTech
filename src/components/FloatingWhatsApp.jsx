import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../data/site';

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink('Hi GOFS Tech, I found you on your website and want to discuss a project.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with GOFS Tech on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.4)] transition-transform hover:scale-105"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
