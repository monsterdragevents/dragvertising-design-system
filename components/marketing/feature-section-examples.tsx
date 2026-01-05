/**
 * Feature Section Examples
 * 
 * Reference examples for the FeatureSection component.
 * Supports Tailwind CSS feature section patterns.
 */

import { FeatureSection, Feature } from '@/ui/primitives/feature-section';
import { Zap, Shield, Rocket } from 'lucide-react';

export function FeatureSectionExamples() {
  const iconFeatures: Feature[] = [
    {
      id: "1",
      title: "Fast Performance",
      description: "Lightning-fast load times and optimized performance.",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      id: "2",
      title: "Secure",
      description: "Enterprise-grade security for your data.",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      id: "3",
      title: "Scalable",
      description: "Grows with your business needs.",
      icon: <Rocket className="h-8 w-8" />,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">With Icons</h3>
        <FeatureSection
          variant="with-icons"
          title="Features"
          description="Everything you need to succeed"
          features={iconFeatures}
        />
      </div>
    </div>
  );
}
