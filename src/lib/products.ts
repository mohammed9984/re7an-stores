export type Product = { id: string; name: string; price: number; emoji: string; description: string };

// Edit your products here.
export const products: Product[] = [
  { id: "1", name: "Classic Watch", price: 59, emoji: "⌚", description: "Minimal stainless steel watch with a leather strap." },
  { id: "2", name: "Leather Wallet", price: 29, emoji: "👛", description: "Slim handmade wallet with six card slots." },
  { id: "3", name: "Sunglasses", price: 35, emoji: "🕶️", description: "UV400 protection with a lightweight frame." },
  { id: "4", name: "Backpack", price: 49, emoji: "🎒", description: "Water-resistant backpack with a laptop pocket." },
  { id: "5", name: "Sneakers", price: 79, emoji: "👟", description: "Comfortable everyday sneakers." },
  { id: "6", name: "Perfume", price: 45, emoji: "🧴", description: "Fresh long-lasting fragrance, 100ml." },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const money = (n: number) => `$${n.toFixed(2)}`;
