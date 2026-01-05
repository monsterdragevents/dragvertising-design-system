/**
 * Banner Examples
 * 
 * Reference examples for the Banner component.
 * Supports Tailwind CSS banner patterns.
 */

import { Banner } from '@/ui/primitives/banner';
import { useState } from 'react';
import { Info, X } from 'lucide-react';

export function BannerExamples() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Simple Banner</h3>
        <Banner variant="simple">
          New feature available! Check it out now.
        </Banner>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Icon</h3>
        <Banner variant="with-icon" icon={<Info className="h-5 w-5" />}>
          Important announcement
        </Banner>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Dismissible</h3>
        <Banner
          variant="dismissible"
          dismissible={true}
          open={isOpen}
          onDismiss={() => setIsOpen(false)}
        >
          This banner can be dismissed
        </Banner>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Button</h3>
        <Banner
          variant="with-button"
          action={{
            label: "Learn More",
            onClick: () => console.log("Learn more clicked"),
          }}
        >
          Special offer available
        </Banner>
      </div>
    </div>
  );
}
