'use client'

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
import { Radio, RadioGroup } from '@headlessui/react';
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductOverviews() {
  const location = useLocation();
  const product = location.state?.product; // Asegurémonos de que estamos recibiendo el producto correcto

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);

  console.log("Producto recibido: ", product); // Esto debería mostrar el producto en consola

  // Verifica que el producto está presente
  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  const reviews = { href: '#', average: 4, totalCount: 117 };

  console.log("Images: ", product.images);  // Verifica que 'images' contiene los datos correctos.

  return (
    <div className="bg-white">
  <div className="pt-6">
    <nav aria-label="Breadcrumb">
      <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {product.breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.id}>
            <div className="flex items-center">
              <Link href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                {breadcrumb.name}
              </Link>
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
          <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
            {product.name}
          </a>
        </li>
      </ol>
    </nav>

    {/* Image gallery */}
    <div className="mx-auto mt-6 max-w-xl sm:px-6 lg:grid lg:max-w-4xl lg:grid-cols-3 lg:gap-x-4 lg:px-8">
      {product.images && product.images.length > 0 && (
        <>
          {/* Imagen principal */}
          <img
            alt={product.images[0]?.alt || "Imagen del producto"}
            src={product.images[0]?.src || "https://via.placeholder.com/150"} // Imagen de placeholder si no hay imagen
            className="w-full h-82 object-cover rounded-lg"
          />
          {/* Imágenes secundarias */}
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-4">
            {product.images.slice(1, 3).map((image, index) => (
              <img
                key={index}
                alt={image.alt || `Imagen ${index + 1}`}
                src={image.src || "https://via.placeholder.com/150"} // Imagen de placeholder si no hay imagen
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
          {/* Imagen adicional */}
          <img
            alt={product.images[3]?.alt || "Imagen adicional"}
            src={product.images[3]?.src || "https://via.placeholder.com/150"} // Imagen de placeholder si no hay imagen
            className="w-full h-82 object-cover rounded-lg sm:rounded-lg lg:h-82"
          />
        </>
      )}
    </div>
  </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
            <p className="text-base text-gray-900">{product.description}</p>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>

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

            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Size guide
                </a>
              </div>

              <fieldset aria-label="Choose a size" className="mt-4">
                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                >
                  {product.sizes.map((size) => (
                    <Radio
                      key={size.name}
                      value={size}
                      disabled={!size.inStock}
                      className={classNames(
                        size.inStock
                          ? 'cursor-pointer bg-white text-gray-900 shadow-xs'
                          : 'cursor-not-allowed bg-gray-50 text-gray-200',
                        'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6',
                      )}
                    >
                      <span>{size.name}</span>
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>

            {/* Add to bag */}
            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
            Aggiungi
            </button>
          </div>
        </div>
      </div>
  );
}
