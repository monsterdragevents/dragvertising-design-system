# Dragvertising Design System - Getting Started

## Quick Setup Guide

This guide will help you set up the Dragvertising Design System with Figma integration using Cursor, MCP, and design.to.html Pro.

## Prerequisites

- [ ] **Figma Pro Account** with design system file access
- [ ] **Cursor IDE** installed with MCP support
- [ ] **design.to.html Pro** subscription
- [ ] **Node.js** 18+ installed
- [ ] **Git** access to the repository

## Step 1: Figma Setup

### 1.1 Create Design System File

1. Open Figma and create a new file: "Dragvertising Design System"
2. Structure your file with these pages:
   - 🎨 Foundations (Colors, Typography, Spacing, Shadows, Borders)
   - 🧩 Components (Primitives, Compositions, Patterns)
   - 🌌 Universe Variants (Talent, DJ, Producer, Fan themes)
   - 📱 Templates (Mobile, Tablet, Desktop screens)

### 1.2 Set Up Figma Variables

1. **Create Color Variables:**
   - Create collection: "Colors - Light"
   - Create collection: "Colors - Dark"
   - Create collection: "Brand Colors"
   - Add variables based on `/design/design-tokens/colors.json`

2. **Create Typography Variables:**
   - Create collection: "Typography"
   - Add font size, weight, and line height variables
   - Reference `/design/design-tokens/typography.json`

3. **Create Spacing Variables:**
   - Create collection: "Spacing"
   - Add spacing scale from `/design/design-tokens/spacing.json`

### 1.3 Get Your Figma File Key

1. Open your design system file in Figma
2. Copy the URL: `https://figma.com/design/FILE_KEY_HERE/Dragvertising-Design-System`
3. Extract the FILE_KEY (between `/design/` and `/`)
4. Save this for later

### 1.4 Generate Figma Access Token

1. Go to [Figma Settings > Personal Access Tokens](https://www.figma.com/settings)
2. Click "Create new token"
3. Name it: "Dragvertising Design System Sync"
4. Copy the token (save securely - you won't see it again)

## Step 2: Project Setup

### 2.1 Install Dependencies

```bash
cd /Users/michaelryanwhitson/DragvertisingApp

# Install any missing dependencies
npm install
```

### 2.2 Configure Environment Variables

Create or update `.env.local`:

```bash
# Figma Integration
FIGMA_ACCESS_TOKEN=your_figma_token_here
FIGMA_FILE_KEY=your_file_key_here

# Existing variables...
```

### 2.3 Verify Design System Files

```bash
# Check if design system structure exists
ls -la design/

# You should see:
# - README.md
# - design-tokens/
# - figma/
# - documentation/
# - tokens/ (will be generated)
```

## Step 3: Cursor MCP Setup

### 3.1 Enable Figma MCP

1. Open Cursor Settings
2. Navigate to MCP Servers
3. Verify Figma MCP is enabled:
   - Server: `cursor-ide-figma`
   - Status: ✅ Connected

### 3.2 Test Figma Connection

In Cursor, try this command:

```
@figma whoami
```

You should see your Figma user information. If not, check:
- Figma desktop app is running
- You're logged into Figma
- MCP permissions are granted

### 3.3 Enable design.to.html Pro

1. Verify design.to.html Pro is active in your Figma account
2. Test by selecting a component in Figma and copying link
3. In Cursor, use: `@figma get_design_context` with node ID

## Step 4: Initial Token Sync

### 4.1 Extract Tokens from Figma

```bash
# Option 1: Manual extraction (if you have tokens in Figma)
npm run tokens:extract

# This will:
# - Connect to Figma API
# - Extract variables and styles
# - Save to design/design-tokens/
```

### 4.2 Generate Code from Tokens

```bash
# Generate CSS, Tailwind config, and TypeScript types
npm run tokens:generate

# This creates:
# - design/tokens/css/colors.css
# - design/tokens/css/spacing.css
# - design/tokens/tailwind/config-extension.js
# - design/tokens/js/tokens.ts
```

### 4.3 Review Generated Files

```bash
# Check generated CSS variables
cat design/tokens/css/colors.css

# Check Tailwind extension
cat design/tokens/tailwind/config-extension.js

# Check TypeScript types
cat design/tokens/js/tokens.ts
```

## Step 5: Component Mapping

### 5.1 Update Component Mapping

Edit `design/figma/component-mapping.json` to map your Figma components to React components.

Example:

```json
{
  "mappings": [
    {
      "figmaComponent": "Button/Primary",
      "reactComponent": "src/ui/primitives/button.tsx",
      "componentName": "Button",
      "props": {
        "variant": "default"
      }
    }
  ]
}
```

### 5.2 Test Component Generation

1. Open Figma, select a Button component
2. Copy the Figma link
3. In Cursor, run:

```
@figma Generate React component from [paste link]
```

4. Review the generated code
5. Adjust mapping if needed

## Step 6: Workflow Integration

### 6.1 Add NPM Scripts

Verify these scripts exist in `package.json`:

```json
{
  "scripts": {
    "tokens:extract": "node scripts/figma-extract-tokens.js",
    "tokens:generate": "node scripts/generate-tokens.js",
    "tokens:sync": "npm run tokens:extract && npm run tokens:generate",
    "design:sync": "npm run tokens:sync && npm run format",
    "design:validate": "node scripts/validate-design-system.js"
  }
}
```

### 6.2 Test Full Sync

```bash
# Run full design system sync
npm run design:sync

# You should see:
# ✅ Tokens extracted from Figma
# ✅ CSS variables generated
# ✅ Tailwind config updated
# ✅ TypeScript types generated
```

## Step 7: Daily Workflow

### 7.1 Making Design Changes

**In Figma:**
1. Update design system components
2. Modify variables (colors, spacing, etc.)
3. Document changes in Figma descriptions

**In Code:**
```bash
# Sync changes to code
npm run design:sync

# Review changes
git diff design/

# Commit if good
git add design/
git commit -m "Update design system from Figma"
```

### 7.2 Creating New Components

**Option 1: Figma → Code (MCP)**
1. Design component in Figma
2. Copy Figma URL
3. In Cursor: `@figma get_design_context` with URL
4. Review generated component
5. Adjust and save

**Option 2: Code → Figma**
1. Create React component using design tokens
2. Build component in Storybook
3. Screenshot and add to Figma for documentation

### 7.3 Testing Components

```bash
# Start Storybook
npm run storybook

# Navigate to your component
# Test:
# - Light and dark mode
# - All variants
# - Responsive behavior
# - Accessibility (a11y tab)
```

## Step 8: Troubleshooting

### Figma Connection Issues

**Problem**: MCP can't connect to Figma

**Solution**:
```bash
# Check Figma desktop app is running
ps aux | grep Figma

# Restart Figma
# Restart Cursor
# Re-authorize MCP in Cursor settings
```

### Token Extraction Fails

**Problem**: `npm run tokens:extract` fails

**Solution**:
```bash
# Verify environment variables
echo $FIGMA_ACCESS_TOKEN
echo $FIGMA_FILE_KEY

# Test Figma API manually
curl -H "X-Figma-Token: $FIGMA_ACCESS_TOKEN" \
  https://api.figma.com/v1/files/$FIGMA_FILE_KEY
```

### Generated Code Doesn't Match Figma

**Problem**: React component looks different from Figma

**Solution**:
1. Check if design tokens are up to date: `npm run tokens:sync`
2. Verify component mapping in `component-mapping.json`
3. Check if Figma component uses variables (not hard-coded values)
4. Re-generate component with: `@figma get_design_context`

### Build Errors

**Problem**: Build fails after token update

**Solution**:
```bash
# Validate tokens
npm run design:validate

# Check for TypeScript errors
npm run type-check

# Check Tailwind config
npx tailwindcss -c tailwind.config.ts --help
```

## Resources

### Documentation
- [Design System README](./README.md)
- [Figma Sync Strategy](./figma/sync-strategy.md)
- [Color Usage Guidelines](./documentation/color-usage.md)
- [Component Guidelines](./documentation/component-guidelines.md)

### External Links
- [Figma API Docs](https://www.figma.com/developers/api)
- [Design Tokens Community Group](https://design-tokens.github.io/community-group/)
- [Cursor MCP Documentation](#)
- [design.to.html Pro](#)

### Support
- **Design Questions**: @design-team
- **Technical Issues**: @frontend-team
- **Figma Access**: @admin-team

## Next Steps

After setup, focus on:
1. ✅ Creating core components in Figma
2. ✅ Mapping components to React
3. ✅ Setting up automated sync (CI/CD)
4. ✅ Training team on workflow
5. ✅ Building Storybook documentation

## Success Checklist

- [ ] Figma design system file created
- [ ] Figma variables configured
- [ ] Environment variables set
- [ ] Cursor MCP connected to Figma
- [ ] design.to.html Pro enabled
- [ ] Initial token sync successful
- [ ] Component mapping configured
- [ ] Test component generated
- [ ] Storybook running
- [ ] Team trained on workflow

---

**Questions?** Check the [Troubleshooting](#step-8-troubleshooting) section or reach out to the team!

