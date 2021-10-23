import axios from 'axios';

const url = "http://localhost:5050/Usuarios/";

export const addUser = async (usuario) => {
	return await axios.post (`${url}/`,usuario);
}

export const obtenerUsuarios = async (successCallback, errorCallback) => {
	const options = { method: 'GET', url: 'http://localhost:5050/usuarios/' };
	await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `http://localhost:5050/usuarios/${id}/`,
		headers: { 'Content-Type': 'application/json' },
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarUsuario = async (id, successCallback, errorCallback) => {
	const options = {
		method: 'DELETE',
		url: `http://localhost:5050/usuarios/${id}/`,
		headers: { 'Content-Type': 'application/json' },
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};