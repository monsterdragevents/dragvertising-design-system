# Design System Component Examples

This folder is reserved for design system component examples and documentation.

## Purpose

Static component examples and documentation snippets:
- **Example code** - Standalone component examples
- **Usage patterns** - Common usage scenarios
- **Variations** - Different component variations
- **Compositions** - How components work together

## Current Status

✅ **Component examples are available for:**
- Forms: Combobox examples
- Layouts: Grid List examples
- Marketing: Team Section, Newsletter Section, Bento Grid, Feature Section, Flyout Menu, Banner, CTA Section examples
- Ecommerce: Product Overview, Product Quickview, Incentives, Reviews examples

Live component showcases exist in:
- `src/components/design/` - Design system components (DesignPageLayout, modals, cards)
- `src/pages/design/` - Interactive component showcases
- `/design/tailwind-ui-blocks` - **NEW**: Comprehensive Tailwind UI Blocks showcase

## Current Structure

```
design-system/components/
├── buttons/
│   └── basic-button-examples.tsx
├── cards/
│   └── talent-card-examples.tsx
├── forms/
│   └── combobox-examples.tsx     # NEW: Combobox component examples
├── layouts/
│   └── grid-list-examples.tsx    # NEW: Grid List component examples
├── marketing/
│   ├── team-section-examples.tsx      # NEW: Team Section examples
│   ├── newsletter-section-examples.tsx # NEW: Newsletter Section examples
│   ├── bento-grid-examples.tsx        # NEW: Bento Grid examples
│   ├── feature-section-examples.tsx   # NEW: Feature Section examples
│   ├── flyout-menu-examples.tsx       # NEW: Flyout Menu examples
│   ├── banner-examples.tsx            # NEW: Banner examples
│   └── cta-section-examples.tsx       # NEW: CTA Section examples
└── ecommerce/
    ├── product-overview-examples.tsx   # NEW: Product Overview examples
    ├── product-quickview-examples.tsx  # NEW: Product Quickview examples
    ├── incentives-examples.tsx         # NEW: Incentives examples
    └── reviews-examples.tsx            # NEW: Reviews examples
```

## What to Include

### Component Examples
Self-contained example components showing:
- **Basic usage** - Simplest form of the component
- **Variants** - All available variants
- **States** - Loading, error, success states
- **Compositions** - How components combine

### Documentation
For each component/pattern:
- **Description** - What it does and when to use it
- **Props** - Available properties and types
- **Accessibility** - ARIA labels, keyboard support
- **Best practices** - Do's and don'ts

### Code Snippets
Copyable code examples:
```tsx
// Example: Basic gradient button
<Button variant="gradient" size="lg">
  <Crown className="mr-2" />
  Get Started
  <ArrowRight className="ml-2" />
</Button>
```

## Existing Components

**Live Components** (in use):
- `src/components/design/DesignPageLayout.tsx` - Design page wrapper
- `src/components/design/DesignEarlyAccessModal.tsx` - Early access modal
- `src/components/design/DesignBookDemoModal.tsx` - Book demo modal
- `src/components/design/DesignUniverseCard.tsx` - Universe card

**Interactive Showcases** (live demos):
- `/design/ui-components` - UI component showcase
- `/design/forms-inputs` - Form component showcase
- `/design/data-display` - Data display showcase
- `/design/lineup-cards` - Lineup card showcase
- `/design/browse-shop-blog-cards` - Card showcase
- `/design/tailwind-ui-blocks` - **NEW**: Tailwind CSS UI Blocks showcase (Comboboxes, Grid Lists, Team Sections, Product Overviews, Reviews, Incentives, Newsletter Sections, Bento Grids, Feature Sections, Flyout Menus, Banners, CTA Sections)

## Usage

### Option 1: Reference Examples
Copy examples from this folder into your code:
```tsx
// Copy example from design-system/components/buttons/gradient-button.tsx
```

### Option 2: Import Components
If components are exported:
```tsx
import { ExampleButton } from '@/design-system/components/buttons/basic-button';
```

### Option 3: View Live Demos
Visit live showcases at `/design/*` routes for interactive examples.

## Difference from `src/components/`

| `design-system/components/` | `src/components/` |
|----------------------------|-------------------|
| **Static examples** | **Production components** |
| Documentation/reference | Actual implementation |
| May have multiple variants | Single implementation |
| Self-contained demos | Integrated with app |

## Notes

- These are **reference examples**, not production components
- Production components are in `src/components/`
- Keep examples **simple and focused**
- Document **edge cases and gotchas**
- Link to **live showcases** when available

---

## New Tailwind UI Blocks Components

All new components follow Tailwind CSS UI Blocks patterns and are available in:
- **Primitives**: `src/ui/primitives/` in DragvertisingApp
- **Examples**: `components/` folders in this design-system repo
- **Showcase**: `/design/tailwind-ui-blocks` route

### Forms
- **Combobox** - Autocomplete input with dropdown (`forms/combobox-examples.tsx`)

### Layouts
- **Grid List** - Responsive grid layout component (`layouts/grid-list-examples.tsx`)

### Marketing
- **Team Section** - Team member display (`marketing/team-section-examples.tsx`)
- **Newsletter Section** - Email signup forms (`marketing/newsletter-section-examples.tsx`)
- **Bento Grid** - Visually engaging feature grid (`marketing/bento-grid-examples.tsx`)
- **Feature Section** - Feature highlights (`marketing/feature-section-examples.tsx`)
- **Flyout Menu** - Navigation menus with flyouts (`marketing/flyout-menu-examples.tsx`)
- **Banner** - Announcement banners (`marketing/banner-examples.tsx`)
- **CTA Section** - Call-to-action sections (`marketing/cta-section-examples.tsx`)

### Ecommerce
- **Product Overview** - Product page component (`ecommerce/product-overview-examples.tsx`)
- **Product Quickview** - Quick product preview (`ecommerce/product-quickview-examples.tsx`)
- **Incentives** - Promotional offers (`ecommerce/incentives-examples.tsx`)
- **Reviews** - Product reviews and ratings (`ecommerce/reviews-examples.tsx`)

---

**Last Updated**: January 2025  
**Status**: Active - Examples available for all new Tailwind UI Blocks components  
**Alternative**: Live component showcases at `/design/*` routes







