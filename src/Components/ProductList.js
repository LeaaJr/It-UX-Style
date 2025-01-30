import ImgProd from "./Img";

const ProductList = [
  {
    id: 1,
    name: 'GIACCA CON RICAMO DI PERLINE',
    href: '/ProductOverviews',
    price: '€25,95',
    imageSrc: ImgProd.GiaccaFront,
    imageAlt: 'TRENCH RELAXED FIT',
    colors: [{ name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-500' }],
    sizes: [{ name: 'S', inStock: false }, { name: 'M', inStock: true }, { name: 'L', inStock: true }, { name: 'XL', inStock: false }],
    breadcrumbs: [{ id: 1, name: 'Home', href: '/' }, { id: 2, name: 'inverno', href: '#' }],
    description: 'Giacca cropped fit realizzata in tessuto di cotone con struttura canvas. Colletto a revers e maniche lunghe con bottone sul polsino. Tasche applicate sul petto e tasche laterali sui fianchi. Perline ricamate combinate',
    highlights: ['Feature 1', 'Feature 2'],
    details: 'a contrasto sulla parte posteriore. Chiusura frontale con abbottonatura.',
    images: [
      { src: ImgProd.GiaccaFront, alt: 'Image 1' },
      { src: ImgProd.GiaccaBack, alt: 'Image 2' },
      { src: ImgProd.GiaccaModel, alt: 'Image 3' },
      { src: ImgProd.GiaccaModel2, alt: 'Image 4' },
    ],
  },
     {
    id: 2,
    name: 'GIUBBOTTO BOMBER IN COTONE',
    href: '/ProductOverviews',
    price: '€25,95',
    imageSrc: ImgProd.GiubbottoFront,
    imageAlt: 'GIUBBOTTO BOMBER IN COTONE',
    colors: [{ name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-500' }],
    sizes: [{ name: 'S', inStock: false }, { name: 'M', inStock: true }, { name: 'L', inStock: true }, { name: 'XL', inStock: false }],
    breadcrumbs: [{ id: 1, name: 'Home', href: '/' }, { id: 2, name: 'inverno', href: '#' }],
    description: 'Giubbotto leggero realizzato in tessuto di cotone. Colletto con finitura a coste elasticizzate e maniche lunghe. Tasche a filetto sui fianchi. Dettaglio di tasca interna. Finiture a coste. Chiusura frontale con',
    highlights: ['Feature 1', 'Feature 2'],
    details: 'a contrasto sulla parte posteriore. Chiusura frontale con abbottonatura.',
    images: [
      { src: ImgProd.GiubbottoFront, alt: 'Image 1' },
      { src: ImgProd.GiubbottoBack, alt: 'Image 2' },
      { src: ImgProd.GiubbottoLat, alt: 'Image 3' },
      { src: ImgProd.GiubbottoModel, alt: 'Image 4' },
    ],
  },
  {
    id: 3,
    name: 'GIACCA CON COLLO A COSTE',
    href: '/ProductOverviews',
    price: '€79,95',
    imageSrc: ImgProd.GiaccaBlueFront,
    imageAlt: 'GIACCA CON COLLO A COSTE',
    colors: [{ name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-500' }],
    sizes: [{ name: 'S', inStock: false }, { name: 'M', inStock: true }, { name: 'L', inStock: true }, { name: 'XL', inStock: false }],
    breadcrumbs: [{ id: 1, name: 'Home', href: '/' }, { id: 2, name: 'inverno', href: '#' }],
    description: 'Giacca relaxed fit realizzata in tessuto misto lana leggermente imbottito all interno. Collo alto a coste in tinta e maniche lunghe. Tasche con chiusura a zip sui fianchi. Finiture a coste. Chiusura frontale con cerniera',
    highlights: ['Feature 1', 'Feature 2'],
    details: 'a contrasto sulla parte posteriore. Chiusura frontale con abbottonatura.',
    images: [
      { src: ImgProd.GiaccaBlueFront, alt: 'Image 1' },
      { src: ImgProd.GiaccaBlueBack, alt: 'Image 2' },
      { src: ImgProd.GiaccaBlueModel, alt: 'Image 3' },
      { src: ImgProd.GiaccaBlueModel2, alt: 'Image 4' },
    ],
  },
  {
    id: 4,
    name: 'GIUBBOTTO BOUCLÉ MISTO LANA',
    href: '/ProductOverviews',
    price: '€79,95',
    imageSrc: ImgProd.BoucleRedFront,
    imageAlt: 'GIUBBOTTO BOUCLÉ MISTO LANA',
    colors: [{ name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-500' }],
    sizes: [{ name: 'S', inStock: false }, { name: 'M', inStock: true }, { name: 'L', inStock: true }, { name: 'XL', inStock: false }],
    breadcrumbs: [{ id: 1, name: 'Home', href: '/' }, { id: 2, name: 'inverno', href: '#' }],
    description: 'Giubbotto relaxed fit realizzato in tessuto misto lana con texture bouclé. Colletto a revers e maniche lunghe con polsino con bottone. Tasche a filetto sui fianchi. Chiusura frontale con cerniera.',
    highlights: ['Feature 1', 'Feature 2'],
    details: 'a contrasto sulla parte posteriore. Chiusura frontale con abbottonatura.',
    images: [
      { src: ImgProd.BoucleRedFront, alt: 'Image 1' },
      { src: ImgProd.BoucleRedBack, alt: 'Image 2' },
      { src: ImgProd.BoucleRedCerc, alt: 'Image 3' },
      { src: ImgProd.BoucleRedModel, alt: 'Image 4' },
    ],
  },
   {
    id: 5,
    name: 'CAPPOTTO A DOPPIOPETTO IN MISTO LANA ZW COLLECTION',
    href: '/ProductOverviews',
    price: '€149,00',
    imageSrc: ImgProd.CappottoWBF,
    imageAlt: 'CAPPOTTO A DOPPIOPETTO',
    colors: [{ name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-500' }],
    sizes: [{ name: 'S', inStock: false }, { name: 'M', inStock: false }, { name: 'L', inStock: true }, { name: 'XL', inStock: true }],
    breadcrumbs: [{ id: 1, name: 'Home', href: '/' }, { id: 2, name: 'ProductList', href: '#' }],
    description: 'Cappotto attillato realizzato in filato misto lana. Collo con revers classici e maniche lunghe rifinite con apertura e bottoni. Tasche',
    highlights: ['Feature 1', 'Feature 2'],
    details: 'a contrasto sulla parte posteriore. Chiusura frontale con abbottonatura.',
    images: [
      { src: ImgProd.CappottoWBF, alt: 'Image 1' },
      { src: ImgProd.CappottoWBB, alt: 'Image 2' },
      { src: ImgProd.CappottoWBC, alt: 'Image 3' },
      { src: ImgProd.CappottoWBModel, alt: 'Image 4' },
    ],
  },
   {
    id: 6,
    name: 'CAPPOTTO MANTELLA IN MAGLIA',
    href: '/ProductOverviews',
    price: '€59,95',
    imageSrc: ImgProd.CappottoWGF,
    imageAlt: 'CAPPOTTO MANTELLA IN MAGLIA',
    colors: [{ name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-500' }],
    sizes: [{ name: 'S', inStock: true }, { name: 'M', inStock: true }, { name: 'L', inStock: true }, { name: 'XL', inStock: true }],
    breadcrumbs: [{ id: 1, name: 'Home', href: '/' }, { id: 2, name: 'ProductList', href: '#' }],
    description: 'Cappotto con collo rotondo e maniche lunghe con mantella. Chiusura frontale con bottoni metallici.',
    highlights: ['Feature 1', 'Feature 2'],
    details: 'a contrasto sulla parte posteriore. Chiusura frontale con abbottonatura.',
    images: [
      { src: ImgProd.CappottoWGF, alt: 'Image 1' },
      { src: ImgProd.CappottoWGB, alt: 'Image 2' },
      { src: ImgProd.CappottoWGC, alt: 'Image 3' },
      { src: ImgProd.CappottoWGModel, alt: 'Image 4' },
    ],
  },
   {
    id: 7,
    name: 'ANORAK IMBOTTITO CAPPUCCIO WINDPROOF',
    href: '/ProductOverviews',
    price: '€69,95',
    imageSrc: ImgProd.AnorakBF,
    imageAlt: 'CAPPOTTO MANTELLA IN MAGLIA',
    colors: [{ name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-500' }],
    sizes: [{ name: 'S', inStock: true }, { name: 'M', inStock: true }, { name: 'L', inStock: true }, { name: 'XL', inStock: true }],
    breadcrumbs: [{ id: 1, name: 'Home', href: '/' }, { id: 2, name: 'ProductList', href: '#' }],
    description: 'Anorak antivento con isolamento termico per climi freddi. Comfort entro l intervallo di temperature specifiche per bassa attività (5,2º) e attività moderata (-24,6ºC). Collo alto con cappuccio regolabile con cordoncini e',
    highlights: ['Feature 1', 'Feature 2'],
    details: 'a contrasto sulla parte posteriore. Chiusura frontale con abbottonatura.',
    images: [
      { src: ImgProd.AnorakBF, alt: 'Image 1' },
      { src: ImgProd.AnorakBB, alt: 'Image 2' },
      { src: ImgProd.AnorakBC, alt: 'Image 3' },
      { src: ImgProd.AnorakBModel, alt: 'Image 4' },
    ],
  },
   {
    id: 8,
    name: 'CAPPOTTO SLIM FIT MISTO LANA ZW COLLECTION',
    href: '/ProductOverviews',
    price: '€59,95',
    imageSrc: ImgProd.CappottoRWF,
    imageAlt: 'CAPPOTTO MANTELLA IN MAGLIA',
    colors: [{ name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-500' }],
    sizes: [{ name: 'S', inStock: true }, { name: 'M', inStock: true }, { name: 'L', inStock: true }, { name: 'XL', inStock: true }],
    breadcrumbs: [{ id: 1, name: 'Home', href: '/' }, { id: 2, name: 'ProductList', href: '#' }],
    description: 'Cappotto realizzato in filato misto lana. Colletto con revers classici e maniche lunghe. Tasche con patta sul davanti e a.',
    highlights: ['Feature 1', 'Feature 2'],
    details: 'a contrasto sulla parte posteriore. Chiusura frontale con abbottonatura.',
    images: [
      { src: ImgProd.CappottoRWF, alt: 'Image 1' },
      { src: ImgProd.CappottoRWB, alt: 'Image 2' },
      { src: ImgProd.CappottoRWC, alt: 'Image 3' },
      { src: ImgProd.CappottoRWModel, alt: 'Image 4' },
    ],
  },
  // Agrega más productos aquí...
];

export default ProductList;