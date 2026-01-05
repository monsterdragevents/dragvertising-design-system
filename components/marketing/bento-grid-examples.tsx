/**
 * Bento Grid Examples
 * 
 * Reference examples for the BentoGrid component.
 * Supports Tailwind CSS bento grid patterns.
 */

import { BentoGrid, BentoGridItem } from '@/ui/primitives/bento-grid';
import { Zap, Shield, Rocket } from 'lucide-react';

export function BentoGridExamples() {
  const items: BentoGridItem[] = [
    {
      id: "1",
      title: "Fast Performance",
      description: "Lightning-fast load times",
      icon: <Zap className="h-8 w-8" />,
      span: 2,
    },
    {
      id: "2",
      title: "Secure",
      description: "Enterprise-grade security",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      id: "3",
      title: "Scalable",
      description: "Grows with your business",
      icon: <Rocket className="h-8 w-8" />,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Three Column Grid</h3>
        <BentoGrid
          variant="three-column"
          items={items}
          useCard={true}
        />
      </div>
    </div>
  );
}
