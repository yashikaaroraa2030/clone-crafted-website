import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Launch",
    price: "$199",
    period: "/month",
    description: "Perfect for getting started with AI cloning",
    features: [
      "AI voice + face clone",
      "10 videos per month",
      "Basic customization",
      "Email support",
      "720p video quality"
    ],
    cta: "Start Launch Plan",
    popular: false
  },
  {
    name: "Growth",
    price: "$499",
    period: "/month",
    description: "For serious entrepreneurs scaling their brand",
    features: [
      "AI face + voice clone",
      "15 videos per month",
      "Advanced customization",
      "Priority support",
      "1080p video quality",
      "Social media scheduling",
      "Custom backgrounds"
    ],
    cta: "Start Growth Plan",
    popular: true
  },
  {
    name: "Authority",
    price: "$999",
    period: "/month",
    description: "Maximum impact for high-growth founders",
    features: [
      "Full AI clone (face + voice)",
      "25 videos per month",
      "White-glove customization",
      "4K video quality",
      "Multi-platform automation",
      "Personal brand strategy",
      "Dedicated content team",
      "Custom integrations"
    ],
    cta: "Start Authority Plan",
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="text-center space-y-4 mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold">
                Simple, Transparent
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Pricing</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that fits your content creation needs. Setup fee is $1000 - need to be paid once.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-card border rounded-2xl p-8 space-y-6 transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                    plan.popular
                      ? "border-primary shadow-glow scale-105 md:scale-110"
                      : "border-border/50 hover:shadow-elevated"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <a 
                    href="https://wa.link/ie5m4n" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button 
                      className={`w-full ${
                        plan.popular ? "gradient-primary shadow-glow" : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </a>

                  <div className="space-y-3 pt-6 border-t border-border/50">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Enterprise Section */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-muted/30 border border-border/50 rounded-2xl p-8 md:p-12 text-center space-y-6">
                <h3 className="text-3xl font-bold">Need a Custom Solution?</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  For enterprises and agencies requiring custom integrations, dedicated infrastructure, 
                  or volume licensing, we offer tailored packages.
                </p>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-20 max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Can I switch plans later?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">
                    We accept all major credit cards, PayPal.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Is there a setup fee?</h3>
                  <p className="text-muted-foreground">
                    Setup fee is $1000 - need to be paid once.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Is my data and AI clone secure?</h3>
                  <p className="text-muted-foreground">
                    Yes. Your video, voice, and clone model are stored securely, encrypted, and never shared. You can request full deletion anytime and we remove everything within 72 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
