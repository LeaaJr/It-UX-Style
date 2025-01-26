import { useLocation } from 'react-router-dom';

export default function ProductOverviews() {
  const location = useLocation();
  const product = location.state?.product; // Asegurémonos de que estamos recibiendo el producto correcto

  console.log("Producto recibido: ", product); // Esto debería mostrar el producto en consola

  // Verifica que el producto está presente
  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.imageSrc} alt={product.imageAlt} />
      <ul>
        {product.highlights && product.highlights.length > 0 ? (
          product.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))
        ) : (
          <p>No highlights available.</p>
        )}
      </ul>
    </div>
  );
}
