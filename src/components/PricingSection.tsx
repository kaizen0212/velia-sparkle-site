import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Basique",
    subtitle: "Studios / T1",
    price: "59",
    features: [
      "Nettoyage des sols",
      "Dépoussiérage des surfaces",
      "Nettoyage sanitaires",
      "Nettoyage cuisine",
    ],
    popular: false,
  },
  {
    name: "Standard",
    subtitle: "T2 / T3",
    price: "99",
    features: [
      "Tout le forfait Basique",
      "Nettoyage des vitres intérieures",
      "Nettoyage des appareils",
      "Aspiration & lavage sols",
      "Dépoussiérage mobilier",
    ],
    popular: true,
  },
  {
    name: "Premium",
    subtitle: "T4 et plus",
    price: "149",
    features: [
      "Tout le forfait Standard",
      "Nettoyage en profondeur",
      "Repassage du linge",
      "Nettoyage balcon/terrasse",
      "Produits premium fournis",
      "Service prioritaire",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="tarifs" className="section-padding bg-section-alt" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Nos formules
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tarifs Transparents
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Des prix justes pour un service de qualité. Tous nos tarifs sont personnalisables selon vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-xl scale-105 z-10"
                  : "border-border shadow-sm hover:shadow-md"
              } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                  Le plus populaire
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground">À partir de</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">€</span>
                  </div>
                  <span className="text-xs text-muted-foreground">*selon superficie</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                asChild
              >
                <a href="#contact">Demander un devis</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
