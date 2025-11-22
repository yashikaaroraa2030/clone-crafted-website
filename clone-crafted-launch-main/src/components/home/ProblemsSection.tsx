import { Clock, Camera, TrendingDown, Users } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "No Time for Daily Content",
    description: "Busy entrepreneurs can't create consistent content while running their business"
  },
  {
    icon: Camera,
    title: "Hate Being On Camera",
    description: "Many founders feel uncomfortable or camera-shy, limiting their personal brand"
  },
  {
    icon: TrendingDown,
    title: "Inconsistent Presence",
    description: "Irregular posting leads to decreased trust, engagement, and lost opportunities"
  },
  {
    icon: Users,
    title: "Can't Scale Personal Touch",
    description: "Impossible to maintain personal connection while growing your audience"
  }
];

const ProblemsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold">
            The Problem Every Founder Faces
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a personal brand requires consistent presence, but who has the time?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-lg p-6 space-y-4 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <problem.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
