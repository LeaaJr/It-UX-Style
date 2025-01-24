'use client';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importamos useLocation para acceder al estado
import { StarIcon } from '@heroicons/react/20/solid';

const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductOverviews() {
  const location = useLocation(); // Accedemos al estado del producto desde la ubicación
  const { products } = location.state || {}; // Si no se recibe un producto, retornamos vacío o un mensaje de error

  // Inicializar los estados sin condiciones
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  // Usamos useEffect para inicializar los valores de color y tamaño cuando el producto esté disponible
  useEffect(() => {
    if (products?.colors && products.colors.length > 0) {
      setSelectedColor(products.colors[0]);
    }
    if (products?.sizes && products.sizes.length > 0) {
      setSelectedSize(products.sizes[2] || products.sizes[0]); // Usamos un valor por defecto si no hay tamaño 2
    }
  }, [products]); // Dependemos de 'products' para inicializar los valores de color y tamaño

  // Si aún no hemos cargado el producto o los estados, mostramos un mensaje de carga
  if (!products) {
    return <p>Producto no encontrado.</p>; // Mostrar un mensaje si no encontramos el producto
  }

  if (!selectedColor || !selectedSize) {
    return <p>Loading...</p>; // Mostrar mensaje de carga si aún no se han seleccionado color o tamaño
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol  className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {products.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={products.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {products.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Gallery and product details */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          {/* Aquí colocas tus imágenes como en el código anterior */}
        </div>

        {/* Product information */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{products.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{products.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'size-5 shrink-0',
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            {/* Form */}
            <form className="mt-10">
              {/* Aquí incluirías los campos para color, tamaño, y el botón "Add to bag" */}
            </form>

            {/* Description and details */}
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{products.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                <div className="mt-4">
                  <ul  className="list-disc space-y-2 pl-4 text-sm">
                    {products.highlights && products.highlights.length > 0 ? (
                      products.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))
                    ) : (
                      <p>No highlights available.</p>
                    )}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{products.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
