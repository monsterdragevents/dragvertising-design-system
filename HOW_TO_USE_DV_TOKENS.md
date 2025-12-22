# 🎨 How to Use DV Tokens in Your Components

## The Issue

The **DV tokens have been successfully added to Tailwind config**, but the visual components on http://localhost:8080/design haven't been updated to use them yet.

The tokens are **ready and available**, but you need to update your component classes to use them.

---

## ✅ What's Ready

All 131 DV tokens are in `tailwind.config.ts`:
- ✅ Colors: `bg-dv-brand-pink`, `bg-dv-brand-golden`, `bg-dv-brand-warm-orange`
- ✅ Spacing: `p-dv-4`, `m-dv-6`, `gap-dv-8`
- ✅ Border Radius: `rounded-dv-xl`, `rounded-dv-2xl`
- ✅ Typography: `text-dv-2xl`, `font-dv-bold`

---

## 🔧 What Needs to Be Done

Update `src/components/shared/DesignHomePage.tsx` to use DV tokens instead of hardcoded values.

### Example: Hero Section

**Current code (line ~109):**
```tsx
<div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in">
  <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black tracking-tight leading-[1.1]">
    <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 dark:from-purple-400 dark:via-pink-400 dark:to-orange-300 bg-clip-text text-transparent">
      The Operating<br/>System for Drag<br/>Entertainment
    </span>
  </h1>
</div>
```

**Updated with DV tokens:**
```tsx
<div className="text-center lg:text-left space-y-dv-6 lg:space-y-dv-8 animate-fade-in">
  <h1 className="text-dv-5xl sm:text-dv-5xl md:text-dv-6xl lg:text-dv-7xl xl:text-dv-7xl font-dv-bold tracking-tight leading-[1.1]">
    <span className="bg-gradient-to-r from-dv-light-primary via-dv-brand-pink to-dv-brand-warm-orange dark:from-dv-dark-primary dark:via-dv-brand-pink dark:to-dv-brand-warm-orange bg-clip-text text-transparent">
      The Operating<br/>System for Drag<br/>Entertainment
    </span>
  </h1>
</div>
```

### Example: Button Styles

**Current code:**
```tsx
<Button 
  size="lg" 
  className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500"
>
  Get Early Access
</Button>
```

**Updated with DV tokens:**
```tsx
<Button 
  size="lg" 
  className="bg-gradient-to-r from-dv-light-primary via-dv-brand-pink to-dv-brand-warm-orange hover:from-dv-dark-primary hover:via-dv-brand-pink hover:to-dv-brand-warm-orange rounded-dv-xl px-dv-6 py-dv-3"
>
  Get Early Access
</Button>
```

### Example: Card Styles

**Current code:**
```tsx
<Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-purple-200 dark:border-purple-800 p-6 rounded-2xl">
  <CardContent>
    ...
  </CardContent>
</Card>
```

**Updated with DV tokens:**
```tsx
<Card className="bg-dv-light-card/50 dark:bg-dv-dark-card/50 backdrop-blur-sm border-dv-light-border dark:border-dv-dark-border p-dv-6 rounded-dv-2xl">
  <CardContent>
    ...
  </CardContent>
</Card>
```

---

## 📝 Quick Find & Replace Guide

Here are the most common replacements needed in `DesignHomePage.tsx`:

| Old Class | New DV Token Class |
|-----------|-------------------|
| `space-y-6` | `space-y-dv-6` |
| `space-y-8` | `space-y-dv-8` |
| `p-6` | `p-dv-6` |
| `p-8` | `p-dv-8` |
| `rounded-2xl` | `rounded-dv-2xl` |
| `rounded-xl` | `rounded-dv-xl` |
| `text-5xl` | `text-dv-5xl` |
| `text-6xl` | `text-dv-6xl` |
| `text-7xl` | `text-dv-7xl` |
| `text-2xl` | `text-dv-2xl` |
| `font-black` | `font-dv-bold` |
| `font-bold` | `font-dv-bold` |
| `font-semibold` | `font-dv-semibold` |
| `from-purple-600` | `from-dv-light-primary` |
| `via-pink-500` | `via-dv-brand-pink` |
| `to-orange-400` | `to-dv-brand-warm-orange` |

---

## 🎯 Step-by-Step Update Process

### Option 1: Manual Update (Recommended for Learning)

1. Open `src/components/shared/DesignHomePage.tsx`
2. Find instances of hardcoded spacing (e.g., `p-6`, `space-y-8`)
3. Replace with DV tokens (e.g., `p-dv-6`, `space-y-dv-8`)
4. Find instances of brand colors (e.g., `purple-600`, `pink-500`, `orange-400`)
5. Replace with DV tokens (e.g., `dv-light-primary`, `dv-brand-pink`, `dv-brand-warm-orange`)
6. Save and check http://localhost:8080/design in your browser

### Option 2: Use Search & Replace

In VS Code / Cursor:
1. Open `DesignHomePage.tsx`
2. Press `Cmd+H` (Mac) or `Ctrl+H` (Windows) for Find & Replace
3. Replace old classes with DV tokens one by one
4. Save and verify

---

## 🧪 Testing Your Changes

After updating the component:

1. **Check the browser** - Visit http://localhost:8080/design
2. **Inspect elements** - Use DevTools to verify DV classes are applied
3. **Toggle dark mode** - Verify dark mode colors work (`dv-dark-*` classes)
4. **Test responsiveness** - Check spacing looks good on mobile/desktop

---

## 🎨 Color Reference for DesignHomePage

### Primary Gradient (Hero Heading)
```tsx
// Old:
from-purple-600 via-pink-500 to-orange-400

// New:
from-dv-light-primary via-dv-brand-pink to-dv-brand-warm-orange
```

### Button Gradients
```tsx
// Old:
bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400

// New:
bg-gradient-to-r from-dv-light-primary via-dv-brand-pink to-dv-brand-warm-orange
```

### Card Backgrounds
```tsx
// Old:
bg-white/50 dark:bg-gray-900/50

// New:
bg-dv-light-card/50 dark:bg-dv-dark-card/50
```

### Borders
```tsx
// Old:
border-purple-200 dark:border-purple-800

// New:
border-dv-light-border dark:border-dv-dark-border
```

---

## 💡 Pro Tips

1. **Use VS Code/Cursor Multi-Cursor** - Select all instances of a class and replace them all at once
2. **Test incrementally** - Update one section at a time, verify it looks good, then move to the next
3. **Keep dark mode in mind** - Always add `dark:bg-dv-dark-*` alongside `bg-dv-light-*`
4. **Check Tailwind IntelliSense** - Your editor should now autocomplete `dv-*` classes

---

## 📖 Full Token Reference

See `design/FIGMA_TAILWIND_SYNC.md` for the complete mapping of all 131 DV tokens.

---

## ✅ Expected Result

Once you update `DesignHomePage.tsx` with DV tokens, you'll see:
- ✅ Consistent spacing using Figma values
- ✅ Brand colors matching Figma exactly
- ✅ Typography sizes matching Figma
- ✅ Border radius matching Figma

The visual design will **look the same**, but now it uses your Figma design system tokens instead of hardcoded values. This means:
- Changes in Figma automatically sync to code
- Design system is consistent across all components
- Easier to maintain and update

---

## 🚀 Next Steps

1. Update `src/components/shared/DesignHomePage.tsx` to use DV tokens
2. Test on http://localhost:8080/design
3. Once satisfied, update other components to use DV tokens
4. Document any new patterns you discover

**Need help?** Check:
- `design/FIGMA_TAILWIND_SYNC.md` - Full token reference
- `design/SYNC_COMPLETE.md` - What was synced
- `design/DESIGN_TOKENS_DEMO.md` - Testing guide

