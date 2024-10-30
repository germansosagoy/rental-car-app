import Image from 'next/image'
import React from 'react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
      {/* Información de la empresa */}
      <div className="text-center md:text-left">
        <Image src="/logo.svg" alt="RentCars Logo" width={50} height={50} />
        <p className="mt-4">Av. Corrientes 1234, Buenos Aires, C1043 AR</p>
        <p className="mt-2">📞 +54 11 4784 3721</p>
      </div>

      {/* Sección de enlaces de productos */}
      <div className="text-center md:text-left">
        <h4 className="text-lg font-semibold text-white mb-4">Nuestro Producto</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Vehículos</a></li>
          <li><a href="#" className="hover:underline">Características</a></li>
          <li><a href="#" className="hover:underline">Precios</a></li>
        </ul>
      </div>

      {/* Sección de recursos */}
      <div className="text-center md:text-left">
        <h4 className="text-lg font-semibold text-white mb-4">Recursos</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Descargar</a></li>
          <li><a href="#" className="hover:underline">Centro de Ayuda</a></li>
          <li><a href="#" className="hover:underline">Guías</a></li>
          <li><a href="#" className="hover:underline">Red de colaboradores</a></li>
          <li><a href="#" className="hover:underline">Desarrollador</a></li>
        </ul>
      </div>

      {/* Sección sobre la empresa */}
      <div className="text-center md:text-left">
        <h4 className="text-lg font-semibold text-white mb-4">Acerca de Rental Car</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">¿Por qué elegir Rental Car?</a></li>
          <li><a href="#" className="hover:underline">Acerca de</a></li>
          <li><a href="#" className="hover:underline">Relaciones con inversores</a></li>
          <li><a href="#" className="hover:underline">Prensa</a></li>
          <li><a href="#" className="hover:underline">Publicidad</a></li>
        </ul>
      </div>

      {/* Redes sociales */}
      <div className="mt-8 md:mt-0 col-span-full flex justify-center space-x-6">
        <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-youtube"></i></a>
      </div>
    </div>

    {/* Derechos reservados */}
    <div className="text-center text-sm text-gray-500 mt-12">
      <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
    </div>
  </footer>
  )
}
