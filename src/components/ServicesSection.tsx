import { Sparkles, Home, KeyRound, Hammer, CalendarCheck, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Home,
    title: "Nettoyage Standard",
    description: "Un nettoyage complet de votre appartement : sols, surfaces, sanitaires et cuisine.",
  },
  {
    icon: Sparkles,
    title: "Nettoyage Approfondi",
    description: "Nettoyage en profondeur incluant les recoins, les vitres intérieures et les appareils.",
  },
  {
    icon: KeyRound,
    title: "Nettoyage Fin de Bail",
    description: "Remise en état complète pour récupérer votre caution. Résultat garanti.",
  },
  {
    icon: Hammer,
    title: "Nettoyage Post-Travaux",
    description: "Élimination de la poussière et des résidus de chantier pour un espace habitable.",
  },
  {
    icon: CalendarCheck,
    title: "Entretien Régulier",
    description: "Formules hebdomadaires ou bimensuelles pour un appartement toujours impeccable.",
  },
  {
    icon: Zap,
    title: "Nettoyage Express",
    description: "Service rapide en 2h pour les urgences. Idéal avant une visite ou un événement.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Ce que nous proposons
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Services de Nettoyage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des solutions adaptées à chaque besoin, réalisées par des professionnels qualifiés avec des produits écologiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
