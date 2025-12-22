# 🔄 Figma ↔ Tailwind Sync Reference

## ✅ Variables Synced from Figma

Last synced: **December 3, 2025 at 16:19 GMT**

---

## 🎨 Colors

### Brand Colors

| Figma Token | Tailwind Class | Value |
|-------------|---------------|-------|
| `DV/Brand/pink` | `bg-dv-brand-pink` | `#FD0290` |
| `DV/Brand/golden` | `bg-dv-brand-golden` | `#FFA726` |
| `DV/Brand/warm-orange` | `bg-dv-brand-warm-orange` | `#FF6B35` |

**Usage Examples:**
```tsx
<div className="bg-dv-brand-pink">Brand Pink Background</div>
<div className="text-dv-brand-golden">Golden Text</div>
<div className="border-dv-brand-warm-orange">Orange Border</div>
```

### Light Mode Semantic Colors

| Figma Token | Tailwind Class | Value | Usage |
|-------------|---------------|-------|-------|
| `DV/Light/background` | `bg-dv-light-background` | `hsl(0, 0%, 98%)` | Page background |
| `DV/Light/foreground` | `text-dv-light-foreground` | `hsl(280, 20%, 10%)` | Primary text |
| `DV/Light/primary` | `bg-dv-light-primary` | `hsl(280, 85%, 50%)` | Primary actions |
| `DV/Light/primary-foreground` | `text-dv-light-primary-foreground` | `hsl(0, 0%, 100%)` | Text on primary |
| `DV/Light/primary-glow` | `shadow-dv-light-primary-glow` | `hsl(280, 85%, 65%)` | Glow effects |
| `DV/Light/secondary` | `bg-dv-light-secondary` | `hsl(45, 100%, 55%)` | Secondary actions |
| `DV/Light/muted` | `bg-dv-light-muted` | `hsl(280, 10%, 95%)` | Muted backgrounds |
| `DV/Light/card` | `bg-dv-light-card` | `hsl(0, 0%, 100%)` | Card backgrounds |
| `DV/Light/border` | `border-dv-light-border` | `hsl(280, 15%, 88%)` | Borders |

**Usage Examples:**
```tsx
<div className="bg-dv-light-background text-dv-light-foreground">
  Light mode page
</div>
<button className="bg-dv-light-primary text-dv-light-primary-foreground">
  Primary Button
</button>
```

### Dark Mode Semantic Colors

| Figma Token | Tailwind Class | Value | Usage |
|-------------|---------------|-------|-------|
| `DV/Dark/background` | `bg-dv-dark-background` | `hsl(280, 30%, 8%)` | Page background |
| `DV/Dark/foreground` | `text-dv-dark-foreground` | `hsl(280, 10%, 95%)` | Primary text |
| `DV/Dark/primary` | `bg-dv-dark-primary` | `hsl(280, 85%, 60%)` | Primary actions |
| `DV/Dark/primary-foreground` | `text-dv-dark-primary-foreground` | `hsl(0, 0%, 100%)` | Text on primary |
| `DV/Dark/primary-glow` | `shadow-dv-dark-primary-glow` | `hsl(280, 85%, 70%)` | Glow effects |
| `DV/Dark/secondary` | `bg-dv-dark-secondary` | `hsl(45, 100%, 60%)` | Secondary actions |
| `DV/Dark/muted` | `bg-dv-dark-muted` | `hsl(280, 20%, 18%)` | Muted backgrounds |
| `DV/Dark/card` | `bg-dv-dark-card` | `hsl(280, 25%, 12%)` | Card backgrounds |
| `DV/Dark/border` | `border-dv-dark-border` | `hsl(280, 20%, 22%)` | Borders |

**Usage Examples:**
```tsx
<div className="dark:bg-dv-dark-background dark:text-dv-dark-foreground">
  Dark mode page
</div>
<button className="dark:bg-dv-dark-primary dark:text-dv-dark-primary-foreground">
  Primary Button
</button>
```

### Universe-Specific Accent Colors

| Figma Token | Tailwind Class | Value | Role |
|-------------|---------------|-------|------|
| `DV/Universe/talent/accent` | `bg-dv-universe-talent` | `#FD0290` | Talent pink |
| `DV/Universe/dj/accent` | `bg-dv-universe-dj` | `#FFA726` | DJ golden |
| `DV/Universe/producer/accent` | `bg-dv-universe-producer` | `#FF6B35` | Producer orange |
| `DV/Universe/production_co/accent` | `bg-dv-universe-production_co` | `hsl(280, 85%, 50%)` | Production Co purple |
| `DV/Universe/fan/accent` | `bg-dv-universe-fan` | `hsl(45, 100%, 55%)` | Fan yellow |
| `DV/Universe/showrunner/accent` | `bg-dv-universe-showrunner` | `#FF6B35` | Showrunner orange |
| `DV/Universe/venue_owner/accent` | `bg-dv-universe-venue_owner` | `hsl(280, 85%, 50%)` | Venue purple |

**Usage Examples:**
```tsx
<div className="bg-dv-universe-talent">Talent Universe Badge</div>
<div className="text-dv-universe-dj">DJ Universe Text</div>
```

---

## 📏 Spacing

| Figma Token | Tailwind Class | Value | Pixels |
|-------------|---------------|-------|--------|
| `DV/Spacing/px` | `p-dv-px`, `m-dv-px` | `1px` | 1px |
| `DV/Spacing/0` | `p-dv-0`, `m-dv-0` | `0` | 0 |
| `DV/Spacing/0.5` | `p-dv-0.5`, `m-dv-0.5` | `0.125rem` | 2px |
| `DV/Spacing/1` | `p-dv-1`, `m-dv-1` | `0.25rem` | 4px |
| `DV/Spacing/1.5` | `p-dv-1.5`, `m-dv-1.5` | `0.375rem` | 6px |
| `DV/Spacing/2` | `p-dv-2`, `m-dv-2` | `0.5rem` | 8px |
| `DV/Spacing/2.5` | `p-dv-2.5`, `m-dv-2.5` | `0.625rem` | 10px |
| `DV/Spacing/3` | `p-dv-3`, `m-dv-3` | `0.75rem` | 12px |
| `DV/Spacing/3.5` | `p-dv-3.5`, `m-dv-3.5` | `0.875rem` | 14px |
| `DV/Spacing/4` | `p-dv-4`, `m-dv-4` | `1rem` | 16px |
| `DV/Spacing/5` | `p-dv-5`, `m-dv-5` | `1.25rem` | 20px |
| `DV/Spacing/6` | `p-dv-6`, `m-dv-6` | `1.5rem` | 24px |
| `DV/Spacing/7` | `p-dv-7`, `m-dv-7` | `1.75rem` | 28px |
| `DV/Spacing/8` | `p-dv-8`, `m-dv-8` | `2rem` | 32px |
| `DV/Spacing/9` | `p-dv-9`, `m-dv-9` | `2.25rem` | 36px |
| `DV/Spacing/10` | `p-dv-10`, `m-dv-10` | `2.5rem` | 40px |
| `DV/Spacing/11` | `p-dv-11`, `m-dv-11` | `2.75rem` | 44px |
| `DV/Spacing/12` | `p-dv-12`, `m-dv-12` | `3rem` | 48px |
| `DV/Spacing/14` | `p-dv-14`, `m-dv-14` | `3.5rem` | 56px |
| `DV/Spacing/16` | `p-dv-16`, `m-dv-16` | `4rem` | 64px |
| `DV/Spacing/20` | `p-dv-20`, `m-dv-20` | `5rem` | 80px |
| `DV/Spacing/24` | `p-dv-24`, `m-dv-24` | `6rem` | 96px |
| `DV/Spacing/28` | `p-dv-28`, `m-dv-28` | `7rem` | 112px |
| `DV/Spacing/32` | `p-dv-32`, `m-dv-32` | `8rem` | 128px |
| `DV/Spacing/36` | `p-dv-36`, `m-dv-36` | `9rem` | 144px |
| `DV/Spacing/40` | `p-dv-40`, `m-dv-40` | `10rem` | 160px |

**Usage Examples:**
```tsx
<div className="p-dv-4">Padding: 16px</div>
<div className="m-dv-8">Margin: 32px</div>
<div className="gap-dv-6">Gap: 24px</div>
<div className="space-y-dv-3">Vertical spacing: 12px</div>
```

**All Spacing Utilities Work:**
- **Padding:** `p-dv-*`, `px-dv-*`, `py-dv-*`, `pt-dv-*`, `pr-dv-*`, `pb-dv-*`, `pl-dv-*`
- **Margin:** `m-dv-*`, `mx-dv-*`, `my-dv-*`, `mt-dv-*`, `mr-dv-*`, `mb-dv-*`, `ml-dv-*`
- **Gap:** `gap-dv-*`, `gap-x-dv-*`, `gap-y-dv-*`
- **Space:** `space-x-dv-*`, `space-y-dv-*`
- **Width/Height:** `w-dv-*`, `h-dv-*`

---

## 🔘 Border Radius

| Figma Token | Tailwind Class | Value | Pixels |
|-------------|---------------|-------|--------|
| `DV/Radius/none` | `rounded-dv-none` | `0` | 0 |
| `DV/Radius/sm` | `rounded-dv-sm` | `0.375rem` | 6px |
| `DV/Radius/md` | `rounded-dv-md` | `0.5rem` | 8px |
| `DV/Radius/lg` | `rounded-dv-lg` | `0.75rem` | 12px |
| `DV/Radius/xl` | `rounded-dv-xl` | `1rem` | 16px |
| `DV/Radius/2xl` | `rounded-dv-2xl` | `1.5rem` | 24px |
| `DV/Radius/3xl` | `rounded-dv-3xl` | `2rem` | 32px |
| `DV/Radius/full` | `rounded-dv-full` | `9999px` | Full circle |

**Usage Examples:**
```tsx
<div className="rounded-dv-lg">12px rounded corners</div>
<button className="rounded-dv-xl">16px rounded button</button>
<div className="rounded-dv-full">Circular element</div>
```

---

## ✍️ Typography

### Font Sizes

| Figma Token | Tailwind Class | Value | Pixels |
|-------------|---------------|-------|--------|
| `DV/FontSize/xs` | `text-dv-xs` | `0.75rem` | 12px |
| `DV/FontSize/sm` | `text-dv-sm` | `0.875rem` | 14px |
| `DV/FontSize/base` | `text-dv-base` | `1rem` | 16px |
| `DV/FontSize/lg` | `text-dv-lg` | `1.125rem` | 18px |
| `DV/FontSize/xl` | `text-dv-xl` | `1.25rem` | 20px |
| `DV/FontSize/2xl` | `text-dv-2xl` | `1.5rem` | 24px |
| `DV/FontSize/3xl` | `text-dv-3xl` | `1.875rem` | 30px |
| `DV/FontSize/4xl` | `text-dv-4xl` | `2.25rem` | 36px |
| `DV/FontSize/5xl` | `text-dv-5xl` | `3rem` | 48px |
| `DV/FontSize/6xl` | `text-dv-6xl` | `3.75rem` | 60px |
| `DV/FontSize/7xl` | `text-dv-7xl` | `4.5rem` | 72px |

**Usage Examples:**
```tsx
<p className="text-dv-base">Body text (16px)</p>
<h1 className="text-dv-5xl">Heading (48px)</h1>
<span className="text-dv-xs">Caption (12px)</span>
```

### Font Weights

| Figma Token | Tailwind Class | Value |
|-------------|---------------|-------|
| `DV/FontWeight/regular` | `font-dv-regular` | `400` |
| `DV/FontWeight/semibold` | `font-dv-semibold` | `600` |
| `DV/FontWeight/bold` | `font-dv-bold` | `700` |

**Usage Examples:**
```tsx
<p className="font-dv-regular">Regular text</p>
<p className="font-dv-semibold">Semibold text</p>
<h1 className="font-dv-bold">Bold heading</h1>
```

---

## 🔄 How to Update

### When You Update Figma Variables:

1. **Export from Figma:**
   - Open Variables panel in Figma
   - Click three dots → Export variables
   - Save as `design/figma/variables-export.json`

2. **Sync to Tailwind:**
   ```bash
   npm run tokens:sync
   ```

3. **Verify Changes:**
   ```bash
   # Check the browser - Tailwind will hot reload
   # Visit http://localhost:8080/design to see design system
   ```

---

## 📋 Quick Reference Card

### Most Common Tokens:

**Spacing:**
- Small: `p-dv-2` (8px), `p-dv-3` (12px), `p-dv-4` (16px)
- Medium: `p-dv-6` (24px), `p-dv-8` (32px)
- Large: `p-dv-12` (48px), `p-dv-16` (64px)

**Borders:**
- Small: `rounded-dv-sm` (6px), `rounded-dv-md` (8px)
- Medium: `rounded-dv-lg` (12px), `rounded-dv-xl` (16px)
- Large: `rounded-dv-2xl` (24px), `rounded-dv-3xl` (32px)

**Colors:**
- Brand: `bg-dv-brand-pink`, `bg-dv-brand-golden`
- Light: `bg-dv-light-primary`, `bg-dv-light-card`
- Dark: `dark:bg-dv-dark-primary`, `dark:bg-dv-dark-card`

**Typography:**
- Body: `text-dv-base` (16px), `text-dv-lg` (18px)
- Headings: `text-dv-3xl` (30px), `text-dv-5xl` (48px)
- Weights: `font-dv-semibold`, `font-dv-bold`

---

## ✅ Sync Status

- **Last Figma Update:** December 3, 2025 at 16:19 GMT
- **Last Sync to Tailwind:** December 3, 2025 at 11:30 EST
- **Status:** ✅ **In Sync**

---

## 🔍 Next Steps

1. ✅ **Variables synced to Tailwind** - Use `dv-*` classes in your components
2. 🔲 **Update components** - Replace hardcoded values with DV tokens
3. 🔲 **Test dark mode** - Verify `dv-dark-*` colors work correctly
4. 🔲 **Document usage** - Add examples to component documentation

**Need help?** See:
- `design/SYNC_VARIABLES_GUIDE.md` - Manual sync process
- `design/documentation/tailwind-token-mapping.md` - Full mapping reference
- `design/START_HERE.md` - Getting started guide

