
import { useProducts } from "../../hooks/useProducts";

export const Favorite = () => {

 const {favoritesProducts} = useProducts()

  if (!favoritesProducts || favoritesProducts.length === 0) {
    return (
      <section className="py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Favoritos</h2>
        <p className="text-gray-500">No tienes productos en favoritos.</p>
      </section>
    );
  }

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Favoritos</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {favoritesProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center border border-gray-100"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-[180px] rounded-md mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-1">{product.category}</p>
            <p className="font-bold text-primary mb-2">${product.price}</p>
            <span
              className="inline-block w-5 h-5 rounded-full border border-gray-300 mb-2"
              style={{ background: product.colorHex }}
              title={product.color}
            />
            <button
              className="mt-auto bg-black text-white rounded px-4 py-2 hover:bg-gray-800 transition"
            >
              Ver detalle
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

