import { Star } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Locataire, Paris 15e",
    rating: 5,
    text: "Service impeccable ! Mon appartement n'a jamais été aussi propre. L'équipe est ponctuelle, discrète et très professionnelle. Je recommande vivement.",
  },
  {
    name: "Thomas Laurent",
    role: "Propriétaire, Lyon",
    rating: 5,
    text: "J'ai fait appel à Velia Services pour un nettoyage fin de bail. Le résultat a dépassé mes attentes et j'ai récupéré ma caution intégralement !",
  },
  {
    name: "Sophie Bernard",
    role: "Locataire, Marseille",
    rating: 5,
    text: "Un entretien régulier qui me change la vie. Chaque semaine, je retrouve un appartement frais et impeccable. Merci Velia !",
  },
  {
    name: "Jean-Pierre Martin",
    role: "Propriétaire, Bordeaux",
    rating: 4,
    text: "Très bon rapport qualité-prix. L'équipe est sérieuse et utilise des produits écologiques, ce qui est important pour nous. Service recommandé.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce que disent nos clients
          </h2>
        </div>

        <div className={`max-w-4xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border text-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonials[current].rating
                      ? "text-gold fill-gold"
                      : "text-border"
                  }`}
                />
              ))}
            </div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                {testimonials[current].name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
