import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import clothingImage from "@/assets/clothing-flatlay.jpg";

const notifications = [
  "Samantha from NY just applied",
  "Jessica from CA started reviewing",
  "Maria from TX just joined",
  "Ashley from FL completed application",
  "Emma from WA just applied"
];

const SocialProofSection = () => {
  const [currentNotification, setCurrentNotification] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-coral-light to-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
              <img 
                src={clothingImage} 
                alt="Lululemon activewear collection" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Notification */}
            <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border border-border animate-fade-in">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-foreground font-medium">
                  {notifications[currentNotification]}
                </span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Users size={32} />
                <span className="text-lg font-semibold">Active Community</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Join a Growing Community of
                <span className="block text-primary">Product Reviewers</span>
              </h2>
              
              <p className="text-xl text-warm-gray leading-relaxed">
                Be part of an exclusive group helping Lululemon improve their products while enjoying weekly outfit deliveries and keeping what you try.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-background rounded-xl shadow-sm border border-border">
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <div className="text-warm-gray">Active Reviewers</div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl shadow-sm border border-border">
                <div className="text-2xl font-bold text-primary mb-2">Weekly</div>
                <div className="text-warm-gray">New Outfits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;