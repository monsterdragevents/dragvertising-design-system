# Interactive Components Design Guide

**Last Updated:** January 2025  
**Route:** `/design/interactive-components`  
**Showcase Component:** `src/pages/design/InteractiveComponentsShowcase.tsx`

---

## Overview

This document provides comprehensive design guidelines and usage patterns for all interactive overlay components in the Dragvertising application. These components are used for modals, dialogs, popups, alerts, and notifications.

---

## Component Categories

### 1. Modals & Dialogs

#### Dialog
**Primitive:** `src/ui/primitives/dialog.tsx`  
**Usage:** ~191 files

**When to Use:**
- Form submissions
- Content that requires user interaction
- Multi-step processes
- Confirmation flows (non-destructive)

**Design Specifications:**
- **Z-Index:** `z-[100]`
- **Max Width:** Responsive (sm:max-w-[500px] to max-w-[1000px])
- **Max Height:** `max-h-[90vh]` with `overflow-y-auto`
- **Padding:** `p-4 sm:p-6`
- **Overlay:** `bg-black/80`
- **Animation:** Fade in/out with zoom effect

**Example:**
```tsx
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Description text</DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

**Width Guidelines:**
- **Small:** `sm:max-w-[500px]` - Simple forms, confirmations
- **Medium:** `sm:max-w-[600px]` - Standard forms
- **Large:** `sm:max-w-[800px]` - Complex forms, multi-column layouts
- **XL:** `sm:max-w-[1000px]` - Data tables, detailed views

---

#### AlertDialog
**Primitive:** `src/ui/primitives/alert-dialog.tsx`  
**Usage:** ~38 files

**When to Use:**
- Destructive actions (delete, remove, etc.)
- Critical confirmations
- Simple yes/no decisions
- Actions that cannot be undone

**Design Specifications:**
- **Z-Index:** `z-[100]`
- **Max Width:** `max-w-lg` (default)
- **Max Height:** `max-h-[90vh]` with `overflow-y-auto`
- **Padding:** `p-6`
- **Overlay:** `bg-black/80`

**Example:**
```tsx
<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete the item.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

---

#### Sheet
**Primitive:** `src/ui/primitives/sheet.tsx`  
**Usage:** ~42 files

**When to Use:**
- Mobile-first experiences
- Sidebar-style content
- Settings panels
- Navigation menus
- Filters and search

**Design Specifications:**
- **Z-Index:** `z-[100]`
- **Sides:** `top`, `bottom`, `left`, `right`
- **Default:** `right` side
- **Width:** `w-3/4 sm:max-w-sm` (left/right), full width (top/bottom)
- **Overlay:** `bg-black/80`

**Example:**
```tsx
<Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>Manage your preferences</SheetDescription>
    </SheetHeader>
    {/* Content */}
  </SheetContent>
</Sheet>
```

---

### 2. Popups

#### Popover
**Primitive:** `src/ui/primitives/popover.tsx`  
**Usage:** ~27 files

**When to Use:**
- Contextual information
- Quick actions
- Small forms or inputs
- Profile previews
- Date/time pickers
- Tooltips with rich content

**Design Specifications:**
- **Z-Index:** `z-[9999]` (must be above modals)
- **Width:** `w-72` (default)
- **Position:** `center` (default)
- **Side Offset:** `4px`
- **Portal:** Yes (to document.body)

**Example:**
```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium">Popover Title</h4>
      <p className="text-sm text-muted-foreground">Popover content</p>
    </div>
  </PopoverContent>
</Popover>
```

---

#### Tooltip
**Primitive:** `src/ui/primitives/tooltip.tsx`  
**Usage:** Extensive (hundreds of files)

**When to Use:**
- Hover-triggered help text
- Button descriptions
- Icon explanations
- Short contextual information

**Design Specifications:**
- **Trigger:** Hover
- **Position:** Automatic (smart positioning)
- **Max Width:** Auto
- **Accessibility:** Full ARIA support

**Example:**
```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon">
        <HelpCircle className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Helpful tooltip text</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

#### HoverCard
**Primitive:** `src/ui/primitives/hover-card.tsx`  
**Usage:** Limited

**When to Use:**
- Rich profile previews
- Card-style hover content
- Detailed information on hover

**Example:**
```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@username</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="/avatar.jpg" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@username</h4>
        <p className="text-sm">User description</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

---

### 3. Alerts

#### Alert
**Primitive:** `src/ui/primitives/alert.tsx`  
**Usage:** Moderate

**When to Use:**
- Inline error messages
- Form validation feedback
- Status updates within a page
- Non-blocking notifications
- Success/info messages

**Design Specifications:**
- **Variants:** `default`, `destructive`
- **Icon Support:** Yes (left-aligned)
- **Accessibility:** `role="alert"`

**Example:**
```tsx
<Alert variant="destructive">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

**Variants:**
- `default` - Info messages, neutral alerts
- `destructive` - Errors, warnings, critical messages

**Note:** Additional variants (`warning`, `info`, `success`) are recommended for future implementation.

---

### 4. Toast Notifications

#### Sonner Toast
**Primitive:** `src/ui/primitives/sonner.tsx`  
**Hook:** `src/hooks/shared/use-toast.ts`  
**Usage:** ~373+ files

**When to Use:**
- Success/error feedback after actions
- Background process completion
- Non-critical notifications
- Temporary status updates
- Action confirmations

**Design Specifications:**
- **Position:** Center screen (CSS override)
- **Max Width:** `min(90vw, 600px)`
- **Max Height:** `80vh` with scrollable description
- **Durations:**
  - Success: 3000ms (3 seconds)
  - Error: 5000ms (5 seconds) or manual dismissal
  - Info: 4000ms (4 seconds)
  - Warning: 5000ms (5 seconds)

**Import Pattern (Recommended):**
```tsx
// ✅ Use enhanced hook for error toasts
import { toast } from '@/hooks/shared/use-toast';

// For simple success messages, direct sonner is acceptable
import { toast } from 'sonner';
```

**Example - Success:**
```tsx
import { toast } from '@/hooks/shared/use-toast';

toast({
  variant: 'default', // or omit for success
  title: 'Success!',
  description: 'Your changes have been saved.',
});
```

**Example - Error (Enhanced):**
```tsx
import { toast } from '@/hooks/shared/use-toast';

toast({
  variant: 'destructive',
  title: 'Error',
  description: 'Failed to save changes.',
  error: errorObject, // Auto-enhances with debug info
});
```

**Example - Simple (Direct Sonner):**
```tsx
import { toast } from 'sonner';

toast.success('Changes saved!', {
  description: 'Your profile has been updated.',
  duration: 3000,
});
```

**Features:**
- Auto-deduplication (prevents duplicate toasts)
- Error toasts include "Copy" button for debug info
- Scrollable descriptions for long content
- Theme-aware (dark/light mode)
- Accessible (ARIA support)

---

## Z-Index Hierarchy

```
z-[9999]  →  Select dropdowns, Popovers (highest - must be above everything)
z-[100]   →  Dialog, AlertDialog, Sheet, Overlays (above most content)
z-50      →  Tooltips, Menus, Dropdowns (standard UI)
```

**Rationale:**
- Select and Popover need to appear above modals (which may contain them)
- Modals need to appear above page content
- Standard UI elements (tooltips, menus) appear above content but below modals

---

## Component Selection Guide

| Use Case | Component | Example |
|----------|-----------|---------|
| Form submission | Dialog | Create user, Edit settings |
| Destructive confirmation | AlertDialog | Delete user, Remove item |
| Mobile sidebar | Sheet | Navigation, Filters |
| Contextual info | Popover | Profile preview, Date picker |
| Hover help | Tooltip | Button descriptions, Icon help |
| Rich hover content | HoverCard | Profile cards, Detailed previews |
| Inline feedback | Alert | Form errors, Status messages |
| Action feedback | Toast | Success, Error notifications |

---

## Best Practices

### Modals/Dialogs

1. **Always include max-height:**
   ```tsx
   <DialogContent className="max-h-[90vh] overflow-y-auto">
   ```

2. **Use standard widths:**
   - Small: `sm:max-w-[500px]`
   - Medium: `sm:max-w-[600px]`
   - Large: `sm:max-w-[800px]`
   - XL: `sm:max-w-[1000px]`

3. **Include close button:**
   - Dialog and Sheet have auto-close buttons
   - AlertDialog uses Cancel/Action buttons

4. **Handle form submission:**
   ```tsx
   <form onSubmit={handleSubmit}>
     {/* Form fields */}
     <DialogFooter>
       <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
       <Button type="submit">Submit</Button>
     </DialogFooter>
   </form>
   ```

### Toast Notifications

1. **Use enhanced hook for errors:**
   ```tsx
   import { toast } from '@/hooks/shared/use-toast';
   toast({ variant: 'destructive', error: errorObject });
   ```

2. **Use direct sonner for simple success:**
   ```tsx
   import { toast } from 'sonner';
   toast.success('Action completed!');
   ```

3. **Keep messages concise:**
   - Title: 1-5 words
   - Description: 1-2 sentences

4. **Use appropriate durations:**
   - Success: 3 seconds
   - Error: 5 seconds (or manual dismissal)
   - Info: 4 seconds

### Alerts

1. **Use appropriate variants:**
   - `destructive` for errors
   - `default` for info

2. **Include icons:**
   ```tsx
   <Alert variant="destructive">
     <AlertTriangle className="h-4 w-4" />
     <AlertTitle>Error</AlertTitle>
     <AlertDescription>Error message</AlertDescription>
   </Alert>
   ```

3. **Keep messages actionable:**
   - Tell the user what happened
   - Explain what they can do about it

---

## Accessibility

All components follow accessibility best practices:

- **ARIA attributes:** Proper roles and labels
- **Keyboard navigation:** Full keyboard support
- **Focus management:** Focus trapping in modals
- **Screen readers:** Proper announcements
- **Color contrast:** Meets WCAG AA standards

---

## Animation Guidelines

### Modals
- **Entry:** Fade in + zoom in (200ms)
- **Exit:** Fade out + zoom out (200ms)
- **Overlay:** Fade in/out

### Sheets
- **Entry:** Slide in from side (500ms)
- **Exit:** Slide out to side (300ms)
- **Overlay:** Fade in/out

### Popovers
- **Entry:** Fade in + slide in (200ms)
- **Exit:** Fade out + slide out (200ms)

### Toasts
- **Entry:** Slide in from top (300ms)
- **Exit:** Slide out to top (200ms)

---

## Common Patterns

### Confirmation Flow
```tsx
const [showConfirm, setShowConfirm] = useState(false);

<AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Confirm Action</AlertDialogTitle>
      <AlertDialogDescription>
        Are you sure you want to proceed?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Form in Dialog
```tsx
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle>Form Title</DialogTitle>
      <DialogDescription>Form description</DialogDescription>
    </DialogHeader>
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields */}
      <DialogFooter>
        <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>
```

### Error Handling with Toast
```tsx
try {
  await saveData();
  toast.success('Saved successfully!');
} catch (error) {
  toast({
    variant: 'destructive',
    title: 'Failed to save',
    description: 'Please try again.',
    error, // Auto-enhances with debug info
  });
}
```

---

## Migration Notes

### Toast Imports
- **Old:** `import { toast } from 'sonner'`
- **New (Recommended):** `import { toast } from '@/hooks/shared/use-toast'`
- **Migration Script:** `scripts/migrate-toast-imports.js`

### Modal Naming
- **Old:** `*Modal.tsx` components
- **New:** `*Dialog.tsx` components
- **Migration Script:** `scripts/rename-modal-to-dialog.js`

---

## Related Documentation

- **Comprehensive Audit:** `docs/audits/COMPREHENSIVE_MODALS_POPUPS_ALERTS_AUDIT.md`
- **Quick Reference:** `docs/audits/MODALS_POPUPS_ALERTS_QUICK_REFERENCE.md`
- **Component Showcase:** `/design/interactive-components` (route)

---

## Component Inventory

### Dialog Components: 86
- Production Company: 18
- Admin: 12
- Show/Lineup: 15
- Shared/Universal: 20
- Other: 21

### Modal Components: 13 (to be renamed to Dialog)
- ContactModal → ContactDialog
- InviteToShowModal → InviteToShowDialog
- GettingStartedModal → GettingStartedDialog
- OnboardingCompleteModal → OnboardingCompleteDialog
- AdminShortcutsModal → AdminShortcutsDialog
- SettingsPresetsModal → SettingsPresetsDialog
- SettingsHistoryModal → SettingsHistoryDialog
- ContactDetailModal → ContactDetailDialog
- DesignBookDemoModal → DesignBookDemoDialog
- CastMemberDetailModal → CastMemberDetailDialog
- StudioSettingsModal → StudioSettingsDialog
- ModalFormField → DialogFormField

### Usage Statistics
- Dialog: ~191 files
- AlertDialog: ~38 files
- Sheet: ~42 files
- Popover: ~27 files
- Toast: ~373+ files

---

**Last Updated:** January 2025  
**Maintained By:** Design System Team
