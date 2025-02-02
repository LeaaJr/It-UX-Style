import React, { useState } from "react";
import { useCart } from "../Context/CartContext"; // Importa el hook del CartContext

const Checkout = () => {
  const { cartItems, getTotal } = useCart(); // Accede al carrito y a la función getTotal
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    vatNumber: '',
    voucher: '',
    city: '',
    strada: '',
    carta: '',
    cvc: '',
    expirationDate: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    vatNumber: '',
    voucher: '',
    city: '',
    strada: '',
    carta: '',
    cvc: '',
    expirationDate: ''
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

  const handleCardInput = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16); // Eliminar todo excepto números y limitar a 16
    setFormData({ ...formData, carta: value });
  };

  // Función para manejar el CVC
  const handleCVCInput = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4); // Eliminar todo excepto números y limitar a 4
    setFormData({ ...formData, cvc: value });
  };

  // Función para manejar la fecha de vencimiento (MM/AA)
  const handleExpirationDateInput = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4); // Eliminar todo excepto números y limitar a 4
    if (value.length >= 3) {
      setFormData({ ...formData, expirationDate: `${value.slice(0, 2)}/${value.slice(2)}` });
    } else {
      setFormData({ ...formData, expirationDate: value });
    }
  };

  return (
<section className="bg-white py-8 antialiased md:py-16 flex-1">
  <form onSubmit={handleSubmit} className="mx-auto max-w-screen-xl px-4 2xl:px-0 flex flex-wrap justify-between">
    
    {/* Contenedor de inputs */}
    <div className="flex flex-wrap gap-4 w-full md:w-2/3">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-black w-full">Delivery Details</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
        <div>
          <label htmlFor="your_name" className="mb-1 block text-sm font-medium text-gray-900 dark:text-black">
            Nome Cognome
          </label>
          <input
            type="text"
            id="your_name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-white dark:placeholder:text-gray-800"
            placeholder="Bonnie Green"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            required
          />
          {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
        </div>

        <div>
          <label htmlFor="your_email" className="mb-1 block text-sm font-medium text-gray-900 dark:text-black">
            Email*
          </label>
          <input
            type="email"
            id="your_email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-white dark:placeholder:text-gray-800"
            placeholder="name@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      
        <div>
          <label htmlFor="phone-input-3" className="mb-1 block text-sm font-medium text-gray-900 dark:text-black">
            Numero di cellulare*
          </label>
          <input
            type="text"
            id="phone-input-3"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-white dark:placeholder:text-gray-800"
            placeholder="+39...."
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="City" className="mb-1 block text-sm font-medium text-gray-900 dark:text-black">
            Regione*
          </label>
          <select
            id="City"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-black"
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
          <label htmlFor="strada" className="mb-1 block text-sm font-medium text-gray-900 dark:text-black">
            Strada*
          </label>
          <input
            type="text"
            id="strada"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-white dark:placeholder:text-gray-800"
            placeholder="Strada"
            value={formData.strada}
            onChange={(e) => setFormData({ ...formData, strada: e.target.value })}
            required
          />
          {errors.strada && <p className="text-red-500 text-xs mt-1">{errors.strada}</p>}
        </div>

        <div>
          <label htmlFor="carta" className="mb-1 block text-sm font-medium text-gray-900 dark:text-black">
            Numero Della Carta*
          </label>
          <input
            type="int"
            id="strada"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-white dark:placeholder:text-gray-800"
            placeholder="5537"
            value={formData.carta}
            onChange={(e) => setFormData({ ...formData, carta: e.target.value })}
            required
          />
          {errors.carta && <p className="text-red-500 text-xs mt-1">{errors.carta}</p>}
        </div>

        <div>  
          <label htmlFor="cvc" className="mb-1 block text-sm font-medium text-gray-900 dark:text-black">
        CVC*
      </label>
      <input
        type="text"
        id="cvc"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-white dark:placeholder:text-gray-800"
        placeholder="123"
        value={formData.cvc}
        onChange={handleCVCInput}
        required
      />
      </div>
      
      <div>
      <label htmlFor="expirationDate" className="mb-1 block text-sm font-medium text-gray-900 dark:text-black">
        Fecha de Vencimiento*
      </label>
      <input
        type="text"
        id="expirationDate"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-800 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-200 dark:text-white dark:placeholder:text-gray-800"
        placeholder="MM/AA"
        value={formData.expirationDate}
        onChange={handleExpirationDateInput}
        required
      />
      </div>

        </div>

      </div>

    {/* Contenedor de total y submit */}
    <div className="w-full md:w-1/3 flex flex-col items-end space-y-4">
      <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-xs">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-black">Resumen</h3>
        <dl className="mt-2 space-y-2">
          <div className="flex justify-between text-sm">
            <dt className="text-gray-500 dark:text-gray-400">Total</dt>
            <dd className="font-medium text-gray-900 dark:text-black">€{total.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between text-sm">
            <dt className="text-gray-500 dark:text-gray-400">Savings</dt>
            <dd className="text-green-500 font-medium">0</dd>
          </div>
          <div className="flex justify-between text-sm">
            <dt className="text-gray-500 dark:text-gray-400">Store Pickup</dt>
            <dd className="font-medium text-gray-900 dark:text-black">$0</dd>
          </div>
          <div className="flex justify-between text-sm">
            <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
            <dd className="font-medium text-gray-900 dark:text-black">$0</dd>
          </div>
          <div className="flex justify-between text-base font-bold">
            <dt className="text-gray-900 dark:text-black">Total</dt>
            <dd className="text-gray-900 dark:text-black">€{total.toFixed(2)}</dd>
          </div>
        </dl>
      </div>

      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md w-full max-w-xs">
        Submit
      </button>
    </div>
  </form>
</section>

  );
};

export default Checkout;