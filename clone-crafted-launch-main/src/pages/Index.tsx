import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import UseCasesSection from "@/components/home/UseCasesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <BenefitsSection />
        <HowItWorksSection />
        <UseCasesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
