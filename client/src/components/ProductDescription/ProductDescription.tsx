import { Link, useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { ArrowLeft, Minus, Plus } from "lucide-react";

export const ProductDescription = () => {
  const { products,selectedSize,handleProductSize,increaseProductQuantity,decreaseProductQuantity} = useProducts();

  const { id } = useParams<{ id: string }>();
  const product = products.find((product) => product.id === Number(id));


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to={"/RIOT-copy"}>
        <div className="flex gap-2  mb-4">
          <ArrowLeft className="w-4 " />
          <p className="hover:font-bold"> Volver al catálogo</p>
        </div>
      </Link>
      <div>
        {product ? (
          <div className="flex flex-col md:flex-row  gap-4 justify-around" >
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-3/4 md:h-[600px] object-cover rounded-md"
            />

            <div className="flex flex-col gap-4">
              <p>{product.category}</p>
              <h3 className="text-6xl font-bold ">{product.name}</h3>
              <span className="text-xl">${product.price}</span>
              <p>
                Talle: <span className="font-bold "> {selectedSize}</span>
              </p>
              <div className="flex items-center gap-2 h-12" >
                {product.sizes.map((size) => {
                  return (
                    <div key={size}>
                      <span
                        className="border p-2 w-8 h-8  flex items-center justify-center cursor-pointer hover:bg-zinc-300 "
                        onClick={() => handleProductSize(size)}
                      >
                        {size}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div>
                <p>
                  Color: <span className="font-bold">{product.color}</span>
                </p>
                <div style={{ backgroundColor: product.colorHex }} className="w-6 h-6 mt-2  border"></div>
              </div>

              <div className="flex w-full items-center  gap-4">
                <div className=" flex items-center justify-between w-1/3">
                  <button className="text-2xl p-4  cursor-pointer"  onClick={()=> decreaseProductQuantity(product)}>
                    <Minus />
                  </button>
                  <span className="text-xl">{product.quantity}</span>
                  <button className="text-2xl p-4 cursor-pointer" onClick={()=> increaseProductQuantity(product)}>
                    <Plus />
                  </button>
                </div>
                <button className="w-full bg-zinc-950 p-4 text-zinc-50 cursor-pointer hover:bg-zinc-800">
                  Agregar al carrito
                </button>
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
