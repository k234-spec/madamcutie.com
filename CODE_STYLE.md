# Code Style & Engineering Standards
## Project: Mahira Select — High-Fidelity Website Reconstruction

### 1. General Principles
- **Documentation Integrity**: Preserve existing comments, docstrings, and architectural descriptions.
- **Semantic Structure**: Prioritize native HTML5 semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<picture>`).
- **No Inline Styles in Production**: All styling must live in dedicated stylesheets (`css/styles.css`, `css/shop.css`, `css/auth.css`), using CSS variables for theme consistency.

---

### 2. HTML Conventions
- Standard 2-space indentation.
- Double quotes for all HTML attributes (`<div class="card" id="card1">`).
- Descriptive `aria-*` attributes on all interactive non-native controls (`aria-label`, `aria-expanded`, `aria-controls`, `aria-hidden="true"` on decorative elements).
- All image elements must have explicit `loading="lazy"`, `decoding="async"`, and descriptive `alt` text.

---

### 3. CSS Conventions
- **Naming Pattern**: Consistent BEM-adjacent abbreviation syntax aligned with reference codebase:
  - Header: `#header`, `.menu-btn`, `.nav-side`, `.nav-utils`, `.mega`
  - Cinema: `#cinema`, `.cin-ambient`, `.cin-floor`, `.cin-flare`
  - Curtains: `#curtains`, `.curtain`, `.c-left`, `.folds`
  - Sections: `.w-card`, `.x-card`, `.k-panel`, `.b-card`, `.c-item`, `.se-grid`
- **Units**:
  - Fluid typography & spacing via `clamp()` (e.g. `clamp(18px, 4vw, 56px)`).
  - Micro dimensions in `px` or `em` for optical hairline borders (`1px solid var(--s-line)`).
- **CSS Variables**: Use `--s-*` tokens defined in `:root` for colors and ease curves.

---

### 4. JavaScript Conventions
- **Module Pattern**: Wrap script modules in Self-Executing Anonymous Functions (`(function () { 'use strict'; ... })();`) to avoid polluting the global namespace.
- **Selector Utility**: Standard micro-helper `var $ = function (s) { return document.querySelector(s); };` and `$$ = function (s) { return Array.from(document.querySelectorAll(s)); };`.
- **Event Handling**: Use passive listeners where applicable for scroll performance (`{ passive: true }`).
- **Animation Orchestration**: Centralize GSAP timelines and kill previous triggers on teardown/route change.
