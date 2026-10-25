# AI Coding Agent Guidelines & Operating Instructions
## Project: Mahira Select — High-Fidelity Website Reconstruction

### 1. Project Mission & Constraint Axioms
- **Reconstruction, Not Redesign**: Never substitute your own aesthetic preferences, alter color tokens, or simplify complex CSS animations. The reference design is authoritative.
- **Do Not Replace Original Assets**: Use only the verified, high-resolution original assets located in `assets/`. Never replace an original photo with a placeholder or synthetic approximation.
- **Zero Broken Links**: All internal navigation links (`/category`, `/shop`, `/product`, `/cart`, `/checkout`, `/order`, `/track`, `/login`, `/signup`, `/explore`) must resolve cleanly.

---

### 2. File Organization & Boundaries
- **HTML Entrypoints**: Located at the project root (`index.html`, `category.html`, `shop.html`, etc.).
- **Styles**: `css/styles.css` (Global & Home), `css/shop.css` (E-Commerce), `css/auth.css` (Auth screens).
- **Scripts**: `js/emblem-data.js`, `js/main.js`, `js/shop-data.js`, `js/shop.js`, `js/auth.js`.
- **Assets**: `assets/*.jpg`.
- **Legacy Files**: Archived under `_legacy_archive/` — do not delete or overwrite without user consent.

---

### 3. Verification Workflow Before Marking Complete
1. **Lint & Syntax Check**: Ensure all HTML, CSS, and JS files have valid syntax.
2. **Automated Test Run**:
   ```bash
   npm test
   ```
   Must pass with 100% of checks green.
3. **Local Dev Server Check**:
   ```bash
   node server.js
   ```
   Must serve all pages on `http://localhost:3000` with clean URL resolution.
