# 🎴 Card Components - Figma Setup Guide

## Quick Setup (15 minutes)

This guide will help you create all 4 card components in Figma with proper naming, variants, and DV variables.

---

## Prerequisites

✅ **Variables imported**: Make sure you've imported `design/figma/variables-export.json` first!

If not done yet:
1. Open Figma file: https://figma.com/file/KFTuue8HhKSz8og1Q5qukp
2. Install "Variables Importer" plugin
3. Import `design/figma/variables-export.json`

---

## Step 1: Create Card Category Frame

1. **Create new page** (if needed): `📦 Design System Components`
2. **Create frame** (F key): Name it `card`
3. **Position**: Top-left of the canvas

---

## Card 1: Talent Browse Card

### Component: `cmp / card / talent-browse`

**Dimensions**: 320px × 420px

**Structure**:
```
Frame: cmp / card / talent-browse (320×420)
├── Background (320×420)
│   ├── Fill: DV/Light/card
│   ├── Stroke: DV/Light/border (1px)
│   ├── Corner Radius: DV/Radius/xl (16px)
│   └── Shadow: DV/Elevation/md
│
├── Content (Auto-layout vertical, padding: DV/Spacing/4)
│   ├── Avatar Section (Auto-layout horizontal)
│   │   ├── Avatar (Circle, 64×64)
│   │   │   └── Fill: DV/Universe/talent/accent (#FD0290)
│   │   └── Spacer: DV/Spacing/3
│   │
│   ├── Name (Text)
│   │   ├── Text: "Demented X"
│   │   ├── Font: DV/FontSize/xl (20px)
│   │   ├── Weight: DV/FontWeight/semibold
│   │   └── Fill: DV/Light/foreground
│   │
│   ├── Pronouns (Text)
│   │   ├── Text: "she/her"
│   │   ├── Font: DV/FontSize/sm (14px)
│   │   ├── Weight: DV/FontWeight/regular
│   │   └── Fill: DV/Light/muted-foreground
│   │
│   ├── Spacer: DV/Spacing/2
│   │
│   ├── Bio (Text)
│   │   ├── Text: "Award-winning drag performer specializing in comedy and lip-sync..."
│   │   ├── Font: DV/FontSize/base (16px)
│   │   ├── Weight: DV/FontWeight/regular
│   │   ├── Fill: DV/Light/foreground
│   │   └── Max lines: 3
│   │
│   ├── Spacer: DV/Spacing/4
│   │
│   └── Action Button (Auto-layout horizontal)
│       ├── Padding: DV/Spacing/3 × DV/Spacing/4
│       ├── Fill: DV/Universe/talent/accent
│       ├── Corner Radius: DV/Radius/lg
│       └── Text: "View Profile"
│           ├── Font: DV/FontSize/base
│           ├── Weight: DV/FontWeight/semibold
│           └── Fill: White (#FFFFFF)
```

**Create Variants**:
1. Right-click component → **Add variant**
2. Create property: `state`
3. Values: `default`, `hover`, `loading`, `empty`

**Variant Styles**:
- **default**: Standard appearance
- **hover**: Add shadow: `DV/Elevation/lg`, transform: scale(1.02)
- **loading**: Opacity: 50%, add loading spinner
- **empty**: Gray background, placeholder text

---

## Card 2: DJ Browse Card

### Component: `cmp / card / dj-browse`

**Dimensions**: 320px × 420px

**Structure**: Same as Talent Browse Card, but:

**Key Differences**:
- Avatar Fill: `DV/Universe/dj/accent` (#FFA726 - golden)
- Action Button Fill: `DV/Universe/dj/accent`
- Sample Name: "DJ Johnny Beats"
- Sample Bio: "Premier nightclub DJ with 10+ years experience..."

**Create Variants**: Same as Talent Browse (`state`: default, hover, loading, empty)

---

## Card 3: Show Preview Card

### Component: `cmp / card / show-preview`

**Dimensions**: 360px × 480px

**Structure**:
```
Frame: cmp / card / show-preview (360×480)
├── Background (360×480)
│   ├── Fill: DV/Light/card
│   ├── Stroke: DV/Light/border (1px)
│   ├── Corner Radius: DV/Radius/xl (16px)
│   └── Shadow: DV/Elevation/md
│
├── Content (Auto-layout vertical, padding: 0)
│   ├── Featured Image (360×200)
│   │   ├── Fill: Gradient (DV/Gradients/primary)
│   │   ├── Corner Radius: DV/Radius/xl (top only)
│   │   └── Placeholder: "Show Image"
│   │
│   ├── Info Section (Padding: DV/Spacing/4)
│   │   ├── Badge (Auto-layout)
│   │   │   ├── Text: "DRAG SHOW"
│   │   │   ├── Fill: DV/Light/accent
│   │   │   ├── Padding: DV/Spacing/1 × DV/Spacing/2
│   │   │   └── Corner Radius: DV/Radius/sm
│   │   │
│   │   ├── Spacer: DV/Spacing/2
│   │   │
│   │   ├── Show Title (Text)
│   │   │   ├── Text: "Weekly Drag Spectacular"
│   │   │   ├── Font: DV/FontSize/2xl (24px)
│   │   │   ├── Weight: DV/FontWeight/bold
│   │   │   └── Fill: DV/Light/foreground
│   │   │
│   │   ├── Spacer: DV/Spacing/2
│   │   │
│   │   ├── Date/Time (Text)
│   │   │   ├── Text: "Friday, Dec 15 • 9:00 PM"
│   │   │   ├── Font: DV/FontSize/base (16px)
│   │   │   └── Fill: DV/Light/muted-foreground
│   │   │
│   │   ├── Spacer: DV/Spacing/2
│   │   │
│   │   ├── Venue (Text)
│   │   │   ├── Text: "The Pourhouse"
│   │   │   ├── Font: DV/FontSize/base (16px)
│   │   │   └── Fill: DV/Light/foreground
│   │   │
│   │   ├── Spacer: DV/Spacing/4
│   │   │
│   │   └── CTA Button (Auto-layout)
│   │       ├── Text: "Get Tickets"
│   │       ├── Fill: DV/Light/primary
│   │       ├── Padding: DV/Spacing/3 × DV/Spacing/6
│   │       └── Corner Radius: DV/Radius/lg
```

**Create Variants**:
1. Property: `variant`
2. Values: `default`, `featured`

**Variant Styles**:
- **default**: Standard card
- **featured**: Larger (400×520px), gradient background, glow effect (`DV/Glow/primary`)

---

## Card 4: Venue Preview Card

### Component: `cmp / card / venue-preview`

**Dimensions**: 340px × 280px

**Structure**:
```
Frame: cmp / card / venue-preview (340×280)
├── Background (340×280)
│   ├── Fill: DV/Light/card
│   ├── Stroke: DV/Light/border (1px)
│   ├── Corner Radius: DV/Radius/xl (16px)
│   └── Shadow: DV/Elevation/md
│
├── Content (Auto-layout vertical, padding: 0)
│   ├── Venue Image (340×140)
│   │   ├── Fill: Gradient (DV/Gradients/secondary)
│   │   ├── Corner Radius: DV/Radius/xl (top only)
│   │   └── Placeholder: "Venue Image"
│   │
│   ├── Info Section (Padding: DV/Spacing/4)
│   │   ├── Venue Name (Text)
│   │   │   ├── Text: "The Pourhouse"
│   │   │   ├── Font: DV/FontSize/xl (20px)
│   │   │   ├── Weight: DV/FontWeight/semibold
│   │   │   └── Fill: DV/Light/foreground
│   │   │
│   │   ├── Spacer: DV/Spacing/1
│   │   │
│   │   ├── Location (Text with icon)
│   │   │   ├── Text: "Minneapolis, MN"
│   │   │   ├── Font: DV/FontSize/sm (14px)
│   │   │   └── Fill: DV/Light/muted-foreground
│   │   │
│   │   ├── Spacer: DV/Spacing/2
│   │   │
│   │   └── Tag Row (Auto-layout horizontal)
│   │       ├── Tag: "Bar" (DV/Spacing/1 × DV/Spacing/2, DV/Radius/sm)
│   │       ├── Tag: "Dance Club" (DV/Spacing/1 × DV/Spacing/2, DV/Radius/sm)
│   │       └── Tag: "LGBTQ+" (DV/Spacing/1 × DV/Spacing/2, DV/Radius/sm)
```

**Create Variants**:
1. Property: `variant`
2. Values: `default`, `compact`

**Variant Styles**:
- **default**: Full size (340×280px)
- **compact**: Smaller (280×200px), horizontal layout, image on left (100×200)

---

## Quick Tips

### Using Auto-layout
1. Select frame → Right-click → **Add auto layout** (or Shift + A)
2. Set direction (horizontal/vertical)
3. Set padding using DV/Spacing variables
4. Set gap between items using DV/Spacing variables

### Applying Variables
1. Select element
2. In **Design panel**, click color/size value
3. Click **🔗** (variable icon)
4. Search for DV variable (e.g., `DV/Light/primary`)

### Creating Variants
1. Select component
2. Right-click → **Add variant**
3. Name property (e.g., `state`, `variant`)
4. Create multiple variants
5. Apply different styles to each

### Testing Components
1. Create instance: **Option + drag** component
2. Test variants in properties panel
3. Verify all states work correctly

---

## Color Reference

### Universe Accents
- **Talent**: `DV/Universe/talent/accent` (#FD0290 - Pink)
- **DJ**: `DV/Universe/dj/accent` (#FFA726 - Golden)
- **Producer**: `DV/Universe/producer/accent` (#FF6B35 - Orange)

### Common Colors
- **Background**: `DV/Light/card`
- **Foreground**: `DV/Light/foreground`
- **Muted**: `DV/Light/muted-foreground`
- **Border**: `DV/Light/border`
- **Primary**: `DV/Light/primary`

### Shadows
- **Card**: `DV/Elevation/md`
- **Hover**: `DV/Elevation/lg`
- **Featured**: `DV/Elevation/xl`

---

## Checklist

- [ ] Variables imported (100 variables)
- [ ] "card" category frame created
- [ ] `cmp / card / talent-browse` created with 4 variants
- [ ] `cmp / card / dj-browse` created with 4 variants
- [ ] `cmp / card / show-preview` created with 2 variants
- [ ] `cmp / card / venue-preview` created with 2 variants
- [ ] All components use DV variables (no hard-coded values)
- [ ] Component naming follows convention exactly

---

## Next Steps

Once all cards are created:

```bash
# Test export
npm run design:export "talent-browse"
npm run design:export "dj-browse"
npm run design:export "show-preview"
npm run design:export "venue-preview"
```

---

**Need help?** Reference:
- Variables: `design/figma/variables-export.json`
- Tailwind mapping: `design/documentation/tailwind-token-mapping.md`
- Component specs: `design/figma/component-mapping.json`

**Estimated time**: 15-20 minutes for all 4 cards

