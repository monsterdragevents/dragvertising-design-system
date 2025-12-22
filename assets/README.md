# Design System Assets

This folder is reserved for design assets used in the Dragvertising design system.

## Purpose

Store reusable design assets that are:
- **Brand-specific** - Logos, brand marks, official assets
- **Reference materials** - Design mockups, UI inspirations
- **Icons and graphics** - Custom icons, illustrations
- **Image templates** - Hero images, backgrounds, patterns

## Current Status

⚠️ **This folder is currently empty.**

## Recommended Contents

### Logos
- `logos/dragvertising-logo.svg` - Main logo
- `logos/dragvertising-icon.svg` - Icon/mark
- `logos/dragvertising-wordmark.svg` - Text-only logo

### Icons
- `icons/` - Custom icon set
- `icons/universe-roles/` - Role-specific icons

### Brand Assets
- `brand/` - Brand guidelines, color palettes
- `brand/gradients/` - Gradient examples
- `brand/patterns/` - Background patterns

### UI Elements
- `ui/` - Reusable UI graphics
- `ui/buttons/` - Button examples
- `ui/cards/` - Card examples

## Usage

Once populated, reference assets using:
```tsx
import logo from '@/design-system/assets/logos/dragvertising-logo.svg';
```

Or via public URL:
```tsx
<img src="/design-system/assets/logos/dragvertising-logo.svg" alt="Dragvertising" />
```

## Notes

- Assets here should be **design references**, not runtime assets
- For runtime assets, use `public/` folder
- Keep file sizes optimized (use SVG when possible)
- Follow naming conventions: `kebab-case.svg`

---

**Last Updated**: December 2025  
**Status**: Empty - Ready for population







