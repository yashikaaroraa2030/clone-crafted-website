import { Briefcase, GraduationCap, Megaphone, Building, Lightbulb } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    description: "Build your personal brand while focusing on growing your business"
  },
  {
    icon: GraduationCap,
    title: "Coaches & Consultants",
    description: "Scale your reach and deliver consistent value to your audience"
  },
  {
    icon: Megaphone,
    title: "Content Creators",
    description: "Multiply your content output without sacrificing quality or authenticity"
  },
  {
    icon: Building,
    title: "Agency Owners",
    description: "Maintain client communication and thought leadership at scale"
  },
  {
    icon: Lightbulb,
    title: "Startup Founders",
    description: "Build founder brand and attract investors, talent, and customers"
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold">
            Perfect For Ambitious Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're building a startup or scaling your expertise, Clone Crafted adapts to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-card border border-border/50 rounded-xl p-6 space-y-4 hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <useCase.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
