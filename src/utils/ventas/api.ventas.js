import axios from 'axios';

export const crearVenta = async (data, successCallback, errorCallback) => {
	const options = {
		method: 'POST',
		url: 'http://localhost:5050/ventas/',
		headers: { 'Content-Type': 'application/json' },
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerVentas = async (successCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: 'http://localhost:5050/ventas/' };
	await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarVentas = async (id, data, successCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `http://localhost:5050/ventas/${id}/`,
		headers: { 'Content-Type': 'application/json' },
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarVentas = async (id, successCallback, errorCallback) => {
	const options = {
		method: 'DELETE',
		url: `http://localhost:5050/ventas/${id}/`,
		headers: { 'Content-Type': 'application/json' },
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};