import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CGV = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
      </Link>
      <h1 className="text-3xl font-bold text-foreground mb-8">Conditions Générales de Vente</h1>

      <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Objet</h2>
          <p>Les présentes conditions générales de vente régissent les relations contractuelles entre VELIA SERVICES et ses clients dans le cadre de prestations de nettoyage professionnel d'appartements en Île-de-France.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Services proposés</h2>
          <p>VELIA SERVICES propose les prestations suivantes : nettoyage standard, nettoyage approfondi, nettoyage fin de bail, nettoyage post-travaux, entretien régulier et nettoyage express. Le détail des prestations est disponible sur la page d'accueil du site.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">3. Devis et tarifs</h2>
          <p>Tout devis est gratuit et personnalisé en fonction de la superficie, du type de logement et des prestations demandées. Les prix indiqués sur le site sont donnés à titre indicatif. Un devis détaillé sera établi avant toute intervention.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Réservation et annulation</h2>
          <p>La réservation est confirmée après acceptation du devis par le client. Toute annulation doit être effectuée au moins 24 heures avant l'intervention prévue. En cas d'annulation tardive (moins de 24h), des frais d'annulation de 50 % du montant du devis pourront être appliqués.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Paiement</h2>
          <p>Le paiement est dû à la fin de chaque prestation, sauf accord contraire. Les moyens de paiement acceptés sont : virement bancaire, espèces et chèque. Pour les contrats d'entretien régulier, la facturation est mensuelle.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Garantie de satisfaction</h2>
          <p>VELIA SERVICES s'engage à fournir un service de qualité. En cas d'insatisfaction signalée dans les 24 heures suivant l'intervention, une reprise gratuite sera effectuée dans les meilleurs délais.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">7. Responsabilité</h2>
          <p>VELIA SERVICES est assurée en responsabilité civile professionnelle. En cas de dommage causé lors de l'intervention, le client doit le signaler immédiatement. L'indemnisation sera traitée conformément aux conditions de notre assurance.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">8. Droit applicable</h2>
          <p>Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. À défaut, le tribunal compétent sera celui du siège social de VELIA SERVICES.</p>
        </section>
      </div>
    </div>
  </div>
);

export default CGV;
