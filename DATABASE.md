# Database & Persistence Specification
## Project: Mahira Select — High-Fidelity Website Reconstruction

### 1. Persistence Model Justification
Mahira Select operates as an **Edge-Rendered Client-State E-Commerce Platform**.
No relational SQL or NoSQL database server is required for the client application runtime for the following verified reasons:

1. **Static Catalog Immutability**:
   - The luxury curated catalog (`CATEGORIES` and `PRODUCTS`) is modeled as a normalized, versioned in-memory JavaScript dataset in `js/shop-data.js`.
   - This delivers instant <1ms in-memory filtering, sorting, and product lookups with zero network latency, zero cold starts, and zero database connection overhead.
2. **Client-Side Isolated Session State**:
   - Customer actions (shopping bag additions, size/color choices, wishlist toggles, shipping addresses, mock orders) are maintained client-side via the browser's persistent `localStorage` API.
   - This enables full end-to-end purchasing simulation (cart -> checkout -> order placement -> shipment tracking) without requiring user accounts or third-party backend servers.

---

### 2. Client Data Schema (localStorage)

#### `mahira.cart` (Array of Cart Line Items)
```json
[
  {
    "k": "ms-101|Olive Green|Free Size",
    "id": "ms-101",
    "color": "Olive Green",
    "size": "Free Size",
    "qty": 1
  }
]
```

#### `mahira.wishlist` (Array of Product IDs)
```json
[
  "ms-101",
  "ms-201",
  "mk-101"
]
```

#### `mahira.orders` (Array of Order Records)
```json
[
  {
    "id": "MS-782194",
    "date": "2026-10-25T16:45:00.000Z",
    "status": "Crafted",
    "items": [
      {
        "id": "ms-102",
        "title": "Kanchi Border Saree",
        "price": 14800,
        "qty": 1,
        "color": "Maroon",
        "size": "Free Size",
        "img": "assets/s4-p1.jpg"
      }
    ],
    "subtotal": 14800,
    "discount": 0,
    "shipping": 0,
    "total": 14800,
    "shippingAddress": {
      "name": "Ananya Sharma",
      "line": "42, Heritage Enclave, Civil Lines",
      "city": "Jaipur, Rajasthan 302006",
      "phone": "+91 98290 12345"
    },
    "paymentMethod": "UPI (Instant)"
  }
]
```

---

### 3. Catalog Data Schema (`shop-data.js`)
- **Product Object**:
  - `id`: Unique SKU identifier (`ms-101`, `ms-201`, `mk-101`, etc.)
  - `cat`: Root category slug (`women`, `kalakaari`)
  - `sub`: Subcategory slug (`sarees`, `kurta-sets`, `anarkali`, `lehengas`, `dresses`, etc.)
  - `title`: Display name
  - `price`: INR selling price
  - `mrp`: INR maximum retail price (for savings calculation)
  - `fabric`: Primary textile composition
  - `desc`: Editorial narrative description
  - `details`: Bulleted craft and dimension notes
  - `colors`: Array of swatch objects `{ name, hex }`
  - `images`: Array of photographic asset paths
  - `sizes`: Sizing options (`SAREE_SIZES` or `SUIT_SIZES`)
  - `care`: Specific maintenance and dry cleaning guidance
  - `shipping`: Dispatch schedule and return policy
