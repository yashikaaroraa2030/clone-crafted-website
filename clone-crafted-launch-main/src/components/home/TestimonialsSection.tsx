import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Fitness Coach, Mumbai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    content: "Clone Crafted has completely changed how I manage my online presence. My AI clone now replies to all client queries instantly and sounds exactly like me. My conversions increased, and I finally have time to focus on growing my business.",
    rating: 4.5
  },
  {
    name: "Sarah Williams",
    role: "Content Creator, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    content: "As a full-time creator, handling DMs and brand requests was overwhelming. The AI clone created by Clone Crafted now handles everything smoothly. My audience engagement has doubled, and brands are surprised by the response quality.",
    rating: 4
  },
  {
    name: "Aman Verma",
    role: "Startup Founder, Delhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    content: "I needed a scalable way to communicate with customers without burning out. Clone Crafted built me an AI clone that answers support queries 24/7 and keeps the tone perfectly aligned with my brand. Worth every penny.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold">
            Trusted by Leading Founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of entrepreneurs who have transformed their content strategy with Clone Crafted
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-xl p-8 space-y-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 items-center">
                {[...Array(5)].map((_, i) => {
                  const starValue = i + 1;
                  const fullStars = Math.floor(testimonial.rating);
                  const hasHalfStar = testimonial.rating % 1 !== 0;
                  const isFullStar = starValue <= fullStars;
                  const isHalfStar = hasHalfStar && starValue === fullStars + 1;
                  
                  if (isHalfStar) {
                    return (
                      <div key={i} className="relative inline-block h-5 w-5">
                        <Star className="absolute h-5 w-5 text-muted-foreground" />
                        <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                          <Star className="h-5 w-5 fill-primary text-primary" />
                        </div>
                      </div>
                    );
                  }
                  
                  return (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${isFullStar ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                    />
                  );
                })}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border/50">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
