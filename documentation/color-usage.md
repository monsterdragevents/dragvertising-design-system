# Color Usage Guidelines

## Overview

The Dragvertising color system is built on semantic tokens that adapt to both light and dark modes while maintaining brand consistency across all universe contexts.

## Color Philosophy

### Principles

1. **Semantic over Literal**: Use semantic names (`primary`, `secondary`) not literal colors (`purple`, `yellow`)
2. **Context-Aware**: Colors adapt to universe roles (Talent, DJ, Producer, etc.)
3. **Accessible by Default**: All color combinations meet WCAG 2.1 AA standards (4.5:1 contrast ratio)
4. **Dark Mode Native**: Dark mode is a first-class citizen, not an afterthought

## Color Palette

### Brand Colors (Always Consistent)

```css
--brand-pink: #FD0290;        /* Dragvertising signature */
--brand-golden: #FFA726;      /* Dragvertising-inspired */
--brand-warm-orange: #FF6B35; /* Accent gradient */
```

**Usage**:
- **Pink**: Primary brand touchpoints, CTAs, hero sections
- **Golden**: Secondary accents, DJ universe theme
- **Warm Orange**: Gradient transitions, Producer universe theme

**Do**:
```tsx
<Button className="bg-[#FD0290] text-white">Brand CTA</Button>
```

**Don't**:
```tsx
<div className="text-[#FD0290]">Body text</div> {/* Use semantic colors for text */}
```

### Semantic Colors

#### Light Mode

```css
--background: hsl(0, 0%, 98%);      /* Page background */
--foreground: hsl(280, 20%, 10%);   /* Body text */
--primary: hsl(280, 85%, 50%);      /* Primary actions */
--secondary: hsl(45, 100%, 55%);    /* Secondary actions */
--muted: hsl(280, 10%, 95%);        /* Subtle backgrounds */
--accent: hsl(280, 85%, 96%);       /* Highlighted areas */
--destructive: hsl(0, 84.2%, 60.2%);/* Error/delete */
--border: hsl(280, 15%, 88%);       /* Borders, dividers */
```

#### Dark Mode

```css
--background: hsl(280, 30%, 8%);    /* Deep purple-black */
--foreground: hsl(280, 10%, 95%);   /* Light text */
--primary: hsl(280, 85%, 60%);      /* Lighter purple */
--secondary: hsl(45, 100%, 60%);    /* Brighter golden */
--muted: hsl(280, 20%, 18%);        /* Subtle backgrounds */
--accent: hsl(280, 20%, 22%);       /* Highlighted areas */
--destructive: hsl(0, 84.2%, 60.2%);/* Error/delete */
--border: hsl(280, 20%, 22%);       /* Borders, dividers */
```

## Usage Patterns

### Background Colors

```tsx
// Page background
<div className="bg-background">

// Card background
<Card className="bg-card">

// Muted background (for less emphasis)
<div className="bg-muted">

// Accent background (for highlighted sections)
<div className="bg-accent">
```

### Text Colors

```tsx
// Body text
<p className="text-foreground">

// Muted text (labels, captions)
<span className="text-muted-foreground">

// Primary text (on primary backgrounds)
<span className="text-primary-foreground">

// Destructive text (errors)
<p className="text-destructive">
```

### Interactive Elements

```tsx
// Primary button
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Primary Action
</Button>

// Secondary button
<Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
  Secondary Action
</Button>

// Destructive button
<Button variant="destructive">
  Delete
</Button>

// Ghost button (minimal)
<Button variant="ghost">
  Cancel
</Button>
```

### Borders & Dividers

```tsx
// Standard border
<div className="border border-border">

// Input border
<Input className="border-input">

// Focus ring
<Input className="focus-visible:ring-ring">
```

## Universe-Specific Colors

### Talent Universe

```tsx
const talentColors = {
  accent: 'bg-pink-500',        // Brand pink
  glow: 'shadow-glow-pink',     // Pink glow effect
  gradient: 'bg-gradient-primary' // Purple to pink
};

// Example
<Card className="border-pink-500/20 bg-gradient-to-r from-primary to-pink-500">
  <CardTitle>Talent Profile</CardTitle>
</Card>
```

### DJ Universe

```tsx
const djColors = {
  accent: 'bg-golden-500',      // Golden yellow
  glow: 'shadow-glow-golden',   // Golden glow effect
  gradient: 'bg-gradient-golden' // Golden gradient
};

// Example
<Card className="border-golden-500/20 bg-gradient-golden">
  <CardTitle>DJ Profile</CardTitle>
</Card>
```

### Producer Universe

```tsx
const producerColors = {
  accent: 'bg-warmOrange-500',  // Warm orange
  glow: 'shadow-glow-secondary', // Orange glow effect
  gradient: 'bg-gradient-secondary' // Golden to orange
};

// Example
<Card className="border-warmOrange-500/20 bg-gradient-secondary">
  <CardTitle>Producer Dashboard</CardTitle>
</Card>
```

## Gradients

### Pre-defined Gradients

```tsx
// Primary gradient (purple to pink)
<div className="bg-gradient-primary">

// Secondary gradient (golden to orange)
<div className="bg-gradient-secondary">

// Hero gradient (purple to pink to golden)
<div className="bg-gradient-hero">

// Dragvertising gradient (golden to pink to purple)
<div className="bg-gradient-dragvertising">

// Golden gradient
<div className="bg-gradient-golden">
```

### Custom Gradients

```tsx
// Horizontal gradient
<div className="bg-gradient-to-r from-primary to-pink-500">

// Vertical gradient
<div className="bg-gradient-to-b from-primary/20 to-transparent">

// Diagonal gradient with multiple stops
<div className="bg-gradient-to-br from-primary via-pink-500 to-secondary">
```

### Animated Gradients

```tsx
// Animated gradient background
<div className="bg-gradient-hero bg-300% animate-gradient">
  <h1>Hero Section</h1>
</div>
```

## Glow Effects

### Usage

Glow effects add depth and visual interest, especially in dark mode.

```tsx
// Primary glow
<Card className="shadow-glow">

// Secondary glow
<Badge className="shadow-glow-secondary">

// Golden glow
<div className="shadow-glow-golden">

// Pink glow
<Button className="shadow-glow-pink">

// Animated pulsing glow
<div className="animate-glow-pulse">
```

### When to Use Glows

**Do**:
- Hero sections and featured content
- Call-to-action buttons
- Active/selected states
- Loading indicators

**Don't**:
- Body text or regular content
- Small UI elements (too distracting)
- Every button (use sparingly)

## Opacity Modifiers

### Background Opacity

```tsx
// 50% opacity
<div className="bg-primary/50">

// 20% opacity (subtle tint)
<div className="bg-primary/20">

// 90% opacity (near solid)
<div className="bg-primary/90">
```

### Text Opacity

```tsx
// Muted text
<p className="text-foreground/70">

// Very muted (disabled state)
<span className="text-foreground/40">

// Slightly dimmed
<span className="text-foreground/90">
```

## Accessibility

### Contrast Requirements

- **Normal text**: 4.5:1 minimum contrast ratio
- **Large text** (18px+ or 14px+ bold): 3:1 minimum
- **UI components**: 3:1 minimum (borders, focus indicators)

### Checking Contrast

```tsx
// Good: High contrast
<div className="bg-primary text-primary-foreground"> {/* 13.5:1 */}

// Good: Sufficient contrast
<div className="bg-muted text-foreground"> {/* 15.2:1 */}

// Bad: Insufficient contrast
<div className="bg-primary/20 text-primary"> {/* 2.1:1 - fails WCAG AA */}
```

### Tools

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools (Inspect > Accessibility)
- [Figma A11y Plugin](https://www.figma.com/community/plugin/732603254453395948)

## Color Blindness Considerations

### Guidelines

1. **Don't rely on color alone** - Use icons, labels, patterns
2. **Test with simulators** - Validate designs with color blindness filters
3. **Use high contrast** - Ensures visibility for all users

### Example

```tsx
// Bad: Color only
<Badge className="bg-green-500">Success</Badge>
<Badge className="bg-red-500">Error</Badge>

// Good: Color + icon
<Badge className="bg-green-500">
  <CheckCircle className="w-4 h-4 mr-1" />
  Success
</Badge>
<Badge className="bg-red-500">
  <XCircle className="w-4 h-4 mr-1" />
  Error
</Badge>
```

## Dark Mode

### Automatic Adaptation

Colors automatically adapt when `.dark` class is on `<html>`:

```tsx
// Automatically adapts light/dark
<div className="bg-background text-foreground">
  <p className="text-muted-foreground">Caption text</p>
</div>
```

### Manual Dark Mode Variants

```tsx
// Light mode: white, Dark mode: dark card
<Card className="bg-white dark:bg-card">

// Light mode: gray text, Dark mode: light gray text
<p className="text-gray-700 dark:text-gray-300">
```

### Testing Dark Mode

```bash
# Toggle dark mode in development
localStorage.theme = 'dark' // Dark mode
localStorage.theme = 'light' // Light mode
localStorage.removeItem('theme') // System preference
```

## Common Mistakes

### ❌ Don't

```tsx
// Using literal colors instead of semantic tokens
<Button className="bg-purple-500">Action</Button>

// Hardcoding colors in components
<div style={{ color: '#FD0290' }}>Text</div>

// Insufficient contrast
<div className="bg-primary/20 text-primary">Low contrast</div>

// Not accounting for dark mode
<Card className="bg-white text-black">
```

### ✅ Do

```tsx
// Using semantic tokens
<Button className="bg-primary text-primary-foreground">Action</Button>

// Using Tailwind classes with tokens
<div className="text-brand-pink">Brand text</div>

// High contrast
<div className="bg-primary text-primary-foreground">High contrast</div>

// Dark mode aware
<Card className="bg-card text-card-foreground">
```

## Testing Checklist

- [ ] All text meets contrast requirements (4.5:1 minimum)
- [ ] Colors work in both light and dark mode
- [ ] Interactive states (hover, focus, active) are visible
- [ ] Color blind users can distinguish states
- [ ] Focus indicators are clearly visible
- [ ] Brand colors used appropriately
- [ ] Universe-specific colors applied correctly
- [ ] Gradients and glows used sparingly

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)
- [Color Oracle (Color Blind Simulator)](https://colororacle.org/)
- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)

