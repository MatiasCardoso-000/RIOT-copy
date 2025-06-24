import { useState } from "react";
import { ProductsContext } from "./ProductsContext";
import type { Product } from "../../types/product.interface";

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Remera Over Size Blanca",
      price: 15000,
      image:
        "https://matiascardoso-000.github.io/RIOT-copy/IMG-20250609-WA0001.jpg",
      description: "Remera Over Size de algodón 100% de alta calidad.",
      category: "Remeras Oversize",
      sizes: ["S", "M", "L", "XL"],
      color: "Blanco",
      colorHex: "#ffffff",
      quantity: 0,
    },
    {
      id: 2,
      name: "Remera OverSize Unisex Negro",
      price: 15000,
      image:
        "https://matiascardoso-000.github.io/RIOT-copy/IMG-20250609-WA0002.jpg",
      description: "Remera Over Size de algodón 100% de alta calidad.",
      category: "Remeras Oversize",
      sizes: ["S", "M", "L", "XL"],
      color: "Negro",
      colorHex: "#000000",
      quantity: 0,
    },
    {
      id: 3,
      name: "Remera Over Size Marrón",
      price: 15000,
      image:
        "https://matiascardoso-000.github.io/RIOT-copy/IMG-20250609-WA0003.jpg",
      description: "Remera Over Size de algodón 100% de alta calidad.",
      category: "Remeras Oversize",
      sizes: ["S", "M", "L", "XL"],
      color: "Marrón",
      colorHex: "#513f29",
      quantity: 0,
    },
    {
      id: 4,
      name: "Remera OverSize Unisex Gris",
      price: 15000,
      image:
        "https://matiascardoso-000.github.io/RIOT-copy/IMG-20250609-WA0004.jpg",
      description: "Remera Over Size de algodón 100% de alta calidad.",
      category: "Remeras Oversize",
      sizes: ["S", "M", "L", "XL"],
      color: "Gris",
      colorHex: "#323638",
      quantity: 0,
    },
    {
      id: 5,
      name: "Remera Básica Rosada",
      price: 12000,
      image:
        "https://matiascardoso-000.github.io/RIOT-copy/remeras_basicas.jpg",
      description: "Remera Básica de algodón 100% de alta calidad.",
      category: "Remeras Básicas",
      sizes: ["S", "M", "L", "XL"],
      color: "Rosado",
      colorHex: "#e3cdd3",
      quantity: 0,
    },
    {
      id: 6,
      name: "Remera Básica Marrón",
      price: 12000,
      image:
        "https://matiascardoso-000.github.io/RIOT-copy/remeras_basicas_beige.jpg",
      description: "Remera Básica de algodón 100% de alta calidad.",
      category: "Remeras Básicas",
      sizes: ["S", "M", "L", "XL"],
      color: "Marrón",
      colorHex: "#d7b899",
      quantity: 0,
    },
  ]);
  const [favoritesProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>({} as Product);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const handleProductSize = (size: string) => {
    setSelectedSize(size);
  };

  const increaseProductQuantity = (product: Product) => {
    if (product.quantity >= 0) {
      return setProduct({
        ...product,
        quantity: product.quantity++,
      });
    }
  };

  const decreaseProductQuantity = (product: Product) => {
    if (product.quantity > 0) {
      return setProducts((prevState) => [
        ...prevState,
        { ...product, quantity: product.quantity-- },
      ]);
    }
  };

  const handleFavoriteProduct = (product: Product) => {
    const isFavorite = favoritesProducts.findIndex((p) => p.id === product.id);

    if (!isFavorite) {
      setFavoriteProducts((prevState) => ({ ...prevState, product }));
    }

    return favoritesProducts
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        product,
        selectedSize,
        favoritesProducts,
        handleFavoriteProduct,
        handleProductSize,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
