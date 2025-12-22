# Design Tokens

This folder is reserved for design tokens (colors, typography, spacing, etc.).

## Purpose

Machine-readable design tokens for:
- **Colors** - Brand colors, semantic colors, gradients
- **Typography** - Font families, sizes, weights, line heights
- **Spacing** - Margin, padding, gap scales
- **Shadows** - Box shadows, glow effects
- **Border radius** - Rounding values
- **Transitions** - Animation durations and easings

## Current Status

⚠️ **This folder is currently empty.**

**Design tokens actually exist in**: `docs/design-system/DESIGN_TOKENS.json`

## Why Tokens Are Elsewhere

The comprehensive design token file is currently located at:
```
docs/design-system/DESIGN_TOKENS.json
```

This contains:
- ✅ Complete color system (primary, secondary, semantic)
- ✅ Dragvertising-inspired gradients
- ✅ Typography scale (12px to 96px)
- ✅ Spacing scale (0 to 24)
- ✅ Border radius (none to full)
- ✅ Shadows (including glow effects)
- ✅ Transitions (duration and timing)
- ✅ Component tokens (buttons, cards)

## Token Structure

The existing token file uses this structure:
```json
{
  "colors": {
    "primary": { "purple": {...}, "pink": {...}, "golden": {...} },
    "secondary": { "muted": {...}, "accent": {...} },
    "semantic": { "success": {...}, "destructive": {...}, "warning": {...} }
  },
  "gradients": {
    "dragvertising": {...},
    "golden": {...},
    "primary": {...},
    "hero": {...}
  },
  "typography": {
    "fontFamily": {...},
    "fontSize": {...},
    "fontWeight": {...},
    "lineHeight": {...}
  },
  "spacing": {...},
  "borderRadius": {...},
  "shadows": {...},
  "transitions": {...},
  "components": {
    "button": {...},
    "card": {...}
  }
}
```

## Usage

### Import Tokens (if using JSON)
```tsx
import tokens from '@/docs/design-system/DESIGN_TOKENS.json';

// Use tokens
const primaryPurple = tokens.colors.primary.purple.light.hex;
const heroGradient = tokens.gradients.dragvertising.css;
```

### Use in Tailwind
All tokens include Tailwind class mappings:
```tsx
// Color
className="bg-purple-600 text-pink-500"

// Gradient (custom classes defined in tailwind.config.ts)
className="bg-gradient-to-r from-[#FFA726] via-[#FD0290] to-[#A855F7]"

// Typography
className="text-2xl font-semibold leading-snug"

// Spacing
className="p-6 gap-4"

// Border radius
className="rounded-2xl"

// Shadows
className="shadow-xl"
```

## Future: Multiple Token Formats

If tokens are moved to this folder, consider multiple formats:

```
design-system/tokens/
├── tokens.json              # Source of truth
├── tokens.css               # CSS custom properties
├── tokens.scss              # SCSS variables
├── tokens.js                # JavaScript/TypeScript
└── README.md                # This file
```

### CSS Custom Properties
```css
:root {
  --color-primary-purple-light: #A855F7;
  --color-primary-pink: #FD0290;
  --gradient-dragvertising: linear-gradient(135deg, #FFA726, #FD0290, #A855F7);
  --spacing-4: 1rem;
  --radius-2xl: 1rem;
}
```

### JavaScript/TypeScript
```typescript
export const tokens = {
  colors: {
    primary: {
      purple: { light: '#A855F7', dark: '#B76EF7' },
      pink: { both: '#FD0290' },
      golden: { light: '#FFA726', dark: '#FFB74D' }
    }
  },
  gradients: {
    dragvertising: 'linear-gradient(135deg, #FFA726, #FD0290, #A855F7)'
  }
};
```

## Recommendation

### Option 1: Keep tokens in `docs/`
**Pros**: Already complete and working
**Cons**: Separated from design-system folder

### Option 2: Move tokens here
**Pros**: All design system assets in one place
**Cons**: Requires refactoring imports

### Option 3: Link/reference
**Pros**: Best of both worlds
**Cons**: Slightly more complex

## Notes

- Tokens should be the **single source of truth** for design values
- Generate CSS variables and Tailwind config from tokens
- Version tokens if making breaking changes
- Document token usage and naming conventions

---

**Last Updated**: December 2025  
**Status**: Empty - Tokens exist in `docs/design-system/DESIGN_TOKENS.json`  
**Action Required**: Decide on final token location







