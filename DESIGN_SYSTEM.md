# Design System Specification
## Project: Mahira Select — Indian Luxury Heritage Fashion

### 1. Color Palette & Tokens
Mahira Select uses a bespoke heritage palette inspired by royal Indian textiles, antique temple gold, unbleached mulberry silk, and deep evergreen palace courtyards.

```css
:root {
  /* Brand Primary & Backgrounds */
  --s-forest:       #152418;  /* Deep Emerald Forest */
  --s-forest-deep:  #0F1D15;  /* Midnight Evergreen void */
  --s-forest-trans: rgba(15, 29, 21, 0.94);
  --s-ivory-hi:     #FBF6ED;  /* Pure Pearl / Raw Silk */
  --s-ivory-mid:    #F2E8D7;  /* Warm Linen */
  --s-ivory-lo:     #E5D7C2;  /* Antiqued Sand */
  --s-walnut:       #3B3025;  /* Deep Text Walnut */

  /* Metallic & Accent Tones */
  --s-gold:         #C9A35F;  /* Antique Zari Gold */
  --s-gold-light:   #E8C87A;  /* Radiant Gold Glow */
  --s-gold-dim:     #9A7A3E;  /* Burnished Brass */
  --s-maroon:       #6E2532;  /* Royal Kumkum */
  --s-rose:         #C08B84;  /* Gulabi Velvet */
  --s-rust:         #A8552F;  /* Terracotta */
  --s-indigo:       #2E3A5C;  /* Ajrakh Indigo */

  /* Hairlines, Rules & Shadows */
  --s-line:         rgba(201, 163, 95, 0.28);
  --s-line-s:       rgba(59, 48, 37, 0.12);
  --s-glow:         0 0 35px rgba(232, 200, 122, 0.25);
  --s-shadow-card:  0 18px 45px rgba(15, 29, 21, 0.18);
}
```

---

### 2. Typography Hierarchy
The typography couples regal neoclassical serifs with geometric, high-legibility sans-serif and calligraphic flourishes.

| Role | Font Family | Weights | Letter Spacing | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display Title / Hero** | `'Playfair Display', serif` | 400, 500, 600 | `-0.01em` | Major headlines ("More Than Fashion", "Best Sellers") |
| **Editorial Headings** | `'Cormorant Garamond', serif` | 400, 500 | `0` | Section titles, story ledes, quotes |
| **Micro Copy & Metadata** | `'Montserrat', sans-serif` | 300, 400, 500, 600 | `0.18em` to `0.24em` (Uppercase) | Eyebrows, badges, buttons, rail labels, prices |
| **Brand Calligraphy** | `'Great Vibes', cursive` | 400 | `normal` | Decorative script accents ("Tradition Lives Beautifully") |

---

### 3. Spatial System & Layout Geometry
- **Container Max-Width**: `1380px` centered with fluid guttering (`clamp(18px, 4vw, 56px)`).
- **Section Spacing**: Vertical rhythm follows clamp scale `clamp(60px, 10vh, 140px)` between major narrative blocks.
- **Card Geometry**:
  - Arched top cards: `border-radius: 400px 400px 0 0` with fine `1px solid var(--s-line)` border.
  - Rectangular editorial cards: `border-radius: 0px` (sharp heritage corners) with subtle scrim gradient overlays.

---

### 4. Iconography & Vector Elements
- **Emblem**: Custom multi-path vector crest featuring centered 'M' monogram, floral filigree, and golden banner lines.
- **Motifs**: Handcrafted Indian lotus icon (`viewBox="0 0 40 32"`), filigree floral dividers (`c-orna`), temple ornamental rules.
- **Utility Icons**: Ultra-clean 1.2px stroke geometric vectors for Search, Heart (Wishlist), Bag, User, and Navigation chevrons.

---

### 5. Motion & Physics Principles
- **Curtain Split**: Custom cubic bezier `cubic-bezier(0.76, 0, 0.24, 1)` representing weighted fabric inertia.
- **Button Shimmer & Fill**: Horizontal expansion pill effect on hover with arrow glide (`translateX(6px)`).
- **SVG Path Drawing**: Progressive `stroke-dashoffset` animation triggered via ScrollTrigger upon entering viewport.
- **Floating Particles**: 60fps canvas simulation with gentle randomized sine-wave drift simulating sunlit dust motes in heritage courtyards.
- **Reduced Motion**: Fallback styles provided via `prefers-reduced-motion` and `<noscript>` blocks ensuring full accessibility.
