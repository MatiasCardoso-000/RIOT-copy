export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  imageDetail?: string; // Optional, used for detailed views
  category: string;
  stock?: number;
  sizes: string[];
  color: string;
  colorHex:string
  quantity: number; // Optional, used for cart management
  isFavorite?: boolean;
} // Optional, used for favorites management
