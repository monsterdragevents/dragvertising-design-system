# Figma Design System Sync Strategy

## Overview

This document outlines the workflow for keeping Figma designs and React/Tailwind code in sync using the Dragvertising Design System.

## Architecture

```
┌─────────────────┐
│  Figma Design   │
│  System File    │
└────────┬────────┘
         │
         │ 1. Export Design Tokens
         ▼
┌─────────────────┐
│ Design Tokens   │
│  (JSON files)   │
└────────┬────────┘
         │
         │ 2. Generate Code
         ▼
┌─────────────────┐      ┌──────────────┐
│  CSS Variables  │◄─────┤   Tailwind   │
│                 │      │    Config    │
└────────┬────────┘      └──────────────┘
         │
         │ 3. Build Components
         ▼
┌─────────────────┐
│ React/Tailwind  │
│   Components    │
└─────────────────┘
```

## Figma Setup

### 1. Design System File Structure

Your Figma file should follow this structure:

```
📁 Dragvertising Design System
├── 🎨 Foundations
│   ├── Colors
│   │   ├── Primitives (Brand colors)
│   │   ├── Semantic (Light mode)
│   │   └── Semantic (Dark mode)
│   ├── Typography
│   │   ├── Font Scales
│   │   ├── Font Weights
│   │   └── Line Heights
│   ├── Spacing
│   │   └── Spacing Scale
│   ├── Shadows
│   │   ├── Elevation
│   │   └── Glow Effects
│   └── Border Radius
│       └── Radius Scale
├── 🧩 Components
│   ├── Primitives (Buttons, Inputs, etc.)
│   ├── Compositions (Forms, Navigation, etc.)
│   └── Patterns (Dashboards, Profiles, etc.)
├── 🌌 Universe Variants
│   ├── Talent Theme
│   ├── DJ Theme
│   ├── Producer Theme
│   └── Fan Theme
└── 📱 Templates
    ├── Mobile Screens
    ├── Tablet Screens
    └── Desktop Screens
```

### 2. Figma Variables Setup

#### Color Variables

Create variable collections for colors:

**Collection: "Colors - Light"**
- Mode: Light
- Variables:
  - `background` → `hsl(0, 0%, 98%)`
  - `foreground` → `hsl(280, 20%, 10%)`
  - `primary` → `hsl(280, 85%, 50%)`
  - `primary-foreground` → `hsl(0, 0%, 100%)`
  - `secondary` → `hsl(45, 100%, 55%)`
  - `muted` → `hsl(280, 10%, 95%)`
  - ... (all semantic colors)

**Collection: "Colors - Dark"**
- Mode: Dark
- Variables: (same names, dark values)

**Collection: "Brand Colors"**
- Mode: Default
- Variables:
  - `brand-pink` → `#FD0290`
  - `brand-golden` → `#FFA726`
  - `brand-warm-orange` → `#FF6B35`

#### Typography Variables

**Collection: "Typography"**
- `font-size-xs` → 12
- `font-size-sm` → 14
- `font-size-base` → 16
- `font-size-lg` → 18
- ... (all font sizes)

#### Spacing Variables

**Collection: "Spacing"**
- `spacing-0` → 0
- `spacing-1` → 4
- `spacing-2` → 8
- `spacing-3` → 12
- ... (all spacing values)

### 3. Component Organization

#### Naming Convention

```
Category/Component/Variant
```

Examples:
- `Button/Primary/Default`
- `Button/Primary/Hover`
- `Button/Primary/Disabled`
- `Input/Text/Default`
- `Input/Text/Focus`
- `Input/Text/Error`

#### Component Properties

Use Figma component properties for variants:
- **Variant**: Primary, Secondary, Outline, Ghost, etc.
- **Size**: Small, Medium, Large
- **State**: Default, Hover, Focus, Disabled
- **Universe**: Talent, DJ, Producer, Fan (for universe-specific components)

## Workflow

### Step 1: Design in Figma

1. **Create components** in Figma using design system foundations
2. **Apply variables** for colors, spacing, typography
3. **Create variants** for different states and universes
4. **Document** component usage in Figma descriptions

### Step 2: Export Design Tokens

#### Option A: Manual Export (Figma Tokens Plugin)

1. Install [Figma Tokens plugin](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens)
2. Configure token sync:
   - File: `/design/design-tokens/`
   - Format: JSON (Design Tokens Community Group format)
3. Click "Export Tokens"
4. Commit token changes to Git

#### Option B: Automated Export (Figma API)

```bash
# Run token extraction script
npm run tokens:extract

# This will:
# 1. Connect to Figma API
# 2. Extract variables from design system file
# 3. Convert to Design Tokens format
# 4. Save to /design/design-tokens/
```

### Step 3: Generate Code from Tokens

```bash
# Generate CSS variables, Tailwind config, and TypeScript types
npm run tokens:generate

# This will create:
# - /design/tokens/css/*.css (CSS custom properties)
# - /design/tokens/tailwind/config-extension.js (Tailwind theme)
# - /design/tokens/js/tokens.ts (TypeScript types)
```

Generated files example:

```css
/* /design/tokens/css/colors-light.css */
:root {
  --background: 0 0% 98%;
  --foreground: 280 20% 10%;
  --primary: 280 85% 50%;
  --primary-foreground: 0 0% 100%;
  /* ... */
}
```

```javascript
// /design/tokens/tailwind/config-extension.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // ...
      },
    },
  },
};
```

### Step 4: Update Tailwind Config

```bash
# Merge generated config into tailwind.config.ts
npm run tokens:merge-tailwind

# Or manually import:
```

```typescript
// tailwind.config.ts
import tokenConfig from './design/tokens/tailwind/config-extension.js';

export default {
  // ... existing config
  theme: {
    extend: {
      ...tokenConfig.theme.extend,
      // ... other extensions
    },
  },
};
```

### Step 5: Convert Figma Components to React

#### Option A: design.to.html Pro (MCP)

Using Cursor with MCP and design.to.html Pro:

1. **Select component** in Figma
2. **Copy Figma link** (e.g., `https://figma.com/design/FILE_KEY/...?node-id=123:456`)
3. **In Cursor**, use MCP command:
   ```
   @figma Generate component from [Figma URL]
   ```
4. **Review generated code** - MCP will:
   - Detect existing components (Button, Card, etc.)
   - Generate React/Tailwind code
   - Apply design system tokens
   - Match existing component patterns

#### Option B: Manual Component Creation

```tsx
// src/ui/primitives/button.tsx
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md',
  children,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles from design tokens
        'rounded-lg font-semibold transition-colors',
        // Variant styles
        variant === 'primary' && 'bg-primary text-primary-foreground hover:bg-primary/90',
        variant === 'secondary' && 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        // Size styles
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'md' && 'px-4 py-2 text-base',
        size === 'lg' && 'px-6 py-3 text-lg'
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Step 6: Test Components in Storybook

```bash
# Start Storybook
npm run storybook

# Navigate to component story
# Verify:
# - Design matches Figma
# - Tokens applied correctly
# - Responsive behavior
# - Dark mode support
# - Accessibility
```

### Step 7: Deploy & Document

```bash
# Build design system docs
npm run docs:build

# Deploy Storybook
npm run storybook:deploy

# Commit changes
git add design/ src/ui/
git commit -m "Update design system from Figma"
git push
```

## Sync Frequency

### Continuous Sync (Recommended)

- **Trigger**: On Figma file change (webhook)
- **Frequency**: Real-time
- **Actions**: Extract tokens → Generate code → Run tests → Create PR

### Scheduled Sync

- **Trigger**: Cron job (e.g., daily at 2 AM)
- **Frequency**: Daily/Weekly
- **Actions**: Same as continuous

### Manual Sync

- **Trigger**: Developer action
- **Frequency**: As needed
- **Actions**: Run `npm run tokens:sync`

## Automation Scripts

### Package.json Scripts

```json
{
  "scripts": {
    "tokens:extract": "node scripts/figma-extract-tokens.js",
    "tokens:generate": "node scripts/generate-tokens.js",
    "tokens:merge-tailwind": "node scripts/merge-tailwind-config.js",
    "tokens:sync": "npm run tokens:extract && npm run tokens:generate && npm run tokens:merge-tailwind",
    "design:sync": "npm run tokens:sync && npm run format",
    "design:validate": "node scripts/validate-design-system.js"
  }
}
```

### CI/CD Integration

```yaml
# .github/workflows/design-sync.yml
name: Design System Sync

on:
  workflow_dispatch:
  schedule:
    - cron: '0 2 * * *' # Daily at 2 AM

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run design:sync
      - run: npm run design:validate
      - name: Create PR
        if: success()
        uses: peter-evans/create-pull-request@v5
        with:
          title: 'Design System Sync from Figma'
          body: 'Automated design token update'
          branch: 'design-system-sync'
```

## Validation & Quality Checks

### Token Validation

```bash
# Validate all tokens are valid and complete
npm run tokens:validate

# Checks:
# - All required tokens exist
# - Color values are valid HSL/hex
# - Spacing values are valid rem/px
# - Typography values are valid
# - No breaking changes
```

### Component Validation

```bash
# Validate components match Figma
npm run design:validate

# Checks:
# - Component exists in Figma
# - Props match Figma properties
# - Styles match design tokens
# - Accessibility standards met
```

### Visual Regression Testing

```bash
# Take screenshots and compare with Figma
npm run test:visual

# Uses:
# - Chromatic for visual testing
# - Percy for screenshot comparison
# - Compares against Figma exports
```

## Troubleshooting

### Token Mismatch

**Problem**: Generated tokens don't match Figma variables

**Solution**:
1. Check Figma variable naming convention
2. Verify variable mode (Light/Dark)
3. Re-run token extraction
4. Check token transformation rules

### Component Styles Don't Match

**Problem**: React component doesn't match Figma design

**Solution**:
1. Check if tokens are applied correctly
2. Verify component mapping in `component-mapping.json`
3. Check for missing CSS properties
4. Use browser DevTools to compare
5. Re-export from Figma with design.to.html

### Build Errors After Sync

**Problem**: Build fails after token sync

**Solution**:
1. Check for breaking token changes
2. Run `npm run tokens:validate`
3. Update component references to new tokens
4. Check Tailwind config for errors

## Best Practices

### 1. Single Source of Truth
- Figma is the source of truth for design
- Code reflects Figma exactly
- No manual overrides in code

### 2. Semantic Naming
- Use semantic names (primary, secondary) not specific values (purple, yellow)
- Names should describe purpose, not appearance

### 3. Version Control
- Commit token changes separately from component changes
- Include Figma file version/date in commit message
- Tag design system releases

### 4. Documentation
- Document all tokens in Figma
- Keep component documentation in sync
- Update changelog for breaking changes

### 5. Testing
- Test components in all universe contexts
- Test light and dark modes
- Test responsive behavior
- Test accessibility

## Resources

- [Design Tokens Community Group](https://design-tokens.github.io/community-group/)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [design.to.html Documentation](#)
- [Cursor MCP Guide](#)

## Support

For design system questions or issues:
- **Design Questions**: @design-team on Slack
- **Integration Issues**: @frontend-team on Slack
- **Token Problems**: Create issue in GitHub with `design-system` label

