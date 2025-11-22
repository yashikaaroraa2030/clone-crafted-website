import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Chrome, Apple } from "lucide-react";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container max-w-md">
          <div className="bg-card border border-border/50 rounded-2xl p-8 space-y-6 shadow-elevated animate-fade-in">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-muted-foreground">
                Choose your preferred sign up method
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <Button 
                variant="outline" 
                className="w-full h-12 text-base"
                onClick={() => {
                  // Add Google OAuth integration here
                  console.log("Google sign up clicked");
                }}
              >
                <Chrome className="mr-3 h-5 w-5" />
                Continue with Google
              </Button>

              <Button 
                variant="outline" 
                className="w-full h-12 text-base"
                onClick={() => {
                  // Add Apple OAuth integration here
                  console.log("Apple sign up clicked");
                }}
              >
                <Apple className="mr-3 h-5 w-5" />
                Continue with Apple
              </Button>
            </div>

            <div className="pt-4 text-center">
              <p className="text-sm text-muted-foreground">
                By continuing, you agree to our{" "}
                <a href="#terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignIn;






