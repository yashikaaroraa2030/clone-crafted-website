import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container max-w-4xl">
            <div className="text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                We help <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">founders</span> stay visible — even when they're <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">busy building</span>.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Clone Crafted creates secure, hyper-realistic AI voice & face clones so entrepreneurs, creators, and executives can scale their personal brand without recording daily content.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Mission</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower every founder and creator with a scalable digital presence — so they never lose opportunities simply because they don't have time to create content.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe visibility drives trust, trust drives business, and consistency builds authority. Clone Crafted exists to make that consistency effortless.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Built Clone Crafted */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Why We Built Clone Crafted</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founders today are overwhelmed:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground list-disc list-inside">
                <li>back-to-back calls</li>
                <li>product building</li>
                <li>team management</li>
                <li>investor meetings</li>
                <li>zero time for content</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                But the market rewards creators who are <strong className="text-foreground">visible</strong>. Your buyers search for you online before they talk to you. If they don't see you — they choose someone else.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Clone Crafted solves this permanently. We turn 15–30 minutes of your time into a 24/7 content engine powered by an AI version of <strong className="text-foreground">you</strong> — your face, your voice, your style.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">What Makes Us Different</span></h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Realistic AI Clones, Verified by Humans</h3>
                  <p className="text-muted-foreground">
                    Every model is trained securely, reviewed manually, and refined to match your tone, personality, and communication style.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Founder-Focused Content Strategy</h3>
                  <p className="text-muted-foreground">
                    We don't just create videos. We craft <strong className="text-foreground">lead-generating, authority-building</strong> content based on your niche and goals.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Privacy & Security First</h3>
                  <p className="text-muted-foreground">
                    Your data stays encrypted, protected, and fully under your control. You can delete your clone any time within 24 hours of request.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Zero Effort Needed From You</h3>
                  <p className="text-muted-foreground">
                    No recording. No editing. No retakes. Just approve content — or set it to auto-publish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">What We Deliver</span></h2>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>AI clone (voice + face) tailored to your brand</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Weekly videos for Instagram, TikTok, LinkedIn, YouTube</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Scripts written in your voice</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Editing, captions, hooks, backgrounds</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Posting, scheduling & optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Lead-focused content strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Analytics & iteration</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed pt-4">
                You get a content team, strategist, and AI engine — all in one.
              </p>
            </div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Promise</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We will:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground list-disc list-inside">
                <li>protect your identity</li>
                <li>never misuse your likeness</li>
                <li>never publish content without your approval</li>
                <li>help you build a powerful digital presence</li>
                <li>save you hours every single week</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed pt-4">
                You focus on your business. Your clone handles your content.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <div className="text-center space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to scale your personal brand without recording anything?
              </h2>
              <div className="pt-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-primary shadow-glow text-lg px-8">
                    Call Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

