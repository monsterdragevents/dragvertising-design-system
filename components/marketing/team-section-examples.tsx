/**
 * Team Section Examples
 * 
 * Reference examples for the TeamSection component.
 * Supports Tailwind CSS team section patterns.
 */

import { TeamSection, TeamMember } from '@/ui/primitives/team-section';
import { Mail, Twitter, Linkedin } from 'lucide-react';

export function TeamSectionExamples() {
  const members: TeamMember[] = [
    {
      id: "1",
      name: "John Doe",
      role: "CEO",
      image: { src: "/avatar.jpg", alt: "John Doe", fallback: "JD" },
      bio: "10+ years of experience in tech leadership",
      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        email: "john@example.com",
      },
    },
    {
      id: "2",
      name: "Jane Smith",
      role: "CTO",
      image: { src: "/avatar.jpg", alt: "Jane Smith", fallback: "JS" },
      bio: "Expert in scalable architecture",
      socialLinks: {
        linkedin: "https://linkedin.com/in/janesmith",
      },
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Round Images</h3>
        <TeamSection
          variant="round-images"
          title="Our Team"
          description="Meet the people behind the scenes"
          members={members}
          showBio={true}
          showSocialLinks={true}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large Grid with Cards</h3>
        <TeamSection
          variant="large-grid-cards"
          members={members}
          useCard={true}
        />
      </div>
    </div>
  );
}
