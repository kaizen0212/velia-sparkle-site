import { Facebook, Instagram, Linkedin } from "lucide-react";
import veliaLogo from "@/assets/velia-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Slogan */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={veliaLogo} alt="VELIA SERVICES" className="w-10 h-10 rounded-lg object-contain" />
              <span className="font-bold text-xl text-primary-foreground">VELIA SERVICES</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Nettoyage Professionnel d'Appartements. Qualité, fiabilité et propreté au service de votre confort.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="Réseau social"
                >
                  <Icon className="w-4 h-4 text-primary-foreground/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Liens rapides</h4>
            <nav className="flex flex-col gap-2">
              {["Accueil", "Services", "Tarifs", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace("à ", "a")}`}
                  className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/60 text-sm">
              <p><a href="tel:+33123456789" className="hover:text-primary-foreground transition-colors">📞 01 23 45 67 89</a></p>
              <p><a href="mailto:contact@velia-services.fr" className="hover:text-primary-foreground transition-colors">📧 contact@velia-services.fr</a></p>
              <p>📍 Paris et Île-de-France</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2025 VELIA SERVICES. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-primary-foreground/40 text-sm">
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">CGV</a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
