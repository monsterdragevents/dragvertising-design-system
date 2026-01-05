/**
 * Product Overview Examples
 * 
 * Reference examples for the ProductOverview component.
 * Supports Tailwind CSS product overview patterns.
 */

import { ProductOverview } from '@/ui/primitives/product-overview';
import { useState } from 'react';

export function ProductOverviewExamples() {
  const [selectedVariant, setSelectedVariant] = useState<string>();

  const images = [
    { src: "/product1.jpg", alt: "Product 1", thumbnail: "/product1-thumb.jpg" },
    { src: "/product2.jpg", alt: "Product 2", thumbnail: "/product2-thumb.jpg" },
  ];

  const colors = [
    { id: "1", label: "Red", value: "#ff0000", available: true },
    { id: "2", label: "Blue", value: "#0000ff", available: true },
  ];

  const sizes = [
    { id: "1", label: "Small", available: true },
    { id: "2", label: "Medium", available: true },
    { id: "3", label: "Large", available: false },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Image Grid</h3>
        <ProductOverview
          variant="image-grid"
          title="Product Name"
          description="Product description here"
          price={2999}
          compareAtPrice={3999}
          images={images}
          colors={colors}
          sizes={sizes}
          onAddToCart={() => console.log("Add to cart")}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Gallery Expandable</h3>
        <ProductOverview
          variant="gallery-expandable"
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
