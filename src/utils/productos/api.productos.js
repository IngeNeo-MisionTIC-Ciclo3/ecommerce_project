import axios from 'axios';

//Definimos una función para la ruta de nuestra API
//const url = "http://localhost:5050";
const url = "https://fathomless-castle-92562.herokuapp.com";

//Consultamos el Token almacenado en el LocalStorage
const traerToken = ()=>{
	return `Bearer ${localStorage.getItem('Token')}`;
}

//Para todas las petición enviamos en el header la autorizacion del token en la propiedad Authorization: traerToken(),
export const addProduct = async (data, successCallback, errorCallback) => {
	const options = {
		method: 'POST',
		url : `${url}/productos/`,
		headers: { 
			'Content-Type':'application/json',
			Authorization: traerToken(),
		},
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};

//Para todas las petición enviamos en el header la autorizacion del token en la propiedad Authorization: traerToken(),
export const obtenerProductos = async (successCallback, errorCallback) => {
	const options = { 
		method: 'GET', 
		url: `${url}/productos/`, 
		headers: {
			Authorization: traerToken(),
		}
};
	await axios.request(options).then(successCallback).catch(errorCallback);
};

//Para todas las petición enviamos en el header la autorizacion del token en la propiedad Authorization: traerToken(),
export const editarProducto = async (id, data, successCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `${url}/productos/${id}/`,
		headers: { 
			'Content-Type': 'application/json',
			Authorization: traerToken(),
		},
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};

//Para todas las petición enviamos en el header la autorizacion del token en la propiedad Authorization: traerToken(),
export const eliminarProducto = async (id, successCallback, errorCallback) => {
	const options = {
		method: 'DELETE',
		url: `${url}/productos/${id}/`,
		headers: { 
			'Content-Type': 'application/json',
			Authorization: traerToken(),
		},
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};