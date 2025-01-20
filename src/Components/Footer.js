import React from "react";
import { Facebook, Instagram, Twitter, Github, Youtube } from "lucide-react";

export function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      {/* Fondo con gradiente y desenfoque */}
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <footer className="w-full text-gray-400 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="w-12 h-12 mb-4">
              <svg viewBox="0 0 24 24" className="text-blue-500 w-full h-full">
                <path
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
              </svg>
            </div>
            <p className="text-lg max-w-md">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex gap-6 mt-6">
              <Facebook className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
              <Github className="w-6 h-6" />
              <Youtube className="w-6 h-6" />
            </div>
          </div>

          {/* Aquí agregamos Solutions y Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Solutions Section */}
            <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Commerce
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Insights
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white">
                    Submit ticket
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  License
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <p>© 2024 Your Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
