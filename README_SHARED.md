# Shared Design System for All Repos

This package ensures all Dragvertising repositories share the same design tokens and styling.

## ✅ What's Set Up

1. **Design System Package**: `@dragvertising/design-system` npm package
2. **Tailwind Preset**: Auto-generated from design tokens
3. **Sync Script**: Workspace-level script to update all repos

## 📦 Repositories Status

- ✅ **DragvertisingApp** - Using shared design system
- ⚠️ **dragvertising-messenger** - Needs update
- ⚠️ **dragvertising-android-broadcaster** - Needs update
- ⚠️ **dragvertising-chrome-extension** - Needs update (if using Tailwind)
- ⚠️ **dragvertising-canva-app** - Needs update (if using Tailwind)

## 🚀 Quick Start for New Repos

### 1. Install the Package

```bash
npm install ../dragvertising-design-system
```

### 2. Update Tailwind Config

Add the preset to your `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";
import designSystemPreset from "@dragvertising/design-system/tailwind-preset";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  presets: [designSystemPreset], // Add this
  theme: {
    extend: {
      // Your repo-specific extensions only
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### 3. Remove Duplicate Tokens

Remove any duplicate design tokens from your Tailwind config. The preset includes:
- All `dv-*` prefixed tokens (colors, spacing, typography, etc.)
- Brand colors (pink, golden, warmOrange)
- Semantic colors (using CSS variables)
- Animations, shadows, gradients

## 🔄 Updating Design Tokens

### Method 1: Workspace Sync (Recommended)

From the root workspace directory:

```bash
npm run sync:design-system
```

This will:
1. Rebuild the preset from latest tokens
2. Update all repos that have the package installed

### Method 2: Manual Update

1. Update tokens in `design-tokens/*.json`
2. Run `npm run build` in design-system repo
3. Run `npm install` in each consuming repo

## 📝 Available Tokens

All tokens use the `dv-` prefix in Tailwind:

### Colors
- `bg-dv-purple-500`, `text-dv-pink-500`, etc.

### Spacing
- `p-dv-4`, `m-dv-6`, `gap-dv-8`, etc.

### Typography
- `text-dv-4xl`, `font-dv-bold`, etc.

### Border Radius
- `rounded-dv-lg`, `rounded-dv-full`, etc.

### Shadows
- `shadow-dv-lg`, `shadow-dv-glow-primary-light`, etc.

### Animations
- `animate-fade-in`, `animate-glow-pulse`, etc.

## 🎯 Benefits

- ✅ **Single Source of Truth**: All design tokens in one place
- ✅ **Consistency**: All repos use identical styling
- ✅ **Easy Updates**: Change tokens once, sync everywhere
- ✅ **Type Safety**: TypeScript support
- ✅ **Version Control**: Track changes via git

## 📚 Documentation

- [Shared Usage Guide](./SHARED_USAGE.md) - Detailed setup instructions
- [Design Tokens](./design-tokens/) - Token definitions
- [Figma Integration](./FIGMA_INTEGRATION.md) - Figma sync workflow




