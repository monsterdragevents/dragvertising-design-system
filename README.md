# 🎨 Dragvertising Design System

> **Comprehensive design system for the Dragvertising ecosystem**

This repository contains the complete design system including design tokens, Figma integration, documentation, and component guidelines for the Dragvertising platform.

---

## 🚀 Quick Start

**→ [Complete Setup Summary](./COMPLETE_SETUP_SUMMARY.md)** - Full overview of what was created  
**→ [Visual Workflow Guide](./VISUAL_WORKFLOW.md)** - See the complete system at a glance  
**→ [Figma Setup Guide](./figma/SETUP_GUIDE.md)** - Import variables & create components  
**→ [Practical Guide](./PRACTICAL_GUIDE.md)** - 1:1 naming & Tailwind workflow  
**→ [Getting Started](./GETTING_STARTED.md)** - Step-by-step setup

---

## Overview

The Dragvertising Universe Design System is a comprehensive, scalable design framework that ensures consistency across all products in the Dragvertising ecosystem. This design system bridges Figma designs with React/Tailwind implementation using design tokens and component libraries.

## Tech Stack

- **Frontend**: React 18+ with Vite
- **Styling**: Tailwind CSS v3.4+ (preparing for v4.0 migration)
- **Component Library**: shadcn/ui (customized)
- **Design Tool**: Figma Pro with Design System file
- **Integration**: Cursor IDE with MCP (Model Context Protocol) + design.to.html Pro
- **Theme System**: CSS Custom Properties (CSS Variables)

## Design Philosophy

### Core Principles

1. **Universe-First Design**: Every component adapts to the active universe context (Talent, DJ, Producer, etc.)
2. **Accessible by Default**: WCAG 2.1 AA compliance minimum
3. **Performance-Optimized**: Lazy loading, code splitting, optimized assets
4. **Mobile-First**: Progressive enhancement from mobile to desktop
5. **Dark Mode Native**: Built with dark mode as a first-class citizen
6. **Scalable Architecture**: Design tokens drive all visual properties

## Directory Structure

```
design-system/
├── README.md                    # This file
├── design-tokens/               # Design token definitions
│   ├── colors.json             # Color palette tokens
│   ├── typography.json         # Font tokens
│   ├── spacing.json            # Spacing scale
│   ├── shadows.json            # Shadow definitions
│   ├── borders.json            # Border radius tokens
│   └── animations.json         # Animation tokens
├── figma/                       # Figma integration
│   ├── plugin-config.json      # Figma plugin settings
│   ├── component-mapping.json  # Figma → React mappings
│   ├── SETUP_GUIDE.md         # Figma setup instructions
│   └── sync-strategy.md        # Figma sync workflow
├── documentation/               # Design guidelines
│   ├── color-usage.md
│   ├── component-naming.md
│   └── tailwind-token-mapping.md
├── components/                  # Component documentation
│   └── README.md
├── tokens/                      # Generated token files
│   └── README.md
└── assets/                       # Design assets
    └── README.md
```

## Design Tokens

### Token Categories

#### 1. Colors
- **Semantic Colors**: Primary, Secondary, Accent, Destructive
- **Neutral Colors**: Background, Foreground, Muted, Border
- **Brand Colors**: Pink (#FD0290), Golden, Warm Orange
- **Universe Colors**: Role-specific color palettes
- **Functional Colors**: Success, Warning, Error, Info

#### 2. Typography
- **Font Families**: 
  - Sans: SF Pro (system-ui fallback stack)
  - Display: SF Pro Display
  - Special: Londrina Solid (drag culture aesthetic)
- **Font Sizes**: 12px - 72px (rem-based scale)
- **Font Weights**: 400 (Regular), 600 (Semibold), 700 (Bold)
- **Line Heights**: 1.25 - 1.75 (contextual)
- **Letter Spacing**: Tight (-0.02em) to Normal (0)

#### 3. Spacing
- **Scale**: 0, 0.25rem, 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem, 8rem
- **Compact Mode**: 0.75x multiplier for dense layouts
- **Responsive**: Adjusted per breakpoint

#### 4. Shadows
- **Elevation System**: 
  - sm: Subtle lift (cards)
  - md: Moderate elevation (dropdowns)
  - lg: High elevation (modals)
  - xl: Dramatic elevation (hero sections)
- **Glow Effects**: Primary glow, Secondary glow, Golden glow
- **Color-Aware**: Adapts to light/dark mode

#### 5. Border Radius
- **Scale**: 0.375rem, 0.5rem, 0.75rem, 1rem, 1.5rem, 9999px (full)
- **Component-Specific**: Buttons, Cards, Inputs, Modals

#### 6. Animations
- **Duration**: 150ms - 3000ms
- **Easing**: ease-out, ease-in-out, spring
- **Keyframes**: fade-in, slide-up, glow-pulse, gradient, shimmer, float

## Figma Integration

### Setup

1. **Figma Pro Account**: Required for Design System features
2. **Main Design System File**: Single source of truth
3. **Component Library**: Published components for team use
4. **Design Tokens Plugin**: Sync tokens to code

### Workflow

1. Design in Figma
2. Export Tokens
3. Generate CSS/JS
4. Update Tailwind Config
5. Build Components
6. Test in Storybook
7. Deploy

See [Figma Setup Guide](./figma/SETUP_GUIDE.md) for detailed instructions.

## Documentation

All design system documentation is included in this repository:

| Document | Description |
|----------|-------------|
| `COMPLETE_SETUP_SUMMARY.md` | Full overview of what was created |
| `VISUAL_WORKFLOW.md` | Complete system at a glance |
| `PRACTICAL_GUIDE.md` | 1:1 naming & Tailwind workflow |
| `FIGMA_INTEGRATION.md` | Figma integration details |
| `FIGMA_TAILWIND_SYNC.md` | Sync strategy between Figma and Tailwind |
| `HOW_TO_USE_DV_TOKENS.md` | Token usage guide |
| `ARCHITECTURE.md` | System architecture |
| `AUDIT_REPORT.md` | Design system audit |

## Contributing

### Design Token Changes

1. Update token JSON files in `/design-tokens/`
2. Run token generation script (if applicable)
3. Update Figma design system file
4. Test changes
5. Submit PR with before/after screenshots

### Component Guidelines

1. **Atomic Design**: Follow primitives → compositions → patterns
2. **Universe-Aware**: Use universe context for theming
3. **Accessible**: Include ARIA labels, keyboard navigation
4. **Responsive**: Mobile-first with progressive enhancement
5. **Typed**: Full TypeScript types for props
6. **Tested**: Unit tests + Storybook stories

## Resources

- [Figma Design System File](#) (TODO: Add link)
- [Storybook Components](#) (TODO: Add link)
- [Token Generator](#) (TODO: Add link)
- [Accessibility Checklist](./documentation/color-usage.md)

## Support

- **Design Questions**: @design-team
- **Implementation Help**: @frontend-team
- **Accessibility Issues**: @a11y-team

---

**Version**: 1.0.0  
**Last Updated**: December 2025  
**Maintained By**: Dragvertising Design Team
