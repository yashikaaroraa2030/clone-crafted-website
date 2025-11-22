import { Sparkles, TrendingUp, Users, Zap, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Build Your Personal Brand",
    description: "Stay top-of-mind with consistent, high-quality content that showcases your expertise"
  },
  {
    icon: TrendingUp,
    title: "Increase Trust & Authority",
    description: "Regular presence builds credibility and positions you as an industry thought leader"
  },
  {
    icon: Users,
    title: "Generate Quality Leads",
    description: "Consistent content attracts and nurtures prospects, turning followers into customers"
  },
  {
    icon: Zap,
    title: "Scale Without Burnout",
    description: "Grow your social media presence without the daily grind of content creation"
  },
  {
    icon: Clock,
    title: "24/7 Virtual Presence",
    description: "Your AI clone works around the clock, engaging your audience while you focus on business"
  },
  {
    icon: Shield,
    title: "Maintain Authenticity",
    description: "Your unique voice, style, and personality preserved in every piece of content"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why Founders Choose
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Clone Crafted</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your content strategy and unlock exponential growth with AI-powered consistency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border/50 rounded-xl p-8 space-y-4 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
