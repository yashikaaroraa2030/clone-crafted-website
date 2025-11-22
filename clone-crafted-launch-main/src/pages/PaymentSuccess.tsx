import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan") || "launch";
  const amount = searchParams.get("amount") || "0";

  const planNames: Record<string, string> = {
    launch: "Launch Plan",
    growth: "Growth Plan",
    authority: "Authority Plan"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-2xl text-center space-y-8">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-100 p-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Payment Successful!</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your purchase. Your payment has been processed successfully.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Plan</p>
              <p className="text-xl font-bold">{planNames[plan] || plan}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Amount Paid</p>
              <p className="text-2xl font-bold text-primary">${amount}</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              We've sent a confirmation email with your order details. 
              Our team will contact you within 24 hours to get started with your AI clone setup.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Contact Support
                </Button>
              </Link>
              <Link to="/">
                <Button className="w-full sm:w-auto gradient-primary">
                  Back to Home
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;


