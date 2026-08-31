---
name: Synthetic Engineering Lab
colors:
  surface: '#141218'
  surface-dim: '#141218'
  surface-bright: '#3b383e'
  surface-container-lowest: '#0f0d13'
  surface-container-low: '#1d1b20'
  surface-container: '#211f24'
  surface-container-high: '#2b292f'
  surface-container-highest: '#36343a'
  on-surface: '#e6e0e9'
  on-surface-variant: '#cbc4d2'
  inverse-surface: '#e6e0e9'
  inverse-on-surface: '#322f35'
  outline: '#948e9c'
  outline-variant: '#494551'
  surface-tint: '#cfbcff'
  primary: '#cfbcff'
  on-primary: '#381e72'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#6750a4'
  secondary: '#cdc0e9'
  on-secondary: '#342b4b'
  secondary-container: '#4d4465'
  on-secondary-container: '#bfb2da'
  tertiary: '#e7c365'
  on-tertiary: '#3e2e00'
  tertiary-container: '#c9a74d'
  on-tertiary-container: '#503d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0e9'
  on-secondary-fixed: '#1f1635'
  on-secondary-fixed-variant: '#4b4263'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#e7c365'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#141218'
  on-background: '#e6e0e9'
  surface-variant: '#36343a'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style

The design system is engineered for a high-level Computer Engineering and IT professional portfolio. The brand personality is technical, precise, and forward-thinking, evoking an atmosphere of a high-end development environment or a modern cloud infrastructure dashboard.

The aesthetic follows a **Modern Tech / Glassmorphic** direction. It utilizes deep slate backgrounds and semi-transparent surface layers to create a sense of digital depth. Visual interest is driven by "inner glows" and subtle neon accents that mimic the hardware indicator lights of a server rack or a high-performance terminal. The target audience includes technical recruiters, CTOs, and fellow engineers who value systemic thinking and clean code architecture.

## Colors

The palette is optimized for long-form technical reading and high visual impact in low-light environments.

- **Backgrounds:** The primary background uses a deep Navy Slate (#0F172A) to provide a high-contrast base for text.
- **Surfaces:** Cards and containers use a lighter Slate (#1E293B), often with reduced opacity (80-90%) to facilitate background blur effects.
- **Accents:** 
    - **Cyan:** Used for interactive elements, primary actions, and "active" code states.
    - **Blue:** Reserved for secondary information, technical tags, and structural links.
    - **Orange:** Utilized sparingly for critical warnings, system status errors, or high-priority CTA highlights to break the cool color temperature.
- **Text:** Pure white is avoided to reduce eye strain; #F8FAFC is the standard for body and headings.

## Typography

This design system employs a three-tier typographic hierarchy to balance marketing appeal with technical readability.

- **Headlines:** Uses *Geist* for its clinical, technical precision. Large headings should use tight letter-spacing for a modern "tech-startup" look.
- **Body:** Uses *Inter* for maximum legibility in project descriptions and experience sections. It provides a neutral, professional tone.
- **Labels & Code:** Uses *JetBrains Mono* for metadata, tags, and snippets. This font reinforces the engineering focus. 

For mobile devices, `display-lg` should scale down to 32px to ensure readability without horizontal overflow.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Grid Logic:** Use a baseline grid of 4px to maintain vertical rhythm.
- **Margins:** Desktop layouts should feature wide margins (64px) to create an expensive, curated feel. 
- **Containers:** Content is centered within a maximum width of 1280px.
- **Reflow:** On tablet, the 12-column grid transitions to 8 columns. On mobile, cards stack vertically, and horizontal padding is reduced to 16px to maximize real estate for code snippets and technical text.

## Elevation & Depth

Visual hierarchy is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

- **Layer 0 (Base):** Primary Background (#0F172A). A subtle SVG "network grid" pattern or noise texture is applied at 5% opacity to add grit and technical detail.
- **Layer 1 (Cards/Surfaces):** Surface color (#1E293B) at 80% opacity with a `backdrop-filter: blur(12px)`.
- **Borders:** Surfaces must have a 1px solid border using a white-alpha value (e.g., `rgba(255, 255, 255, 0.1)`) to define edges against the dark background.
- **Glow Effects:** Primary interactive elements (buttons/active tags) utilize a soft outer glow (box-shadow) using the Accent Cyan color at 30% opacity, mimicking an illuminated screen or LED.

## Shapes

The design system uses a **Soft (0.25rem)** roundedness approach to maintain a professional, architectural feel. 

- **Standard Elements:** Buttons and input fields use `0.25rem` (4px) corner radii.
- **Cards:** Large containers use `rounded-lg` (8px) to soften the technical edge while remaining disciplined.
- **Status Indicators:** Small status pips (e.g., "System Online") use `rounded-full` (pill shape).

## Components

- **Buttons:** Primary buttons use a solid Cyan gradient background with dark text. Secondary buttons are "Ghost" style with a 1px border and an inner glow on hover.
- **Chips/Tags:** Use the Monospace font (`code-sm`). Tags for languages (e.g., "TypeScript", "Rust") should have a subtle background tint corresponding to the language's official brand color at 10% opacity.
- **Input Fields:** Darker than the surface color with a high-contrast Cyan 1px border appearing only on `:focus`.
- **Cards:** Project cards should feature a "glass" header and a footer that houses technical metadata in monospace font.
- **Data Visualization:** Use the Accent Blue and Cyan for charts. If showing "System Health," use the Orange accent for warnings.
- **Network Grid:** An ornamental component used as a section background or hero element to reinforce the "Engineering" narrative.