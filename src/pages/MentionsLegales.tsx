import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MentionsLegales = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
      </Link>
      <h1 className="text-3xl font-bold text-foreground mb-8">Mentions Légales</h1>

      <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Éditeur du site</h2>
          <p>Le site velia-services.fr est édité par :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Raison sociale :</strong> VELIA SERVICES</li>
            <li><strong>Forme juridique :</strong> [À compléter]</li>
            <li><strong>Siège social :</strong> Paris, Île-de-France</li>
            <li><strong>Téléphone :</strong> 07 69 55 49 42</li>
            <li><strong>Email :</strong> contact@velia-services.fr</li>
            <li><strong>SIRET :</strong> [À compléter]</li>
            <li><strong>Directeur de la publication :</strong> [À compléter]</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Hébergeur</h2>
          <p>Ce site est hébergé par Lovable (lovable.dev), dont le siège social est situé à San Francisco, États-Unis.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">3. Propriété intellectuelle</h2>
          <p>L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété exclusive de VELIA SERVICES, sauf mention contraire. Toute reproduction, représentation ou diffusion, même partielle, est interdite sans autorisation écrite préalable.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Données personnelles</h2>
          <p>Les informations recueillies via le formulaire de contact sont destinées exclusivement à VELIA SERVICES pour le traitement de votre demande. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à contact@velia-services.fr.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Cookies</h2>
          <p>Ce site n'utilise pas de cookies de suivi ou publicitaires. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Limitation de responsabilité</h2>
          <p>VELIA SERVICES s'efforce de fournir des informations aussi précises que possible. Toutefois, elle ne saurait être tenue responsable des omissions, inexactitudes ou erreurs contenues sur ce site.</p>
        </section>
      </div>
    </div>
  </div>
);

export default MentionsLegales;
