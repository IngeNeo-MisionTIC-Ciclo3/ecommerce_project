import axios from 'axios';

//Definimos una función para la ruta de nuestra API
//const url = "http://localhost:5050";
const url = "https://fathomless-castle-92562.herokuapp.com";

//Consultamos el Token almacenado en el LocalStorage
const traerToken = ()=>{
	return `Bearer ${localStorage.getItem('Token')}`;
}

//Para todas las petición enviamos en el header la autorizacion del token en la propiedad Authorization: traerToken(),
export const addUser = async (data, successCallback, errorCallback) => {
	const options = {
		method: 'POST',
		url : `${url}/usuarios/`,
		headers: {
			'Content-Type': 'application/json',
			Authorization: traerToken(),
		},
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};

//Para todas las petición enviamos en el header la autorizacion del token en la propiedad Authorization: traerToken(),
export const obtenerUsuarios = async (successCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: `${url}/usuarios/`,
		headers: {
			'Content-Type': 'application/json',
			Authorization: traerToken(),
		}, };
	await axios.request(options).then(successCallback).catch(errorCallback);
};

//Para todas las petición enviamos en el header la autorizacion del token en la propiedad Authorization: traerToken(),
export const obtenerEsteUsuario = async (successCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: `${url}/usuarios/iam`,
		headers: {
			'Content-Type': 'application/json',
			Authorization: traerToken(),
		}, };
	await axios.request(options).then(successCallback).catch(errorCallback);
};

//Para todas las petición enviamos en el header la autorizacion del token en la propiedad Authorization: traerToken(),
export const editarUsuario = async (id, data, successCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `${url}/usuarios/${id}/`,
		headers: {
			'Content-Type': 'application/json',
			Authorization: traerToken(),
		},
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};

//Para todas las petición enviamos en el header la autorizacion del token en la propiedad Authorization: traerToken(),
export const eliminarUsuario = async (id, successCallback, errorCallback) => {
	const options = {
		method: 'DELETE',
		url: `${url}/usuarios/${id}/`,
		headers: {
			'Content-Type': 'application/json',
			Authorization: traerToken(),
		},
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};