// src/types/product.ts
export interface skills {
  category: string;
  level: string;
  source: string | undefined;
  id: number;
  name: string;
  description?: string; // Optional property
  price: number;
}