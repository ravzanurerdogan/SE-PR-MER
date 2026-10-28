---
name: SE Primer Incident Console
colors:
  surface: '#0c1321'
  surface-dim: '#0c1321'
  surface-bright: '#323949'
  surface-container-lowest: '#070e1c'
  surface-container-low: '#151b2a'
  surface-container: '#19202e'
  surface-container-high: '#232a39'
  surface-container-highest: '#2e3544'
  on-surface: '#dce2f6'
  on-surface-variant: '#c0c7d4'
  inverse-surface: '#dce2f6'
  inverse-on-surface: '#2a3040'
  outline: '#8a919d'
  outline-variant: '#404752'
  surface-tint: '#a2c9ff'
  primary: '#a2c9ff'
  on-primary: '#00315b'
  primary-container: '#4da3ff'
  on-primary-container: '#003866'
  inverse-primary: '#0060a9'
  secondary: '#b7c8e2'
  on-secondary: '#213146'
  secondary-container: '#37485e'
  on-secondary-container: '#a5b6d0'
  tertiary: '#b6c6f0'
  on-tertiary: '#1f3051'
  tertiary-container: '#90a0c8'
  on-tertiary-container: '#263658'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#a2c9ff'
  on-primary-fixed: '#001c38'
  on-primary-fixed-variant: '#004881'
  secondary-fixed: '#d2e4ff'
  secondary-fixed-dim: '#b7c8e2'
  on-secondary-fixed: '#0a1c30'
  on-secondary-fixed-variant: '#37485e'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#b6c6f0'
  on-tertiary-fixed: '#081a3b'
  on-tertiary-fixed-variant: '#364669'
  background: '#0c1321'
  on-background: '#dce2f6'
  surface-variant: '#2e3544'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  mono-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes a high-stakes, mission-critical environment tailored for an engineering incident simulation console. The atmosphere is that of a calm, focused night-shift command center: steady, serious, hyper-legible, and stripped of ornamental noise. 

The aesthetic synthesizes modern flat technical interfaces with dense observability command tooling. It completely rejects skeuomorphic gloss, diffuse drop-shadows, photographic hero headers, and playful decorative illustrations in favor of:
- High-contrast, data-dense layouts.
- Precise functional iconography and structured data visualization.
- Uncompromising legibility under prolonged low-light usage.
- Strict mechanical feedback loops across states (idle, hover, active, focus-visible).

## Colors

The palette is engineered for prolonged operational focus and instant status triage under dark conditions:

- **Canvas & Surface Architecture**:
  - Root Canvas Background: `#0B1220` (deep abyssal navy).
  - Primary Surface / Panels: `#121B2E` (subtle elevation via hue shift).
  - Raised Control / Inset Surface: `#1A2640`.
  - Boundary Border / Separator: `#2A3A5C`.
- **Text & Hierarchy**:
  - Primary Text: `#E8EEF9` (high-contrast off-white, optimized to reduce optical glare).
  - Muted / Secondary Text: `#8E9FB8` (de-emphasized labels, timestamps, structural keys).
- **Functional Semantics**:
  - Primary Accent / Informational: `#4DA3FF` (focused telemetry, actionable nodes, interactive primary controls).
  - Critical / Danger: `#FF5C5C` (outages, SEV-1 alerts, dropped packets, rollback actions).
  - Operational / Success: `#3DDC97` (healthy nodes, resolved incidents, passing health checks).
  - Warning / Advisory: `#FFB84D` (degraded latency, threshold warnings, active investigations).

## Typography

The typography system operates on a dual-engine architecture:

1. **Inter**: Handles all human-language narrative copy, modal dialogues, documentation, and structural UI labels. It delivers neutral, distraction-free clarity.
2. **JetBrains Mono**: Assigned to all machinic telemetry, UTC timestamps, system logs, IP addresses, metric readouts, environment hashes, and incident codes.

Rules:
- Incident tickers and timestamps must render in tabular lining figures (`font-variant-numeric: tabular-nums`) to prevent optical shifting during real-time streaming updates.
- Section tags and status headings use `label-caps` in uppercase styling with deliberate tracking for fast peripheral scanning.

## Layout & Spacing

The layout is structured around an immutable 12-column telemetry dashboard grid that prioritizes situational awareness and rapid multi-panel triage:

- **Desktop (1200px+)**: 12-column grid, `gutter-desktop` (24px), outer canvas margins of `margin-desktop` (32px). Split-screen workflows enable live metrics/traces on the left and log feeds/mitigation runbooks on the right.
- **Tablet (768px - 1199px)**: 8-column layout, `gutter` (16px), margins of `margin` (16px). Secondary panes collapse into side-drawer tabs.
- **Mobile (<768px)**: 4-column single-stack arrangement, preserving rapid thumbs-reach emergency triggers (e.g., "Rollback", "Failover") anchored at the bottom edge.

Internal component rhythm follows strict 4px increments. Dense log viewers and data tables utilize `space-xs` and `space-sm` for compactness, while primary console panels use `space-lg` padding to frame critical operational clusters.

## Elevation & Depth

This system intentionally eliminates traditional box shadows, drop shadows, and blurred skeuomorphic depths (`box-shadow: none`). 

Depth and visual hierarchy are communicated strictly through:
- **Tonal Stepping**: 
  - Level 0 (Base canvas): `#0B1220`
  - Level 1 (Panels & Card Surfaces): `#121B2E`
  - Level 2 (Inputs, Terminal Viewers, Active Toggles): `#1A2640`
  - Level 3 (Modals, Overlays, Context Popovers): `#1E2D4A`
- **Ghost Outlines**: Every surface tier is delineated by a crisp `1px solid #2A3A5C` perimeter.
- **Active Focus Signals**: Focus and elevated interaction states do not cast soft glows; they produce a hard, high-contrast `1px solid #4DA3FF` border or an offset outer boundary ring (`outline: 2px solid #4DA3FF; outline-offset: 2px`).

## Shapes

The geometric form language uses controlled, uniform corner rounding:

- **Panels, Main Cards, Modal Containers**: Built with `rounded-lg` (16px / 1rem) corners paired with `1px solid #2A3A5C`. This softens the terminal aesthetic into an approachable, ergonomic application shell without losing technical discipline.
- **Interactive Controls (Buttons, Inputs, Selectors)**: Follow `roundedness` 2 (8px / 0.5rem) to preserve tactile confidence and distinct separation from outer container frames.
- **Telemetry Badges, Incident Severity Chips, Status Dots**: Use compact `space-xs` to `space-sm` rounding (4px) or full circular dots (50%) to mirror hardware status lights.

## Components

### Buttons & Action Controls
- **Geometry**: Minimum height of `48px` with horizontal padding of `space-lg` (24px) for reliable tap targeting during high-stress operational triage.
- **Primary Action (Execute / Deploy)**: Surface `#4DA3FF`, text `#0B1220` (600 weight). Hover: Brightens to `#70B5FF`. Active: Shifts to `#3A8EE6`.
- **Destructive Action (Sever / Terminate / Rollback)**: Surface `#FF5C5C` or transparent with `1px solid #FF5C5C` and `#FF5C5C` text. Hover: Solid `#FF5C5C` with `#0B1220` text.
- **Ghost / Neutral Action**: Surface `#121B2E`, border `1px solid #2A3A5C`, text `#E8EEF9`. Hover: Surface `#1A2640`, border `#4DA3FF`.

### Status Chips & Badges
- Compact indicators containing an integrated SVG state glyph or live pulsing dot.
- Built using `mono-sm` typography with uppercase casing.
- **Severity Colors**:
  - `SEV-1 / Critical`: Background `rgba(255, 92, 92, 0.12)`, border `1px solid rgba(255, 92, 92, 0.35)`, text `#FF5C5C`.
  - `Degraded / Warning`: Background `rgba(255, 184, 77, 0.12)`, border `1px solid rgba(255, 184, 77, 0.35)`, text `#FFB84D`.
  - `Operational / Nominal`: Background `rgba(61, 220, 151, 0.12)`, border `1px solid rgba(61, 220, 151, 0.35)`, text `#3DDC97`.

### Terminal Log Feeds & Telemetry Lists
- Container: Surface `#0B1220` inset inside a card `#121B2E`.
- Rows: Monospaced `mono-md`, row height `28px`, zebra-hover `rgba(42, 58, 92, 0.25)`.
- Metadata layout: Timestamp column (`#8E9FB8`), Level/Tag column (`#4DA3FF` / `#FFB84D` / `#FF5C5C`), payload/message (`#E8EEF9`).
- Selection highlight: Flat `rgba(77, 163, 255, 0.18)` without blur.

### Cards & Monitoring Panels
- Background `#121B2E`, border `1px solid #2A3A5C`, radius `16px`. Zero shadows.
- Panels feature an explicit header strip containing title (`Inter`, 14px, semibold), monospace status counter, and utility actions separated by a `1px solid #2A3A5C` bottom rule.

### Inputs & Terminal Shell Prompts
- Minimum height `48px`. Background `#0B1220`, border `1px solid #2A3A5C`, text `#E8EEF9`, font `JetBrains Mono`.
- Placeholder text in `#8E9FB8`.
- Focus state: Border color jumps to `#4DA3FF`, zero outer glow.
- Prefix: Static mono glyph (e.g., `$` or `>`) tinted in `#4DA3FF`.

### Checkboxes, Radios & Toggles
- Custom SVG controls built on a 20x20px grid inside a 48px tactile target area.
- Inactive: Background `#121B2E`, border `1px solid #2A3A5C`.
- Checked: Background `#4DA3FF`, border `#4DA3FF`, interior glyph `#0B1220`.

---

# Project-Specific Additions (SE Primer)

The sections above come from the Stitch design system. The sections below describe how this project applies it.

## Scope Note

This app is mobile-only, portrait (390px). The desktop and tablet layouts described above are out of scope for this project.

## Screens

1. **Intro**: title "SE Primer", three single-choice chip groups (Seviye, Rol, Hedef), primary button "Başla" disabled until all three are chosen.
2. **Scene**: progress dots K1 MÜDAHALE / K2 TEMİZLİK / K3 KVKK, status strip (sızan kayıt, süre, KVKK durumu), mono clock, SEV-1 chip, team chat bubbles, tappable log lines, two option cards (A/B) that describe only the ACTION and never its outcome, "İpucu al" and "Kararı uygula" buttons. After the choice, a result card ("Ne oldu / Neden oldu") appears on the same screen.
3. **Ending**: green "İyi son" or red "Kötü son", metrics row (Sızıntı, Süre, KVKK), per-decision summary cards, "Neden bu son?" list for the bad ending, goal-specific note card, "Tekrar oyna" button.

Reference screenshots: `screens/1-giris.png`, `screens/2-sahne.png`, `screens/3-son.png`.

## Personalization in the UI

| Intro choice | Effect on the interface |
|---|---|
| Yeni başladım | "İpucu al" button visible on every decision screen, no timer, result cards add a plain-language term definition |
| Deneyimliyim | 60s timer bar visible, no hint button, terse technical result cards; on timeout the decision counts as B |
| Backend | Scene text and log details about server access and rate limits |
| Mobil | Scene text and log details about the token embedded in the app package (APK) |
| QA | Scene text and log details about the missing test for this flow |
| Staj / Mülakat / Ürün çıkarma | Team chat second line and the ending note card change per goal |

## Accessibility and Test Hooks

- Visible focus ring: `outline: 2px solid #4DA3FF; outline-offset: 2px`.
- Timer is announced to screen readers in the last 10 seconds.
- Respect `prefers-reduced-motion`.
- Every interactive element has a `data-testid`:
  `level-new`, `level-experienced`, `role-backend`, `role-mobile`, `role-qa`, `goal-intern`, `goal-interview`, `goal-product`, `start-button`, `choice-k1-a`, `choice-k1-b`, `choice-k2-a`, `choice-k2-b`, `choice-k3-a`, `choice-k3-b`, `apply-button`, `continue-button`, `hint-button`, `tutor-panel`, `tutor-input`, `tutor-send`, `tutor-reply`, `timer`, `result-card`, `ending-title`, `ending-summary`, `ending-reasons`, `ending-metrics`, `replay-button`, `log-line-1`, `log-line-2`, `log-line-3`, `investigate-result`, `chat-message`, `stat-leaked`, `stat-time`, `stat-kvkk`.
