import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Demande de devis - ${form.service || 'Nettoyage'}`);
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\nTéléphone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:contact@velia-services.fr?subject=${subject}&body=${body}`;
    
    toast({
      title: "Demande envoyée !",
      description: "Votre client email va s'ouvrir. Nous vous recontacterons dans les 24 heures.",
    });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-section-alt" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Contactez-nous
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Demandez Votre Devis Gratuit
          </h2>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-md border border-border space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nom complet</label>
                <Input
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  maxLength={255}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Téléphone</label>
                <Input
                  type="tel"
                  placeholder="06 12 34 56 78"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  maxLength={20}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Type de service</label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="standard">Nettoyage Standard</option>
                  <option value="approfondi">Nettoyage Approfondi</option>
                  <option value="fin-bail">Nettoyage Fin de Bail</option>
                  <option value="post-travaux">Nettoyage Post-Travaux</option>
                  <option value="entretien">Entretien Régulier</option>
                  <option value="express">Nettoyage Express</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <Textarea
                placeholder="Décrivez votre besoin..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Envoyer ma demande
            </Button>
          </form>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Téléphone</h4>
                <a href="tel:+33769554942" className="text-muted-foreground hover:text-primary transition-colors">07 69 55 49 42</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <a href="mailto:contact@velia-services.fr" className="text-muted-foreground hover:text-primary transition-colors">contact@velia-services.fr</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Horaires</h4>
                <p className="text-muted-foreground">Lun - Ven : 7h00 - 19h00</p>
                <p className="text-muted-foreground">Sam : 8h00 - 17h00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Adresse</h4>
                <p className="text-muted-foreground">Paris et Île-de-France</p>
                <p className="text-muted-foreground text-xs">Créteil, Boulogne, Saint-Denis, Versailles...</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Carte Google Maps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
