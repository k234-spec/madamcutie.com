# Security Policy & Considerations
## Project: Mahira Select — High-Fidelity Website Reconstruction

### 1. Security Architecture & Threat Model
Because Mahira Select operates as a client-rendered static web application without a custom backend server handling sensitive secrets, the security posture focuses on **Client-Side Data Sanitization**, **Content Security**, **Subresource Integrity**, and **Privacy Protection**.

---

### 2. Form Handling & Input Sanitization
1. **Zero Raw HTML Injection**:
   - Customer inputs in the Search panel, Newsletter form (`#newsForm`), Checkout address inputs, and Auth forms are parsed and displayed exclusively via `textContent` or encoded before rendering to prevent Cross-Site Scripting (XSS).
2. **Regex Validation Rules**:
   - Email inputs (`#newsEmail`, auth inputs): Validated against strict RFC 5322 compliant regex.
   - Phone numbers: Validated for 10-digit standard Indian format (+91 prefix handling).
   - Postal codes: Enforced 6-digit numeric PIN codes.

---

### 3. Client Storage Isolation
- Data stored in `localStorage` (`mahira.cart`, `mahira.wishlist`, `mahira.orders`) is strictly scoped to the site's origin protocol and domain.
- Sensitive authentication credentials (passwords, payment CVV/cards) are **NEVER** persisted to `localStorage` or logged to console output.
- All checkout transactions and payments are simulated securely on the client without transmitting financial data to unverified endpoints.

---

### 4. External Dependency Auditing
The application relies on minimal, highly verified CDN-hosted libraries:
- **GSAP (3.13.0)**, **CustomEase (3.13.0)**, **ScrollTrigger (3.13.0)**: Served over HTTPS from Cloudflare CDN (`cdnjs.cloudflare.com`).
- **Google Fonts**: Inter, Playfair Display, Cormorant Garamond, Montserrat, Great Vibes loaded securely over TLS from `fonts.googleapis.com` and `fonts.gstatic.com`.

---

### 5. Local Server Security (`server.js`)
- **Directory Traversal Protection**: `server.js` verifies that every requested path resolves strictly within the designated workspace root:
  ```js
  const safePath = path.resolve(filePath);
  if (!safePath.startsWith(path.resolve(ROOT))) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }
  ```
- **Strict MIME Type Enforcement**: Prevents MIME-confusion attacks by explicitly mapping extensions to verified Content-Type headers.
