import axios from 'axios';

const url = "http://localhost:5050/Productos/";

export const addProduct = async (producto) => {
	return await axios.post (`${url}/`,producto);
}

export const obtenerProductos = async (setProductos, setEjecutarConsulta) => {
	const options = { method: 'GET', url: 'http://localhost:5050/Productos/' };
	await axios
		.request(options)
		.then(function (response) {
			setProductos(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});
	setEjecutarConsulta(false);
};


