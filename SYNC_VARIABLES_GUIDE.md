# 📝 Syncing Figma Variables & Spacing to Tailwind

## 🎯 Quick Reference: What You Just Updated

You mentioned you updated:
- **Variables** in Figma
- **Spacing** tokens in Figma

This guide will help you sync those changes to your codebase.

---

## 🔄 Manual Sync Process (Recommended)

Since the Figma API requires special scopes for variable access, here's the manual workflow:

### Step 1: Export Variables from Figma

1. Open your Figma file: [Dragvertising Design System](https://www.figma.com/design/KFTuue8HhKSz8og1Q5qukp/Dragvertising-App)
2. Open the **Variables** panel (right sidebar → Variables tab)
3. Click the **three dots** menu → **Export variables**
4. Choose JSON format
5. Save as `design/figma/variables-export-NEW.json`

### Step 2: Review Your Changes

Open the exported JSON and identify what changed:

**For Colors/Variables:**
```json
{
  "variableCollections": [...],
  "variables": {
    "dv-primary": { "value": "#FD0290" },
    "dv-spacing-4": { "value": "16px" },
    // ... your new values
  }
}
```

### Step 3: Update Tailwind Config

#### For Color Variables:

**File:** `tailwind.config.ts`

```typescript
// Add to theme.extend.colors
colors: {
  dv: {
    // Brand colors from Figma
    primary: "#FD0290",        // DV/Brand/Primary
    secondary: "#...",          // DV/Brand/Secondary
    accent: "#FFA726",         // DV/Brand/Accent
    
    // Surface colors
    surface: {
      DEFAULT: "#...",         // DV/Surface/Default
      card: "#...",            // DV/Surface/Card
      elevated: "#...",        // DV/Surface/Elevated
    },
    
    // Add more as needed
  }
}
```

#### For Spacing Variables:

**File:** `tailwind.config.ts`

```typescript
// Add to theme.extend.spacing
spacing: {
  // Your Figma spacing scale
  'dv-1': '4px',     // DV/Spacing/1
  'dv-2': '8px',     // DV/Spacing/2
  'dv-3': '12px',    // DV/Spacing/3
  'dv-4': '16px',    // DV/Spacing/4
  'dv-6': '24px',    // DV/Spacing/6
  'dv-8': '32px',    // DV/Spacing/8
  'dv-12': '48px',   // DV/Spacing/12
  'dv-16': '64px',   // DV/Spacing/16
  'dv-24': '96px',   // DV/Spacing/24
  'dv-32': '128px',  // DV/Spacing/32
}
```

#### For Border Radius:

```typescript
// Add to theme.extend.borderRadius
borderRadius: {
  'dv-xs': '4px',    // DV/Radius/XS
  'dv-sm': '8px',    // DV/Radius/SM
  'dv-md': '12px',   // DV/Radius/MD
  'dv-lg': '16px',   // DV/Radius/LG
  'dv-xl': '24px',   // DV/Radius/XL
  'dv-2xl': '32px',  // DV/Radius/2XL
  'dv-full': '9999px', // DV/Radius/Full
}
```

### Step 4: Update CSS Variables (if needed)

If you're using CSS variables in components, update them too:

**File:** `src/index.css`

```css
:root {
  /* DV Colors */
  --dv-primary: 253 2 144;        /* #FD0290 in RGB */
  --dv-accent: 255 167 38;        /* #FFA726 in RGB */
  
  /* DV Spacing (for calculations) */
  --dv-spacing-base: 4px;
  
  /* DV Radius */
  --dv-radius-card: 16px;
  
  /* ... add more as needed */
}

.dark {
  /* Dark mode overrides */
  --dv-primary: 253 2 144;
  /* ... */
}
```

### Step 5: Update Component Mapping Documentation

**File:** `design/documentation/tailwind-token-mapping.md`

Document the new mappings:

```markdown
## Color Tokens

| Figma Variable | Tailwind Class | CSS Variable | Value |
|---------------|----------------|--------------|-------|
| DV/Brand/Primary | `bg-dv-primary` | `--dv-primary` | #FD0290 |
| DV/Brand/Accent | `bg-dv-accent` | `--dv-accent` | #FFA726 |

## Spacing Tokens

| Figma Variable | Tailwind Class | Value |
|---------------|----------------|-------|
| DV/Spacing/4 | `p-dv-4`, `m-dv-4` | 16px |
| DV/Spacing/8 | `p-dv-8`, `m-dv-8` | 32px |

## Border Radius Tokens

| Figma Variable | Tailwind Class | Value |
|---------------|----------------|-------|
| DV/Radius/Card | `rounded-dv-lg` | 16px |
| DV/Radius/XL | `rounded-dv-xl` | 24px |
```

### Step 6: Test Your Changes

1. **Restart dev server:**
   ```bash
   npm run dev
   ```

2. **Test components that use your tokens:**
   - Check card components: `http://localhost:8080/design`
   - Verify spacing looks correct
   - Check colors match Figma
   - Test in both light and dark mode

3. **Use browser DevTools:**
   - Inspect elements
   - Check computed values match Figma

---

## 🚀 Quick Update Workflow

**For future updates, follow this pattern:**

1. **Update in Figma** → Make changes to variables
2. **Export from Figma** → Variables panel → Export JSON
3. **Compare changes** → See what values changed
4. **Update Tailwind** → Sync values to `tailwind.config.ts`
5. **Update CSS** → Sync to `src/index.css` if needed
6. **Update docs** → Keep mapping docs in sync
7. **Test** → Restart dev server and verify

---

## 📋 What to Tell Me

To help me update the code for you, tell me:

1. **What variables did you change?**
   - Example: "I updated DV/Brand/Primary to #FF0055"
   - Example: "I changed DV/Spacing/4 from 16px to 20px"

2. **What type of tokens?**
   - Colors? (RGB, HSL, hex?)
   - Spacing? (px, rem?)
   - Border radius?
   - Typography?
   - Shadows?

3. **Export the JSON** (optional but helpful):
   - Export variables from Figma
   - Share the relevant section

---

## 🎨 Current Token Namespaces

Your design system uses these prefixes:

### Colors:
- `dv-*` → Design tokens (e.g., `bg-dv-primary`)
- `pink-*` → Brand pink shades
- `golden-*` → Golden yellow accent
- `warmOrange-*` → Warm orange for gradients

### Spacing:
- `dv-*` → Custom spacing scale (e.g., `p-dv-4`)
- Standard Tailwind spacing still works (e.g., `p-4`)

### Border Radius:
- `dv-*` → Custom radius scale (e.g., `rounded-dv-xl`)
- Standard Tailwind radius still works (e.g., `rounded-lg`)

---

## 💡 Pro Tips

1. **Use semantic names:**
   - ✅ `bg-dv-primary` (what it IS)
   - ❌ `bg-dv-pink-500` (what it LOOKS like)

2. **Keep Figma as source of truth:**
   - Update in Figma first
   - Then sync to code
   - Not the other way around

3. **Document as you go:**
   - Update `tailwind-token-mapping.md` when you add tokens
   - Keep examples in `component-naming.md`

4. **Test in both modes:**
   - Always check light AND dark mode
   - Some tokens may need different values per mode

---

## 🔧 Automated Sync (Future)

Once we get the proper Figma API scopes, we can automate this:

```bash
# Future workflow (once API access is set up)
npm run tokens:extract  # Extract from Figma
npm run tokens:generate # Generate Tailwind config
npm run tokens:sync     # Do both + rebuild
```

For now, manual sync is more reliable and gives you more control.

---

## ❓ Need Help?

Just tell me what you changed in Figma, and I'll:
1. Update `tailwind.config.ts`
2. Update `src/index.css` (if needed)
3. Update the mapping documentation
4. Restart the dev server

**Example:**
> "I updated the primary color to #FF0055 and changed spacing-4 to 20px"

And I'll make the changes! 🚀

