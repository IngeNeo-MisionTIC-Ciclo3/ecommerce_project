import React from "react";
import Google from "media/google_logo.png";
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
	//Hacemos el llamado a la funcion de login de Auth0 que usaremos con el boton de continuar con google
	const { loginWithRedirect } = useAuth0();

	return (
		<div className="flex flex-col items-end justify-start w-full h-full login">
			<div className="flex px-5 py-5 mx-5 my-5 flex- ">
				<button type="submit" onClick={() => loginWithRedirect()} className="flex text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md top-1 right-1 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
					<div className="flex justify-start px-5 py-1 mx-5 my-1 items-right">
						<img src={Google} alt="Logo Google" className="w-6 h-6" />
						<span className="mx-4">Iniciar Sesión</span>
					</div>
				</button>
			</div>

		</div>
	);
};

export default Login;
