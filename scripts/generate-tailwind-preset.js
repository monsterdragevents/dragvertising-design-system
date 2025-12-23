#!/usr/bin/env node

/**
 * Generates a Tailwind CSS preset from design tokens
 * This ensures all repos use the same design system
 */

const fs = require('fs');
const path = require('path');

const tokensDir = path.join(__dirname, '../design-tokens');
const outputPath = path.join(__dirname, '../tailwind-preset.js');

// Load all token files
const colors = JSON.parse(fs.readFileSync(path.join(tokensDir, 'colors.json'), 'utf8'));
const typography = JSON.parse(fs.readFileSync(path.join(tokensDir, 'typography.json'), 'utf8'));
const spacing = JSON.parse(fs.readFileSync(path.join(tokensDir, 'spacing.json'), 'utf8'));
const borders = JSON.parse(fs.readFileSync(path.join(tokensDir, 'borders.json'), 'utf8'));
const shadows = JSON.parse(fs.readFileSync(path.join(tokensDir, 'shadows.json'), 'utf8'));
const animations = JSON.parse(fs.readFileSync(path.join(tokensDir, 'animations.json'), 'utf8'));

// Helper to extract value from token
function getValue(token) {
  return token.$value || token;
}

// Build Tailwind config
// Note: Tailwind presets should only contain the extend section
const preset = {
  theme: {
    extend: {
      fontFamily: {
        sans: typography.typography['font-family'].sans.$value,
        serif: typography.typography['font-family'].serif.$value,
        display: typography.typography['font-family'].display.$value,
        lordrina: typography.typography['font-family'].londrina.$value,
      },
      colors: {
        // Brand colors
        pink: {
          500: getValue(colors.colors.brand.pink),
        },
        golden: {
          DEFAULT: getValue(colors.colors.brand.golden),
          400: '#FFB74D',
          500: getValue(colors.colors.brand.golden),
          600: '#FF9800',
          700: '#F57C00',
        },
        warmOrange: {
          DEFAULT: getValue(colors.colors.brand['warm-orange']),
          400: '#FF8A65',
          500: getValue(colors.colors.brand['warm-orange']),
          600: '#F4511E',
        },
        // Design System (DV) colors
        'dv-purple': {
          DEFAULT: '#a855f7',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          900: '#581c87',
        },
        'dv-pink': {
          DEFAULT: '#ec4899',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        },
        'dv-orange': {
          DEFAULT: '#fb923c',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        // Semantic colors (using CSS variables)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        // Design System (DV) border radius
        'dv-none': getValue(borders.border.radius.none),
        'dv-sm': getValue(borders.border.radius.sm),
        'dv-md': getValue(borders.border.radius.md),
        'dv-lg': getValue(borders.border.radius.lg),
        'dv-xl': getValue(borders.border.radius.xl),
        'dv-2xl': getValue(borders.border.radius['2xl']),
        'dv-3xl': getValue(borders.border.radius['3xl']),
        'dv-full': getValue(borders.border.radius.full),
      },
      spacing: {
        // Design System (DV) spacing scale
        'dv-px': getValue(spacing.spacing.px),
        'dv-0': getValue(spacing.spacing['0']),
        'dv-0.5': getValue(spacing.spacing['0.5']),
        'dv-1': getValue(spacing.spacing['1']),
        'dv-1.5': getValue(spacing.spacing['1.5']),
        'dv-2': getValue(spacing.spacing['2']),
        'dv-2.5': getValue(spacing.spacing['2.5']),
        'dv-3': getValue(spacing.spacing['3']),
        'dv-3.5': getValue(spacing.spacing['3.5']),
        'dv-4': getValue(spacing.spacing['4']),
        'dv-5': getValue(spacing.spacing['5']),
        'dv-6': getValue(spacing.spacing['6']),
        'dv-7': getValue(spacing.spacing['7']),
        'dv-8': getValue(spacing.spacing['8']),
        'dv-9': getValue(spacing.spacing['9']),
        'dv-10': getValue(spacing.spacing['10']),
        'dv-11': getValue(spacing.spacing['11']),
        'dv-12': getValue(spacing.spacing['12']),
        'dv-14': getValue(spacing.spacing['14']),
        'dv-16': getValue(spacing.spacing['16']),
        'dv-20': getValue(spacing.spacing['20']),
        'dv-24': getValue(spacing.spacing['24']),
        'dv-28': getValue(spacing.spacing['28']),
        'dv-32': getValue(spacing.spacing['32']),
        'dv-36': getValue(spacing.spacing['36']),
        'dv-40': getValue(spacing.spacing['40']),
      },
      fontSize: {
        // Design System (DV) font sizes
        'dv-xs': getValue(typography.typography['font-size'].xs),
        'dv-sm': getValue(typography.typography['font-size'].sm),
        'dv-base': getValue(typography.typography['font-size'].base),
        'dv-lg': getValue(typography.typography['font-size'].lg),
        'dv-xl': getValue(typography.typography['font-size'].xl),
        'dv-2xl': getValue(typography.typography['font-size']['2xl']),
        'dv-3xl': getValue(typography.typography['font-size']['3xl']),
        'dv-4xl': getValue(typography.typography['font-size']['4xl']),
        'dv-5xl': getValue(typography.typography['font-size']['5xl']),
        'dv-6xl': getValue(typography.typography['font-size']['6xl']),
        'dv-7xl': getValue(typography.typography['font-size']['7xl']),
      },
      fontWeight: {
        // Design System (DV) font weights
        'dv-regular': getValue(typography.typography['font-weight'].regular),
        'dv-semibold': getValue(typography.typography['font-weight'].semibold),
        'dv-bold': getValue(typography.typography['font-weight'].bold),
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': animations.animation.keyframes['fade-in'].$value,
        'slide-up': animations.animation.keyframes['slide-up'].$value,
        'glow-pulse': animations.animation.keyframes['glow-pulse'].$value,
        gradient: animations.animation.keyframes.gradient.$value,
        shimmer: animations.animation.keyframes.shimmer.$value,
        float: animations.animation.keyframes.float.$value,
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': animations.animation.presets['fade-in'].$value,
        'slide-up': animations.animation.presets['slide-up'].$value,
        'glow-pulse': animations.animation.presets['glow-pulse'].$value,
        gradient: animations.animation.presets.gradient.$value,
        shimmer: animations.animation.presets.shimmer.$value,
        float: animations.animation.presets.float.$value,
        // Design System (DV) transitions
        'dv-fast': `all ${getValue(animations.animation.duration.fast)} ease-in-out`,
        'dv-base': `all ${getValue(animations.animation.duration.normal)} ease-in-out`,
        'dv-slow': `all ${getValue(animations.animation.duration.moderate)} ease-in-out`,
        'dv-slower': `all ${getValue(animations.animation.duration.slow)} ease-in-out`,
      },
      transitionDuration: {
        'dv-fast': getValue(animations.animation.duration.fast),
        'dv-base': getValue(animations.animation.duration.normal),
        'dv-slow': getValue(animations.animation.duration.moderate),
        'dv-slower': getValue(animations.animation.duration.slow),
      },
      transitionTimingFunction: {
        'dv-linear': 'linear',
        'dv-ease': 'ease',
        'dv-ease-in': 'ease-in',
        'dv-ease-out': 'ease-out',
        'dv-ease-in-out': 'ease-in-out',
      },
      boxShadow: {
        // Design System (DV) shadows
        'dv-sm': `${shadows.shadows.elevation.sm.$value.offsetX} ${shadows.shadows.elevation.sm.$value.offsetY} ${shadows.shadows.elevation.sm.$value.blur} ${shadows.shadows.elevation.sm.$value.spread} ${shadows.shadows.elevation.sm.$value.color}`,
        'dv-base': `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`,
        'dv-md': `${shadows.shadows.elevation.md.$value.offsetX} ${shadows.shadows.elevation.md.$value.offsetY} ${shadows.shadows.elevation.md.$value.blur} ${shadows.shadows.elevation.md.$value.spread} ${shadows.shadows.elevation.md.$value.color}`,
        'dv-lg': `${shadows.shadows.elevation.lg.$value.offsetX} ${shadows.shadows.elevation.lg.$value.offsetY} ${shadows.shadows.elevation.lg.$value.blur} ${shadows.shadows.elevation.lg.$value.spread} ${shadows.shadows.elevation.lg.$value.color}`,
        'dv-xl': `${shadows.shadows.elevation.xl.$value.offsetX} ${shadows.shadows.elevation.xl.$value.offsetY} ${shadows.shadows.elevation.xl.$value.blur} ${shadows.shadows.elevation.xl.$value.spread} ${shadows.shadows.elevation.xl.$value.color}`,
        'dv-2xl': `${shadows.shadows.elevation['2xl'].$value.offsetX} ${shadows.shadows.elevation['2xl'].$value.offsetY} ${shadows.shadows.elevation['2xl'].$value.blur} ${shadows.shadows.elevation['2xl'].$value.spread} ${shadows.shadows.elevation['2xl'].$value.color}`,
        // Glow effects
        'dv-glow-primary-light': shadows.shadows.glow.primary.$value,
        'dv-glow-primary-dark': shadows.shadows.glow['primary-strong'].$value,
        'dv-glow-golden-light': shadows.shadows.glow.golden.$value,
        'dv-glow-golden-dark': shadows.shadows.glow['golden-strong'].$value,
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-dragvertising': getValue(colors.colors.gradients.dragvertising),
        'gradient-golden': getValue(colors.colors.gradients.golden),
        'grid-pattern': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
};

// Write the preset file (support both CommonJS and ES modules)
const presetContent = `/** 
 * Dragvertising Design System - Tailwind CSS Preset
 * 
 * This file is auto-generated from design tokens.
 * DO NOT EDIT MANUALLY - run "npm run build" in design-system repo to regenerate.
 * 
 * Generated: ${new Date().toISOString()}
 */

const preset = ${JSON.stringify(preset, null, 2)};

// Support both CommonJS and ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = preset;
}
if (typeof exports !== 'undefined') {
  exports.default = preset;
}
export default preset;
`;

fs.writeFileSync(outputPath, presetContent);
console.log('✅ Generated tailwind-preset.js from design tokens');

