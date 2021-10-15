import axios from 'axios';

const url = "http://localhost:5050/Productos/";

export const addProduct = async (producto) => {
	return await axios.post (`${url}/`,producto);
}

export const obtenerProductos = async (successCallback, errorCallback) => {
	const options = { method: 'GET', url: 'http://localhost:5050/productos/' };
	await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async (id, data, successCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `http://localhost:5050/productos/${id}/`,
		headers: { 'Content-Type': 'application/json' },
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
	const options = {
		method: 'DELETE',
		url: `http://localhost:5050/productos/${id}/`,
		headers: { 'Content-Type': 'application/json' },
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};