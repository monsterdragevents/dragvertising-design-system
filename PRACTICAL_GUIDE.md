# 🎨 Design System Implementation - UPDATED

## What Changed

I've updated the design system to use a **practical, 1:1 component naming convention** and **Tailwind token mapping** (the "Rosetta Stone" approach you requested).

## 🆕 New Documentation

### **Component Naming Convention** (`design/documentation/component-naming.md`)

**Key Concept**: One Figma component = One React component

**Naming Pattern**:
- **Figma**: `cmp / [category] / [component-name]`
- **React**: `src/components/[category]/[ComponentName].tsx`

**Examples**:
| Figma | React |
|-------|-------|
| `cmp / card / talent-browse` | `src/components/card/TalentBrowseCard.tsx` |
| `cmp / nav / universe-switcher` | `src/components/nav/UniverseSwitcher.tsx` |
| `cmp / button / primary` | `src/components/button/PrimaryButton.tsx` |

**Variant Mapping**:
- Figma: `state=default | hover | loading`
- React: `state?: "default" | "hover" | "loading"`

### **Tailwind Token Mapping** (`design/documentation/tailwind-token-mapping.md`)

**The "Rosetta Stone" between Figma and code**

**Token Pattern**: `dv-[category]-[name]`

**Complete Mapping Examples**:

| Figma Variable | Tailwind Class | Value |
|----------------|----------------|-------|
| `DV/Brand/Primary` | `bg-dv-primary` | `#9945FF` |
| `DV/Surface/Card` | `bg-dv-surface-card` | `hsl(0, 0%, 100%)` |
| `DV/Shadow/Card` | `shadow-dv-card` | `0 1px 3px rgba(0,0,0,0.1)` |
| `DV/Space/4` | `p-dv-4` | `1rem` (16px) |
| `DV/Radius/LG` | `rounded-dv-lg` | `0.75rem` (12px) |

### Practical Usage

**In Figma**:
```
Component: cmp / card / talent-browse
- Background: DV/Surface/Card
- Border: DV/Border/Default
- Radius: DV/Radius/XL
- Padding: DV/Space/4
- Shadow: DV/Shadow/Card
```

**In React**:
```tsx
<div className="bg-dv-surface-card border-dv-border rounded-dv-xl p-dv-4 shadow-dv-card">
  {/* Card content */}
</div>
```

## 📁 Complete File Structure

```
design/
├── README.md                          # Main overview (13KB)
├── GETTING_STARTED.md                 # Setup guide (8.6KB)
├── IMPLEMENTATION_SUMMARY.md          # What was created (8.4KB)
├── ARCHITECTURE.md                    # Diagrams (6.7KB)
├── QUICK_REFERENCE.md                 # Quick ref (5.6KB)
├── design-tokens/                     # Token definitions (JSON)
│   ├── colors.json
│   ├── typography.json
│   ├── spacing.json
│   ├── shadows.json
│   ├── borders.json
│   └── animations.json
├── figma/                             # Figma integration
│   ├── plugin-config.json
│   ├── component-mapping.json         # UPDATED with 1:1 naming
│   └── sync-strategy.md
└── documentation/                      # Guidelines
    ├── color-usage.md                 # Color guide (comprehensive)
    ├── component-naming.md            # NEW: 1:1 naming convention
    └── tailwind-token-mapping.md      # NEW: Rosetta Stone
```

## 🎯 Workflow: Figma → design.to.html → Cursor

### Step 1: Design in Figma

```
Create: cmp / card / talent-browse
Variants: state=default | hover | loading | empty
Tokens: DV/Surface/Card, DV/Border/Default, DV/Space/4
```

### Step 2: Copy Figma URL

```
https://figma.com/design/FILE_KEY/...?node-id=123:456
```

### Step 3: Generate in Cursor

```
@figma get_design_context [paste URL]
```

### Step 4: Generated Code

```tsx
// src/components/card/TalentBrowseCard.tsx
export function TalentBrowseCard({ 
  state = "default",
  name,
  avatar,
  bio
}: TalentBrowseCardProps) {
  return (
    <Card className={cn(
      "bg-dv-surface-card border-dv-border rounded-dv-xl p-dv-4",
      "shadow-dv-card hover:shadow-dv-card-hover",
      state === "loading" && "animate-pulse"
    )}>
      {/* Component content */}
    </Card>
  );
}
```

## 🛠 Tailwind Config (DV Namespace)

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        dv: {
          primary: "hsl(280, 85%, 50%)",
          pink: "#FD0290",
          golden: "#FFA726",
          surface: {
            DEFAULT: "hsl(var(--dv-surface))",
            card: "hsl(var(--dv-surface-card))",
          },
          foreground: "hsl(var(--dv-foreground))",
          border: {
            DEFAULT: "hsl(var(--dv-border))",
          },
        },
      },
      spacing: {
        "dv-4": "1rem",
        "dv-6": "1.5rem",
        "dv-8": "2rem",
      },
      boxShadow: {
        "dv-card": "0 1px 3px rgba(0,0,0,0.1)",
        "dv-card-hover": "0 4px 12px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        "dv-lg": "0.75rem",
        "dv-xl": "1rem",
      },
    },
  },
};
```

## 📚 Key Documents

### For Designers

1. **Component Naming**: `design/documentation/component-naming.md`
   - How to name components in Figma
   - Variant mapping rules
   - Complete component catalog

2. **Token Mapping**: `design/documentation/tailwind-token-mapping.md`
   - Figma variable → Tailwind class mapping
   - Complete token reference
   - Usage examples

### For Developers

1. **Quick Reference**: `design/QUICK_REFERENCE.md`
   - NPM scripts
   - Daily workflow
   - Quick token lookup

2. **Component Naming**: `design/documentation/component-naming.md`
   - File structure
   - Prop mapping
   - Code examples

3. **Tailwind Mapping**: `design/documentation/tailwind-token-mapping.md`
   - All DV tokens
   - CSS variables
   - Implementation guide

## 🎨 Component Categories

| Category | Figma Prefix | React Path | Examples |
|----------|--------------|------------|----------|
| **Cards** | `cmp / card /` | `src/components/card/` | `talent-browse`, `show-preview` |
| **Navigation** | `cmp / nav /` | `src/components/nav/` | `universe-switcher`, `main-nav` |
| **Layout** | `cmp / layout /` | `src/components/layout/` | `dashboard-shell`, `page-header` |
| **Buttons** | `cmp / button /` | `src/components/button/` | `primary`, `secondary` |
| **Forms** | `cmp / form /` | `src/components/form/` | `input-text`, `select` |
| **Modals** | `cmp / modal /` | `src/components/modal/` | `dialog`, `drawer` |
| **Feedback** | `cmp / feedback /` | `src/components/feedback/` | `toast`, `alert` |

## 🚀 Next Steps

### 1. Set Up Figma (30 min)

- Create components using `cmp / category / name` pattern
- Add variants that match React props
- Apply DV tokens (not hard-coded values)

### 2. Configure Tailwind (10 min)

- Add DV namespace to `tailwind.config.ts`
- Add CSS variables to `src/index.css`
- Test: `bg-dv-primary`, `p-dv-4`, `shadow-dv-card`

### 3. Generate First Component (15 min)

- Design: `cmp / card / talent-browse` in Figma
- Copy Figma URL
- In Cursor: `@figma get_design_context [URL]`
- Save to: `src/components/card/TalentBrowseCard.tsx`

### 4. Test in Storybook (10 min)

```bash
npm run storybook
# Create story for TalentBrowseCard
# Test all variants
```

## 💡 Key Principles

### ✅ Do

- Use `cmp / category / component-name` in Figma
- Use `src/components/category/ComponentName.tsx` in React
- Map Figma variants to React props exactly
- Use `dv-` prefix for all Tailwind tokens
- Document token mappings in Figma

### ❌ Don't

- Use different names in Figma vs React
- Hardcode values (use DV tokens)
- Skip categories in naming
- Mix naming conventions
- Create variants without corresponding props

## 📖 Token Cheat Sheet

```
COLOR:    DV/Brand/Primary → bg-dv-primary
SURFACE:  DV/Surface/Card → bg-dv-surface-card
TEXT:     DV/Text/Primary → text-dv-foreground
SPACING:  DV/Space/4 → p-dv-4 (16px)
SHADOW:   DV/Shadow/Card → shadow-dv-card
RADIUS:   DV/Radius/LG → rounded-dv-lg (12px)
```

## 🆘 Resources

- **Component Naming Guide**: `/design/documentation/component-naming.md`
- **Tailwind Token Map**: `/design/documentation/tailwind-token-mapping.md`
- **Quick Reference**: `/design/QUICK_REFERENCE.md`
- **Setup Guide**: `/design/GETTING_STARTED.md`

---

**This is the practical approach**: One component = One file = One Figma component. Simple, consistent, scalable.

