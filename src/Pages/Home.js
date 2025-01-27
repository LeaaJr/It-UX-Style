import React from "react";
import { Link } from "react-router-dom";
import Banner from '../Components/Banner';
import SectionOne from '../Sections/SectionOne';
import PromoSection from '../Sections/PromoSections';
import NewSletterSection from '../Sections/NewsletterSections';
import Footer from '../Components/Footer';
import { TestimonialsSection } from "../Sections/TestimonialsSection";
import ProductList from "../Components/ProductList";

const Home = () => {

  console.log(ProductList); // Verifica aquí que los productos estén bien cargados

  return (
    <>
      <Banner />
      <SectionOne />
      <PromoSection />
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          {ProductList.map((product) => (
            <Link
              key={product.id}
              to="/ProductOverviews"
              state={{ product }}
              className="group"
            >
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
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
