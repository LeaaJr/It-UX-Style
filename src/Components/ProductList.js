import ImgProd from "../Components/Img"; // Asegúrate de que la ruta sea correcta

const ProductList = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '/ProductOverviews',
    price: '$89,95',
    imageSrc: ImgProd.Trench,
    imageAlt: 'TRENCH RELAXED FIT',
    colors: [{ name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-500' }],
    sizes: [{ name: 'M', inStock: true }, { name: 'L', inStock: false }],
    breadcrumbs: [{ id: 1, name: 'Home', href: '/' }, { id: 2, name: 'ProductList', href: '#' }],
    description: 'This is a ProductList description',
    highlights: ['Feature 1', 'Feature 2'],
    details: 'ProductList details here',
    images: [
      { src: 'https://example.com/img1.jpg', alt: 'Image 1' },
      { src: 'https://example.com/img2.jpg', alt: 'Image 2' },
    ],
  },
  // Agrega más productos aquí...
];

export default ProductList;
