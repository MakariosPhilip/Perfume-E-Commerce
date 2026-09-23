import type { Product } from "@/features/products/types/product.types";

function volumes(price: number): Product["volumes"] {
  return [
    { label: "30 ml", price: Math.round(price * 0.64) },
    { label: "50 ml", price: Math.round(price * 0.82) },
    { label: "100 ml", price },
  ];
}

export const mockProducts: Product[] = [
  {
    id: "fleur-de-lune",
    name: "Fleur de Lune",
    description:
      "A luminous floral composition that opens with jasmine petals and settles into a soft white musk.",
    notes: "Floral / Jasmine & White Musk",
    notesPyramid: {
      top: "Neroli, Pear Blossom",
      heart: "Jasmine Sambac, Orange Flower",
      base: "White Musk, Blonde Woods",
    },
    price: 195,
    images: ["/images/products/fleur-de-lune.png"],
    category: "fragrances",
    scentFamily: "floral",
    occasion: "personal-use",
    inStock: true,
    volumes: volumes(195),
    options: [],
  },
  {
    id: "santal-parchment",
    name: "Santal Parchment",
    description:
      "Santal Parchment wraps around the skin like vintage vellum paper. It opens with bright top notes, shifting to clean papyrus and warm, rich sandalwood that dry down into dry cardamom and amber.",
    notes: "Woody / Sandalwood & Cardamom",
    notesPyramid: {
      top: "Sicilian Bergamot, Pink Pepper",
      heart: "Egyptian Jasmine Sambac, Papyrus",
      base: "West Indian Sandalwood, Cardamom, Amber",
    },
    price: 220,
    images: [
      "/images/products/santal-parchment.png",
      "/images/products/santal-parchment-2.png",
      "/images/products/santal-parchment-3.png",
    ],
    category: "fragrances",
    scentFamily: "woody",
    occasion: "evening",
    inStock: true,
    volumes: [
      { label: "30 ml", price: 140 },
      { label: "50 ml", price: 180 },
      { label: "100 ml", price: 220 },
    ],
    options: [],
  },
  {
    id: "noir-cocoon",
    name: "Noir Cocoon",
    description:
      "An oriental blend of tobacco and amber, wrapped in a warm evening cocoon.",
    notes: "Oriental / Tobacco & Amber",
    notesPyramid: {
      top: "Bergamot, Dried Fruit",
      heart: "Tobacco Leaf, Labdanum",
      base: "Amber, Tonka Bean",
    },
    price: 240,
    images: ["/images/products/noir-cocoon.png"],
    category: "fragrances",
    scentFamily: "oriental",
    occasion: "wedding",
    inStock: true,
    volumes: volumes(240),
    options: [],
  },
  {
    id: "sol-dor",
    name: "Sol d'Or",
    description:
      "A fresh coastal blend of bergamot and sea salt, bright from first spray to dry down.",
    notes: "Fresh / Bergamot & Sea Salt",
    notesPyramid: {
      top: "Bergamot, Sea Spray",
      heart: "Neroli, Driftwood",
      base: "White Musk, Mineral Accords",
    },
    price: 185,
    images: ["/images/products/sol-dor.png"],
    category: "fragrances",
    scentFamily: "fresh",
    occasion: "personal-use",
    inStock: true,
    volumes: volumes(185),
    options: [],
  },
  {
    id: "atelier-oud",
    name: "Atelier Oud",
    description: "Rich oud deepened with saffron, reserved for private sittings.",
    notes: "Woody / Rich Oud & Saffron",
    notesPyramid: {
      top: "Saffron, Pink Pepper",
      heart: "Rose Absolute, Incense",
      base: "Oud, Patchouli",
    },
    price: 310,
    images: ["/images/products/atelier-oud.png"],
    category: "atelier-oils",
    scentFamily: "woody",
    occasion: "gift",
    inStock: false,
    volumes: volumes(310),
    options: [],
  },
  {
    id: "rose-absolute",
    name: "Rose Absolute",
    description: "Damask rose balanced with cedar, composed for celebration.",
    notes: "Floral / Damask Rose & Cedar",
    notesPyramid: {
      top: "Pink Pepper, Bergamot",
      heart: "Damask Rose, Peony",
      base: "Cedar, Soft Musk",
    },
    price: 205,
    images: ["/images/products/rose-absolute.png"],
    category: "fragrances",
    scentFamily: "floral",
    occasion: "birthday",
    inStock: true,
    volumes: volumes(205),
    options: [],
  },
];
