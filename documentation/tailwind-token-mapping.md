# Tailwind + Figma Token Mapping (Rosetta Stone)

## Overview

This document maps Figma variables to Tailwind classes, creating a "Rosetta Stone" between design and code.

## Naming Convention

**Pattern**: `dv-[category]-[name]`

- **dv**: Dragvertising namespace (prevents conflicts)
- **category**: Token category (brand, surface, shadow, etc.)
- **name**: Specific token name

## Complete Token Mapping

### Colors

#### Brand Colors

| Figma Variable | Tailwind Class | Value | Usage |
|----------------|----------------|-------|-------|
| `DV/Brand/Primary` | `bg-dv-primary` | `#9945FF` | Primary brand purple |
| `DV/Brand/Primary` | `text-dv-primary` | `#9945FF` | Primary text color |
| `DV/Brand/Primary` | `border-dv-primary` | `#9945FF` | Primary border |
| `DV/Brand/Pink` | `bg-dv-pink` | `#FD0290` | Brand signature pink |
| `DV/Brand/Pink` | `text-dv-pink` | `#FD0290` | Pink text |
| `DV/Brand/Golden` | `bg-dv-golden` | `#FFA726` | Golden accent |
| `DV/Brand/Golden` | `text-dv-golden` | `#FFA726` | Golden text |
| `DV/Brand/Orange` | `bg-dv-orange` | `#FF6B35` | Warm orange |

#### Surface Colors

| Figma Variable | Tailwind Class | Value (Light) | Value (Dark) | Usage |
|----------------|----------------|---------------|--------------|-------|
| `DV/Surface/Base` | `bg-dv-surface` | `hsl(0, 0%, 98%)` | `hsl(280, 30%, 8%)` | Page background |
| `DV/Surface/Card` | `bg-dv-surface-card` | `hsl(0, 0%, 100%)` | `hsl(280, 25%, 12%)` | Card background |
| `DV/Surface/Elevated` | `bg-dv-surface-elevated` | `hsl(0, 0%, 100%)` | `hsl(280, 25%, 15%)` | Elevated surfaces |
| `DV/Surface/Muted` | `bg-dv-surface-muted` | `hsl(280, 10%, 95%)` | `hsl(280, 20%, 18%)` | Subtle backgrounds |

#### Text Colors

| Figma Variable | Tailwind Class | Value (Light) | Value (Dark) | Usage |
|----------------|----------------|---------------|--------------|-------|
| `DV/Text/Primary` | `text-dv-foreground` | `hsl(280, 20%, 10%)` | `hsl(280, 10%, 95%)` | Body text |
| `DV/Text/Secondary` | `text-dv-foreground-secondary` | `hsl(280, 15%, 35%)` | `hsl(280, 10%, 75%)` | Secondary text |
| `DV/Text/Muted` | `text-dv-muted` | `hsl(280, 10%, 50%)` | `hsl(280, 10%, 60%)` | Muted text |
| `DV/Text/On-Primary` | `text-dv-on-primary` | `hsl(0, 0%, 100%)` | `hsl(0, 0%, 100%)` | Text on primary |

#### Border Colors

| Figma Variable | Tailwind Class | Value (Light) | Value (Dark) | Usage |
|----------------|----------------|---------------|--------------|-------|
| `DV/Border/Default` | `border-dv-border` | `hsl(280, 15%, 88%)` | `hsl(280, 20%, 22%)` | Default borders |
| `DV/Border/Subtle` | `border-dv-border-subtle` | `hsl(280, 10%, 92%)` | `hsl(280, 15%, 18%)` | Subtle borders |
| `DV/Border/Strong` | `border-dv-border-strong` | `hsl(280, 20%, 80%)` | `hsl(280, 25%, 30%)` | Strong borders |

#### Interactive Colors

| Figma Variable | Tailwind Class | Value | Usage |
|----------------|----------------|-------|-------|
| `DV/Interactive/Primary-Hover` | `bg-dv-primary-hover` | `hsl(280, 85%, 55%)` | Primary hover state |
| `DV/Interactive/Primary-Pressed` | `bg-dv-primary-pressed` | `hsl(280, 85%, 45%)` | Primary active state |
| `DV/Interactive/Secondary-Hover` | `bg-dv-secondary-hover` | `hsl(45, 100%, 60%)` | Secondary hover |

### Spacing

| Figma Variable | Tailwind Class | Value | Usage |
|----------------|----------------|-------|-------|
| `DV/Space/0` | `p-dv-0` / `m-dv-0` / `gap-dv-0` | `0` | No spacing |
| `DV/Space/1` | `p-dv-1` / `m-dv-1` / `gap-dv-1` | `0.25rem` (4px) | Minimal |
| `DV/Space/2` | `p-dv-2` / `m-dv-2` / `gap-dv-2` | `0.5rem` (8px) | Small |
| `DV/Space/3` | `p-dv-3` / `m-dv-3` / `gap-dv-3` | `0.75rem` (12px) | Medium-small |
| `DV/Space/4` | `p-dv-4` / `m-dv-4` / `gap-dv-4` | `1rem` (16px) | Base unit |
| `DV/Space/6` | `p-dv-6` / `m-dv-6` / `gap-dv-6` | `1.5rem` (24px) | Medium |
| `DV/Space/8` | `p-dv-8` / `m-dv-8` / `gap-dv-8` | `2rem` (32px) | Large |
| `DV/Space/12` | `p-dv-12` / `m-dv-12` / `gap-dv-12` | `3rem` (48px) | XL |
| `DV/Space/16` | `p-dv-16` / `m-dv-16` / `gap-dv-16` | `4rem` (64px) | XXL |

### Shadows

| Figma Variable | Tailwind Class | Value | Usage |
|----------------|----------------|-------|-------|
| `DV/Shadow/Card` | `shadow-dv-card` | `0 1px 3px rgba(0,0,0,0.1)` | Card elevation |
| `DV/Shadow/Card-Hover` | `shadow-dv-card-hover` | `0 4px 12px rgba(0,0,0,0.15)` | Card hover |
| `DV/Shadow/Button` | `shadow-dv-button` | `0 1px 2px rgba(0,0,0,0.05)` | Button shadow |
| `DV/Shadow/Button-Hover` | `shadow-dv-button-hover` | `0 2px 8px rgba(0,0,0,0.1)` | Button hover |
| `DV/Shadow/Modal` | `shadow-dv-modal` | `0 10px 40px rgba(0,0,0,0.2)` | Modal elevation |
| `DV/Shadow/Glow-Primary` | `shadow-dv-glow-primary` | `0 0 40px hsl(280 85% 50% / 0.3)` | Primary glow |
| `DV/Shadow/Glow-Pink` | `shadow-dv-glow-pink` | `0 0 40px rgba(253,2,144,0.3)` | Pink glow |
| `DV/Shadow/Glow-Golden` | `shadow-dv-glow-golden` | `0 0 40px rgba(255,167,38,0.3)` | Golden glow |

### Border Radius

| Figma Variable | Tailwind Class | Value | Usage |
|----------------|----------------|-------|-------|
| `DV/Radius/SM` | `rounded-dv-sm` | `0.375rem` (6px) | Small radius |
| `DV/Radius/MD` | `rounded-dv-md` | `0.5rem` (8px) | Medium radius |
| `DV/Radius/LG` | `rounded-dv-lg` | `0.75rem` (12px) | Base radius |
| `DV/Radius/XL` | `rounded-dv-xl` | `1rem` (16px) | Large radius |
| `DV/Radius/2XL` | `rounded-dv-2xl` | `1.5rem` (24px) | XL radius |
| `DV/Radius/Full` | `rounded-dv-full` | `9999px` | Pill shape |

### Typography

| Figma Variable | Tailwind Class | Value | Usage |
|----------------|----------------|-------|-------|
| `DV/Font/Sans` | `font-dv-sans` | SF Pro stack | Sans-serif |
| `DV/Font/Display` | `font-dv-display` | SF Pro Display | Display text |
| `DV/Font/Londrina` | `font-dv-londrina` | Londrina Solid | Special headings |
| `DV/Size/XS` | `text-dv-xs` | `0.75rem` (12px) | Extra small |
| `DV/Size/SM` | `text-dv-sm` | `0.875rem` (14px) | Small |
| `DV/Size/Base` | `text-dv-base` | `1rem` (16px) | Base |
| `DV/Size/LG` | `text-dv-lg` | `1.125rem` (18px) | Large |
| `DV/Size/XL` | `text-dv-xl` | `1.25rem` (20px) | XL |
| `DV/Size/2XL` | `text-dv-2xl` | `1.5rem` (24px) | 2XL |
| `DV/Size/3XL` | `text-dv-3xl` | `1.875rem` (30px) | 3XL |
| `DV/Weight/Regular` | `font-dv-regular` | `400` | Regular |
| `DV/Weight/Semibold` | `font-dv-semibold` | `600` | Semibold |
| `DV/Weight/Bold` | `font-dv-bold` | `700` | Bold |

### Universe-Specific

| Figma Variable | Tailwind Class | Value | Usage |
|----------------|----------------|-------|-------|
| `DV/Universe/Talent-Accent` | `bg-dv-talent` | `#FD0290` | Talent pink |
| `DV/Universe/DJ-Accent` | `bg-dv-dj` | `#FFA726` | DJ golden |
| `DV/Universe/Producer-Accent` | `bg-dv-producer` | `#FF6B35` | Producer orange |
| `DV/Universe/Fan-Accent` | `bg-dv-fan` | `hsl(45, 100%, 55%)` | Fan secondary |

## Tailwind Config Implementation

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        dv: {
          // Brand
          primary: "hsl(280, 85%, 50%)",
          "primary-hover": "hsl(280, 85%, 55%)",
          "primary-pressed": "hsl(280, 85%, 45%)",
          pink: "#FD0290",
          golden: "#FFA726",
          orange: "#FF6B35",
          
          // Surface
          surface: {
            DEFAULT: "hsl(var(--dv-surface))",
            card: "hsl(var(--dv-surface-card))",
            elevated: "hsl(var(--dv-surface-elevated))",
            muted: "hsl(var(--dv-surface-muted))",
          },
          
          // Text
          foreground: "hsl(var(--dv-foreground))",
          "foreground-secondary": "hsl(var(--dv-foreground-secondary))",
          muted: "hsl(var(--dv-muted))",
          "on-primary": "hsl(0, 0%, 100%)",
          
          // Border
          border: {
            DEFAULT: "hsl(var(--dv-border))",
            subtle: "hsl(var(--dv-border-subtle))",
            strong: "hsl(var(--dv-border-strong))",
          },
          
          // Universe
          talent: "#FD0290",
          dj: "#FFA726",
          producer: "#FF6B35",
          fan: "hsl(45, 100%, 55%)",
        },
      },
      spacing: {
        "dv-0": "0",
        "dv-1": "0.25rem",
        "dv-2": "0.5rem",
        "dv-3": "0.75rem",
        "dv-4": "1rem",
        "dv-6": "1.5rem",
        "dv-8": "2rem",
        "dv-12": "3rem",
        "dv-16": "4rem",
      },
      boxShadow: {
        "dv-card": "0 1px 3px rgba(0, 0, 0, 0.1)",
        "dv-card-hover": "0 4px 12px rgba(0, 0, 0, 0.15)",
        "dv-button": "0 1px 2px rgba(0, 0, 0, 0.05)",
        "dv-button-hover": "0 2px 8px rgba(0, 0, 0, 0.1)",
        "dv-modal": "0 10px 40px rgba(0, 0, 0, 0.2)",
        "dv-glow-primary": "0 0 40px hsl(280 85% 50% / 0.3)",
        "dv-glow-pink": "0 0 40px rgba(253, 2, 144, 0.3)",
        "dv-glow-golden": "0 0 40px rgba(255, 167, 38, 0.3)",
      },
      borderRadius: {
        "dv-sm": "0.375rem",
        "dv-md": "0.5rem",
        "dv-lg": "0.75rem",
        "dv-xl": "1rem",
        "dv-2xl": "1.5rem",
        "dv-full": "9999px",
      },
      fontFamily: {
        "dv-sans": ["system-ui", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "sans-serif"],
        "dv-display": ["system-ui", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "sans-serif"],
        "dv-londrina": ["Londrina Solid", "cursive"],
      },
      fontSize: {
        "dv-xs": "0.75rem",
        "dv-sm": "0.875rem",
        "dv-base": "1rem",
        "dv-lg": "1.125rem",
        "dv-xl": "1.25rem",
        "dv-2xl": "1.5rem",
        "dv-3xl": "1.875rem",
      },
      fontWeight: {
        "dv-regular": "400",
        "dv-semibold": "600",
        "dv-bold": "700",
      },
    },
  },
};
```

## CSS Variables (for Light/Dark Mode)

```css
/* src/index.css or generated from tokens */

:root {
  /* Surface colors adapt to light/dark */
  --dv-surface: 0 0% 98%;
  --dv-surface-card: 0 0% 100%;
  --dv-surface-elevated: 0 0% 100%;
  --dv-surface-muted: 280 10% 95%;
  
  /* Text colors adapt */
  --dv-foreground: 280 20% 10%;
  --dv-foreground-secondary: 280 15% 35%;
  --dv-muted: 280 10% 50%;
  
  /* Borders adapt */
  --dv-border: 280 15% 88%;
  --dv-border-subtle: 280 10% 92%;
  --dv-border-strong: 280 20% 80%;
}

.dark {
  --dv-surface: 280 30% 8%;
  --dv-surface-card: 280 25% 12%;
  --dv-surface-elevated: 280 25% 15%;
  --dv-surface-muted: 280 20% 18%;
  
  --dv-foreground: 280 10% 95%;
  --dv-foreground-secondary: 280 10% 75%;
  --dv-muted: 280 10% 60%;
  
  --dv-border: 280 20% 22%;
  --dv-border-subtle: 280 15% 18%;
  --dv-border-strong: 280 25% 30%;
}
```

## Usage Examples

### Example 1: Button Component

**Figma:**
```
Component: cmp / button / primary
- Background: DV/Brand/Primary
- Text: DV/Text/On-Primary
- Padding: DV/Space/4 (horizontal), DV/Space/2 (vertical)
- Radius: DV/Radius/LG
- Shadow: DV/Shadow/Button
- Hover: DV/Shadow/Button-Hover
```

**React:**
```tsx
<button className="bg-dv-primary text-dv-on-primary px-dv-4 py-dv-2 rounded-dv-lg shadow-dv-button hover:shadow-dv-button-hover">
  Click Me
</button>
```

### Example 2: Card Component

**Figma:**
```
Component: cmp / card / talent-browse
- Background: DV/Surface/Card
- Border: 1px solid DV/Border/Default
- Radius: DV/Radius/XL
- Padding: DV/Space/4
- Shadow: DV/Shadow/Card
- Hover: DV/Shadow/Card-Hover, Border: DV/Border/Strong
```

**React:**
```tsx
<div className="bg-dv-surface-card border border-dv-border rounded-dv-xl p-dv-4 shadow-dv-card hover:shadow-dv-card-hover hover:border-dv-border-strong">
  {/* Card content */}
</div>
```

### Example 3: Typography

**Figma:**
```
Text: Heading 2
- Font: DV/Font/Sans
- Size: DV/Size/2XL
- Weight: DV/Weight/Semibold
- Color: DV/Text/Primary
```

**React:**
```tsx
<h2 className="font-dv-sans text-dv-2xl font-dv-semibold text-dv-foreground">
  Heading Text
</h2>
```

### Example 4: Universe-Specific Accent

**Figma:**
```
Component: cmp / card / talent-browse
- Accent: DV/Universe/Talent-Accent
- Glow: DV/Shadow/Glow-Pink
```

**React:**
```tsx
<div className="border-l-4 border-dv-talent shadow-dv-glow-pink">
  {/* Talent card content */}
</div>
```

## Quick Reference Table

| Category | Figma Prefix | Tailwind Prefix | Example |
|----------|--------------|-----------------|---------|
| **Brand** | `DV/Brand/` | `bg-dv-` | `bg-dv-primary` |
| **Surface** | `DV/Surface/` | `bg-dv-surface-` | `bg-dv-surface-card` |
| **Text** | `DV/Text/` | `text-dv-` | `text-dv-foreground` |
| **Border** | `DV/Border/` | `border-dv-` | `border-dv-border` |
| **Space** | `DV/Space/` | `p-dv-` / `m-dv-` / `gap-dv-` | `p-dv-4` |
| **Shadow** | `DV/Shadow/` | `shadow-dv-` | `shadow-dv-card` |
| **Radius** | `DV/Radius/` | `rounded-dv-` | `rounded-dv-lg` |
| **Font** | `DV/Font/` | `font-dv-` | `font-dv-sans` |
| **Size** | `DV/Size/` | `text-dv-` | `text-dv-lg` |
| **Universe** | `DV/Universe/` | `bg-dv-` | `bg-dv-talent` |

## Token Documentation in Figma

Add this description to your Figma variables:

```
Variable: DV/Brand/Primary
Value: hsl(280, 85%, 50%)
Tailwind: bg-dv-primary, text-dv-primary, border-dv-primary
Usage: Primary brand actions, CTAs, accents

Variable: DV/Surface/Card
Value (Light): hsl(0, 0%, 100%)
Value (Dark): hsl(280, 25%, 12%)
Tailwind: bg-dv-surface-card
Usage: Card backgrounds, elevated surfaces

Variable: DV/Space/4
Value: 1rem (16px)
Tailwind: p-dv-4, m-dv-4, gap-dv-4
Usage: Base spacing unit, default padding
```

## Figma → Tailwind Cheat Sheet

Print this and keep it handy:

```
COLOR
DV/Brand/Primary → bg-dv-primary
DV/Surface/Card → bg-dv-surface-card
DV/Text/Primary → text-dv-foreground

SPACING
DV/Space/2 → p-dv-2 (8px)
DV/Space/4 → p-dv-4 (16px)
DV/Space/6 → p-dv-6 (24px)

SHADOW
DV/Shadow/Card → shadow-dv-card
DV/Shadow/Card-Hover → shadow-dv-card-hover
DV/Shadow/Glow-Primary → shadow-dv-glow-primary

RADIUS
DV/Radius/LG → rounded-dv-lg (12px)
DV/Radius/XL → rounded-dv-xl (16px)
DV/Radius/Full → rounded-dv-full (pill)

TYPOGRAPHY
DV/Font/Sans → font-dv-sans
DV/Size/Base → text-dv-base (16px)
DV/Weight/Semibold → font-dv-semibold (600)
```

---

**Remember**: This is your Rosetta Stone. Update this document whenever you add new tokens!

