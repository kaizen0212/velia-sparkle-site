import { FileText, CalendarDays, SprayCan } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Demande de devis",
    description: "Remplissez notre formulaire en ligne ou contactez-nous par téléphone pour un devis gratuit.",
  },
  {
    icon: CalendarDays,
    step: "02",
    title: "Planification",
    description: "Nous convenons ensemble de la date et de l'heure d'intervention qui vous convient.",
  },
  {
    icon: SprayCan,
    step: "03",
    title: "Nettoyage professionnel",
    description: "Notre équipe intervient avec rigueur et professionnalisme pour un résultat impeccable.",
  },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Comment ça marche
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            3 Étapes Simples
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-border" />

          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`text-center relative ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center shadow-lg relative z-10">
                <step.icon className="w-9 h-9 text-primary-foreground" />
              </div>
              <span className="text-primary font-bold text-sm mb-2 block">{step.step}</span>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
