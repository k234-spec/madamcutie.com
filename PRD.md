# Product Requirements Document (PRD)
## Project: Mahira Select — High-Fidelity Website Reconstruction

### 1. Executive Summary & Objective
Mahira Select (`https://mahira2.netlify.app/`) is a high-end luxury Indian heritage fashion digital platform ("Tradition Meets Tomorrow"). It brings handcrafted sarees, kurta sets, kalakaari textiles, anarkalis, and accessories to modern digital consumers through an editorial, cinematic experience.

The primary objective of this project is the faithful, pixel-precise, motion-accurate reconstruction of the entire multi-page Mahira Select experience, preserving every nuance of its visual geometry, typography hierarchy, responsive reflow, and micro-interactions.

---

### 2. Scope of Experience & Routes
The platform comprises a cohesive 12-page web ecosystem:
1. **Home (`/` or `index.html`)**:
   - Cinematic entry with golden lens flare, ambient floor glow, and interactive particle canvas (`#dust`).
   - S01 Dramatic curtain pull (`#curtains`) with embroidered velvet drapery split.
   - Hero campaign with animated typography ("Tradition Meets Tomorrow", "More Than Fashion").
   - S03 "New Collections for Women" featuring arched 3D card slider and interactive counter (`01/03`).
   - S02 "Explore The Collection" 2-column showcase (Women & Kalamkari cards).
   - S04 "Kalakaari Collection" with editorial quote, 3 panel stories, and lotus motifs.
   - S05 "Best Sellers" grid with animated Shop Now triggers and badge ribbons.
   - S06 "Craftsmanship Seal" promise row with 4 animated SVG path-draw icons.
   - S07 "Our Story" editorial framed layout.
   - Master Footer with architectural arch, foliage backdrop, newsletter subscription, and legal index.
2. **Category Directory (`/category` or `category.html`)**:
   - Dynamic catalogue router for `women` and `kalakaari`.
   - Hero banner with responsive focal points, breadcrumbs, and subcategory groupings (Ethnic, Western, The Collections).
3. **Product Listing / Shop (`/shop` or `shop.html`)**:
   - Filterable product grid by fabric (Chanderi, Silk, Cotton, etc.), price tiers, and colors.
   - Real-time sort (Price Low-to-High, High-to-Low, Newest, Popularity).
4. **Product Detail Page (`/product` or `product.html`)**:
   - Interactive multi-image gallery with high-res zoom.
   - Dynamic swatch selection (Olive Green, Deep Forest, Warm Ivory, Champagne, Maroon, etc.).
   - Size selector (Free Size, XS, S, M, L, XL, XXL) with stock and sizing guide.
   - Add to Cart sheet drawer, Buy Now checkout flow, and tabs for Fabric Care & Shipping.
5. **Cart (`/cart` or `cart.html`)**:
   - Order line management (adjust quantity, remove, subtotal calculation).
   - Free shipping progress calculator (threshold ₹5,000).
   - Coupon discount engine and order summary breakdown.
6. **Checkout (`/checkout` or `checkout.html`)**:
   - Multi-step flow: Address selection/creation -> Payment gateway simulation (UPI, Cards, Net Banking, COD).
   - Real-time client-side field validation with accessibility focus handling.
7. **Order Confirmation (`/order` or `order.html`)**:
   - Order receipt, tracking code generation (`MS-XXXXXX`), estimated dispatch date, and invoice print option.
8. **Email Preview (`/email-preview` or `email-preview.html`)**:
   - High-fidelity transactional HTML email template with merged customer order details.
9. **Order Tracking (`/track` or `track.html`)**:
   - 5-stage visual progress timeline: Order Placed -> Confirmed -> Crafted -> Dispatched -> Delivered.
10. **Customer Authentication (`/login` & `/signup`)**:
    - Editorial dual-pane layout (Storytelling image on left, ivory luxury form on right).
    - Tab switching, guest checkout options, and password visibility toggles.
11. **The Complete Journey (`/explore` or `explore.html`)**:
    - Interactive QA & demo suite enabling one-click seeding of cart, addresses, orders, and wishlist.

---

### 3. Functional Requirements
- **Cinematic Curtain & Canvas**: On initial page load, `#cinema` void with flare renders; `#curtains` gracefully part horizontally over 1.8s; `#dust` canvas renders real-time floating dust motes with stochastic Brownian motion; `Skip` button allows instant bypass.
- **Sticky & Collapsible Luxury Header**: Header transitions from transparent overlay to deep evergreen backdrop (`rgba(15, 29, 21, 0.95)`) upon scroll with backdrop-blur.
- **Micro-Popovers & Utility Trays**:
  - Search tray expands full-screen with instant search filtering.
  - Wishlist popover displays saved pieces with counter badge update.
  - Bag popover previews active cart items with one-click checkout trigger.
  - Mobile menu drawer (`#mobileNav`) slides in from right with accordion navigation levels and brand emblem.
- **SVG Emblem Rendering**: Dynamic vectors for Mahira Select emblem rendered dynamically using `emblem-data.js` paths.
- **Client-Side Persistence**: Cart, wishlist, addresses, and order history persist in `localStorage` under `mahira.cart`, `mahira.wishlist`, `mahira.orders`.

---

### 4. Non-Functional Requirements
- **Performance**: First Contentful Paint (FCP) < 1.2s; LCP < 2.0s; 60fps animations via GSAP and requestAnimationFrame.
- **Responsiveness**: Pixel-perfect adaptability across Mobile (375px–430px), Tablet (768px–1024px), Desktop (1440px), and Wide Screens (1920px+).
- **Zero Broken Links / Assets**: Every route, script, stylesheet, and media file resolves locally with HTTP 200.
