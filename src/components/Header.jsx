import React from 'react';
import Logoproyecto from './Logoproyecto';
import { Link } from 'react-router-dom';
import useActiveRoute from 'hooks/useActiveRoute';

const Navbar = () => {
	return (
		<nav className='flex justify-between w-full bg-gray-200 border border-gray-300 navbar'>

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
	const isActive = useActiveRoute(ruta);
	return (
		<Link to={ruta}>
			<button
				className={`flex w-full p-4 my-2 bg-${isActive ? 'blue' : 'gray'}-700 hover:bg-blue-900 justify-items-stretch text-white rounded-md`}>
				<i className={`${icono} w-10`} />
				{nombre}
			</button>
		</Link>
	);
};

export default Navbar;
