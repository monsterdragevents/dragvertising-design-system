# Design System Architecture

```mermaid
graph TB
    subgraph "Figma Design System"
        A[Design System File]
        A --> B[Colors Variables]
        A --> C[Typography Variables]
        A --> D[Spacing Variables]
        A --> E[Components]
    end

    subgraph "Design Tokens"
        F[colors.json]
        G[typography.json]
        H[spacing.json]
        I[shadows.json]
        J[borders.json]
        K[animations.json]
    end

    subgraph "Generated Code"
        L[CSS Variables]
        M[Tailwind Config]
        N[TypeScript Types]
    end

    subgraph "React Application"
        O[shadcn/ui Primitives]
        P[Custom Components]
        Q[Universe Dashboards]
    end

    B --> |Extract via API| F
    C --> |Extract via API| G
    D --> |Extract via API| H

    F --> |Generate| L
    F --> |Generate| M
    F --> |Generate| N

    G --> |Generate| L
    G --> |Generate| M
    G --> |Generate| N

    H --> |Generate| L
    H --> |Generate| M
    H --> |Generate| N

    L --> O
    M --> O
    N --> O

    O --> P
    P --> Q

    E --> |MCP + design.to.html| O
    E --> |MCP + design.to.html| P

    style A fill:#9945FF,stroke:#7B2CBF,color:#fff
    style F fill:#FD0290,stroke:#C10172,color:#fff
    style L fill:#FFA726,stroke:#F57C00,color:#000
    style O fill:#FF6B35,stroke:#D64933,color:#fff
```

## Workflow Diagram

```mermaid
sequenceDiagram
    participant Designer as Designer (Figma)
    participant Tokens as Design Tokens
    participant Scripts as Build Scripts
    participant Code as React/Tailwind
    participant MCP as Cursor MCP
    participant Developer as Developer

    Designer->>Tokens: 1. Update colors/spacing in Figma
    Developer->>Scripts: 2. npm run tokens:extract
    Scripts->>Tokens: 3. Fetch via Figma API
    Scripts->>Code: 4. Generate CSS/Tailwind/TS
    Code->>Developer: 5. Review changes in IDE

    Designer->>MCP: 6. Design new component
    Developer->>MCP: 7. Copy Figma URL
    MCP->>Code: 8. Generate React component
    Developer->>Code: 9. Review & refine
    Code->>Designer: 10. Update Figma if needed
```

## Component Generation Flow

```mermaid
graph LR
    A[Figma Component] --> B{Method}
    B -->|MCP| C[Cursor IDE]
    B -->|Manual| D[design.to.html]

    C --> E[Extract Design]
    D --> E

    E --> F[Detect Existing Components]
    F --> G{Component Exists?}

    G -->|Yes| H[Use shadcn/ui Component]
    G -->|No| I[Generate New Component]

    H --> J[Apply Design Tokens]
    I --> J

    J --> K[Generate React Code]
    K --> L[Add TypeScript Types]
    L --> M[Output to src/ui/]

    M --> N[Review in Storybook]
    N --> O{Matches Design?}

    O -->|Yes| P[Commit to Git]
    O -->|No| Q[Refine Component]
    Q --> N
```

## Universe Color System

```mermaid
graph TB
    subgraph "Base Colors"
        A[Primary Purple<br/>hsl(280, 85%, 50%)]
        B[Secondary Golden<br/>hsl(45, 100%, 55%)]
        C[Brand Pink<br/>#FD0290]
    end

    subgraph "Universe Accents"
        D[Talent<br/>Pink]
        E[DJ<br/>Golden]
        F[Producer<br/>Warm Orange]
        G[Fan<br/>Secondary]
    end

    subgraph "Gradients"
        H[Primary<br/>Purple → Pink]
        I[Secondary<br/>Golden → Orange]
        J[Hero<br/>Purple → Pink → Golden]
    end

    subgraph "Glow Effects"
        K[Primary Glow<br/>Purple shadow]
        L[Secondary Glow<br/>Golden shadow]
        M[Golden Glow<br/>Golden shadow]
    end

    A --> D
    C --> D

    B --> E
    B --> G

    A --> H
    C --> H

    B --> I

    A --> J
    C --> J
    B --> J

    A --> K
    B --> L
    B --> M

    style A fill:#9945FF,stroke:#7B2CBF,color:#fff
    style B fill:#FFA726,stroke:#F57C00,color:#000
    style C fill:#FD0290,stroke:#C10172,color:#fff
    style D fill:#FD0290,stroke:#C10172,color:#fff
    style E fill:#FFA726,stroke:#F57C00,color:#000
    style F fill:#FF6B35,stroke:#D64933,color:#fff
```

## Token Generation Pipeline

```mermaid
graph LR
    A[design-tokens/*.json] --> B[scripts/generate-tokens.js]

    B --> C[Parse JSON]
    C --> D[Transform Values]

    D --> E[Generate CSS Variables]
    D --> F[Generate Tailwind Config]
    D --> G[Generate TypeScript Types]

    E --> H[design/tokens/css/*.css]
    F --> I[design/tokens/tailwind/config-extension.js]
    G --> J[design/tokens/js/tokens.ts]

    H --> K[Import in src/index.css]
    I --> L[Import in tailwind.config.ts]
    J --> M[Import in components]

    style A fill:#FD0290,stroke:#C10172,color:#fff
    style H fill:#FFA726,stroke:#F57C00,color:#000
    style I fill:#FFA726,stroke:#F57C00,color:#000
    style J fill:#FFA726,stroke:#F57C00,color:#000
```

## File Structure

```
design/
├── README.md                    📖 Main documentation
├── GETTING_STARTED.md           🚀 Setup guide
├── IMPLEMENTATION_SUMMARY.md    📋 What was created
├── design-tokens/               🎨 Source of truth
│   ├── colors.json             (Colors: brand, semantic)
│   ├── typography.json         (Fonts: families, sizes, weights)
│   ├── spacing.json            (Spacing: 0-40 scale)
│   ├── shadows.json            (Shadows: elevation + glow)
│   ├── borders.json            (Borders: radius scale)
│   └── animations.json         (Animations: keyframes + easing)
├── figma/                       🔗 Figma integration
│   ├── plugin-config.json      (Plugin settings)
│   ├── component-mapping.json  (Figma ↔ React mapping)
│   └── sync-strategy.md        (Sync workflow)
├── tokens/                      ⚙️ Generated (auto)
│   ├── css/                    (CSS custom properties)
│   ├── tailwind/               (Tailwind config extension)
│   └── js/                     (TypeScript types)
└── documentation/               📚 Guidelines
    └── color-usage.md          (Color guidelines)
```

## Key Benefits

1. **Single Source of Truth**: Figma → Tokens → Code (no manual sync)
2. **Universe-Aware**: Automatic adaptation to active universe context
3. **Automated Workflows**: `npm run design:sync` updates everything
4. **Component Mapping**: Figma components → React components (1:1)
5. **MCP Integration**: Generate code directly from Figma in Cursor
6. **Dark Mode Native**: Light/dark modes defined in design tokens
7. **Accessibility**: WCAG 2.1 AA compliance built-in
8. **Type Safety**: TypeScript types generated from design tokens

## Quick Start Commands

```bash
# Extract design tokens from Figma
npm run tokens:extract

# Generate CSS, Tailwind config, TypeScript types
npm run tokens:generate

# Full sync (extract + generate + format)
npm run design:sync

# Validate design system consistency
npm run design:validate
```

