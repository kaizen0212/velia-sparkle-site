import { ShieldCheck, Leaf, ThumbsUp, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Personnel qualifié et formé",
    description: "Nos équipes sont rigoureusement sélectionnées et formées aux meilleures techniques de nettoyage.",
  },
  {
    icon: Leaf,
    title: "Produits écologiques",
    description: "Nous utilisons exclusivement des produits respectueux de l'environnement et de votre santé.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction garantie",
    description: "Si le résultat ne vous convient pas, nous revenons gratuitement pour corriger le tir.",
  },
  {
    icon: Clock,
    title: "Devis gratuit sous 24h",
    description: "Obtenez une estimation personnalisée rapidement, sans aucun engagement de votre part.",
  },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="apropos" className="section-padding bg-section-alt" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Nos engagements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pourquoi Nous Choisir
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <div
              key={item.title}
              className={`text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-5 flex items-center justify-center shadow-lg">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
