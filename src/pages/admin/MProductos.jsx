import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerProductos } from 'utils/api';
import 'react-toastify/dist/ReactToastify.css';

const MProductos =() =>{
	const [mostrarTabla] = useState(true);
	const [productos, setProductos] = useState([]);
	const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

	useEffect(() => {
		console.log('consulta', ejecutarConsulta);
		if (ejecutarConsulta) {
			obtenerProductos(setProductos, setEjecutarConsulta);
		}
	}, [ejecutarConsulta]);

	useEffect(() => {
		//obtener lista de productos desde el backend
		if (mostrarTabla) {
			setEjecutarConsulta(true);
		}
	}, [mostrarTabla]);

	return (
		<div className='flex flex-col items-center justify-center w-full h-full p-8'>
			<div className='flex flex-col w-full'>
				<h2 className='text-3xl font-extrabold text-gray-900'>Página de administración de Productos</h2>

			</div>
			<TablaProductos listaProductos={productos} setEjecutarConsulta={setEjecutarConsulta} />
			<ToastContainer position='bottom-center' autoClose={4000} />
		</div>
	);
};

const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
	const [busqueda, setBusqueda] = useState('');
	const [productosFiltrados, setproductosFiltrados] = useState(listaProductos);

	useEffect(() => {
		setproductosFiltrados(
			listaProductos.filter((elemento) => {
				return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
			})
		);
	}, [busqueda, listaProductos]);

	return (
		<div className='flex flex-col items-center justify-center w-full'>
			<input
				value={busqueda}
				onChange={(e) => setBusqueda(e.target.value)}
				placeholder='Buscar'
				className='self-start px-3 py-1 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500'
			/>
			<h2 className='text-2xl font-extrabold text-gray-800'>Todos los Productos</h2>
			<div className='hidden w-full md:flex'>
				<table className='tabla'>
					<thead>
						<tr>
							<th>Descripcion del producto</th>
							<th>Valor Unitario</th>
							<th>Cantidad</th>
							<th>Estado</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{productosFiltrados.map((producto) => {
							return (
								<FilaProducto
									key={nanoid()}
									producto={producto}
									setEjecutarConsulta={setEjecutarConsulta}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className='flex flex-col w-full m-2 md:hidden'>
				{productosFiltrados.map((el) => {
					return (
						<div className='flex flex-col p-2 m-2 bg-gray-400 shadow-xl rounded-xl'>
							<span>{el.Descripcion}</span>
							<span>{el.ValorU}</span>
							<span>{el.Cantidad}</span>
							<span>{el.Estado}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const FilaProducto = ({ producto, setEjecutarConsulta }) => {
	const [edit, setEdit] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
	const [infoNuevoProducto, setInfoNuevoProducto] = useState({
		Descripcion: producto.Descripcion,
		ValorU: producto.ValorU,
		Cantidad: producto.Cantidad,
		Estado: producto.Estado,
	});

	const actualizarProducto = async () => {
		//enviar la info al backend
		const options = {
			method: 'PATCH',
			url: `http://localhost:5050/Productos/${producto._id}/`,
			headers: { 'Content-Type': 'application/json' },
			data: { ...infoNuevoProducto },
		};

		await axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				toast.success('Producto modificado con éxito');
				setEdit(false);
				setEjecutarConsulta(true);
			})
			.catch(function (error) {
				toast.error('Error modificando el producto');
				console.error(error);
			});
	};

	const eliminarProducto = async () => {
		const options = {
			method: 'DELETE',
			url: `http://localhost:5050/Productos/${producto._id}/`,
			headers: { 'Content-Type': 'application/json' },
			data: { id: producto._id },
		};

		await axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				toast.success('producto eliminado con éxito');
				setEjecutarConsulta(true);
			})
			.catch(function (error) {
				console.error(error);
				toast.error('Error eliminando el producto');
			});
		setOpenDialog(false);
	};

	return (
		<tr>
			{edit ? (
				<>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevoProducto.Descripcion}
							onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, Descripcion: e.target.value })}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevoProducto.ValorU}
							onChange={(e) =>
								setInfoNuevoProducto({ ...infoNuevoProducto, ValorU: e.target.value })
							}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevoProducto.Cantidad}
							onChange={(e) =>
								setInfoNuevoProducto({ ...infoNuevoProducto, Cantidad: e.target.value })
							}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevoProducto.Estado}
							onChange={(e) =>
								setInfoNuevoProducto({ ...infoNuevoProducto, Estado: e.target.value })
							}
						/>
					</td>
				</>
			) : (
				<>
					<td>{producto.Descripcion}</td>
					<td>{producto.ValorU}</td>
					<td>{producto.Cantidad}</td>
					<td>{producto.Estado}</td>
				</>
			)}
			<td>
				<div className='flex justify-around w-full'>
					{edit ? (
						<>
							<Tooltip title='Confirmar Edición' arrow>
								<i
									onClick={() => actualizarProducto()}
									className='text-green-700 fas fa-check hover:text-green-500'
								/>
							</Tooltip>
							<Tooltip title='Cancelar edición' arrow>
								<i
									onClick={() => setEdit(!edit)}
									className='text-red-700 fas fa-ban hover:text-red-500'
								/>
							</Tooltip>
						</>
					) : (
						<>
							<Tooltip title='Editar producto' arrow>
								<i
									onClick={() => setEdit(!edit)}
									className='text-yellow-700 fas fa-pencil-alt hover:text-yellow-500'
								/>
							</Tooltip>
							<Tooltip title='Eliminar producto' arrow>
								<i
									onClick={() => setOpenDialog(true)}
									className='text-red-700 fas fa-trash hover:text-red-500'
								/>
							</Tooltip>
						</>
					)}
				</div>
				<Dialog open={openDialog}>
					<div className='flex flex-col p-8'>
						<h1 className='text-2xl font-bold text-gray-900'>
							¿Está seguro de querer eliminar el Producto?
						</h1>
						<div className='flex items-center justify-center w-full my-4'>
							<button
								onClick={() => eliminarProducto()}
								className='px-4 py-2 mx-2 text-white bg-green-500 rounded-md shadow-md hover:bg-green-700'
							>
								Sí
							</button>
							<button
								onClick={() => setOpenDialog(false)}
								className='px-4 py-2 mx-2 text-white bg-red-500 rounded-md shadow-md hover:bg-red-700'
							>
								No
							</button>
						</div>
					</div>
				</Dialog>
			</td>
		</tr>
	);
};

export default MProductos;