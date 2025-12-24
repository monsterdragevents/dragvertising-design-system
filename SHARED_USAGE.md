# Shared Design System Usage

This design system package ensures all Dragvertising repositories share the same design tokens and styling.

## Quick Setup

### 1. Install the Design System Package

In each repository, add the design system as a local dependency:

```bash
# From your repo root (e.g., DragvertisingApp)
npm install ../dragvertising-design-system
```

Or add to `package.json`:

```json
{
  "dependencies": {
    "@dragvertising/design-system": "file:../dragvertising-design-system"
  }
}
```

### 2. Update Tailwind Config

Update your `tailwind.config.ts` or `tailwind.config.js` to use the preset:

```typescript
import type { Config } from "tailwindcss";
import designSystemPreset from "@dragvertising/design-system/tailwind-preset";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    // ... your content paths
  ],
  presets: [designSystemPreset], // Add this line
  theme: {
    extend: {
      // Your repo-specific extensions (if any)
      // The preset already includes all design system tokens
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
} satisfies Config;
```

### 3. Rebuild After Token Changes

When design tokens are updated in the design-system repo:

```bash
# In design-system repo
cd dragvertising-design-system
npm run build

# In your repo
npm install  # Reinstall to get updated preset
```

## What's Included

The preset includes:

- ✅ **Colors**: Brand colors (pink, golden, warm-orange), semantic colors, universe colors
- ✅ **Typography**: Font families, sizes, weights, line heights
- ✅ **Spacing**: Complete spacing scale (dv-0 to dv-40)
- ✅ **Border Radius**: All radius values (dv-none to dv-full)
- ✅ **Shadows**: Elevation shadows and glow effects
- ✅ **Animations**: Keyframes, durations, easing functions
- ✅ **Gradients**: All brand gradients

## Using Design Tokens

### In Tailwind Classes

```tsx
// Colors
<div className="bg-dv-purple-500 text-dv-pink-500">...</div>

// Spacing
<div className="p-dv-4 m-dv-6">...</div>

// Typography
<h1 className="text-dv-4xl font-dv-bold">...</h1>

// Border Radius
<button className="rounded-dv-lg">...</button>

// Shadows
<div className="shadow-dv-lg shadow-dv-glow-primary-light">...</div>

// Animations
<div className="animate-fade-in">...</div>
```

### In TypeScript/React

```tsx
import designTokens from '@dragvertising/design-system/design-tokens/colors.json';

const primaryColor = designTokens.colors.brand.pink.$value;
```

## Repositories to Update

Update these repos to use the shared design system:

1. ✅ `DragvertisingApp`
2. ✅ `dragvertising-messenger`
3. ✅ `dragvertising-android-broadcaster`
4. ⚠️ `dragvertising-chrome-extension` (if using Tailwind)
5. ⚠️ `dragvertising-canva-app` (if using Tailwind)

## Keeping in Sync

### Automatic Sync Script

Run this from the root workspace to update all repos:

```bash
# From /Users/michaelryanwhitson/
npm run sync:design-system
```

### Manual Sync

1. Update tokens in `dragvertising-design-system/design-tokens/`
2. Run `npm run build` in design-system repo
3. Run `npm install` in each consuming repo

## Benefits

- ✅ **Single Source of Truth**: All design tokens in one place
- ✅ **Consistency**: All repos use identical styling
- ✅ **Type Safety**: TypeScript support for tokens
- ✅ **Easy Updates**: Change tokens once, update all repos
- ✅ **Version Control**: Track design system changes via git



