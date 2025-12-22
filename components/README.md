# Design System Component Examples

This folder is reserved for design system component examples and documentation.

## Purpose

Static component examples and documentation snippets:
- **Example code** - Standalone component examples
- **Usage patterns** - Common usage scenarios
- **Variations** - Different component variations
- **Compositions** - How components work together

## Current Status

⚠️ **This folder is currently empty.**

Live component showcases exist in:
- `src/components/design/` - Design system components (DesignPageLayout, modals, cards)
- `src/pages/design/` - Interactive component showcases

## Recommended Structure

```
design-system/components/
├── buttons/
│   ├── basic-button.tsx          # Basic button examples
│   ├── gradient-button.tsx       # Gradient button examples
│   └── README.md                 # Button documentation
├── cards/
│   ├── universe-card.tsx         # Universe card examples
│   ├── performer-card.tsx        # Performer card examples
│   └── README.md                 # Card documentation
├── forms/
│   ├── input-examples.tsx        # Input field examples
│   ├── form-layouts.tsx          # Form layout examples
│   └── README.md                 # Form documentation
└── patterns/
    ├── navigation-patterns.tsx   # Navigation examples
    ├── data-display.tsx          # Data display examples
    └── README.md                 # Pattern documentation
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

**Last Updated**: December 2025  
**Status**: Empty - Ready for population  
**Alternative**: Live component showcases at `/design/*` routes







