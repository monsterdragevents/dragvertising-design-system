/**
 * Incentives Examples
 * 
 * Reference examples for the Incentives component.
 * Supports Tailwind CSS incentive patterns.
 */

import { Incentives, Incentive } from '@/ui/primitives/incentives';
import { Truck, Shield, Headphones } from 'lucide-react';

export function IncentivesExamples() {
  const iconIncentives: Incentive[] = [
    {
      id: "1",
      title: "Free Shipping",
      description: "On orders over $50",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      id: "2",
      title: "Secure Payment",
      description: "100% secure checkout",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      id: "3",
      title: "24/7 Support",
      description: "Dedicated support team",
      icon: <Headphones className="h-6 w-6" />,
    },
  ];

  const illustrationIncentives: Incentive[] = [
    {
      id: "1",
      title: "Free Shipping",
      description: "On orders over $50",
      illustration: { src: "/illustration1.svg", alt: "Shipping" },
    },
    {
      id: "2",
      title: "Easy Returns",
      description: "30-day return policy",
      illustration: { src: "/illustration2.svg", alt: "Returns" },
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">3-Column with Icons</h3>
        <Incentives
          variant="3-column-icons"
          incentives={iconIncentives}
          title="Why Choose Us"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">3-Column with Illustrations</h3>
        <Incentives
          variant="3-column-split-header"
          incentives={illustrationIncentives}
          splitHeader={{
            title: "Customer Benefits",
            description: "Everything you need to know",
          }}
        />
      </div>
    </div>
  );
}
