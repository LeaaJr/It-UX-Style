import React, { useState } from "react";
import { useCart } from "../Context/CartContext"; // Importa el hook del CartContext

const Checkout = () => {
  const { cartItems, getTotal } = useCart(); // Accede al carrito y a la función getTotal
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    companyName: '',
    vatNumber: '',
    voucher: '',
    city: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    companyName: '',
    vatNumber: '',
    voucher: '',
    city: '',
  });

  // Obtener el total del carrito desde el contexto
  const total = getTotal();

  // Función de validación
  const validateForm = () => {
    const newErrors = {};
    // Validación para el correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = "Por favor, ingresa un correo electrónico válido.";
    }

    // Validación para el teléfono (formato: 123-456-7890)
    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      newErrors.phone = "El número de teléfono debe tener 10 dígitos.";
    }

    // Validación para el nombre de la empresa
    if (!formData.companyName) {
      newErrors.companyName = "El nombre de la empresa es obligatorio.";
    }

    // Validación para el número de IVA
    if (!formData.vatNumber) {
      newErrors.vatNumber = "El número de IVA es obligatorio.";
    }

    // Validación para el código de voucher (opcional)
    if (formData.voucher && formData.voucher.length < 5) {
      newErrors.voucher = "El código del voucher es demasiado corto.";
    }

    setErrors(newErrors);

    // Si no hay errores, retorna true
    return Object.keys(newErrors).length === 0;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí iría el código para enviar el formulario
      console.log("Formulario enviado correctamente", formData);
    } else {
      console.log("Formulario con errores");
    }
  };

  return (
    <section className="bg-white py-8 antialiased md:py-16">
    <form onSubmit={handleSubmit} className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-black">Delivery Details</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-black">
                Nome Cognome
              </label>
              <input
                type="text"
                id="your_name"
                className="block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-white dark:placeholder:text-gray-800 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Bonnie Green"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                required
              />
              {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
            </div>

            <div>
              <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-black">
                Email*
              </label>
              <input
                type="email"
                id="your_email"
                className="block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-white dark:placeholder:text-gray-800 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="name@flowbite.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone-input-3" className="mb-2 block text-sm font-medium text-gray-900 dark:text-black">
                Numero di cellulare*
              </label>
              <input
                type="text"
                id="phone-input-3"
                className="block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-white dark:placeholder:text-gray-800 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="1234567890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
            <label htmlFor="City" className="mb-2 block text-sm font-medium text-gray-900 dark:text-black">
            Regione*
            </label>
            <select
            id="City"
            className="block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-black dark:placeholder:text-gray-800 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
            >
            <option value="">Select a city</option>
            <option value="Calabria">Calabria</option>
            <option value="Scilia">Scilia</option>
            <option value="Basilicata">Basilicata</option>
            <option value="Lazio">Lazio</option>
            </select>

            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}

            </div>

            <div>
              <label htmlFor="vat_number" className="mb-2 block text-sm font-medium text-gray-900 dark:text-black">
                VAT number
              </label>
              <input
                type="text"
                id="vat_number"
                className="block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-white dark:placeholder:text-gray-800 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="DE42313253"
                value={formData.vatNumber}
                onChange={(e) => setFormData({ ...formData, vatNumber: e.target.value })}
                required
              />
              {errors.vatNumber && <p className="text-red-500 text-xs mt-1">{errors.vatNumber}</p>}
            </div>

            <div>
              <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-black">
                Inserisci una carta regalo, un voucher o un codice promozionale
              </label>
              <input
                type="text"
                id="voucher"
                className="block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-black"
                placeholder=""
                value={formData.voucher}
                onChange={(e) => setFormData({ ...formData, voucher: e.target.value })}
              />
              {errors.voucher && <p className="text-red-500 text-xs mt-1">{errors.voucher}</p>}
            </div>
          </div>

          {/* Mostrar el total aquí */}
          <div className="mt-4 flex justify-between text-base font-medium text-gray-900">
            <p>Total</p>
            <p>€{total.toFixed(2)}</p>
          </div>
        </div>

        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded-md">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Checkout;