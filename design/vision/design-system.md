# SKYRIDGE Design System
**Phase 3 Artifact | Visual Identity**
**Created:** 2025-12-17

---

## 1. BRAND ESSENCE

### Tagline
**"Elevating the Digital Campus Experience"**

### Voice & Tone
- **Confident** — We know our value, no need to oversell
- **Invitational** — Come explore, discover, become
- **Intelligent** — Substance over flash
- **Warm** — Human connection, not corporate distance
- **Forward** — 5-10 years ahead, not catching up

### Emotional Territory
The SKYRIDGE experience should feel like:
- Standing on a mountain ridge at sunrise
- The moment before a big adventure begins
- Discovering something extraordinary in an unexpected place
- Finding your people, your purpose, your path

---

## 2. COLOR SYSTEM

### Primary Palette

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `--color-primary` | FLC Blue | #003366 | Navigation, headers, links |
| `--color-accent` | FLC Gold | #FFB81C | CTAs, highlights, interactions |
| `--color-accent-hover` | Gold Bright | #FFC940 | Hover states |

### Neutrals

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `--color-bg-light` | Cloud | #F8F9FA | Default backgrounds |
| `--color-bg-dark` | Night Sky | #0D1117 | Dramatic reveal sections |
| `--color-surface` | White | #FFFFFF | Cards, modals |
| `--color-text-primary` | Charcoal | #1A1A2E | Body text |
| `--color-text-secondary` | Slate | #6B7280 | Captions, metadata |
| `--color-text-inverse` | White | #FFFFFF | Text on dark backgrounds |
| `--color-border` | Mist | #E5E7EB | Subtle dividers |

### Semantic Colors

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `--color-success` | Alpine | #10B981 | Success states |
| `--color-warning` | Sunset | #F59E0B | Warning states |
| `--color-error` | Mesa Red | #EF4444 | Error states |

### Gradients

```css
--gradient-hero: linear-gradient(135deg, #003366 0%, #001a33 100%);
--gradient-gold: linear-gradient(135deg, #FFB81C 0%, #FFA000 100%);
--gradient-dark: linear-gradient(180deg, #0D1117 0%, #1A1A2E 100%);
```

---

## 3. TYPOGRAPHY

### Font Stack

```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
--font-display: var(--font-primary);
```

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `--text-hero` | 72px | 700 | 1.1 | Hero headlines |
| `--text-h1` | 48px | 700 | 1.2 | Page titles |
| `--text-h2` | 36px | 600 | 1.3 | Section headers |
| `--text-h3` | 24px | 600 | 1.4 | Subsections |
| `--text-h4` | 20px | 600 | 1.4 | Card titles |
| `--text-body` | 18px | 400 | 1.6 | Body copy |
| `--text-body-sm` | 16px | 400 | 1.6 | Secondary copy |
| `--text-caption` | 14px | 400 | 1.5 | Captions, metadata |
| `--text-overline` | 12px | 600 | 1.5 | Labels, tags |

### Responsive Scale

| Breakpoint | Hero | H1 | H2 | Body |
|------------|------|----|----|------|
| Mobile (<768px) | 40px | 32px | 28px | 16px |
| Tablet (768-1024px) | 56px | 40px | 32px | 17px |
| Desktop (>1024px) | 72px | 48px | 36px | 18px |

---

## 4. SPACING SYSTEM

### Base Unit
`--space-unit: 8px`

### Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 8px | Tight spacing |
| `--space-2` | 16px | Element gaps |
| `--space-3` | 24px | Component padding |
| `--space-4` | 32px | Section gaps |
| `--space-5` | 40px | Large gaps |
| `--space-6` | 48px | Component margins |
| `--space-8` | 64px | Section padding (small) |
| `--space-10` | 80px | Section padding (medium) |
| `--space-12` | 96px | Section padding (large) |
| `--space-16` | 128px | Hero padding |

---

## 5. LAYOUT GRID

### Container

```css
--container-max: 1200px;
--container-padding: 24px;
```

### Grid

```css
--grid-columns: 12;
--grid-gutter: 24px;
```

### Breakpoints

| Token | Value | Name |
|-------|-------|------|
| `--bp-sm` | 640px | Mobile landscape |
| `--bp-md` | 768px | Tablet |
| `--bp-lg` | 1024px | Desktop |
| `--bp-xl` | 1280px | Large desktop |

---

## 6. MOTION & ANIMATION

### Timing Functions

```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Durations

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 150ms | Micro-interactions |
| `--duration-normal` | 300ms | Standard transitions |
| `--duration-slow` | 500ms | Page transitions |
| `--duration-reveal` | 800ms | Scroll reveals |

### Animation Patterns

**Fade In Up:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Scale In:**
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

---

## 7. COMPONENT PATTERNS

### Buttons

**Primary Button:**
```css
background: var(--color-accent);
color: var(--color-primary);
padding: 16px 32px;
border-radius: 8px;
font-weight: 600;
transition: all var(--duration-fast) var(--ease-default);
```

**Secondary Button:**
```css
background: transparent;
border: 2px solid var(--color-primary);
color: var(--color-primary);
padding: 14px 30px;
border-radius: 8px;
```

**Ghost Button:**
```css
background: transparent;
color: var(--color-text-inverse);
border: 2px solid var(--color-text-inverse);
```

### Cards

```css
background: var(--color-surface);
border-radius: 12px;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
padding: var(--space-4);
transition: transform var(--duration-fast) var(--ease-default),
            box-shadow var(--duration-fast) var(--ease-default);
```

**Card Hover:**
```css
transform: translateY(-4px);
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### Audience Router Buttons

```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 12px;
padding: var(--space-4);
color: var(--color-text-inverse);
transition: all var(--duration-normal) var(--ease-default);
```

**Hover:**
```css
background: rgba(255, 184, 28, 0.2);
border-color: var(--color-accent);
transform: translateY(-2px);
```

---

## 8. ICONOGRAPHY

### Style
- Line icons (not filled)
- 2px stroke weight
- Rounded caps and joins
- 24px default size

### Key Icons Needed
- Arrow right (CTAs)
- Menu (hamburger)
- Close (X)
- Search (magnifying glass)
- User (person silhouette)
- Location (map pin)
- Calendar (event)
- Graduation cap (academics)
- Home (housing)
- Dollar (tuition)

---

## 9. IMAGERY GUIDELINES

### Photography Style
- **Authentic** — Real students, real moments, not stock
- **Elevated** — Professional quality, cinematic framing
- **Colorado** — Mountain backdrops, outdoor adventure
- **Diverse** — Reflect FLC's multicultural community
- **Active** — Learning by doing, not passive poses

### Treatment
- Full-bleed for heroes
- Rounded corners (12px) for inline images
- Subtle gradient overlays for text readability
- Aspect ratios: 16:9 (heroes), 4:3 (cards), 1:1 (profiles)

---

## 10. ACCESSIBILITY

### Color Contrast
- All text meets WCAG AA (4.5:1 for body, 3:1 for large)
- Focus states visible against all backgrounds
- Never rely on color alone for meaning

### Motion
- Respect `prefers-reduced-motion`
- Provide pause controls for auto-playing content
- Animations enhance, never block interaction

### Keyboard
- All interactive elements focusable
- Visible focus indicators
- Logical tab order

---

## 11. RESPONSIVE BEHAVIOR

### Mobile First
- Base styles target mobile
- Progressive enhancement via min-width queries
- Touch targets minimum 44x44px

### Breakpoint Strategy
```css
/* Mobile (default) */
.element { ... }

/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }

/* Large */
@media (min-width: 1280px) { ... }
```

---

## 12. DARK MODE SECTIONS

Certain sections use dark backgrounds for dramatic effect:
- Hero section
- Statistics reveal
- Testimonial spotlight
- CTA sections

### Dark Mode Variables
```css
[data-theme="dark"] {
  --color-bg: var(--color-bg-dark);
  --color-text: var(--color-text-inverse);
  --color-surface: rgba(255, 255, 255, 0.05);
  --color-border: rgba(255, 255, 255, 0.1);
}
```

---

*This design system is the visual constitution of SKYRIDGE.*
*All implementation must reference these tokens and patterns.*
