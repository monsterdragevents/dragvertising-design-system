/**
 * Grid List Examples
 * 
 * Reference examples for the GridList component.
 * Supports Tailwind CSS grid list patterns.
 */

import { GridList, GridListItem } from '@/ui/primitives/grid-list';

export function GridListExamples() {
  const contactItems: GridListItem[] = [
    {
      id: "1",
      title: "John Doe",
      description: "Software Engineer",
      avatar: { src: "/avatar.jpg", alt: "John", fallback: "JD" },
      badge: { label: "Active", variant: "success" },
    },
    {
      id: "2",
      title: "Jane Smith",
      description: "Product Designer",
      avatar: { src: "/avatar.jpg", alt: "Jane", fallback: "JS" },
    },
  ];

  const imageItems: GridListItem[] = [
    {
      id: "1",
      image: { src: "/image1.jpg", alt: "Image 1" },
    },
    {
      id: "2",
      image: { src: "/image2.jpg", alt: "Image 2" },
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Cards</h3>
        <GridList
          variant="contact-cards"
          items={contactItems}
          useCard={true}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Image Grid</h3>
        <GridList
          variant="image-grid"
          items={imageItems}
          useCard={false}
        />
      </div>
    </div>
  );
}
