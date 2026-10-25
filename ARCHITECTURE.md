# Application Architecture
## Project: Mahira Select — High-Fidelity Website Reconstruction

### 1. Architectural Philosophy
Mahira Select employs a high-performance, modular **Vanilla Web Architecture** utilizing semantic HTML5, modern CSS3 (Custom Properties, Grid, Flexbox, Clamp calculations, Backdrop Filters), and Vanilla ES6+ JavaScript orchestrated by GSAP (GreenSock Animation Platform) and ScrollTrigger.

This architecture was chosen to guarantee:
- Instant first paint without hydration lag or heavy runtime framework overhead.
- True 60fps cinematic animations and GPU-accelerated transforms.
- Direct portability and static edge hosting (compatible with Netlify, Cloudflare Pages, Vercel, or custom servers).

---

### 2. Component & Directory Structure
```
c:\Downloaded Web Sites\madamcutie.com\
├── index.html            # Primary entrypoint (Cinematic opening + Homepage)
├── category.html         # Category catalog router (Women, Kalakaari)
├── shop.html             # Product listing with dynamic filtering & sorting
├── product.html          # Product detail page (gallery, swatches, cart drawer)
├── cart.html             # Shopping cart with discount & shipping calculations
├── checkout.html         # Multi-step checkout (address & payment simulation)
├── order.html            # Post-purchase order confirmation & invoice
├── email-preview.html    # Transactional order confirmation email template
├── track.html            # Visual order tracking timeline & status
├── login.html            # Customer sign-in split layout
├── signup.html           # Customer account registration layout
├── explore.html          # Experience sitemap & demo state seeding tool
│
├── css/
│   ├── styles.css        # Core global styles, layout tokens, cinema, header, hero, footer
│   ├── shop.css          # Catalog styles: shop cards, filters, gallery, cart, checkout, track
│   └── auth.css          # Authentication screen styling
│
├── js/
│   ├── emblem-data.js    # Vector coordinates and SVG path data for the Mahira crest
│   ├── main.js           # Core interaction logic: cinema, canvas particles, curtains, header, menus
│   ├── shop-data.js      # Centralized product catalogue, categories, swatches, and sizing data
│   ├── shop.js           # Catalog router, cart state, checkout handlers, wishlist manager
│   └── auth.js           # Form validation, auth tabs, guest checkout state
│
├── assets/               # High-resolution photographic assets & textures (30 original images)
│   ├── women-clean.jpg   # Main hero desktop plate
│   ├── women-mobile.jpg  # Main hero mobile crop
│   ├── s3-*.jpg          # New Collections for Women assets
│   ├── s2-*.jpg          # Explore the Collection assets
│   ├── s4-*.jpg          # Kalakaari Collection assets
│   ├── s5-*.jpg          # Best Sellers assets
│   ├── s7-story.jpg      # Editorial story media
│   └── f-*.jpg           # Footer arch and foliage textures
│
├── server.js             # Local static dev server with clean URL rewrites and MIME resolution
├── package.json          # Node scripts for dev, build, and automated test execution
└── test_validation.js    # Automated QA and asset integrity test suite
```

---

### 3. State Management & Data Flow
```
                      +-------------------+
                      |   shop-data.js    |  (Single Source of Truth)
                      +---------+---------+
                                |
             +------------------+------------------+
             |                                     |
    +--------v--------+                   +--------v--------+
    |  Category Views |                   |  Product Pages  |
    |  (Women, Kala)  |                   |  (Detail & Add) |
    +--------+--------+                   +--------+--------+
             |                                     |
             +------------------+------------------+
                                |
                      +---------v---------+
                      |   localStorage    |
                      |   - mahira.cart   |
                      |   - mahira.wish   |
                      |   - mahira.orders |
                      +---------+---------+
                                |
             +------------------+------------------+
             |                                     |
    +--------v--------+                   +--------v--------+
    |    Cart Page    |                   |  Tracking Page  |
    |   & Drawer      |                   |  & History      |
    +-----------------+                   +-----------------+
```

- **Catalog Data**: `CATEGORIES` and `PRODUCTS` collections in `shop-data.js` drive all catalog queries by `cat`, `sub`, and `id` without requiring database queries.
- **Client Persistence**:
  - Cart: `localStorage.getItem('mahira.cart')` contains array of `{ k, id, color, size, qty }`.
  - Wishlist: `localStorage.getItem('mahira.wishlist')` stores array of product IDs.
  - Orders: `localStorage.getItem('mahira.orders')` stores completed transaction histories.
  - Seed Demo: Available in `explore.html` via `xpSeed` trigger.

---

### 4. Routing & Clean URLs
The architecture is designed to support both modern clean URL path routing (`/category?c=women`) and static file resolution (`/category.html?c=women`):
1. **In Production (Netlify / Edge)**: Routes map directly to corresponding `.html` files without file extensions via rewrite rules.
2. **In Local Development (`server.js`)**: The built-in Node server automatically detects extensionless requests and maps them to their respective `.html` files while preserving query strings.
