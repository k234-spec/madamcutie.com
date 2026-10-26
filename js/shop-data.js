/* ============================================================
   MADAMCUTIE — OFFICIAL CATALOGUE & SHOP DATA
   Exact shopping categories and products from madamcutie.com
   Categories: Corset Blouse & Designer Blouse
   ============================================================ */
(function () {
  'use strict';

  var A = 'assets/';

  /* colour vocabulary shared across the catalogue */
  var C = {
    gold:      { name: 'Antique Gold',  hex: '#B89A62' },
    champagne: { name: 'Champagne',     hex: '#D9C39B' },
    maroon:    { name: 'Maroon',        hex: '#6E2532' },
    black:     { name: 'Obsidian Black',hex: '#1A1A1A' },
    silver:    { name: 'Metallic Silver',hex: '#C0C0C0' },
    emerald:   { name: 'Emerald Green', hex: '#1F4735' },
    ivory:     { name: 'Warm Ivory',    hex: '#EFE3CC' },
    mustard:   { name: 'Mustard Yellow',hex: '#D4AF37' },
    pink:      { name: 'Hot Pink',      hex: '#D13872' },
    olive:     { name: 'Olive Green',   hex: '#4A5A3A' }
  };

  var SIZES = ['XS', 'S', 'M', 'L', 'XL', 'Free Size'];
  var CARE = 'Dry clean only. Store folded in a muslin wrap, away from direct sunlight. Press on the reverse with a warm iron.';
  var SHIP = 'Dispatched within 2–3 working days. Free shipping across India on orders over ₹2250. Returns accepted within 7 days of delivery.';

  /* ---------- categories → groups → subcategories ---------- */
  var CATEGORIES = {
    'corset-blouse': {
      slug: 'corset-blouse',
      label: 'Corset Blouses',
      eyebrow: 'Handcrafted & Sculpted',
      title: 'Corset Blouses',
      line: 'Intricately detailed with vibrant thread embroidery, traditional mirror work, and charm-accented cowrie shells.',
      hero: A + 'women-clean.jpg?v=3',
      heroMobile: A + 'women-mobile.jpg?v=3',
      heroPos: '50% 50%',
      groups: [
        {
          title: 'Corset Blouses',
          subs: [
            { slug: 'corset-blouse', label: 'All Corset Blouses', img: A + 'Vibrant handcrafted mirror-work ethnic corset blouse.PNG', band: A + 's2-card-women.jpg?v=2', focal: '50% 32%' }
          ]
        }
      ]
    },
    'designer-blouse': {
      slug: 'designer-blouse',
      label: 'Designer Blouses',
      eyebrow: 'Statement Couture',
      title: 'Designer Blouses',
      line: 'Glamorous backless cuts, all-over sequin embellishments, and luxury zardozi craftsmanship.',
      hero: A + 's4-room.jpg?v=1',
      heroMobile: A + 's4-room-mobile.jpg?v=1',
      heroPos: '50% 50%',
      groups: [
        {
          title: 'Designer Blouses',
          subs: [
            { slug: 'designer-blouse', label: 'All Designer Blouses', img: A + 'Black Beaded Corset Blouse.PNG', band: A + 's5-kurta.jpg?v=1', focal: '50% 38%' }
          ]
        }
      ]
    },
    'women': {
      slug: 'women',
      label: 'Women',
      eyebrow: 'The Women’s Edit',
      title: 'Women',
      line: 'Handcrafted corset blouses and designer party apparel.',
      hero: A + 'women-clean.jpg?v=3',
      heroMobile: A + 'women-mobile.jpg?v=3',
      heroPos: '62% 45%',
      groups: [
        {
          title: 'Collections',
          subs: [
            { slug: 'corset-blouse', label: 'Corset Blouses', img: A + 'Vibrant handcrafted mirror-work ethnic corset blouse.PNG', band: A + 's2-card-women.jpg?v=2', focal: '50% 32%' },
            { slug: 'designer-blouse', label: 'Designer Blouses', img: A + 'Black Beaded Corset Blouse.PNG', band: A + 's5-kurta.jpg?v=1', focal: '50% 38%' }
          ]
        }
      ]
    },
    'kalakaari': {
      slug: 'kalakaari',
      label: 'Kalakaari',
      eyebrow: 'The Kalakaari Atelier',
      title: 'Kalakaari',
      line: 'Art that tells a story — hand-drawn, hand-dyed, hand-finished.',
      hero: A + 's4-room.jpg?v=1',
      heroMobile: A + 's4-room-mobile.jpg?v=1',
      heroPos: '38% 50%',
      groups: [
        {
          title: 'The Collections',
          subs: [
            { slug: 'corset-blouse', label: 'Corset Blouses', img: A + 'Vibrant handcrafted mirror-work ethnic corset blouse.PNG', band: A + 's2-card-kala.jpg?v=2', focal: '50% 40%' },
            { slug: 'designer-blouse', label: 'Designer Blouses', img: A + 'Black Beaded Corset Blouse.PNG', band: A + 's4-room.jpg?v=1', focal: '42% 42%' }
          ]
        }
      ]
    }
  };

  /* ---------- products ---------- */
  function p(o) {
    o.sizes = o.sizes || SIZES;
    o.care = o.care || CARE;
    o.shipping = o.shipping || SHIP;
    return o;
  }

  var PRODUCTS = [
    p({
      id: 'p1',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Vibrant handcrafted mirror-work ethnic corset blouse",
      name: "Vibrant handcrafted mirror-work ethnic corset blouse",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 45,
      fabric: "Silk Blend",
      desc: "Make a striking festive statement with this handcrafted ethnic corset top, intricately detailed with vibrant thread embroidery, traditional mirror work, and charm-accented cowrie shells.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Vibrant handcrafted mirror-work ethnic corset blouse.PNG"]
    }),\n    p({
      id: 'p2',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Vibrant handcrafted mirror-work ethnic corset blouse Green",
      name: "Vibrant handcrafted mirror-work ethnic corset blouse Green",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 52,
      fabric: "Silk Blend",
      desc: "Make a striking festive statement with this handcrafted ethnic corset top, intricately detailed with vibrant thread embroidery, traditional mirror work, and charm-accented cowrie shells.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "IMG_0029.PNG"]
    }),\n    p({
      id: 'p3',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Vibrant handcrafted mirror-work ethnic corset blouse Dark Green",
      name: "Vibrant handcrafted mirror-work ethnic corset blouse Dark Green",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 59,
      fabric: "Silk Blend",
      desc: "Make a striking festive statement with this handcrafted ethnic corset top, intricately detailed with vibrant thread embroidery, traditional mirror work, and charm-accented cowrie shells.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "IMG_0047.PNG"]
    }),\n    p({
      id: 'p4',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Vibrant handcrafted mirror work ethnic corset blouse",
      name: "Vibrant handcrafted mirror work ethnic corset blouse",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 66,
      fabric: "Silk Blend",
      desc: "Make a striking festive statement with this handcrafted ethnic corset top, intricately detailed with vibrant thread embroidery, traditional mirror work, and charm-accented cowrie shells.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Vibrant handcrafted mirror-work ethnic corset blouse Blue.PNG"]
    }),\n    p({
      id: 'p5',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Black Beaded Corset Blouse",
      name: "Black Beaded Corset Blouse",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 73,
      fabric: "Artisanal Silk",
      desc: "A glamorous black sweetheart-neck corset blouse, fully studded with tone-on-tone beads and styled with an alluring lace-up back tie.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Black Beaded Corset Blouse.PNG"]
    }),\n    p({
      id: 'p6',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Mustard Yellow Mirror Work Blouse",
      name: "Mustard Yellow Mirror Work Blouse",
      price: 1299,
      mrp: 1600,
      rating: 5,
      reviews: 80,
      fabric: "Artisanal Silk",
      desc: "vibrant mustard-yellow deep V-neck blouse encrusted with dense mirror work, perfect for haldi and festive wear.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Golden Mustard Mirror Work Blouse.PNG"]
    }),\n    p({
      id: 'p7',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "vibrant mustard-yellow deep V-neck blouse encrusted with dense mirror work, perfect for haldi and festive wear.",
      name: "vibrant mustard-yellow deep V-neck blouse encrusted with dense mirror work, perfect for haldi and festive wear.",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 87,
      fabric: "Artisanal Silk",
      desc: "A modern black sleeveless blouse featuring a sharp chevron sequin pattern and a sweetheart neck for sleek evening styling.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Black Sequined Chevron Crop Top.PNG"]
    }),\n    p({
      id: 'p8',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Quilted Black Embellished Top",
      name: "Quilted Black Embellished Top",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 94,
      fabric: "Artisanal Silk",
      desc: "An elegant black padded corset top highlighting delicate lattice beadwork and a classic tie-up back detail.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Midnight Quilted Pearl Bustier Blouse.PNG"]
    }),\n    p({
      id: 'p9',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Pastel Sorbet Beaded Corset",
      name: "Pastel Sorbet Beaded Corset",
      price: 2499,
      mrp: 3100,
      rating: 5,
      reviews: 101,
      fabric: "Artisanal Silk",
      desc: "A soft pastel multi-colored corset blouse woven with dense beadwork, sweetheart neckline, and a romantic laced back.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Pastel Sorbet Beaded Corset Blouse.PNG"]
    }),\n    p({
      id: 'p10',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Ivory Pastel Threadwork Halter Blouse",
      name: "Ivory Pastel Threadwork Halter Blouse",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 108,
      fabric: "Artisanal Silk",
      desc: "A sophisticated high-neck halter top detailed with pastel floral thread embroidery and dainty bead fringe edging.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Ivory Pastel Threadwork Halter Blouse.PNG"]
    }),\n    p({
      id: 'p11',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Black Geometric Sequin Blouse",
      name: "Black Geometric Sequin Blouse",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 115,
      fabric: "Artisanal Silk",
      desc: "A chic black sleeveless crop blouse featuring a striking geometric zig-zag pattern in shimmering silver sequins.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Obsidian Zig-Zag Sequined Bustier Blouse.jpeg"]
    }),\n    p({
      id: 'p12',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Champagne Gold Zardozi V-Neck Blouse",
      name: "Champagne Gold Zardozi V-Neck Blouse",
      price: 2499,
      mrp: 3100,
      rating: 5,
      reviews: 122,
      fabric: "Artisanal Silk",
      desc: "A rich champagne-gold deep V-neck blouse intricate with delicate sequins, zardozi work, and elegant hanging pearl drop tassels.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Champagne Gold Zardozi V-Neck Blouse.PNG"]
    }),\n    p({
      id: 'p13',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Shimmer Gold Bustier Top",
      name: "Shimmer Gold Bustier Top",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 49,
      fabric: "Artisanal Silk",
      desc: "A statement gold corset top styled with heavily beaded cups, sheer-look structured boning, and strap detail.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Golden Glam Corset Bustier Blouse.PNG"]
    }),\n    p({
      id: 'p14',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "High-Neck Beaded Fringe Cape Blouse",
      name: "High-Neck Beaded Fringe Cape Blouse",
      price: 3499,
      mrp: 4400,
      rating: 5,
      reviews: 56,
      fabric: "Artisanal Silk",
      desc: "A high-neck sheer black top adorned with gold and black embroidered shoulder detailing and floor-sweeping beaded tassels.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "High-Neck Beaded Fringe Cape Blouse.PNG"]
    }),\n    p({
      id: 'p15',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Antique Gold Zardosi Corset Blouse",
      name: "Antique Gold Zardosi Corset Blouse",
      price: 2499,
      mrp: 3100,
      rating: 5,
      reviews: 63,
      fabric: "Artisanal Silk",
      desc: "Exude royal elegance in this antique gold corset blouse, intricately embroidered with detailed zardosi beadwork. Finished with a flattering plunging neckline, a center tassel motif, and delicate dangling beaded fringes along the hemline, it's the ultimate statement piece for bridal lehengas and festive sarees.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Antique Gold Zardosi Corset Blouse.PNG"]
    }),\n    p({
      id: 'p16',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Baby Pink Beaded Fringed Corset Blouse",
      name: "Baby Pink Beaded Fringed Corset Blouse",
      price: 2499,
      mrp: 3100,
      rating: 5,
      reviews: 70,
      fabric: "Artisanal Silk",
      desc: "Soft, feminine, and glamorous—this baby pink corset blouse is completely encrusted with tonal micro-beading. Complete with a structured silhouette and a pearl-style fringe along the lower border, it brings a fresh, chic vibe to sangeet celebrations and cocktail wear.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Baby Pink Beaded Fringed Corset Blouse.PNG"]
    }),\n    p({
      id: 'p17',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Glamorous Black Embellished Corset Blouse",
      name: "Glamorous Black Embellished Corset Blouse",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 77,
      fabric: "Artisanal Silk",
      desc: "Turn heads in this striking black corset featuring structured bust detailing, intricate tonal threadwork, and shimmering sequin embroidery. Styled with slim shoulder straps and a sweetheart neckline, it pairs effortlessly with modern draped sarees and flared fusion skirts.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Glamorous Black embellished corset Blouse.PNG"]
    }),\n    p({
      id: 'p18',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Glamorous Green Embellished Corset Blouse",
      name: "Glamorous Green Embellished Corset Blouse",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 84,
      fabric: "Artisanal Silk",
      desc: "Crafted in a rich emerald green shade, this corset blouse highlights opulent floral sequin patterns and structured boning for a contoured fit. Perfect for evening receptions, galas, and high-glam festive occasions.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Glamorous Green embellished corset Blouse.PNG"]
    }),\n    p({
      id: 'p19',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Glamorous Red Embellished Corset Blouse",
      name: "Glamorous Red Embellished Corset Blouse",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 91,
      fabric: "Artisanal Silk",
      desc: "A classic festive shade transformed into a modern masterpiece. This crimson red bustier corset is adorned with intricate sequin motifs, offering a showstopping silhouette that elevated traditional lehengas and sarees instantly.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Glamorous Red embellished corset Blouse.PNG"]
    }),\n    p({
      id: 'p20',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Glamorous Silver Embellished Corset Blouse",
      name: "Glamorous Silver Embellished Corset Blouse",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 98,
      fabric: "Artisanal Silk",
      desc: "Shine under the lights with this silver sequin corset top. Featuring a sweetheart neckline, defined bust structure, and all-over metallic embellishments, this piece brings instant high-fashion flair to cocktail parties and receptions.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Glamorous Silver embellished corset Blouse.PNG"]
    }),\n    p({
      id: 'p21',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Indo-Western Folk Mirror Work Corset Top",
      name: "Indo-Western Folk Mirror Work Corset Top",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 105,
      fabric: "Artisanal Silk",
      desc: "A blend of heritage folk art and modern silhouette, this longline corset top features large center mirror work, tribal thread embroidery, and a silver-beaded cowrie shell hemline. Perfect for styling with flared lehengas, tiered skirts, or dhoti pants for an effortless Indo-Western look.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "IMG_0032.PNG"]
    }),\n    p({
      id: 'p22',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Indo-Western Folk Mirror Work Corset Top",
      name: "Indo-Western Folk Mirror Work Corset Top",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 112,
      fabric: "Artisanal Silk",
      desc: "A blend of heritage folk art and modern silhouette, this longline corset top features large center mirror work, tribal thread embroidery, and a silver-beaded cowrie shell hemline. Perfect for styling with flared lehengas, tiered skirts, or dhoti pants for an effortless Indo-Western look.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "IMG_0042.PNG"]
    }),\n    p({
      id: 'p23',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Light Olive Embellished Corset Blouse",
      name: "Light Olive Embellished Corset Blouse",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 119,
      fabric: "Silk Blend",
      desc: "Step into elegance with this beautifully crafted light olive corset-style blouse. Adorned with intricate hand-embroidery featuring tone-on-tone sequins and fine beadwork, it creates a subtle, glamorous shimmer. The structured boning, sweetheart neckline, and unique pointed asymmetric hemline provide a flawless, flattering fit for high-fashion festive wear.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Light Olive Embellished Corset Blouse.PNG"]
    }),\n    p({
      id: 'p24',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Black and Gold Wave-Pattern Bralette",
      name: "Black and Gold Wave-Pattern Bralette",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 46,
      fabric: "Silk Blend",
      desc: "Make a striking statement in this bold bralette top. It features eye-catching parallel wave-patterned hand-embroidery in rich gold beads on a deep black base. The structured sweetheart neckline, slender straps, playful beaded fringe, and dramatic criss-cross lace-up back closure create a sensational Indo-Western evening look.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Black and Gold Wave-Pattern Bralette.PNG"]
    }),\n    p({
      id: 'p25',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Yellow Lace-Back Corset Blouse",
      name: "Yellow Lace-Back Corset Blouse",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 53,
      fabric: "Silk Blend",
      desc: "Brighten any celebration with this vibrant golden yellow corset blouse. It features a structured sweetheart neckline, boning, and intricate tone-on-tone gilded thread and sequin floral embroidery. The defining features are its modern pointed asymmetric hemline and a sensuous, adjustable criss-cross lace-up back, blending traditional artistry with a contemporary silhouette.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Yellow Lace-Back Corset Blouse.PNG"]
    }),\n    p({
      id: 'p26',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Black Sequin Backless Blouse",
      name: "Black Sequin Backless Blouse",
      price: 1599,
      mrp: 2000,
      rating: 5,
      reviews: 60,
      fabric: "Artisanal Silk",
      desc: "Perfect your evening look with this classic and glamorous jet black blouse. Dazzling black sequins provide comprehensive sparkle on a structured, sleeveless silhouette with a simple V-neckline. The back is the highlight, featuring a dramatic, deep V-cutout secured by elegant, slender tie-up straps finished with matching tassels, ensuring you look stunning from every angle.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Black Sequin Backless Blouse.PNG"]
    }),\n    p({
      id: 'p27',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Silver Sequin Backless Blouse",
      name: "Silver Sequin Backless Blouse",
      price: 1599,
      mrp: 2000,
      rating: 5,
      reviews: 67,
      fabric: "Artisanal Silk",
      desc: "Shine flawlessly in this dazzling silver sequin blouse. Covered entirely in shimmering silver mirror-style sequins, it features a classic sleeveless shape and V-neckline. The striking open back design features a deep V-cutout secured by a delicate, adjustable tie-up strap finished with decorative tassels, making it an ideal companion for metallic-toned sarees or lehengas.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Silver Sequin Backless Blouse.PNG"]
    }),\n    p({
      id: 'p28',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Gold Sequin Backless Blouse",
      name: "Gold Sequin Backless Blouse",
      price: 1599,
      mrp: 2000,
      rating: 5,
      reviews: 74,
      fabric: "Artisanal Silk",
      desc: "Add instant glamour to your saree or lehenga with this sparkling gold blouse. The sleeveless design is completely encrusted with all-over shimmering gold mirror-style sequins for a show-stopping effect. The dramatic deep V-back closure is secured by slender tie-up straps finished with exquisite ornate tassels, creating a sensuous and unforgettable evening ensemble.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Gold Sequin Backless Blouse.PNG"]
    }),\n    p({
      id: 'p29',
      cat: 'designer-blouse',
      category: 'Designer Blouse',
      sub: 'designer-blouse',
      title: "Gold Diamond Lattice Corset",
      name: "Gold Diamond Lattice Corset",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 81,
      fabric: "Artisanal Silk",
      desc: "Achieve a high-fashion, structured look with this stunning gold corset blouse. It is defined by intricate, all-over diamond-patterned lattice hand-embroidery featuring small mirror accents. The bustier silhouette includes a sweetheart neckline, slender straps, and is secured by a dramatic criss-cross lace-up back with adjustable ties and tassels, perfect for creating a contoured Indo-Western statement.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "IMG_8243.PNG"]
    }),\n    p({
      id: 'p30',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Silver Patterned Corset Top",
      name: "Silver Patterned Corset Top",
      price: 1999,
      mrp: 2500,
      rating: 5,
      reviews: 88,
      fabric: "Silk Blend",
      desc: "Master modern glamour in this intricately designed silver corset top. It features complex, all-over ornate filigree or vine hand-embroidery using silver beads and threadwork, enhanced by structured boning and bustier styling. With its sweetheart neckline, slender straps, and subtle pointed hemline, it offers a contoured fit that effortlessly elevates both sarees and fusion high-waisted trousers.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Silver Patterned Corset Top Blouse.PNG"]
    }),\n    p({
      id: 'p31',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Hot Pink Sequin Corset",
      name: "Hot Pink Sequin Corset",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 95,
      fabric: "Silk Blend",
      desc: "Turn heads in this electrifying hot pink corset-style blouse. Intricately adorned with all-over hot pink sequin and threadwork, it features complex geometric or floral motifs for maximalist sparkle. This structured piece includes boning, a sweetheart neckline, defined bust cups, and is finished with a distinct scalloped hemline, perfect for adding a pop of couture glam to festive attire.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Hot Pink Sequin Corset Blouse.PNG"]
    }),\n    p({
      id: 'p32',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Emerald Green Diamond Corset Blouse",
      name: "Emerald Green Diamond Corset Blouse",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 102,
      fabric: "Silk Blend",
      desc: "Experience maximalist texture and sparkle in this luxurious emerald green corset blouse. Intricately detailed with all-over diamond-patterned lattice embroidery encrusted with green sequins and mirrors, it offers a rich and radiant effect. Featuring defined bust cups, supportive straps, and structured boning, the back is secured by a daring criss-cross lace-up tie-back closure, merging traditional opulence with modern design.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Emerald Green Diamond Corset.PNG"]
    }),\n    p({
      id: 'p33',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Hot Pink Mirror Work Lace-Up Corset Blouse",
      name: "Hot Pink Mirror Work Lace-Up Corset Blouse",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 109,
      fabric: "Silk Blend",
      desc: "Make a vibrant statement with this hot pink corset blouse featuring all-over geometric mirror embellishments. Designed with structured bustier cups, a pointed V-hemline, and an open lace-up back with adjustable dori ties, this top blends modern bridal glamour with traditional artisan work.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Hot Pink Mirror Work Lace-Up Corset Blouse.PNG"]
    }),\n    p({
      id: 'p34',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Charcoal Grey Mirror Work Corset Blouse",
      name: "Charcoal Grey Mirror Work Corset Blouse",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 116,
      fabric: "Silk Blend",
      desc: "Sleek and contemporary, this charcoal grey corset blouse features intricate mirror-work arranged in modern chevron and geometric lattice patterns. Its contoured bust, pointed hemline, and backless tie-up closure make it an ideal choice for high-glam evening receptions or fusion festive styling.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Charcoal Grey Mirror Work Corset Blouse.PNG"]
    }),\n    p({
      id: 'p35',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Sunset Orange Mirror Work Corset Blouse",
      name: "Sunset Orange Mirror Work Corset Blouse",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 123,
      fabric: "Silk Blend",
      desc: "Radiate warmth and energy in this bright orange corset blouse adorned with dense mirror embroidery throughout. Highlights include a sweetheart neckline, structured boning, a V-cut hemline, and an adjustable criss-cross lace-up back for a custom contoured fit.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Sunset Orange Mirror Work Corset Blouse.PNG"]
    }),\n    p({
      id: 'p36',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Deep Maroon Mirror Work Corset Blouse",
      name: "Deep Maroon Mirror Work Corset Blouse",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 50,
      fabric: "Silk Blend",
      desc: "Rich and opulent, this maroon corset blouse showcases dense mirror work detailed along a structured silhouette. Featuring a defined bustier, a dramatic pointed hem, and a backless tie-up closure, it's a regal addition to winter wedding lehengas or festive sarees.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Deep Maroon Mirror Work Corset Blouse.PNG"]
    }),\n    p({
      id: 'p37',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Mint Green Floral Threadwork Blouse",
      name: "Mint Green Floral Threadwork Blouse",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 57,
      fabric: "Silk Blend",
      desc: "Soft, romantic, and elegant—this mint green blouse features pastel floral thread embroidery accented with subtle sequin highlights. Designed with elbow-length sleeves and a flattering V-neckline",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Mint Green Floral Threadwork Blouse.PNG"]
    }),\n    p({
      id: 'p38',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Off-White Pearl Embellished Blouse",
      name: "Off-White Pearl Embellished Blouse",
      price: 1799,
      mrp: 2200,
      rating: 5,
      reviews: 64,
      fabric: "Silk Blend",
      desc: "Exude ethereal charm in this off-white corset blouse covered in vertical rows of fine pearl embellishments. Finished with a plunging V-neckline, a pearl-beaded fringe along the hem, and a front tie detail with pearl tassels, this piece is tailor-made for cocktail nights and modern festive wear.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Off-White Pearl Embellished Blouse.jpeg"]
    }),\n    p({
      id: 'p39',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Metallic Silver Mirror Work Corset Blouse",
      name: "Metallic Silver Mirror Work Corset Blouse",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 71,
      fabric: "Silk Blend",
      desc: "Designed to shine from every angle, this metallic silver corset top features intricate mirror lattice work and a structured bustier fit. The pointed V-hem and open criss-cross tie back give it a bold, high-fashion edge perfect for reception and sangeet parties.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Metallic Silver Mirror Work Corset Blouse.PNG"]
    }),\n    p({
      id: 'p40',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "Mustard Yellow Mirror Work Corset Blouse",
      name: "Mustard Yellow Mirror Work Corset Blouse",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 78,
      fabric: "Silk Blend",
      desc: "Bright and festive, this mustard yellow corset top is highlighted by dense geometric mirror work and supportive boning. Featuring a sweetheart neckline, a contoured V-cut hem, and a delicate lace-up back closure, it is the perfect pick for Haldi, Mehendi, and Sangeet celebrations.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Mustard Yellow Mirror Work Corset Blouse.PNG"]
    }),\n    p({
      id: 'p41',
      cat: 'corset-blouse',
      category: 'Corset Blouse',
      sub: 'corset-blouse',
      title: "BlueMirror Work Corset Blouse",
      name: "BlueMirror Work Corset Blouse",
      price: 1499,
      mrp: 1900,
      rating: 5,
      reviews: 85,
      fabric: "Silk Blend",
      desc: "Bright and festive, this mustard yellow corset top is highlighted by dense geometric mirror work and supportive boning. Featuring a sweetheart neckline, a contoured V-cut hem, and a delicate lace-up back closure, it is the perfect pick for Haldi, Mehendi, and Sangeet celebrations.",
      details: 'Handcrafted in India · Precision sculpted fit · Dry clean only',
      colors: [C.gold, C.ivory, C.maroon],
      images: [A + "Blue Mirror Work Corset Blouse.PNG"]
    })
  ];

  /* ---------- lookups ---------- */
  function subLabel(catSlug, subSlug) {
    var c = CATEGORIES[catSlug];
    if (!c) return subSlug;
    for (var i = 0; i < c.groups.length; i++) {
      var found = c.groups[i].subs.filter(function (s) { return s.slug === subSlug; })[0];
      if (found) return found.label;
    }
    return subSlug;
  }

  function subMeta(catSlug, subSlug) {
    var c = CATEGORIES[catSlug];
    if (!c) return null;
    for (var i = 0; i < c.groups.length; i++) {
      var f = c.groups[i].subs.filter(function (s) { return s.slug === subSlug; })[0];
      if (f) return f;
    }
    return null;
  }

  window.MAHIRA_SHOP = {
    colors: C,
    categories: CATEGORIES,
    products: PRODUCTS,
    byId: function (id) {
      if (id === 'ms-101') return PRODUCTS[0];
      if (id === 'ms-102') return PRODUCTS[1];
      if (id === 'mk-101') return PRODUCTS[2];
      return PRODUCTS.filter(function (x) { return x.id === id; })[0] || null;
    },
    inSub: function (cat, sub) {
      if (!sub || sub === 'all') return PRODUCTS.filter(function (x) { return x.cat === cat || cat === 'women' || cat === 'kalakaari'; });
      return PRODUCTS.filter(function (x) { return (x.cat === cat || x.sub === sub || x.category.toLowerCase().includes(sub.replace(/-/g, ' '))); });
    },
    inCat: function (cat) {
      if (!cat || cat === 'all' || cat === 'women' || cat === 'kalakaari') return PRODUCTS;
      return PRODUCTS.filter(function (x) { return x.cat === cat || x.category.toLowerCase().includes(cat.replace(/-/g, ' ')); });
    },
    subLabel: subLabel,
    subMeta: subMeta
  };
})();
