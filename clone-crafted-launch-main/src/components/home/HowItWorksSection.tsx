import { Video, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Video,
    title: "Strategy call (30 min)",
    description: "We map your positioning and lead goals."
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Clone Creation",
    description: "Advanced deep learning creates your hyper-realistic digital twin"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Content On Autopilot",
    description: "Generate unlimited videos, reels, and voice content across all platforms"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold">
            Three steps to a scalable personal brand
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with your AI clone is incredibly simple and takes less than 10 minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent opacity-30" />
              )}
              
              <div className="relative bg-card border border-border/50 rounded-xl p-8 space-y-4 hover:shadow-elevated transition-all duration-300 animate-fade-in hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}>
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-glow">
                  {step.number}
                </div>
                
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Ready to get started?</p>
          <a href="/contact" className="inline-flex items-center text-primary font-semibold hover:underline">
            Schedule Your Clone Creation Session
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
