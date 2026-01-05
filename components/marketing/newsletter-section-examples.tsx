/**
 * Newsletter Section Examples
 * 
 * Reference examples for the NewsletterSection component.
 * Supports Tailwind CSS newsletter section patterns.
 */

import { NewsletterSection } from '@/ui/primitives/newsletter-section';

export function NewsletterSectionExamples() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Simple Stacked</h3>
        <NewsletterSection
          variant="simple-stacked"
          title="Subscribe to our newsletter"
          description="Get the latest updates and news delivered to your inbox."
          onSubmit={(email) => console.log("Subscribe:", email)}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Side by Side with Details</h3>
        <NewsletterSection
          variant="side-by-side-details"
          title="Join our community"
          description="Stay connected with our latest updates."
          details={[
            "Weekly newsletter",
            "Exclusive content",
            "Early access to features",
          ]}
          onSubmit={(email) => console.log("Subscribe:", email)}
        />
      </div>
    </div>
  );
}
