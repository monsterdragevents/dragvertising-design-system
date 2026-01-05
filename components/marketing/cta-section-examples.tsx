/**
 * CTA Section Examples
 * 
 * Reference examples for the CTASection component.
 * Supports Tailwind CSS CTA section patterns.
 */

import { CTASection } from '@/ui/primitives/cta-section';

export function CTASectionExamples() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Simple Centered</h3>
        <CTASection
          variant="simple-centered"
          title="Get Started Today"
          description="Join thousands of satisfied customers"
          primaryAction={{
            label: "Sign Up",
            onClick: () => console.log("Sign up"),
          }}
          secondaryAction={{
            label: "Learn More",
            onClick: () => console.log("Learn more"),
          }}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Centered Gradient</h3>
        <CTASection
          variant="centered-gradient"
          title="Transform Your Business"
          description="Start your free trial today"
          primaryAction={{
            label: "Start Free Trial",
            onClick: () => console.log("Start trial"),
          }}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Split with Image</h3>
        <CTASection
          variant="split-image"
          title="Ready to Get Started?"
          description="Join us today and see the difference"
          primaryAction={{
            label: "Get Started",
            onClick: () => console.log("Get started"),
          }}
          image={{
            src: "/cta-image.jpg",
            alt: "CTA Image",
          }}
        />
      </div>
    </div>
  );
}
