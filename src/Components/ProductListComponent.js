// ProductListComponent.js
import React from 'react';
import { useCart } from '../Context/CartContext';  // Asegúrate de que la ruta sea correcta
import ProductList from './ProductList';  // Importamos los datos de los productos

function ProductListComponent() {
  const { addToCart } = useCart();  // Usamos el hook useCart para obtener la función addToCart

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {ProductList.map((product) => (  // Usamos map para recorrer los productos
        <div key={product.id} className="border p-4 rounded-lg">
          <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-48 object-cover" />
          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          <p className="text-gray-600">{product.price}</p>
          <button
            onClick={() => addToCart(product)}  // Agregamos el producto al carrito
            className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductListComponent;
