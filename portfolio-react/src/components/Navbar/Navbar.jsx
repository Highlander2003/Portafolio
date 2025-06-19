import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Título y subtítulo */}
          <div>
            <h1 className="text-2xl font-bold tracking-wide">Mi Portfolio</h1>
            <p className="text-sm text-gray-400">Ingeniero de Sistemas</p>
          </div>

          {/* Menú de navegación */}
          <div className="hidden md:flex space-x-8 text-base font-medium">
            <a href="#inicio" className="hover:text-cyan-400 transition">Inicio</a>
            <a href="#proyectos" className="hover:text-cyan-400 transition">Proyectos</a>
            <a href="#habilidades" className="hover:text-cyan-400 transition">Habilidades</a>
            <a href="#contacto" className="hover:text-cyan-400 transition">Contacto</a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
