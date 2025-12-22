# 🎨 Dragvertising Universe Design System

## What We Created

I've set up a **comprehensive design system** for the Dragvertising Universe that bridges your Figma designs with your React/Tailwind codebase. Here's what's included:

## 📁 Directory Structure

```
design/
├── README.md                          # Complete design system overview
├── GETTING_STARTED.md                 # Step-by-step setup guide
├── design-tokens/                     # Design token definitions (JSON)
│   ├── colors.json                    # Color palette tokens
│   ├── typography.json                # Font tokens
│   ├── spacing.json                   # Spacing scale
│   ├── shadows.json                   # Shadow definitions
│   ├── borders.json                   # Border radius tokens
│   └── animations.json                # Animation tokens
├── figma/                             # Figma integration
│   ├── plugin-config.json             # Figma plugin settings
│   ├── component-mapping.json         # Figma → React mappings
│   └── sync-strategy.md               # Figma sync workflow
├── documentation/                      # Design guidelines
│   └── color-usage.md                 # Color usage guidelines
└── tokens/                             # Generated token files (auto-generated)
    ├── css/                           # CSS custom properties
    ├── tailwind/                      # Tailwind config extensions
    └── js/                            # TypeScript tokens
```

## 🛠 Scripts Added

New NPM scripts in `package.json`:

```bash
# Extract design tokens from Figma
npm run tokens:extract

# Generate CSS, Tailwind config, and TypeScript types
npm run tokens:generate

# Full sync (extract + generate)
npm run tokens:sync

# Sync + format code
npm run design:sync

# Validate design system
npm run design:validate
```

## 🎯 Key Features

### 1. **Design Token System**

All your current styles from `tailwind.config.ts` and `src/index.css` have been documented as design tokens:

- **Colors**: Brand colors (#FD0290 pink, #FFA726 golden), semantic colors (light/dark mode), universe-specific accents
- **Typography**: SF Pro font stack, 8 size scales (xs to 7xl), 3 weights
- **Spacing**: 40+ spacing values (0 to 40), compact mode support (0.75x multiplier)
- **Shadows**: Elevation system (sm to 2xl), glow effects (primary, secondary, golden, pink)
- **Borders**: 8 radius values (none to full)
- **Animations**: 6 keyframes (fade-in, slide-up, glow-pulse, gradient, shimmer, float)

### 2. **Figma Integration**

- **plugin-config.json**: Configuration for Figma Tokens plugin and design.to.html Pro
- **component-mapping.json**: Maps your Figma components to React components (Button, Card, Input, etc.)
- **sync-strategy.md**: Complete workflow for keeping Figma and code in sync

### 3. **Automated Workflows**

Two scripts in `/scripts/`:

- **`figma-extract-tokens.js`**: Extracts design tokens from Figma via API
- **`generate-tokens.js`**: Generates CSS variables, Tailwind config, and TypeScript types from tokens

### 4. **Comprehensive Documentation**

- **README.md**: Full design system overview with architecture, token categories, component guidelines
- **GETTING_STARTED.md**: Step-by-step setup guide with troubleshooting
- **color-usage.md**: Complete color usage guidelines with accessibility checks
- **sync-strategy.md**: Detailed Figma sync workflow with automation setup

## 🚀 Next Steps

### 1. **Set Up Figma** (30 minutes)

```bash
# Follow the getting started guide
cat design/GETTING_STARTED.md

# Key steps:
# 1. Create Figma Design System file
# 2. Set up Figma variables (colors, typography, spacing)
# 3. Get Figma access token and file key
# 4. Add to .env.local
```

### 2. **Initial Token Sync** (10 minutes)

```bash
# Extract tokens from Figma (if you have variables set up)
npm run tokens:extract

# Generate code from tokens
npm run tokens:generate

# Or do both at once
npm run tokens:sync
```

### 3. **Map Components** (ongoing)

Update `design/figma/component-mapping.json` to map your Figma components to your existing React components in `src/ui/primitives/`.

### 4. **Use MCP in Cursor**

With Cursor + MCP + design.to.html Pro:

```
# In Cursor, after copying a Figma component URL:
@figma get_design_context [paste Figma URL]

# This will:
# - Extract the component design
# - Generate React/Tailwind code
# - Use your existing shadcn/ui components
# - Apply your design tokens
```

## 📖 Documentation Highlights

### Color System
- **Brand colors**: Pink (#FD0290), Golden (#FFA726), Warm Orange (#FF6B35)
- **Semantic colors**: Automatically adapt to light/dark mode
- **Universe colors**: Role-specific accents (Talent = pink, DJ = golden, Producer = orange)
- **Gradients**: 5 pre-defined gradients for hero sections
- **Glow effects**: Shadow effects for depth in dark mode

### Typography
- **Font family**: SF Pro (system-ui) for everything
- **Scale**: 12px to 72px (xs to 7xl)
- **Weights**: Regular (400), Semibold (600), Bold (700)
- **Usage**: Headings use tight line-height (1.25), body uses relaxed (1.625)

### Spacing
- **Scale**: 0 to 40 (rem-based)
- **Compact mode**: 25% reduction when `html.compact-mode` class is active
- **Responsive**: Adjust spacing per breakpoint

## 🎨 Figma Setup Recommendations

### File Structure
```
Dragvertising Design System (Figma file)
├── 🎨 Foundations
│   ├── Colors (brand, semantic light, semantic dark)
│   ├── Typography (fonts, scales, weights)
│   ├── Spacing (scale 0-40)
│   ├── Shadows (elevation + glow effects)
│   └── Border Radius (none to full)
├── 🧩 Components
│   ├── Primitives (Button, Input, Card, Badge, etc.)
│   ├── Compositions (Forms, Navigation, Filter panels)
│   └── Patterns (Dashboards, Profiles, Show management)
├── 🌌 Universe Variants
│   ├── Talent (pink accent theme)
│   ├── DJ (golden accent theme)
│   ├── Producer (orange accent theme)
│   └── Fan (secondary accent theme)
└── 📱 Templates
    ├── Mobile screens
    ├── Tablet screens
    └── Desktop screens
```

### Variable Collections
1. **Colors - Light**: All semantic colors for light mode
2. **Colors - Dark**: All semantic colors for dark mode
3. **Brand Colors**: Pink, golden, warm orange (mode-independent)
4. **Typography**: Font sizes, weights, line heights
5. **Spacing**: 0 to 40 scale
6. **Shadows**: Elevation and glow values

## 🔧 Current vs. Future State

### ✅ Current (What Exists)
- Tailwind config with all colors, fonts, spacing
- CSS custom properties in `src/index.css`
- shadcn/ui components in `src/ui/primitives/`
- Universe-aware color system
- Dark mode support

### 🎯 Future (What Design System Adds)
- **Single source of truth**: Figma → Tokens → Code
- **Automated sync**: Changes in Figma automatically flow to code
- **Component mapping**: Figma components map 1:1 to React components
- **Documentation**: Complete guidelines for usage
- **Validation**: Automated checks for consistency

## 💡 Tips

1. **Start small**: Begin with colors and typography in Figma
2. **Use variables**: Apply Figma variables to all components (not hard-coded values)
3. **Sync regularly**: Run `npm run design:sync` after Figma changes
4. **Test components**: Use Storybook to verify generated components
5. **Document decisions**: Add notes to Figma components explaining usage

## 🆘 Support

- **Documentation**: Check `/design/` folder for guides
- **Troubleshooting**: See `GETTING_STARTED.md` Step 8
- **Questions**: Ask @design-team or @frontend-team

## 🎉 What's Special About This Setup

1. **Universe-aware**: Design system adapts to active universe (Talent, DJ, etc.)
2. **MCP integration**: Use Cursor to generate components directly from Figma
3. **design.to.html Pro**: Best-in-class Figma → React/Tailwind conversion
4. **Token-driven**: All styles driven by design tokens (no magic numbers)
5. **Automated workflows**: Sync runs automatically via CI/CD (optional)
6. **Dark mode native**: Dark mode is first-class, not an afterthought
7. **Accessibility**: WCAG 2.1 AA compliance built-in

---

**Ready to start?** → Check out `design/GETTING_STARTED.md` for the complete setup guide!

