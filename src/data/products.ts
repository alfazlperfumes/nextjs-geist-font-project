export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Oud Al Malaki",
    description: "A luxurious blend of premium oud with rose and saffron, creating an enchanting fragrance that embodies royal elegance and sophistication.",
    price: 299,
    image: "https://placehold.co/400x400?text=Oud+Al+Malaki+Luxury+Arabian+Perfume+Bottle+Gold+Accents",
    category: "Oud",
    inStock: true
  },
  {
    id: "2",
    name: "Amber Nights",
    description: "A warm and sensual fragrance featuring rich amber, vanilla, and exotic spices that transport you to magical Arabian nights.",
    price: 199,
    image: "https://placehold.co/400x400?text=Amber+Nights+Arabian+Perfume+Bottle+Dark+Amber+Glass",
    category: "Amber",
    inStock: true
  },
  {
    id: "3",
    name: "Rose Damascus",
    description: "Pure Damascus rose essence combined with delicate florals and musk, creating a timeless and romantic fragrance.",
    price: 249,
    image: "https://placehold.co/400x400?text=Rose+Damascus+Elegant+Pink+Perfume+Bottle+Floral+Design",
    category: "Floral",
    inStock: true
  },
  {
    id: "4",
    name: "Musk Al Haramain",
    description: "A classic musk fragrance with hints of sandalwood and jasmine, perfect for those who appreciate traditional Arabian scents.",
    price: 179,
    image: "https://placehold.co/400x400?text=Musk+Al+Haramain+Traditional+Arabian+Perfume+Bottle+White+Gold",
    category: "Musk",
    inStock: true
  },
  {
    id: "5",
    name: "Saffron Royale",
    description: "An opulent fragrance featuring precious saffron, cardamom, and precious woods, fit for royalty and special occasions.",
    price: 349,
    image: "https://placehold.co/400x400?text=Saffron+Royale+Premium+Golden+Perfume+Bottle+Royal+Design",
    category: "Spicy",
    inStock: true
  },
  {
    id: "6",
    name: "Jasmine Garden",
    description: "A fresh and captivating blend of jasmine, orange blossom, and white tea, evoking the beauty of an Arabian garden.",
    price: 219,
    image: "https://placehold.co/400x400?text=Jasmine+Garden+Fresh+White+Perfume+Bottle+Garden+Motifs",
    category: "Fresh",
    inStock: false
  }
];
