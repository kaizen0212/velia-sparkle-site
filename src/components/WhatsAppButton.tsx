import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "33123456789";
  const message = encodeURIComponent("Bonjour, je souhaite demander un devis pour un nettoyage d'appartement.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground shadow-xl flex items-center justify-center transition-transform hover:scale-110"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
