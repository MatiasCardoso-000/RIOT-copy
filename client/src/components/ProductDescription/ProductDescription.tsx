import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

export const ProductDescription = () => {
  const { products } = useProducts();
  
  const { id } = useParams<{ id: string }>();
  const product = products.find((product) => product.id === Number(id));
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div>
          {product ? (
           <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex flex-col md:flex-row gap-6">
              <img src={product.imageDetail} alt={product.name} className="w-full md:w-1/2 rounded-lg shadow-lg" />
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700 mb-4">{product.description}</p>
                <p className="text-5xl font-semibold text-gray-900 mb-4">${product.price}</p>
                <button className="bg-zinc-800 text-white px-4 py-2 rounded hover:bg-zinc-600 transition duration-200">Add to Cart</button>
              </div>
            </div>            
           </div>
          ) : (
            <p>Product not found</p>
          )}
      
        </div>
    </div>
  );
};
