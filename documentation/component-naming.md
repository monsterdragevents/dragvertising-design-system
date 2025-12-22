# Component Naming Convention Guide

## Overview

**One Figma component = One React component** with consistent naming across both platforms.

## Naming Structure

### Figma Components

```
cmp / [category] / [component-name]
```

**Examples:**
- `cmp / card / talent-browse`
- `cmp / card / show-preview`
- `cmp / nav / universe-switcher`
- `cmp / layout / dashboard-shell`
- `cmp / button / primary`
- `cmp / form / input-text`

### React Components

```typescript
// src/components/[category]/[ComponentName].tsx
```

**Examples:**
- `src/components/card/TalentBrowseCard.tsx`
- `src/components/card/ShowPreviewCard.tsx`
- `src/components/nav/UniverseSwitcher.tsx`
- `src/components/layout/DashboardShell.tsx`
- `src/components/button/PrimaryButton.tsx`
- `src/components/form/InputText.tsx`

## Complete Mapping

### Category: Cards

| Figma Component | React Component | File Path |
|----------------|-----------------|-----------|
| `cmp / card / talent-browse` | `TalentBrowseCard` | `src/components/card/TalentBrowseCard.tsx` |
| `cmp / card / dj-browse` | `DJBrowseCard` | `src/components/card/DJBrowseCard.tsx` |
| `cmp / card / show-preview` | `ShowPreviewCard` | `src/components/card/ShowPreviewCard.tsx` |
| `cmp / card / venue-preview` | `VenuePreviewCard` | `src/components/card/VenuePreviewCard.tsx` |
| `cmp / card / event-card` | `EventCard` | `src/components/card/EventCard.tsx` |
| `cmp / card / application-card` | `ApplicationCard` | `src/components/card/ApplicationCard.tsx` |
| `cmp / card / metric-tile` | `MetricTile` | `src/components/card/MetricTile.tsx` |

### Category: Navigation

| Figma Component | React Component | File Path |
|----------------|-----------------|-----------|
| `cmp / nav / universe-switcher` | `UniverseSwitcher` | `src/components/nav/UniverseSwitcher.tsx` |
| `cmp / nav / main-nav` | `MainNav` | `src/components/nav/MainNav.tsx` |
| `cmp / nav / sidebar` | `Sidebar` | `src/components/nav/Sidebar.tsx` |
| `cmp / nav / breadcrumbs` | `Breadcrumbs` | `src/components/nav/Breadcrumbs.tsx` |
| `cmp / nav / tabs` | `Tabs` | `src/components/nav/Tabs.tsx` |

### Category: Layout

| Figma Component | React Component | File Path |
|----------------|-----------------|-----------|
| `cmp / layout / dashboard-shell` | `DashboardShell` | `src/components/layout/DashboardShell.tsx` |
| `cmp / layout / page-header` | `PageHeader` | `src/components/layout/PageHeader.tsx` |
| `cmp / layout / content-wrapper` | `ContentWrapper` | `src/components/layout/ContentWrapper.tsx` |
| `cmp / layout / grid-layout` | `GridLayout` | `src/components/layout/GridLayout.tsx` |

### Category: Buttons

| Figma Component | React Component | File Path |
|----------------|-----------------|-----------|
| `cmp / button / primary` | `PrimaryButton` | `src/components/button/PrimaryButton.tsx` |
| `cmp / button / secondary` | `SecondaryButton` | `src/components/button/SecondaryButton.tsx` |
| `cmp / button / ghost` | `GhostButton` | `src/components/button/GhostButton.tsx` |
| `cmp / button / icon` | `IconButton` | `src/components/button/IconButton.tsx` |

### Category: Forms

| Figma Component | React Component | File Path |
|----------------|-----------------|-----------|
| `cmp / form / input-text` | `InputText` | `src/components/form/InputText.tsx` |
| `cmp / form / input-email` | `InputEmail` | `src/components/form/InputEmail.tsx` |
| `cmp / form / textarea` | `Textarea` | `src/components/form/Textarea.tsx` |
| `cmp / form / select` | `Select` | `src/components/form/Select.tsx` |
| `cmp / form / checkbox` | `Checkbox` | `src/components/form/Checkbox.tsx` |

### Category: Modals

| Figma Component | React Component | File Path |
|----------------|-----------------|-----------|
| `cmp / modal / dialog` | `Dialog` | `src/components/modal/Dialog.tsx` |
| `cmp / modal / drawer` | `Drawer` | `src/components/modal/Drawer.tsx` |
| `cmp / modal / sheet` | `Sheet` | `src/components/modal/Sheet.tsx` |

### Category: Feedback

| Figma Component | React Component | File Path |
|----------------|-----------------|-----------|
| `cmp / feedback / toast` | `Toast` | `src/components/feedback/Toast.tsx` |
| `cmp / feedback / alert` | `Alert` | `src/components/feedback/Alert.tsx` |
| `cmp / feedback / loading` | `Loading` | `src/components/feedback/Loading.tsx` |
| `cmp / feedback / empty-state` | `EmptyState` | `src/components/feedback/EmptyState.tsx` |

## Variant System

### Figma Variants → React Props

**Rule**: If a React component has a `variant` prop, make that a Figma variant.

#### Example: TalentBrowseCard

**Figma Variants:**
```
cmp / card / talent-browse
├── state = default
├── state = hover
├── state = loading
└── state = empty
```

**React Props:**
```typescript
type TalentBrowseCardProps = {
  state?: "default" | "hover" | "loading" | "empty";
  name: string;
  avatar?: string;
  bio?: string;
};

export function TalentBrowseCard({ 
  state = "default", 
  name, 
  avatar, 
  bio 
}: TalentBrowseCardProps) {
  return (
    <Card className={cn(
      "talent-browse-card",
      state === "hover" && "shadow-glow-pink",
      state === "loading" && "animate-pulse",
      state === "empty" && "opacity-50"
    )}>
      {/* ... */}
    </Card>
  );
}
```

#### Example: PrimaryButton

**Figma Variants:**
```
cmp / button / primary
├── size = sm
├── size = md
├── size = lg
├── state = default
├── state = hover
├── state = pressed
└── state = disabled
```

**React Props:**
```typescript
type PrimaryButtonProps = {
  size?: "sm" | "md" | "lg";
  state?: "default" | "hover" | "pressed" | "disabled";
  children: React.ReactNode;
};

export function PrimaryButton({ 
  size = "md", 
  state = "default", 
  children 
}: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "bg-dv-primary text-white rounded-dv-lg",
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2 text-base",
        size === "lg" && "px-6 py-3 text-lg",
        state === "hover" && "shadow-dv-button-hover",
        state === "disabled" && "opacity-50 cursor-not-allowed"
      )}
      disabled={state === "disabled"}
    >
      {children}
    </button>
  );
}
```

## Naming Rules

### ✅ Do

1. **Use consistent prefixes**: `cmp /` for all components
2. **Use kebab-case in Figma**: `talent-browse`, `universe-switcher`
3. **Use PascalCase in React**: `TalentBrowseCard`, `UniverseSwitcher`
4. **Match variants to props**: Figma variant `state=hover` → React prop `state="hover"`
5. **Group by category**: `card`, `nav`, `layout`, `form`, `button`, etc.
6. **Use descriptive names**: `talent-browse` not just `card-1`

### ❌ Don't

1. **Don't use different names**: Figma `talent-card` ≠ React `TalentBrowseCard`
2. **Don't skip categories**: Use `cmp / card / talent-browse`, not `cmp / talent-browse`
3. **Don't use CamelCase in Figma**: Use `talent-browse`, not `talentBrowse`
4. **Don't use kebab-case in React**: Use `TalentBrowseCard`, not `talent-browse-card`
5. **Don't create variants without props**: Every Figma variant should map to a React prop

## File Organization

### React Component Structure

```
src/components/
├── card/
│   ├── TalentBrowseCard.tsx
│   ├── DJBrowseCard.tsx
│   ├── ShowPreviewCard.tsx
│   └── index.ts
├── nav/
│   ├── UniverseSwitcher.tsx
│   ├── MainNav.tsx
│   ├── Sidebar.tsx
│   └── index.ts
├── layout/
│   ├── DashboardShell.tsx
│   ├── PageHeader.tsx
│   └── index.ts
├── button/
│   ├── PrimaryButton.tsx
│   ├── SecondaryButton.tsx
│   └── index.ts
└── form/
    ├── InputText.tsx
    ├── Select.tsx
    └── index.ts
```

### Index Files

Export all components from category index files:

```typescript
// src/components/card/index.ts
export { TalentBrowseCard } from './TalentBrowseCard';
export { DJBrowseCard } from './DJBrowseCard';
export { ShowPreviewCard } from './ShowPreviewCard';
export { VenuePreviewCard } from './VenuePreviewCard';
```

## Figma Organization

### Component Pages Structure

```
📁 Components
├── 🃏 Cards
│   ├── cmp / card / talent-browse
│   ├── cmp / card / dj-browse
│   ├── cmp / card / show-preview
│   └── cmp / card / venue-preview
├── 🧭 Navigation
│   ├── cmp / nav / universe-switcher
│   ├── cmp / nav / main-nav
│   └── cmp / nav / sidebar
├── 📐 Layout
│   ├── cmp / layout / dashboard-shell
│   ├── cmp / layout / page-header
│   └── cmp / layout / content-wrapper
├── 🔘 Buttons
│   ├── cmp / button / primary
│   ├── cmp / button / secondary
│   └── cmp / button / ghost
└── 📝 Forms
    ├── cmp / form / input-text
    ├── cmp / form / select
    └── cmp / form / checkbox
```

## Component Documentation

### In Figma

Add component descriptions:

```
Component: cmp / card / talent-browse

Description:
Browse card for talent profiles. Shows avatar, name, pronouns, and bio.

Props:
- state: default | hover | loading | empty
- Variants match React props exactly

React Path: src/components/card/TalentBrowseCard.tsx

Usage:
<TalentBrowseCard state="default" name="..." avatar="..." bio="..." />
```

### In React

Add JSDoc comments:

```typescript
/**
 * TalentBrowseCard
 * 
 * Browse card for talent profiles in browse view.
 * 
 * Figma: cmp / card / talent-browse
 * 
 * @param state - Card state (default | hover | loading | empty)
 * @param name - Talent display name
 * @param avatar - Avatar URL (optional)
 * @param bio - Short bio (optional)
 * 
 * @example
 * <TalentBrowseCard 
 *   state="default" 
 *   name="Demented X" 
 *   avatar="..." 
 *   bio="Drag performer..." 
 * />
 */
export function TalentBrowseCard({ ... }: TalentBrowseCardProps) {
  // ...
}
```

## Workflow: Figma → design.to.html → Cursor

### Step 1: Design in Figma

1. Create component: `cmp / card / talent-browse`
2. Add variants: `state=default`, `state=hover`
3. Apply design tokens (colors, spacing, shadows)
4. Document props in description

### Step 2: Copy Figma URL

1. Select component in Figma
2. Copy link: `https://figma.com/design/FILE_KEY/...?node-id=123:456`

### Step 3: Generate in Cursor

```
@figma get_design_context [paste Figma URL]
```

MCP + design.to.html will:
- Extract the component design
- Detect if component exists (e.g., `Card` from shadcn/ui)
- Generate React code using existing primitives
- Apply Tailwind classes with DV tokens
- Match variants to props

### Step 4: Save Component

1. Review generated code
2. Save to: `src/components/card/TalentBrowseCard.tsx`
3. Export from: `src/components/card/index.ts`
4. Test in Storybook

## Conversion Examples

### Example 1: Simple Component

**Figma:** `cmp / button / primary`

**Generated React:**
```typescript
// src/components/button/PrimaryButton.tsx
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export function PrimaryButton({ 
  children, 
  size = "md", 
  onClick 
}: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "bg-dv-primary text-white rounded-dv-lg font-semibold",
        "hover:bg-dv-primary-hover active:bg-dv-primary-pressed",
        "transition-colors duration-200",
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2 text-base",
        size === "lg" && "px-6 py-3 text-lg"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Example 2: Complex Component

**Figma:** `cmp / card / talent-browse`

**Generated React:**
```typescript
// src/components/card/TalentBrowseCard.tsx
import { Card, CardContent } from "@/ui/primitives/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/ui/primitives/avatar";
import { Badge } from "@/ui/primitives/badge";
import { cn } from "@/lib/utils";

interface TalentBrowseCardProps {
  state?: "default" | "hover" | "loading" | "empty";
  name: string;
  handle: string;
  avatar?: string;
  bio?: string;
  pronouns?: string;
  onClick?: () => void;
}

export function TalentBrowseCard({ 
  state = "default",
  name,
  handle,
  avatar,
  bio,
  pronouns,
  onClick
}: TalentBrowseCardProps) {
  return (
    <Card
      className={cn(
        "talent-browse-card cursor-pointer transition-all duration-200",
        "border-dv-border bg-dv-surface-card rounded-dv-xl p-dv-4",
        state === "hover" && "shadow-dv-card-hover border-dv-primary",
        state === "loading" && "animate-pulse opacity-75",
        state === "empty" && "opacity-50 cursor-not-allowed"
      )}
      onClick={state !== "disabled" ? onClick : undefined}
    >
      <CardContent className="flex gap-dv-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-dv-foreground truncate">
              {name}
            </h3>
            {pronouns && (
              <Badge variant="secondary" className="text-xs">
                {pronouns}
              </Badge>
            )}
          </div>
          
          <p className="text-sm text-dv-muted mb-1">@{handle}</p>
          
          {bio && (
            <p className="text-sm text-dv-foreground-secondary line-clamp-2">
              {bio}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
```

## Quick Reference

| Concept | Figma | React |
|---------|-------|-------|
| **Naming** | `cmp / card / talent-browse` | `TalentBrowseCard` |
| **Path** | Components page | `src/components/card/TalentBrowseCard.tsx` |
| **Variants** | `state=default` | `state="default"` |
| **Props** | Figma variants | TypeScript interface |
| **Tokens** | Variables | `bg-dv-primary` |

---

**Remember**: One Figma component = One React component. Keep naming consistent and variants in sync!

