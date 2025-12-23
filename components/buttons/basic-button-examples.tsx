/**
 * Basic Button Examples
 * 
 * Reference examples for design system button components.
 * These are static examples for documentation purposes.
 * 
 * For production use, import from @/components/button
 */

import { PrimaryButton, SecondaryButton } from '@/components/button';

/**
 * Primary Button Examples
 */
export function PrimaryButtonExamples() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Primary Button</h3>
      
      {/* Sizes */}
      <div className="flex items-center gap-4">
        <PrimaryButton size="sm">Small</PrimaryButton>
        <PrimaryButton size="md">Medium</PrimaryButton>
        <PrimaryButton size="lg">Large</PrimaryButton>
      </div>

      {/* States */}
      <div className="flex items-center gap-4">
        <PrimaryButton state="default">Default</PrimaryButton>
        <PrimaryButton state="hover">Hover</PrimaryButton>
        <PrimaryButton state="pressed">Pressed</PrimaryButton>
        <PrimaryButton state="disabled" disabled>Disabled</PrimaryButton>
        <PrimaryButton loading>Loading</PrimaryButton>
      </div>
    </div>
  );
}

/**
 * Secondary Button Examples
 */
export function SecondaryButtonExamples() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Secondary Button</h3>
      
      {/* Sizes */}
      <div className="flex items-center gap-4">
        <SecondaryButton size="sm">Small</SecondaryButton>
        <SecondaryButton size="md">Medium</SecondaryButton>
        <SecondaryButton size="lg">Large</SecondaryButton>
      </div>

      {/* States */}
      <div className="flex items-center gap-4">
        <SecondaryButton state="default">Default</SecondaryButton>
        <SecondaryButton state="hover">Hover</SecondaryButton>
        <SecondaryButton state="pressed">Pressed</SecondaryButton>
        <SecondaryButton state="disabled" disabled>Disabled</SecondaryButton>
        <SecondaryButton loading>Loading</SecondaryButton>
      </div>
    </div>
  );
}

/**
 * Button Composition Examples
 */
export function ButtonCompositionExamples() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Button Compositions</h3>
      
      {/* Primary + Secondary */}
      <div className="flex items-center gap-4">
        <PrimaryButton>Get Started</PrimaryButton>
        <SecondaryButton>Learn More</SecondaryButton>
      </div>

      {/* With Icons */}
      <div className="flex items-center gap-4">
        <PrimaryButton>
          <span>Sign Up</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </PrimaryButton>
      </div>
    </div>
  );
}





