import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container max-w-4xl">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Privacy Policy — <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clone Crafted</span></h1>
                <p className="text-lg text-muted-foreground">
                  Clone Crafted provides AI-powered tools to create digital voice and face clones for content generation. We take privacy, consent, and data security extremely seriously. This Privacy Policy explains how we collect, use, store, protect, and delete your data.
                </p>
                <p className="text-muted-foreground">
                  By using our services, website, or submitting audio/video data, you agree to this Privacy Policy.
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-4 pt-8">
                <h2 className="text-3xl font-bold"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">1. Information We Collect</span></h2>
                <p className="text-muted-foreground">
                  We collect the following categories of data:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">1.1</span> Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Company name</li>
                      <li>Contact details</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">1.2</span> Audio/Video Data for AI Cloning</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Short demo videos</li>
                      <li>Voice recordings</li>
                      <li>Face recordings</li>
                      <li>Any content you voluntarily upload for model training.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">1.3</span> Communication Data</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Emails</li>
                      <li>Chat messages</li>
                      <li>Feedback</li>
                      <li>Support requests</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4 pt-8">
                <h2 className="text-3xl font-bold"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2. How We Use Your Information</span></h2>
                <p className="text-muted-foreground">
                  We use your information only for the following purposes:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2.1</span> Creating and Improving Your AI Clone</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Training your voice + face model</li>
                      <li>Testing, refining, and improving accuracy</li>
                      <li>Generating content based on your instructions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2.2</span> Providing Services</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Content generation</li>
                      <li>Scheduling and posting</li>
                      <li>Account management</li>
                      <li>Billing and support</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2.3</span> Communication</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Sending onboarding instructions</li>
                      <li>Providing support</li>
                      <li>Sending updates about your clone or content</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2.4</span> Safety & Compliance</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Preventing misuse</li>
                      <li>Ensuring transparency</li>
                      <li>Following applicable laws (GDPR/CCPA)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4 pt-8">
                <h2 className="text-3xl font-bold"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3. Ownership of Your AI Clone & Content</span></h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3.1</span> You own your identity</h3>
                    <p className="text-muted-foreground">
                      Your voice, face, and likeness remain <strong className="text-foreground">100% yours</strong>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3.2</span> You own the outputs</h3>
                    <p className="text-muted-foreground">
                      All generated content belongs to <strong className="text-foreground">you</strong>, not us.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3.3</span> We do NOT</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Sell your data</li>
                      <li>Share your data</li>
                      <li>Use your clone for advertising</li>
                      <li>Use your clone without explicit consent</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4 pt-8">
                <h2 className="text-3xl font-bold"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">4. Storage & Security</span></h2>
                <p className="text-muted-foreground">
                  We store your data securely using:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Encrypted storage (at rest and in transit)</li>
                  <li>Restricted-access servers</li>
                  <li>Industry-standard security protocols</li>
                  <li>Authentication and access control</li>
                </ul>
                <p className="text-muted-foreground pt-4">
                  We do <strong className="text-foreground">not</strong> store unnecessary raw audio/video once the model is trained (unless you request it).
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-4 pt-8">
                <h2 className="text-3xl font-bold"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">5. Deletion Rights</span></h2>
                <p className="text-muted-foreground">
                  You can request deletion anytime.
                </p>
                <p className="text-muted-foreground">
                  When you ask for deletion:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Your AI model is permanently removed</li>
                  <li>All associated audio/video files are deleted</li>
                  <li>All generated draft content is deleted</li>
                  <li>We send a confirmation email within <strong className="text-foreground">24 hours</strong></li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="space-y-4 pt-8">
                <h2 className="text-3xl font-bold"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">6. Consent Requirements</span></h2>
                <p className="text-muted-foreground">
                  We require clear consent before:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Training an AI clone using your video or voice</li>
                  <li>Using your likeness in any demo or internal test</li>
                  <li>Generating content using your clone</li>
                  <li>Using your clone in any public context (never done without approval)</li>
                </ol>
                <p className="text-muted-foreground pt-4">
                  No model is created <strong className="text-foreground">without your explicit consent</strong>.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-4 pt-8">
                <h2 className="text-3xl font-bold"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">7. Sharing of Information</span></h2>
                <p className="text-muted-foreground">
                  We <strong className="text-foreground">do not sell or trade</strong> your data.
                </p>
                <p className="text-muted-foreground">
                  Your data may be shared only with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Secure third-party hosting providers</li>
                  <li>Payment processors (Credit card / Debit card / PayPal)</li>
                  <li>Analytics tools (non-personal data only)</li>
                </ul>
                <p className="text-muted-foreground pt-4">
                  All third-party tools follow strong security practices.
                </p>
                <p className="text-muted-foreground">
                  We <strong className="text-foreground">never</strong> share your AI model with anyone.
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-4 pt-8">
                <h2 className="text-3xl font-bold"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">8. Your Rights (GDPR/CCPA)</span></h2>
                <p className="text-muted-foreground">
                  Depending on your region, you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access your data</li>
                  <li>Correct your data</li>
                  <li>Delete your data</li>
                  <li>Request restriction of processing</li>
                  <li>Opt out of marketing</li>
                  <li>Receive a copy of your stored data</li>
                  <li>Withdraw consent anytime</li>
                </ul>
                <p className="text-muted-foreground pt-4">
                  Email us to exercise any of the above rights.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

