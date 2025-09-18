import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-coral-light overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Lululemon activewear lifestyle" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Become a Lululemon
              <span className="block text-primary">Product Reviewer</span>
            </h1>
            <p className="text-xl md:text-2xl text-warm-gray max-w-2xl mx-auto leading-relaxed">
              Try new outfits every week and share your feedback. Fill out the application to get started.
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-6">
            <Button 
              asChild
              variant="hero"
              size="lg"
              className="text-lg px-12 py-6 h-auto rounded-lg"
            >
              <a 
                href="https://offerlnks.com/aff_c?offer_id=1078&aff_id=21664"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply & Start Reviewing
              </a>
            </Button>
            
            {/* Trust Element */}
            <div className="flex items-center justify-center gap-2 text-trust text-sm">
              <Shield size={16} />
              <span>Your information is kept secure</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="pt-8">
            <p className="text-warm-gray text-lg">
              Join hundreds of reviewers already trying weekly Lululemon outfits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;