/**
 * Product Quickview Examples
 * 
 * Reference examples for the ProductQuickview component.
 * Supports Tailwind CSS product quickview patterns.
 */

import { ProductQuickview } from '@/ui/primitives/product-quickview';
import { useState } from 'react';

export function ProductQuickviewExamples() {
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    { src: "/product1.jpg", alt: "Product 1", thumbnail: "/product1-thumb.jpg" },
  ];

  const colors = [
    { id: "1", label: "Red", value: "#ff0000", available: true },
  ];

  const sizes = [
    { id: "1", label: "Small", available: true },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Color & Size</h3>
        <button onClick={() => setIsOpen(true)}>Open Quickview</button>
        <ProductQuickview
          variant="color-size"
          open={isOpen}
          onOpenChange={setIsOpen}
          title="Product Name"
          price={2999}
          images={images}
          colors={colors}
          sizes={sizes}
          onAddToCart={() => console.log("Add to cart")}
        />
      </div>
    </div>
  );
}
