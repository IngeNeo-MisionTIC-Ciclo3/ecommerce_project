import React from 'react';
import Logoproyecto from './Logoproyecto';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between w-full bg-blue-200 border border-blue-300 navbar'>
        <div>
          <Link to='/'>
            <Logoproyecto />
          </Link>
        </div>

        <div>
        <ul className='inline-flex w-full py-6 my-3 space-x-4'>
            <li><Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='Usuarios' /></li>
            <li><Ruta icono='fas fa-tshirt' ruta='/admin/productos' nombre='Productos' /></li>
            <li><Ruta icono='fas fa-dolly-flatbed' ruta='/admin/Mproductos' nombre='Maestro Productos' /></li>
            <li><Ruta icono='fas fa-cash-register' ruta='/admin/ventas' nombre='Ventas' /></li>
            <li><Ruta icono='fas fa-money-check-alt' ruta='/admin/Mventas' nombre='Maestro Ventas' /></li >
          </ul>
        </div>
    </nav>
  );
};

const Ruta = ({ icono, ruta, nombre }) => {
  return (
    <Link to={ruta}>
      <button className='flex w-full p-4 my-2 text-white bg-blue-700 rounded-md justify-items-stretch hover:bg-blue-900'>
        <i className={`${icono} w-10`} />
        {nombre}
      </button>
    </Link>
  );
};

export default Navbar;
