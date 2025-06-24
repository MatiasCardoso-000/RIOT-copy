import { createContext } from "react";
import type { Product } from "../../types/product.interface";

interface ProductsContextType {
  // Define the properties and methods that will be available in the context
  products: Product[]; // Replace 'any' with your product type
  product: Product;
  selectedSize: string;
  favoritesProducts: Product[];
  handleFavoriteProduct: (product: Product) => void;
  handleProductSize: (size: string) => void;
  increaseProductQuantity: (product: Product) => void;
  decreaseProductQuantity: (product: Product) => void;
  setProducts?: (products: Product[]) => void; // Function to set products
}
export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  product: {} as Product,
  selectedSize: "",
  favoritesProducts: [],
  handleFavoriteProduct: (product: Product) => product,
  handleProductSize: (size) => size,
  increaseProductQuantity: (product) => product,
  decreaseProductQuantity: (product) => product,
  setProducts: () => {},
});
