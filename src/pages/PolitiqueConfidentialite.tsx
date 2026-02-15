import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PolitiqueConfidentialite = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
      </Link>
      <h1 className="text-3xl font-bold text-foreground mb-8">Politique de Confidentialité</h1>

      <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Responsable du traitement</h2>
          <p>Le responsable du traitement des données personnelles est VELIA SERVICES, joignable à l'adresse email contact@velia-services.fr ou par téléphone au 07 69 55 49 42.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Données collectées</h2>
          <p>Nous collectons les données suivantes via notre formulaire de contact :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Type de service souhaité</li>
            <li>Message libre</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">3. Finalité du traitement</h2>
          <p>Les données collectées sont utilisées exclusivement pour :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Répondre à vos demandes de devis</li>
            <li>Vous recontacter concernant nos services</li>
            <li>Assurer le suivi de nos prestations</li>
          </ul>
          <p>Vos données ne sont en aucun cas vendues, cédées ou transmises à des tiers à des fins commerciales.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Durée de conservation</h2>
          <p>Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter de votre dernier contact avec VELIA SERVICES, conformément aux recommandations de la CNIL.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Vos droits (RGPD)</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Droit d'accès :</strong> obtenir la communication de vos données</li>
            <li><strong>Droit de rectification :</strong> demander la correction de données inexactes</li>
            <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
            <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
            <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
          </ul>
          <p>Pour exercer ces droits, contactez-nous à contact@velia-services.fr.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Cookies</h2>
          <p>Ce site n'utilise aucun cookie publicitaire ou de suivi. Seuls des cookies techniques strictement nécessaires peuvent être utilisés pour assurer le bon fonctionnement du site.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">7. Sécurité</h2>
          <p>VELIA SERVICES met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte ou altération.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">8. Contact</h2>
          <p>Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Email : contact@velia-services.fr</li>
            <li>Téléphone : 07 69 55 49 42</li>
          </ul>
          <p className="text-xs mt-4">Dernière mise à jour : février 2025</p>
        </section>
      </div>
    </div>
  </div>
);

export default PolitiqueConfidentialite;
