# 🎨 Dragvertising Design System - Quick Reference

## 📋 Summary

A comprehensive design system that bridges **Figma** designs with **React/Tailwind** code using design tokens, MCP (Model Context Protocol), and design.to.html Pro.

## 🚀 Quick Start

### 1. Setup (First Time)

```bash
# 1. Copy environment template
cp .env.example .env.local

# 2. Add your Figma credentials to .env.local:
# FIGMA_ACCESS_TOKEN=your_token_here
# FIGMA_FILE_KEY=your_file_key_here

# 3. Read the getting started guide
cat design/GETTING_STARTED.md
```

### 2. Daily Usage

```bash
# Sync design tokens from Figma
npm run tokens:extract

# Generate CSS, Tailwind config, and TypeScript types
npm run tokens:generate

# Or do both at once
npm run tokens:sync
```

### 3. Generate Component from Figma

In **Cursor IDE** with MCP:

```
# Copy Figma component URL, then in Cursor:
@figma get_design_context [paste Figma URL]

# MCP will:
# - Extract the design
# - Generate React/Tailwind code
# - Use existing shadcn/ui components
# - Apply design tokens
```

## 📁 Structure

```
design/
├── README.md                    # Complete overview
├── GETTING_STARTED.md           # Setup guide
├── IMPLEMENTATION_SUMMARY.md    # What was created
├── ARCHITECTURE.md              # Architecture diagrams
├── design-tokens/               # Source of truth (JSON)
├── figma/                       # Figma integration config
├── tokens/                      # Generated code (auto)
└── documentation/               # Guidelines
```

## 🎯 Key Concepts

### Design Tokens

Design tokens are the single source of truth for all visual properties:

- **Colors**: Brand colors, semantic colors (light/dark), universe-specific
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: 40+ spacing values, compact mode support
- **Shadows**: Elevation system + glow effects
- **Borders**: Border radius scale
- **Animations**: Keyframes + easing functions

### Token Flow

```
Figma Variables → design-tokens/*.json → Generated Code → React Components
```

### Universe-Aware

All components adapt to the active universe context:
- **Talent**: Pink accent (#FD0290)
- **DJ**: Golden accent (#FFA726)
- **Producer**: Warm orange accent (#FF6B35)
- **Fan**: Secondary accent

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [README.md](./design/README.md) | Complete design system overview |
| [GETTING_STARTED.md](./design/GETTING_STARTED.md) | Step-by-step setup guide |
| [IMPLEMENTATION_SUMMARY.md](./design/IMPLEMENTATION_SUMMARY.md) | What was created |
| [ARCHITECTURE.md](./design/ARCHITECTURE.md) | Architecture diagrams |
| [color-usage.md](./design/documentation/color-usage.md) | Color guidelines |
| [sync-strategy.md](./design/figma/sync-strategy.md) | Figma sync workflow |

## 🛠 Scripts

```bash
# Design System
npm run tokens:extract      # Extract from Figma
npm run tokens:generate     # Generate CSS/Tailwind/TS
npm run tokens:sync         # Extract + Generate
npm run design:sync         # Sync + Format
npm run design:validate     # Validate consistency

# Development
npm run dev                 # Start dev server
npm run storybook           # Start Storybook
npm run build               # Build for production
```

## 🎨 Figma Setup

### Required

1. **Figma Pro Account**
2. **Design System File** with:
   - Color variables (light/dark modes)
   - Typography variables
   - Spacing variables
   - Components library

3. **Access Token**: [Generate here](https://www.figma.com/settings)
4. **File Key**: From your Figma URL

### Recommended Plugins

- [Figma Tokens](https://www.figma.com/community/plugin/843461159747178978) - Design token management
- [Variables Import/Export](https://www.figma.com/community/plugin/1256972111705530093) - Variable sync
- [Inspect](https://www.figma.com/community/plugin/760445567896379412) - Code generation

## 💡 Tips

### ✅ Do

- Use semantic token names (`primary`, `secondary`) not literals (`purple`, `yellow`)
- Apply Figma variables to all components (not hard-coded values)
- Sync regularly: `npm run design:sync` after Figma changes
- Test in Storybook before committing
- Document component usage in Figma

### ❌ Don't

- Hardcode colors or spacing in components
- Skip the token generation step
- Mix design token formats
- Forget to test dark mode
- Ignore accessibility guidelines

## 🧪 Testing

```bash
# Visual testing in Storybook
npm run storybook

# Type checking
npm run typecheck

# Linting
npm run lint

# Build check
npm run build:check
```

## 🆘 Troubleshooting

### "Figma API Error"
- Check `FIGMA_ACCESS_TOKEN` in `.env.local`
- Verify token has file access
- Check file key is correct

### "Generated Code Doesn't Match Figma"
- Run `npm run tokens:sync`
- Check component mapping in `design/figma/component-mapping.json`
- Verify Figma uses variables (not hard-coded values)

### "Build Fails After Token Update"
- Run `npm run design:validate`
- Check for TypeScript errors
- Verify Tailwind config syntax

See [GETTING_STARTED.md](./design/GETTING_STARTED.md#step-8-troubleshooting) for more help.

## 🔗 Links

- **Design System**: [/design/](./design/)
- **Components**: [/src/ui/primitives/](./src/ui/primitives/)
- **Storybook**: `npm run storybook`
- **Figma**: [Your design system file]
- **Tailwind Config**: [tailwind.config.ts](./tailwind.config.ts)

## 📦 Stack

- **Frontend**: React 18+ with Vite
- **Styling**: Tailwind CSS v3.4+
- **Components**: shadcn/ui (customized)
- **Design Tool**: Figma Pro
- **Integration**: Cursor IDE + MCP + design.to.html Pro
- **Tokens**: Design Tokens Community Group format

## 🎯 Next Steps

1. ✅ **Read** [GETTING_STARTED.md](./design/GETTING_STARTED.md)
2. ✅ **Set up** Figma design system file
3. ✅ **Configure** environment variables
4. ✅ **Test** token extraction: `npm run tokens:extract`
5. ✅ **Generate** your first component with MCP
6. ✅ **Build** Storybook documentation

---

**Questions?** Check the [documentation](./design/) or reach out to the team!

