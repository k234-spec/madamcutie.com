# Testing Strategy & QA Plan
## Project: Mahira Select — High-Fidelity Website Reconstruction

### 1. Test Strategy Overview
Quality Assurance for this high-fidelity reconstruction is structured across 4 rigorous tiers:
1. **Automated Asset & Route Integrity Testing** (`npm test` / `node test_validation.js`)
2. **Visual QA & Geometry Comparison**
3. **Cross-Device Responsive Verification**
4. **Interactive & Motion Flow Validation**

---

### 2. Automated Test Suite (`test_validation.js`)
Run via:
```bash
npm test
```
The test suite validates:
- [x] All 12 HTML pages exist and contain valid markup (>1KB).
- [x] All 3 stylesheets (`styles.css`, `shop.css`, `auth.css`) exist and are non-empty.
- [x] All 5 core JavaScript modules (`emblem-data.js`, `main.js`, `shop-data.js`, `shop.js`, `auth.js`) exist.
- [x] Every single referenced image in HTML templates and catalog data exists on disk (Zero missing media).
- [x] All 10 required architectural and project documents are present and validated.

---

### 3. Responsive Breakpoint Checklist
| Viewport Target | Dimensions | Verified Behaviors |
| :--- | :--- | :--- |
| **Mobile Standard** | `375 × 812` (iPhone X/12/13 mini) | Arched cards stack to single column; bottom navigation touch targets >= 44px; hamburger drawer operates cleanly; no horizontal overflow. |
| **Mobile Plus/Pro** | `390 × 844` / `414 × 896` | Arched cards adapt cleanly; hero typography scales down fluidly via `clamp()`. |
| **Tablet Portrait** | `768 × 1024` (iPad) | 2-column grid reflow; header maintains compact logo layout. |
| **Desktop Standard** | `1440 × 900` | Full 3-card arched carousel with centered logo and split nav; full curtain opening animation. |
| **Wide Desktop** | `1920 × 1080` | Max container bounds enforced (`1380px`); deep background gradients fill margins seamlessly. |

---

### 4. Interactive Flow Verification
- [x] **Curtain Animation**: `#curtains` open smoothly on page load; `#dust` particle canvas animates.
- [x] **Skip Button**: Clicking `#skipIntro` immediately hides cinema, curtains, and restores scroll.
- [x] **Carousel Navigation**: S03 Women New Collections carousel advances on `w-next` click, updates counter (`01/03`, `02/03`, `03/03`).
- [x] **Category Routing**: `/category?c=women` loads Women edit; `/category?c=kalakaari` loads Kalakaari atelier.
- [x] **Product Detail**: Selecting color swatch dynamically switches gallery image; Add to Cart triggers confirmation drawer and updates badge count.
- [x] **Checkout Pipeline**: Adding item -> opening `/cart` -> proceeding to `/checkout` -> placing order generates valid receipt at `/order` with tracking link.
