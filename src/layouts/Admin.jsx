import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';
import { obtenerEsteUsuario } from '../utils/usuarios/api.usuarios.js'
import { useUser } from '../context/userContext.js';

const AdminLayout = ({ children }) => {
	const { isAuthenticated, isLoading, getAccessTokenSilently, loginWithRedirect, logout } = useAuth0();
	const [cargandoInformacionUsuario, setCargandoInformacionUsuario] = useState(false);
	const { setUserData } = useUser();

	const urllogout = "http://localhost:3000";

	useEffect(() => {
		//Creamos una función para obtener un token desde Auth0
		const obtenerAuth0Token = async () => {

			//Creamos un estado y lo definimos en verdadero mientras se realiza la petición del Token
			setCargandoInformacionUsuario(true);
			//Solicitamos el Token a Auth0 del usuario logeado
			const accessToken = await getAccessTokenSilently({
				//Definimos la audiencia, es decir el API creado en el portal de Auth0
				audience: 'API-Ecommerce-Project',
			});
			//Almacenamos el Token en el localStorage para poder consultarno posteriormente
			localStorage.setItem('Token', accessToken);
			//Hacemos el llamado de la función obtenerEsteusuario, que valida si el usuario existe o no en el sistema y de no ser a si lo crea (Sin Rol, Pendiente), si ya existe nos trae las credenciales para definir que permisos debe tener
			await obtenerEsteUsuario(
				(response) => {
					//Obtenemos la información del usuario ya creado anteriormente y sus credenciales
					setUserData(response.data);
					//Cambiamos la variable a false para que no carge mas el loading...
					setCargandoInformacionUsuario(false);
				},
				(error) => {
					//Cambiamos la variable a false para que no carge mas el loading...
					setCargandoInformacionUsuario(false);
					//En caso de que el usuario tenga un estado de Rechazado en el sistema cerramos sesión inmediatamente
					logout({ returnTo: `${urllogout}` });
				}
			);
		};
		//Realizamos la validación si el usuario esta logeado solicitamos el token con la función definida anteriormente
		if (isAuthenticated) {
			obtenerAuth0Token();
		}
	}, [isAuthenticated, getAccessTokenSilently, logout, setUserData])

	//Mientras el sistema este cargando datos o esperando la información del usuario logeado en el sistema despliega un loading en pantalla
	if (isLoading || cargandoInformacionUsuario ){
		return <div className='flex flex-col items-center justify-center w-full h-full'><ReactLoading type="spinningBubbles" color="#0040FF" height={667} width={375} />;</div>
	}

	//Si el Usuario no esta logeado lo dirigimos inmediatamente a la pagina de login
	if (!isAuthenticated){
		return loginWithRedirect();
	}

	return (
			<div className='flex flex-col justify-between h-screen'>
				<Header />
				<main className='h-full overflow-y-scroll'>{children}</main>
				<Footer />
			</div>
	);
};

export default AdminLayout;
