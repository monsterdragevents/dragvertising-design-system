# 🎨 Figma Integration Guide

## Complete Integration Options

We have **3 ways** to work with Figma:

1. **Talk to Figma MCP** (Real-time bidirectional sync)
2. **code.to.design API** (Automated component export)
3. **html.to.design MCP** (Reverse workflow: Code → Figma)

---

## Option 1: Talk to Figma MCP

### What it does:
- **Real-time connection** between Cursor and Figma
- **Bidirectional sync**: Read and write to Figma
- **Direct manipulation**: Create, update, delete components programmatically

### Setup:

1. **Install MCP Server**:
   ```bash
   bunx cursor-talk-to-figma-socket
   ```

2. **Connect to Figma**:
   - Open your Figma file
   - Run the plugin "Talk to Figma"
   - Plugin establishes WebSocket connection

3. **Verify Connection**:
   - Check Cursor status bar for "Talk to Figma: Connected"
   - WebSocket server runs on `ws://localhost:3333`

### Usage:

```typescript
// Get document info
mcp_TalkToFigma_get_document_info()

// Create a frame
mcp_TalkToFigma_create_frame({
  x: 0,
  y: 0,
  width: 375,
  height: 812,
  name: "cmp / card / talent-browse",
  fillColor: { r: 1, g: 1, b: 1, a: 1 }
})

// Create text
mcp_TalkToFigma_create_text({
  x: 20,
  y: 20,
  text: "Hello Dragvertising!",
  fontSize: 24,
  fontWeight: 600
})

// Set fill color
mcp_TalkToFigma_set_fill_color({
  nodeId: "123:456",
  r: 0.99,
  g: 0.01,
  b: 0.56,
  a: 1
})
```

### Best for:
- Creating design system structure
- Automating component creation
- Real-time design → code workflow
- Setting up variables and styles

---

## Option 2: code.to.design API

### What it does:
- **Export Figma components** to React/Tailwind code
- **Automated conversion** with proper naming
- **Batch export** multiple components at once

### Setup:

1. **API Key** (configure in your environment):
   ```
   YOUR_CODE_TO_DESIGN_API_KEY_HERE
   ```
   > **Note**: Get your API key from [code.to.design](https://code.to.design) dashboard

2. **Environment** (.env.local):
   ```bash
   CODE_TO_DESIGN_API_KEY=YOUR_CODE_TO_DESIGN_API_KEY_HERE
   FIGMA_FILE_KEY=KFTuue8HhKSz8og1Q5qukp
   ```

### Usage:

```bash
# Export a single component
npm run design:export "button"

# Export multiple components
npm run design:export "button,card,nav"

# Export all components
npm run design:export "all"
```

### Script Details:

The script (`scripts/code-to-design-export.js`):
1. Connects to code.to.design API
2. Finds component by name in Figma
3. Generates React/Tailwind code
4. Saves to `src/components/[category]/[Name].tsx`
5. Applies proper Tailwind classes using our token mapping

### Output Example:

```tsx
// src/components/button/PrimaryButton.tsx
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  size?: "sm" | "md" | "lg";
  state?: "default" | "hover" | "pressed" | "disabled";
  children: React.ReactNode;
}

export const PrimaryButton = ({ 
  size = "md", 
  state = "default",
  children 
}: PrimaryButtonProps) => {
  return (
    <button
      className={cn(
        "bg-dv-primary text-primary-foreground",
        "rounded-dv-xl shadow-dv-card",
        "font-semibold transition-all",
        {
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg",
          "opacity-50 cursor-not-allowed": state === "disabled",
          "hover:shadow-lg": state === "hover"
        }
      )}
    >
      {children}
    </button>
  );
};
```

### Best for:
- Converting finalized designs to code
- Batch component generation
- Automated CI/CD pipeline
- Maintaining design → code sync

---

## Option 3: html.to.design MCP

### What it does:
- **Reverse workflow**: Code → Figma
- **Push React components** to Figma
- **Keep Figma in sync** with code changes

### Setup:

1. **Install MCP Server** (if not already installed):
   ```bash
   # Already included in Talk to Figma setup
   ```

2. **API Configuration**:
   ```bash
   # Same API key as code.to.design
   HTML_TO_DESIGN_API_KEY=YOUR_CODE_TO_DESIGN_API_KEY_HERE
   ```
   > **Note**: Use the same API key from code.to.design

### Usage:

```bash
# Push a component to Figma
npm run design:push "src/components/button/PrimaryButton.tsx"

# Push multiple components
npm run design:push "src/components/**/*.tsx"
```

### Best for:
- Code-first workflow
- Pushing existing components to Figma
- Keeping Figma updated with code changes
- Developer-driven design system

---

## Complete Workflow

### Workflow A: Design → Code (Traditional)

1. **Design in Figma** (using Talk to Figma MCP)
   ```bash
   # Create component structure
   mcp_TalkToFigma_create_frame(...)
   ```

2. **Export to Code** (using code.to.design API)
   ```bash
   npm run design:export "button"
   ```

3. **Refine in Code** (Cursor)
   - Add TypeScript types
   - Add business logic
   - Test component

4. **Push Updates to Figma** (using html.to.design MCP)
   ```bash
   npm run design:push "src/components/button/PrimaryButton.tsx"
   ```

### Workflow B: Code → Design (Developer-first)

1. **Code Component** (Cursor)
   ```tsx
   // src/components/card/TalentBrowseCard.tsx
   export const TalentBrowseCard = () => { ... }
   ```

2. **Push to Figma** (using html.to.design MCP)
   ```bash
   npm run design:push "src/components/card/TalentBrowseCard.tsx"
   ```

3. **Refine in Figma** (using Talk to Figma MCP)
   - Adjust spacing, colors
   - Add variants
   - Document usage

4. **Sync Changes** (using code.to.design API)
   ```bash
   npm run design:export "card"
   ```

---

## Current Status

### ✅ Configured:
- Talk to Figma MCP (WebSocket ready)
- code.to.design API (API key set)
- html.to.design MCP (API key set)
- Figma file identified: `KFTuue8HhKSz8og1Q5qukp`

### ⚠️ Needs Setup:
1. **Create design token variables** in Figma
   - Use Variables Importer plugin
   - Import `design/figma/variables-export.json`

2. **Create component structure** in Figma
   - Use Talk to Figma MCP
   - Follow naming convention: `cmp / category / name`

3. **Test export workflow**
   - Export first component
   - Verify Tailwind classes
   - Refine token mapping

---

## Troubleshooting

### Issue: "Must join a channel before sending commands"
**Solution**: The Talk to Figma plugin must be running in Figma first

### Issue: "Component not found"
**Solution**: Ensure component exists in Figma with exact name: `cmp / category / name`

### Issue: "API key invalid"
**Solution**: Check API key in .env.local matches code.to.design settings

### Issue: "WebSocket connection failed"
**Solution**: 
1. Check `bunx cursor-talk-to-figma-socket` is running
2. Verify Figma plugin is connected
3. Check port 3333 is not blocked

---

## Next Steps

### Immediate Actions:

1. **Create Variables** (5 min)
   ```bash
   # Generate variables export
   npm run tokens:generate
   
   # Import in Figma via Variables Importer plugin
   ```

2. **Create First Component** (10 min)
   - Use Talk to Figma MCP to create `cmp / button / primary`
   - Apply DV variables
   - Add variants (size, state)

3. **Test Export** (5 min)
   ```bash
   npm run design:export "button"
   ```

4. **Verify Output** (5 min)
   - Check `src/components/button/PrimaryButton.tsx`
   - Verify Tailwind classes match tokens
   - Test component in Storybook

### Long-term Goals:

- ✅ **Phase 1**: Design token variables (variables-export.json ready)
- 🚧 **Phase 2**: Component structure (in progress)
- ⏳ **Phase 3**: Automated export pipeline
- ⏳ **Phase 4**: CI/CD integration
- ⏳ **Phase 5**: Full bidirectional sync

---

## Resources

- **Figma File**: https://figma.com/file/KFTuue8HhKSz8og1Q5qukp
- **Variables Export**: `design/figma/variables-export.json`
- **Component Mapping**: `design/figma/component-mapping.json`
- **Tailwind Mapping**: `design/documentation/tailwind-token-mapping.md`
- **API Documentation**: https://docs-code.to.design

---

Generated: 2025-12-03
