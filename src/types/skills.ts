// src/types/product.ts
export interface skills {
  source: string | undefined;
  cat: string;
  level: string;
  id: number;
  name: string;
  description?: string; // Optional property
  price: number;
}