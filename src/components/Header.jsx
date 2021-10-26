import React from 'react';
import Logoproyecto from './Logoproyecto';
import { Link } from 'react-router-dom';
import useActiveRoute from 'hooks/useActiveRoute';
import { useAuth0 } from "@auth0/auth0-react";
import ComponentePrivado from '../components/ComponentePrivado';

const Navbar = () => {
	const { user, logout } = useAuth0();
	const urllogout = "http://localhost:3000";
	//const urllogout = "https://mighty-escarpment-28176.herokuapp.com/"

	//Creamos una funcion para el cierre de sesion y eliminamos el token del LocalStorage
	const cerrarSesion = () => {
		logout({ returnTo: urllogout });
		localStorage.setItem('Token', null);
	}
	//Usamos el componente privado para proteger el menu y que solo permita la visualizacion de los mismos a los roles asignados para tal fin
	return (
		<nav className='flex justify-between w-full px-5 navbar menu'>

			<div>
				<Link to='/'>
					<Logoproyecto />
				</Link>
			</div>

			<div>
				<ul className='inline-flex w-full py-6 my-3 space-x-4'>
					<li><Ruta icono='fas fa-users' ruta='/admin/perfil' nombre='Perfil' usuario={user} /></li>
					<ComponentePrivado listaRoles={['Administrador']}>
						<li><Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='Usuarios' /></li>
					</ComponentePrivado>
					<ComponentePrivado listaRoles={['Administrador']}>
						<li><Ruta icono='fas fa-tshirt' ruta='/admin/productos' nombre='Productos' /></li>
					</ComponentePrivado>
					<ComponentePrivado listaRoles={['Administrador']}>
						<li><Ruta icono='fas fa-dolly-flatbed' ruta='/admin/mproductos' nombre='Maestro Productos' /></li>
					</ComponentePrivado>
					<ComponentePrivado listaRoles={['Administrador', 'Vendedor']}>
						<li><Ruta icono='fas fa-cash-register' ruta='/admin/ventas' nombre='Ventas' /></li>
					</ComponentePrivado>
					<ComponentePrivado listaRoles={['Administrador', 'Vendedor']}>
						<li><Ruta icono='fas fa-money-check-alt' ruta='/admin/mventas' nombre='Maestro Ventas' /></li >
					</ComponentePrivado>
					<li><button onClick={() => cerrarSesion()} className='flex w-full p-4 px-2 my-3 text-white bg-purple-900 rounded-md hover:bg-purple-600 justify-items-stretch fas fa-sign-out-alt '>  Cerrar Sesión  </button></li>
				</ul>
			</div >
		</nav >
	);
};

const Ruta = ({ icono, ruta, nombre, usuario }) => {
	const isActive = useActiveRoute(ruta);
	return (
		<Link to={ruta}>
			<button
				className={`flex w-full p-4 my-2 bg-${isActive ? 'purple' : 'gray'}-900 hover:bg-purple-600 justify-items-stretch text-white rounded-md border-red-900 solid`}>

				{usuario ? (
					<>
						<img src={usuario.picture} className='w-5 h-5 mx-2 rounded-full' alt='perfil' />
						{usuario.name}
					</>
				) : (
					<>
						<i className={`${icono} w-10`} />
						{nombre}
					</>
				)}
			</button>
		</Link>
	);
};

export default Navbar;
