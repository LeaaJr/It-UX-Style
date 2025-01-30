import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';
import { useCart } from '../Context/CartContext';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import ImgProd from './Img';
import ShoppingCart from '../Pages/ShoppingCarts';

const products = [
  { id: 1, name: 'GIACCA CON RICAMO DI PERLINE', price: '€25,95', imageSrc: ImgProd.GiaccaFront },
  { id: 2, name: 'GIUBBOTTO BOMBER IN COTONE', price: '€25,95', imageSrc: ImgProd.GiubbottoFront },
  { id: 3, name: 'GIACCA CON COLLO A COSTE', price: '€79,95', imageSrc: ImgProd.GiaccaBlueFront },
  { id: 4, name: 'GIUBBOTTO BOUCLÉ MISTO LANA', price: '€79,95', imageSrc: ImgProd.BoucleRedFront },
  { id: 5, name: 'GIUBBOTTO BOMBER IN COTONE', price: '€89,95', imageSrc: '/path/to/giubbotto_bomber.jpg' },
  // Agrega más productos si es necesario
];

const navigation = {
  categories: [
    {
      name: 'Uomo',
      featured: [
        { name: 'Nuovo', href: '#', imageSrc: ImgProd.NewNav, imageAlt: 'Item 1 image' },
        { name: 'Offerte', href: '#', imageSrc: ImgProd.GiubbottoBlueF, imageAlt: 'Item 2 image' }
      ],
      sections: [
        { name: 'Estate', items: [{ name: 'Magliette', href: '#' }, { name: 'Camicie', href: '#' }] },
        { name: 'Inverno', items: [{ name: 'Cappotti', href: '#' }, { name: 'Sciarpa', href: '#' }] }
      ]
    },
    {
      name: 'Donna',
      featured: [
        { name: 'Nuovo', href: '#', imageSrc: ImgProd.Nuovonav, imageAlt: 'Item 1 image' },
        { name: 'Offerte', href: '#', imageSrc: ImgProd.VestOffFront, imageAlt: 'Item 2 image' }
      ],
      sections: [
        { name: 'Estate', items: [{ name: 'Vestiti', href: '#' }, { name: 'Scarpe', href: '#' }] },
        { name: 'Inverno', items: [{ name: 'Cappotti', href: '#' }, { name: 'Sciarpa', href: '#' }] }
      ]
    }
  ],
  pages: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/' }
  ]
};

export default function Navbar() {
  const [open, setOpen] = useState(false); // Estado para el menú móvil
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para el carrito
  const { cartItems } = useCart(); // Usar el contexto del carrito

  const { addToCart } = useCart();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredProducts = query === '' 
    ? products 
    : products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) setQuery('');
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setQuery('');
  };


  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">EUR</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-[#111827] px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Ottieni la consegna gratuita per ordini superiori a $ 100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="Logo"
                    src={ImgProd.ModLog}
                    className="h-8 w-auto"
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full z-20 text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                                      {item.name}
                                    </Link>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <Link to={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to="/LogIn" className="text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer">
                    Registrazione
                  </Link>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <Link to="/CreateAccount" className="text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer">
                    Crea account
                  </Link>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      alt="Currency"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png"
                      className="block h-auto w-5 shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">EUR</span>
                    <span className="sr-only">, cambia valuta</span>
                  </a>
                </div>

                {/* Search */}
                <nav className="bg-transparent p-4 relative">      
                  <div className="flex items-center justify-between">
                  <div className="flex lg:ml-6">
                    <button
                      onClick={handleSearchClick}
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Ricerca</span>
                      <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {isSearchOpen && (
                  <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-10" />

                    <div className="fixed inset-0 z-20 flex justify-center items-start mt-16"> {/* mt-16 para mover el search más arriba */}
                      <div className="relative w-96 bg-white rounded-lg shadow-lg pt-4 pb-6 px-6">
                        {/* Botón para cerrar en la parte superior fuera del campo de búsqueda */}
                        <button
                          onClick={handleCloseSearch}
                          className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <XMarkIcon className="h-6 w-6" />
                        </button>

                        <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')}>
                          <div className="relative">
                            <ComboboxInput
                              className="w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm text-black focus:outline-none"
                              displayValue={(product) => product ? product.name : ''}
                              onChange={(event) => setQuery(event.target.value)}
                              placeholder="Buscar productos..."
                            />
                            <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                              <ChevronDownIcon className="h-5 w-5 text-black" />
                            </ComboboxButton>
                          </div>

                          <ComboboxOptions
                            className="absolute w-full rounded-xl border border-black/5 bg-gray-700/20 p-1 mt-1 max-h-60 overflow-auto z-10"
                          >
                            {filteredProducts.map((product) => (
                              <ComboboxOption
                                key={product.id}
                                value={product}
                                className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10"
                              >
                                <img src={product.imageSrc} alt={product.name} className="h-8 w-8 rounded-md object-cover" />
                                <div className="text-sm text-black">{product.name}</div>
                              </ComboboxOption>
                            ))}
                          </ComboboxOptions>
                        </Combobox>
                      </div>
                    </div>
                  </>
                )}
              </nav>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <button onClick={() => setIsCartOpen(true)} className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {cartItems.length} {/* Mostrar la cantidad de productos en el carrito */}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Componente del carrito */}
      <ShoppingCart open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}