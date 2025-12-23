/**
 * Talent Card Examples
 * 
 * Reference examples for design system card components.
 * These are static examples for documentation purposes.
 * 
 * For production use, import from @/components/card
 */

import { TalentBrowseCard } from '@/components/card';

/**
 * Talent Browse Card Examples
 */
export function TalentBrowseCardExamples() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Talent Browse Card</h3>
      
      {/* Default State */}
      <TalentBrowseCard
        name="Raven Star"
        pronouns="she/her"
        bio="Award-winning drag performer with 10+ years of experience. Specializes in lip-sync performances and comedy acts."
        avatar="/images/raven.jpg"
        isVerified={true}
        state="default"
      />

      {/* Hover State */}
      <TalentBrowseCard
        name="Luna Moon"
        pronouns="they/them"
        bio="Multi-talented performer known for high-energy shows and audience interaction."
        avatar="/images/luna.jpg"
        isVerified={false}
        state="hover"
      />

      {/* Loading State */}
      <TalentBrowseCard
        name=""
        state="loading"
      />

      {/* Empty State */}
      <TalentBrowseCard
        name=""
        state="empty"
      />
    </div>
  );
}


