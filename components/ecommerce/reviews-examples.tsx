/**
 * Reviews Examples
 * 
 * Reference examples for the Reviews component.
 * Supports Tailwind CSS review patterns.
 */

import { Reviews, Review } from '@/ui/primitives/reviews';

export function ReviewsExamples() {
  const simpleReviews: Review[] = [
    {
      id: "1",
      author: { name: "John Doe", avatar: "/avatar.jpg", verified: true },
      rating: 5,
      title: "Great product!",
      content: "Really happy with my purchase. Quality is excellent.",
      date: "2 days ago",
    },
    {
      id: "2",
      author: { name: "Jane Smith", avatar: "/avatar.jpg" },
      rating: 4,
      title: "Good value",
      content: "Good quality for the price. Would recommend.",
      date: "1 week ago",
    },
  ];

  const ratingDistribution = [
    { rating: 5, count: 120, percentage: 60 },
    { rating: 4, count: 50, percentage: 25 },
    { rating: 3, count: 20, percentage: 10 },
    { rating: 2, count: 5, percentage: 2.5 },
    { rating: 1, count: 5, percentage: 2.5 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Simple with Avatars</h3>
        <Reviews
          variant="simple-avatars"
          reviews={simpleReviews}
          averageRating={4.5}
          totalReviews={200}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Summary Chart</h3>
        <Reviews
          variant="summary-chart"
          reviews={simpleReviews}
          averageRating={4.5}
          totalReviews={200}
          ratingDistribution={ratingDistribution}
        />
      </div>
    </div>
  );
}
