import React from "react";
import { Link } from "react-router-dom"; // Importar Link
import Banner from '../Components/Banner';
import SectionOne from '../Sections/SectionOne';
import PromoSection from '../Sections/PromoSections';
import NewSletterSection from '../Sections/NewsletterSections';
import Footer from '../Components/Footer';
import { TestimonialsSection } from "../Sections/TestimonialsSection";
import ImgProd from "../Components/Img";

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '/ProductOverviews',
    price: '$89,95',
    imageSrc: ImgProd.Trench,
    imageAlt: 'TRENCH RELAXED FIT',
    colors: [{ name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-500' }],
    sizes: [{ name: 'M', inStock: true }, { name: 'L', inStock: false }],
    breadcrumbs: [{ id: 1, name: 'Home', href: '/' }, { id: 2, name: 'Products', href: '#' }],
    description: 'This is a products description',
    highlights: ['Feature 1', 'Feature 2'],
    details: 'Product details here',
    images: [
      { src: 'https://example.com/img1.jpg', alt: 'Image 1' },
      { src: 'https://example.com/img2.jpg', alt: 'Image 2' },
    ],
  },
  // Agrega más productos aquí...
];

const Home = () => {
  return (
    <>
      <Banner />
      <SectionOne />
      <PromoSection />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((products) => (
              <Link
                key={products.id}
                to={{
                  pathname: '/ProductOverviews',
                  state: { products }, // Asegúrate de pasar correctamente el producto aquí
                }}
                className="group"
              >
                <img
                  alt={products.imageAlt}
                  src={products.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                />
                <h3 className="mt-4 text-sm text-gray-700">{products.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{products.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <NewSletterSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

export default Home;
