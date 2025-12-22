# Design System Documentation

This folder is reserved for design system documentation.

## Purpose

Comprehensive documentation for the Dragvertising design system, including:
- **Design principles** - Core design philosophy and guidelines
- **Component documentation** - How to use each component
- **Pattern library** - Common UI patterns and best practices
- **Brand guidelines** - Brand voice, tone, and visual identity

## Current Status

⚠️ **This folder is currently empty.**

Documentation currently exists in:
- **Design tokens**: `docs/design-system/DESIGN_TOKENS.json`
- **Component pages**: `src/pages/design/` (live showcases)

## Recommended Structure

```
design-system/docs/
├── 01-getting-started.md       # Introduction and setup
├── 02-design-principles.md     # Core design philosophy
├── 03-color-system.md          # Color palette and usage
├── 04-typography.md            # Font system and hierarchy
├── 05-spacing-layout.md        # Spacing scale and layout grid
├── 06-components/              # Component documentation
│   ├── buttons.md
│   ├── cards.md
│   ├── forms.md
│   └── ...
├── 07-patterns/                # Common UI patterns
│   ├── navigation.md
│   ├── data-display.md
│   └── ...
├── 08-brand-guidelines.md      # Brand voice and identity
└── 09-accessibility.md         # Accessibility standards
```

## What to Document

### Design Principles
- Dragvertising color inspiration
- Universe-based design philosophy
- Drag entertainment visual language
- Accessibility-first approach

### Component Usage
- When to use each component
- Props and variants
- Accessibility considerations
- Code examples

### Patterns
- Navigation patterns
- Form patterns
- Data display patterns
- Loading and error states

### Brand Guidelines
- Brand voice and tone
- Logo usage
- Color application
- Typography hierarchy

## Existing Documentation

**Live Documentation** (interactive):
- `/design` - Design system homepage
- `/design/ui-components` - UI components showcase
- `/design/forms-inputs` - Forms and inputs
- `/design/data-display` - Data display components
- `/design/lineup-cards` - Lineup cards
- `/design/browse-shop-blog-cards` - Card showcases

**Design Tokens** (machine-readable):
- `docs/design-system/DESIGN_TOKENS.json` - Complete token system

## Usage

Once populated, import documentation:
```tsx
import designPrinciples from '@/design-system/docs/02-design-principles.md';
```

Or link to it:
```tsx
<Link to="/design/docs/design-principles">Design Principles</Link>
```

## Notes

- Keep documentation **up-to-date** with code changes
- Use **markdown** for easy reading and version control
- Include **visual examples** where possible
- Link to **live examples** in `/design/*` routes

---

**Last Updated**: December 2025  
**Status**: Empty - Ready for population  
**Alternative**: Documentation exists in live showcases at `/design/*`







