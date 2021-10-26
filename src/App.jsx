import AdminLayout from 'layouts/Admin';
import Publico from 'layouts/Publico';
import Login from 'pages/auth/Login';
import Usuarios from 'pages/admin/Usuarios';
import Ventas from 'pages/admin/Ventas';
import MVentas from 'pages/admin/MVentas';
import Productos from 'pages/admin/RegistroProductos';
import MProductos from 'pages/admin/MProductos';
import Perfil from 'pages/admin/Perfil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from './context/userContext.js';
import { useState } from 'react';
import RutaPrivada from './components/RutaPrivada';

function App() {

	/*Usamos el Auth0Provider para solicitar a nuestra cuenta de Auth0, las funciones para autenticacion del aplicativo
	* Metemos todos nuestro componentes dentro del Auth0Provider, de la misma forma colocamos las rutas dentro del
	* UserContext.Provider para poder tener acceso a los datos del usuario dentro de todo el sistema y usamos el componente
	* RutaPrivada listaRoles para proteger las rutas del sistema asignando la lista de los roles que van a poder tener acceso
	* tanto a la ruta como a los componentes.
	*/

	const [userData, setUserData] = useState({});

	return (
		<Auth0Provider
			domain='ingeneomisionticciclo3ecommerceproject.us.auth0.com'
			clientId='1rCaefPr0j6RjQsGzrmJKPcGcunKCHiW'
			//redirectUri='https://mighty-escarpment-28176.herokuapp.com/admin/perfil/'
			redirectUri='http://localhost:3000/admin/perfil/'
			audience='API-Ecommerce-Project'
		>
			<div className='App'>
				<UserContext.Provider value={{ userData, setUserData }}>
					<Router>
						<Switch>
							<Route path={['/admin', '/admin/perfil', '/admin/usuarios', '/admin/ventas', '/admin/mventas', '/admin/productos', '/admin/mproductos']}>
								<AdminLayout>
									<Switch>
										<Route path='/admin/perfil'>
											<RutaPrivada listaRoles={['Sin rol', 'Administrador', 'Vendedor']}>
												<Perfil />
											</RutaPrivada>
										</Route>
										<Route path='/admin/usuarios'>
											<RutaPrivada listaRoles={['Administrador']}>
												<Usuarios />
											</RutaPrivada>
										</Route>
										<Route path='/admin/ventas'>
											<RutaPrivada listaRoles={['Administrador', 'Vendedor']}>
												<Ventas />
											</RutaPrivada>
										</Route>
										<Route path='/admin/mventas'>
											<RutaPrivada listaRoles={['Administrador', 'Vendedor']}>
												<MVentas />
											</RutaPrivada>
										</Route>
										<Route path='/admin/productos'>
											<RutaPrivada listaRoles={['Administrador']}>
												<Productos />
											</RutaPrivada>
										</Route>
										<Route path='/admin/mproductos'>
											<RutaPrivada listaRoles={['Administrador']}>
												<MProductos />
											</RutaPrivada>
										</Route>
									</Switch>
								</AdminLayout>
							</Route>
							<Route path={['/']}>
								<Publico>
									<Switch>
										<Route path='/'>
											<Login />
										</Route>
									</Switch>
								</Publico>
							</Route>
						</Switch>
					</Router>
				</UserContext.Provider>
			</div>
		</Auth0Provider>
	);
}

export default App;
