import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  // Check for success parameter after form submission
  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      toast({
        title: "Message sent successfully!",
        description: "We've received your message and will respond within 1 minute.",
      });
      // Clean up URL
      window.history.replaceState({}, '', '/contact');
    }
  }, [searchParams, toast]);

  const handleSubmit = (e: React.FormEvent) => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      e.preventDefault();
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // If validation passes, let the form submit to FormSubmit
    // FormSubmit will handle the email sending
    toast({
      title: "Sending message...",
      description: "Please wait while we send your message.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="text-center space-y-4 mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold">
                Let's Build Your
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> AI Clone</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your content strategy? Get in touch and we'll help you get started.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-card border border-border/50 rounded-2xl p-8 space-y-6 shadow-elevated animate-fade-in">
                <h2 className="text-2xl font-bold">Send us a message</h2>
                
                <form 
                  action="https://formsubmit.co/yashikaaroraa2030@gmail.com" 
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* FormSubmit configuration */}
                  <input type="hidden" name="_subject" value="New Contact Form Submission - Clone Crafted" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_next" value={`${window.location.origin}/contact?success=true`} />
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your content needs..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-primary shadow-glow">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Get in touch</h2>
                  <p className="text-muted-foreground">
                    Have questions? We're here to help you understand how Clone Crafted can transform 
                    your content strategy and personal brand.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email us</h3>
                      <p className="text-muted-foreground">yashikaaroraa2030@gmail.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond in 1 Minute.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call us</h3>
                      <p className="text-muted-foreground">+91 9896956490 (India)</p>
                    </div>
                  </div>
                </div>

                {/* Calendar Booking CTA */}
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Schedule a Strategy Call</h3>
                  <p className="text-muted-foreground">
                    Book a free 30-minute consultation to discuss how AI cloning can accelerate your content strategy.
                  </p>
                  <a 
                    href="https://wa.link/u2sisk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full"
                    >
                      Book a Call
                    </Button>
                  </a>
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

export default Contact;
