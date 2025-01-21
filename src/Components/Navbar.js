import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';

const navigation = {
  categories: [
    {
      name: 'Man',
      featured: [
        { name: 'Item 1', href: '#', imageSrc: 'path_to_image', imageAlt: 'Item 1 image' },
        { name: 'Item 2', href: '#', imageSrc: 'path_to_image', imageAlt: 'Item 2 image' }
      ],
      sections: [
        { name: 'Section 1', items: [{ name: 'Link 1', href: '#' }, { name: 'Link 2', href: '#' }] },
        { name: 'Section 2', items: [{ name: 'Link 3', href: '#' }, { name: 'Link 4', href: '#' }] }
      ]
    },
    {
      name: 'Woman',
      featured: [
        { name: 'Item 1', href: '#', imageSrc: 'path_to_image', imageAlt: 'Item 1 image' },
        { name: 'Item 2', href: '#', imageSrc: 'path_to_image', imageAlt: 'Item 2 image' }
      ],
      sections: [
        { name: 'Section 1', items: [{ name: 'Link 1', href: '#' }, { name: 'Link 2', href: '#' }] },
        { name: 'Section 2', items: [{ name: 'Link 3', href: '#' }, { name: 'Link 4', href: '#' }] }
      ]
    }
  ],
  pages: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/' }
  ]
};

export default function Example() {
  const [open, setOpen] = useState(false);

  // Funciones de interacción (opcional, puedes agregar funciones aquí si es necesario)
  const handleSearch = () => {
    setOpen(true); // Abrir el buscador
  };

  const handleCloseSearch = () => {
    setOpen(false); // Cerrar el buscador
  };

  const handleCart = () => {
    console.log('Ver carrito');
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
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
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
                        {/* Icono de búsqueda */}
                        <div className="flex lg:ml-6">
                          <button
                            onClick={handleSearch}
                            className="p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Ricerca</span>
                            <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                          </button>
                        </div>

                        {/* Campo de búsqueda */}
                        {open && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <input
                              className="block appearance-none bg-white border border-gray-300 rounded-md text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-96 py-4 px-4 transition-all duration-300 ease-in-out"
                              placeholder="Search anything..."
                              autoFocus
                              onBlur={handleCloseSearch}
                            />
                          </div>
                        )}

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <button onClick={handleCart} className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">articoli nel carrello, visualizza borsa</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
