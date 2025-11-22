import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

// Initialize Stripe - Replace with your actual publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_your_publishable_key_here");

const plans = {
  launch: {
    name: "Launch Plan",
    price: 199,
    setupFee: 1000,
    description: "Perfect for getting started with AI cloning",
    features: [
      "AI voice + face clone",
      "10 videos per month",
      "Basic customization",
      "Email support",
      "720p video quality"
    ]
  },
  growth: {
    name: "Growth Plan",
    price: 499,
    setupFee: 1000,
    description: "For serious entrepreneurs scaling their brand",
    features: [
      "AI face + voice clone",
      "15 videos per month",
      "Advanced customization",
      "Priority support",
      "1080p video quality",
      "Social media scheduling",
      "Custom backgrounds"
    ]
  },
  authority: {
    name: "Authority Plan",
    price: 999,
    setupFee: 1000,
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
    ]
  }
};

const CheckoutForm = ({ planKey, plan }: { planKey: string; plan: typeof plans.launch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all customer details.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      // In production, you would create a PaymentIntent on your backend
      // For now, this is a client-side example structure
      const cardElement = elements.getElement(CardElement);

      if (!cardElement) {
        throw new Error("Card element not found");
      }

      // Create payment method
      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: customerInfo.name,
          email: customerInfo.email,
          phone: customerInfo.phone
        }
      });

      if (pmError) {
        toast({
          title: "Payment failed",
          description: pmError.message || "There was an error processing your payment.",
          variant: "destructive"
        });
        setLoading(false);
        return;
      }

      // In production, you would send paymentMethod.id to your backend
      // and create a PaymentIntent there. For demo purposes, we'll simulate success
      console.log("Payment Method created:", paymentMethod);

      // Simulate API call to backend
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Redirect to success page
      navigate(`/payment-success?plan=${planKey}&amount=${plan.price + plan.setupFee}`);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Customer Information</h3>
        <Input
          placeholder="Full Name"
          value={customerInfo.name}
          onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
          required
        />
        <Input
          type="email"
          placeholder="Email Address"
          value={customerInfo.email}
          onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
          required
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          value={customerInfo.phone}
          onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
          required
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Payment Details</h3>
        <div className="p-4 border border-border rounded-lg bg-card">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={!stripe || loading}
        className="w-full gradient-primary shadow-glow"
        size="lg"
      >
        {loading ? "Processing..." : `Pay $${plan.price + plan.setupFee}`}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        Your payment information is secure and encrypted.
      </p>
    </form>
  );
};

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const planKey = searchParams.get("plan") || "launch";
  const plan = plans[planKey as keyof typeof plans] || plans.launch;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <Link to="/pricing" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Pricing
          </Link>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Checkout</h1>
                <p className="text-muted-foreground">Complete your purchase</p>
              </div>

              <div className="bg-card border rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <span className="text-primary mr-2">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monthly Plan</span>
                    <span className="font-semibold">${plan.price}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Setup Fee</span>
                    <span className="font-semibold">${plan.setupFee}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total (First Payment)</span>
                    <span>${plan.price + plan.setupFee}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="space-y-6">
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center mb-6">
                  <CreditCard className="h-5 w-5 mr-2 text-primary" />
                  <h2 className="text-xl font-bold">Payment Information</h2>
                </div>
                
                <Elements stripe={stripePromise}>
                  <CheckoutForm planKey={planKey} plan={plan} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;

