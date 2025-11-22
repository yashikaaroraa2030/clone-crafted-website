import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { XCircle, ArrowLeft } from "lucide-react";

const PaymentFailure = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-2xl text-center space-y-8">
          <div className="flex justify-center">
            <div className="rounded-full bg-red-100 p-4">
              <XCircle className="h-16 w-16 text-red-600" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Payment Failed</h1>
            <p className="text-lg text-muted-foreground">
              We're sorry, but your payment could not be processed. 
              Please try again or contact support if the problem persists.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 space-y-4">
            <p className="text-muted-foreground">
              Common reasons for payment failure:
            </p>
            <ul className="text-left space-y-2 text-muted-foreground max-w-md mx-auto">
              <li>• Insufficient funds</li>
              <li>• Incorrect card details</li>
              <li>• Card expired or blocked</li>
              <li>• Network issues</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Pricing
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="w-full sm:w-auto gradient-primary">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentFailure;


