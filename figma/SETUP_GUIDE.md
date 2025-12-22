# Figma Design System Setup Guide

## 🎨 Dragvertising Universe Design System

This guide will help you set up the complete design system in Figma.

---

## Step 1: Import Design Token Variables

### Method A: Using Variables Importer Plugin (Recommended)

1. Open your Figma file: https://figma.com/file/KFTuue8HhKSz8og1Q5qukp
2. Install the "Variables Importer" plugin (if not installed)
3. Run the plugin: Plugins → Variables Importer
4. Import the file: `design/figma/variables-export.json`
5. The plugin will create 52 color variables, 26 spacing variables, and more

### Method B: Manual Variable Creation

**Color Collections:**
- **DV/Brand**: 3 colors
- **DV/Light**: 21 colors (light mode)
- **DV/Dark**: 21 colors (dark mode)
- **DV/Universe**: 7 colors (universe-specific)

**Spacing Collection:**
- **DV/Spacing**: 26 spacing values

**Typography Collections:**
- **DV/FontSize**: 11 font sizes
- **DV/FontWeight**: 3 font weights

**Border Collections:**
- **DV/Radius**: 8 border radius values

---

## Step 2: Create Component Structure

### Naming Convention

**Figma:** `cmp / [category] / [component-name]`
**React:** `src/components/[category]/[ComponentName].tsx`

### Component Categories


**button** (2 components)
- `cmp / button / primary` → `PrimaryButton`
- `cmp / button / secondary` → `SecondaryButton`


**card** (4 components)
- `cmp / card / talent-browse` → `TalentBrowseCard`
- `cmp / card / dj-browse` → `DJBrowseCard`
- `cmp / card / show-preview` → `ShowPreviewCard`
- `cmp / card / venue-preview` → `VenuePreviewCard`


**nav** (3 components)
- `cmp / nav / universe-switcher` → `UniverseSwitcher`
- `cmp / nav / main-nav` → `MainNav`
- `cmp / nav / sidebar` → `Sidebar`


**layout** (2 components)
- `cmp / layout / dashboard-shell` → `DashboardShell`
- `cmp / layout / page-header` → `PageHeader`


**form** (2 components)
- `cmp / form / input-text` → `InputText`
- `cmp / form / select` → `Select`


**modal** (1 components)
- `cmp / modal / dialog` → `Dialog`


**feedback** (1 components)
- `cmp / feedback / toast` → `Toast`


### Creating Components

1. Create a new page in Figma called "Components"
2. For each category, create a frame named after the category
3. Inside each category frame, create component sets following the naming convention
4. Apply Figma variables to component properties

---

## Step 3: Apply Tailwind Mappings

### Color Mappings
- **DV/Brand/pink** → `bg-dv-brand-pink` (`#FD0290`)
- **DV/Brand/golden** → `bg-dv-brand-golden` (`#FFA726`)
- **DV/Brand/warm-orange** → `bg-dv-brand-warm-orange` (`#FF6B35`)
- **DV/Light/background** → `bg-background` (`hsl(0, 0%, 98%)`)
- **DV/Light/foreground** → `bg-foreground` (`hsl(280, 20%, 10%)`)
- **DV/Light/primary** → `bg-primary` (`hsl(280, 85%, 50%)`)
- **DV/Light/primary-foreground** → `bg-primary-foreground` (`hsl(0, 0%, 100%)`)
- **DV/Light/primary-glow** → `bg-primary-glow` (`hsl(280, 85%, 65%)`)
- **DV/Light/secondary** → `bg-secondary` (`hsl(45, 100%, 55%)`)
- **DV/Light/secondary-foreground** → `bg-secondary-foreground` (`hsl(280, 20%, 10%)`)
... and 14 more

### Spacing Mappings
- **DV/Spacing/0** → `p-0, m-0, gap-0` (`0`)
- **DV/Spacing/1** → `p-1, m-1, gap-1` (`0.25rem`)
- **DV/Spacing/2** → `p-2, m-2, gap-2` (`0.5rem`)
- **DV/Spacing/3** → `p-3, m-3, gap-3` (`0.75rem`)
- **DV/Spacing/4** → `p-4, m-4, gap-4` (`1rem`)
- **DV/Spacing/5** → `p-5, m-5, gap-5` (`1.25rem`)
- **DV/Spacing/6** → `p-6, m-6, gap-6` (`1.5rem`)
- **DV/Spacing/7** → `p-7, m-7, gap-7` (`1.75rem`)
- **DV/Spacing/8** → `p-8, m-8, gap-8` (`2rem`)
- **DV/Spacing/9** → `p-9, m-9, gap-9` (`2.25rem`)
... and 16 more

### Typography Mappings
- **DV/FontSize/xs** → `text-xs` (`0.75rem`)
- **DV/FontSize/sm** → `text-sm` (`0.875rem`)
- **DV/FontSize/base** → `text-base` (`1rem`)
- **DV/FontSize/lg** → `text-lg` (`1.125rem`)
- **DV/FontSize/xl** → `text-xl` (`1.25rem`)
- **DV/FontSize/2xl** → `text-2xl` (`1.5rem`)
- **DV/FontSize/3xl** → `text-3xl` (`1.875rem`)
- **DV/FontSize/4xl** → `text-4xl` (`2.25rem`)
- **DV/FontSize/5xl** → `text-5xl` (`3rem`)
- **DV/FontSize/6xl** → `text-6xl` (`3.75rem`)

Full mappings available in: `design/documentation/tailwind-token-mapping.md`

---

## Step 4: Set Up Documentation Pages

Create the following pages in your Figma file:

1. **📖 Design System** (cover page)
   - Title: "Dragvertising Universe Design System"
   - Version: "2.0.0"
   - Links to all sections

2. **🎨 Design Tokens** (token documentation)
   - Color swatches with variable names
   - Spacing examples
   - Typography scale
   - Shadow examples

3. **📦 Components** (component library)
   - Organized by category
   - Component sets with variants
   - Usage examples

4. **🔗 Tailwind Mapping** (developer reference)
   - Side-by-side comparison
   - Copy-paste friendly class names

---

## Step 5: Enable Dev Mode Features

1. Go to **File → Preferences → Dev Mode**
2. Enable "Show CSS code"
3. Enable "Show iOS code"
4. Enable "Show Android code"

---

## Next Steps

Once setup is complete:

1. **Generate components from Figma:**
   ```bash
   npm run design:extract
   ```

2. **Sync tokens to Tailwind:**
   ```bash
   npm run tokens:sync
   ```

3. **Test the integration:**
   - Design a component in Figma
   - Export using design.to.html
   - Import into Cursor
   - Verify Tailwind classes match

---

## Resources

- **Component Mapping:** `design/figma/component-mapping.json`
- **Variables Export:** `design/figma/variables-export.json`
- **Tailwind Mapping:** `design/figma/tailwind-mapping.json`
- **Full Documentation:** `design/PRACTICAL_GUIDE.md`

---

## Troubleshooting

**Issue: Variables not importing**
- Ensure you're using Figma Professional or higher
- Check that the Variables Importer plugin has access to your file

**Issue: Component names not matching**
- Follow the exact naming convention: `cmp / category / name`
- Use lowercase with hyphens for component names

**Issue: Colors look different**
- Ensure your Figma file is in RGB color mode
- Check that HSL values are converted correctly

---

Generated by: `scripts/figma-setup-complete.js`
Figma File: https://figma.com/file/KFTuue8HhKSz8og1Q5qukp
