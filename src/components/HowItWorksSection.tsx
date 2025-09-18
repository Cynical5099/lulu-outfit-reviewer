import { MousePointer, FileText, Package } from "lucide-react";

const steps = [
  {
    icon: MousePointer,
    title: "Click \"Apply & Start Reviewing\"",
    description: "Start your journey with a simple click on our application button."
  },
  {
    icon: FileText,
    title: "Fill out a short application",
    description: "Complete a brief form with your basic information and preferences."
  },
  {
    icon: Package,
    title: "Receive outfits and give feedback",
    description: "Get weekly Lululemon outfits to try and share your honest reviews."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Getting started as a Lululemon product reviewer is simple and straightforward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-200"
            >
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-[var(--shadow-soft)]">
                  {index + 1}
                </div>
                <step.icon className="w-8 h-8 text-primary mx-auto mt-4" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/20 to-primary/5 transform translate-x-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;