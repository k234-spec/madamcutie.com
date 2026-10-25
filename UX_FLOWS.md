# UX Flows & User Journeys
## Project: Mahira Select — High-Fidelity Website Reconstruction

### 1. Customer Acquisition & First Impression Flow
```mermaid
graph TD
    A[User Lands on /] --> B[Cinema Flare & Ambient Glow]
    B --> C[Curtains Part Horizontally 1.8s]
    B -->|User Clicks Skip| D[Instant Reveal of Hero]
    C --> D[Hero: Tradition Meets Tomorrow]
    D --> E[Interactive Dust Particles Floating]
    D --> F[Scroll Down to S03 Women New Collections]
    F --> G[S02 Explore: Women vs Kalamkari]
    G --> H[S04 Kalakaari Atelier Experience]
    H --> I[S05 Best Sellers Showcase]
    I --> J[S06 Craftsmanship Seal SVG Draw]
    J --> K[S07 Editorial Story]
    K --> L[Architectural Footer & Newsletter]
```

---

### 2. Browsing & Product Discovery Flow
```mermaid
graph TD
    A[Homepage or Header Nav] --> B{Select Destination}
    B -->|Women / Kalakaari| C[Category Page /category]
    B -->|New Arrivals / Search| D[Shop Page /shop]
    C --> E[Select Subcategory: Sarees, Kurta Sets, etc.]
    E --> D
    D --> F[Filter by Fabric, Price, Color]
    F --> G[Click Product Card]
    G --> H[Product Detail /product?p=SKU]
```

---

### 3. Purchasing & Fulfillment Flow
```mermaid
graph TD
    A[Product Detail Page] --> B[Select Color Swatch]
    B --> C[Select Size: Free Size or XS-XXL]
    C --> D{Action}
    D -->|Add to Bag| E[Slide-out Bag Drawer]
    D -->|Buy Now| F[Direct to Checkout /checkout]
    E --> G[Proceed to Cart /cart]
    G --> H[Apply Coupon / Verify Free Shipping]
    H --> F
    F --> I[Select/Add Delivery Address]
    I --> J[Select Payment Method: UPI/Card/COD]
    J --> K[Place Order Trigger]
    K --> L[Order Confirmation Page /order]
    L --> M[Track Order /track]
    L --> N[View Order Email Preview /email-preview]
```
