import React from "react";
import Google from "media/google_logo.png";
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
	//Hacemos el llamado a la funcion de login de Auth0 que usaremos con el boton de continuar con google
	const { loginWithRedirect } = useAuth0();

	return (
		<div className="flex flex-col items-center justify-center w-full h-full img">
			<div>
				<button type="submit" onClick={() => loginWithRedirect()} className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md group hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
					<div className="flex items-center justify-start">
						<img src={Google} alt="Logo Google" className="w-6 h-6" />
						<span className="mx-4">Continúa con Google</span>
					</div>
				</button>
			</div>

		</div>
	);
};

export default Login;
