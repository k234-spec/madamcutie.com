# API Specification & Client Interfaces
## Project: Mahira Select — High-Fidelity Website Reconstruction

### 1. In-Memory Catalog Query API (`js/shop-data.js` & `js/shop.js`)
All catalog operations execute synchronously via the `window.MAHIRA_SHOP` module:

#### `MAHIRA_SHOP.getCategory(slug: string): CategoryObject`
- Returns category metadata, hero banner, focal alignment, and subcategory groups.
- Example: `MAHIRA_SHOP.getCategory('women')`.

#### `MAHIRA_SHOP.getProducts(filters: FilterQuery): Product[]`
- Accepts filtering parameters:
  - `cat`: Category slug (`women` | `kalakaari`)
  - `sub`: Subcategory slug (`sarees` | `kurta-sets` | `anarkali` | etc.)
  - `fabric`: Fabric filter (`Silk` | `Cotton` | `Chanderi`)
  - `color`: Color name (`Olive Green` | `Maroon` | `Indigo`)
  - `sort`: Ordering (`price-asc` | `price-desc` | `rating` | `newest`)

#### `MAHIRA_SHOP.byId(productId: string): ProductObject`
- Retrieves single SKU by ID.
- Example: `MAHIRA_SHOP.byId('ms-101')`.

---

### 2. Shopping Bag & Wishlist Interface

#### `MAHIRA_SHOP.getCart(): CartItem[]`
- Reads parsed items from `localStorage.getItem('mahira.cart')`.

#### `MAHIRA_SHOP.addToCart(productId: string, color: string, size: string, qty: number = 1)`
- Appends or increments line item in cart and updates utility badge counters across header and mobile drawer.

#### `MAHIRA_SHOP.updateQty(itemKey: string, newQty: number)`
- Modifies quantity; if `newQty <= 0`, removes item.

#### `MAHIRA_SHOP.toggleWishlist(productId: string): boolean`
- Toggles presence of product ID in `mahira.wishlist`; returns new state (true if saved, false if removed).

---

### 3. Demo Seeding API (`explore.html`)

#### `seedDemoCartAndOrders()`
- Seeds complete sample state into `localStorage` with active cart items (`ms-101`, `mk-101`), saved wishlist items, active order `MS-102`, and delivery address in Bengaluru.
- Allows immediate verification of post-purchase and tracking screens.
