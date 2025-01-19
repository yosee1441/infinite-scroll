export interface Product {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  discount?: number;
  sizes: string[];
  slug: string;
  type: string;
  tags: string[];
  title: string;
  gender: string;
}
