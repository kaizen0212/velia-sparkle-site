import { Sparkles, Home, KeyRound, Hammer, CalendarCheck, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import serviceStandard from "@/assets/service-standard.jpg";
import serviceApprofondi from "@/assets/service-approfondi.jpg";
import serviceFinBail from "@/assets/service-fin-bail.jpg";
import servicePostTravaux from "@/assets/service-post-travaux.jpg";
import serviceEntretien from "@/assets/service-entretien.jpg";
import serviceExpress from "@/assets/service-express.jpg";

const services = [
  {
    icon: Home,
    title: "Nettoyage Standard",
    description: "Un nettoyage complet de votre appartement : sols, surfaces, sanitaires et cuisine.",
    image: serviceStandard,
  },
  {
    icon: Sparkles,
    title: "Nettoyage Approfondi",
    description: "Nettoyage en profondeur incluant les recoins, les vitres intérieures et les appareils.",
    image: serviceApprofondi,
  },
  {
    icon: KeyRound,
    title: "Nettoyage Fin de Bail",
    description: "Remise en état complète pour récupérer votre caution. Résultat garanti.",
    image: serviceFinBail,
  },
  {
    icon: Hammer,
    title: "Nettoyage Post-Travaux",
    description: "Élimination de la poussière et des résidus de chantier pour un espace habitable.",
    image: servicePostTravaux,
  },
  {
    icon: CalendarCheck,
    title: "Entretien Régulier",
    description: "Formules hebdomadaires ou bimensuelles pour un appartement toujours impeccable.",
    image: serviceEntretien,
  },
  {
    icon: Zap,
    title: "Nettoyage Express",
    description: "Service rapide en 2h pour les urgences. Idéal avant une visite ou un événement.",
    image: serviceExpress,
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
              className={`group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
