import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clean-apartment.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Appartement propre et lumineux"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-accent/50" />
      </div>

      <div className="container mx-auto relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="text-primary-foreground/80 font-medium text-sm uppercase tracking-widest mb-4 animate-fade-up">
            Nettoyage Professionnel d'Appartements
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up [animation-delay:0.1s] opacity-0">
            Votre appartement impeccable, notre expertise
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-xl animate-fade-up [animation-delay:0.2s] opacity-0">
            Service de nettoyage professionnel pour appartements — Qualité garantie, résultats impeccables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:0.3s] opacity-0">
            <Button size="lg" variant="accent" className="text-base px-8 py-6" asChild>
              <a href="#contact">Réserver maintenant</a>
            </Button>
            <Button size="lg" variant="heroOutline" className="text-base px-8 py-6" asChild>
              <a href="#tarifs">Nos tarifs</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
            fill="hsl(210, 33%, 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
