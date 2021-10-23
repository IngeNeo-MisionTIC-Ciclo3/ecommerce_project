import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerProductos, editarProducto, eliminarProducto } from 'utils/productos/api.productos';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';
import ComponentePrivado from 'components/ComponentePrivado';

const MProductos = () => {
	const [mostrarTabla] = useState(true);
	const [productos, setProductos] = useState([]);
	const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
	const [cargando, setCargando] = useState(false);

	useEffect(() => {
		const traerproductos = async () => {
			setCargando(true);
			await obtenerProductos(
				(response) => {
					console.log('la respuesta que se recibio fue', response);
					setProductos(response.data);
					setEjecutarConsulta(false);
					setCargando(false);
				},
				(error) => {
					console.error('Salio un error:', error);
					setCargando(false);
				}
			);
		};
		console.log('consulta', ejecutarConsulta);
		if (ejecutarConsulta) {
			traerproductos();
		}
	}, [ejecutarConsulta]);

	useEffect(() => {
		//obtener lista de productos desde el backend
		if (mostrarTabla) {
			setEjecutarConsulta(true);
		}
	}, [mostrarTabla]);

	return (
		<div className='flex flex-col items-center justify-center w-full h-full p-8 mproductos'>
			<h2 className='text-3xl font-extrabold text-gray-50'>Página de administración de Productos</h2>
			<TablaProductos cargando={cargando} listaProductos={productos} setEjecutarConsulta={setEjecutarConsulta} />
			<ToastContainer position='bottom-center' autoClose={4000} />
		</div>
	);
};

const TablaProductos = ({ cargando, listaProductos, setEjecutarConsulta }) => {
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
		<div className='flex flex-col items-center justify-center w-full mproductos'>
			<input
				value={busqueda}
				onChange={(e) => setBusqueda(e.target.value)}
				placeholder='Buscar'
				className='self-start px-3 py-1 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500'
			/>
			<div className='hidden w-full md:flex'>
				{cargando ? (
					<ReactLoading type="spinningBubbles" color="#0040FF" height={667} width={375} />
				) : (
					<table className='tabla'>
						<thead>
								<tr key={nanoid()}>
								<th>Nombre del producto</th>
								<th>Descripcion del producto</th>
								<th>Valor Unitario</th>
								<th>Cantidad</th>
								<th>Estado</th>
								<ComponentePrivado listaRoles={['Administrador']}>
									<th>Acciones</th>
								</ComponentePrivado>
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
				)}
			</div>
			<div className='flex flex-col w-full m-2 md:hidden'>
				{productosFiltrados.map((el) => {
					return (
						<div className='flex flex-col p-2 m-2 bg-gray-400 shadow-xl rounded-xl'>
							<span>{el.nom_producto}</span>
							<span>{el.descripcion}</span>
							<span>{el.valorU}</span>
							<span>{el.cantidad}</span>
							<span>{el.estado}</span>
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
		nom_producto: producto.nom_producto,
		descripcion: producto.descripcion,
		valorU: producto.valorU,
		cantidad: producto.cantidad,
		estado: producto.estado,
	});

	const actualizarProducto = async () => {
		//enviar la info al backend
		await editarProducto(
			producto._id,
			{
				nom_producto: infoNuevoProducto.nom_producto,
				descripcion: infoNuevoProducto.descripcion,
				valorU: infoNuevoProducto.valorU,
				cantidad: infoNuevoProducto.cantidad,
				estado: infoNuevoProducto.estado,
			},
			(response) => {
				console.log(response.data);
				toast.success('Producto modificado con éxito');
				setEdit(false);
				setEjecutarConsulta(true);
			},
			(error) => {
				toast.error('Error modificando el Producto');
				console.error(error);
			}
		);
	};

	const deleteProducto = async () => {
		await eliminarProducto(
			producto._id,
			(response) => {
				console.log(response.data);
				toast.success('Producto eliminado con éxito');
				setEjecutarConsulta(true);
			},
			(error) => {
				console.error(error);
				toast.error('Error eliminando el Producto');
			}
		);
		setOpenDialog(false);
	};

	return (
		<tr key={nanoid()}>
			{edit ? (
				<>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50 select'
							type='text'
							value={infoNuevoProducto.nom_producto}
							onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, nom_producto: e.target.value })}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50 select'
							type='text'
							value={infoNuevoProducto.descripcion}
							onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, descripcion: e.target.value })}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50 select'
							type='number'
							value={infoNuevoProducto.valorU}
							onChange={(e) =>
								setInfoNuevoProducto({ ...infoNuevoProducto, valorU: e.target.value })
							}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50 select'
							type='number'
							value={infoNuevoProducto.cantidad}
							onChange={(e) =>
								setInfoNuevoProducto({ ...infoNuevoProducto, cantidad: e.target.value })
							}
						/>
					</td>
					<td>
						<select name="estado" id="" defaultValue={infoNuevoProducto.estado} onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, estado: e.target.value })} className="p-2 m-2 bg-blue-100 border-blue-500 rounded-lg select" required>
							<option disabled value={0}>seleccione una opcion</option>
							<option>Disponible</option>
							<option>No Disponible</option>
						</select>
					</td>
				</>
			) : (
				<>
					<td>{producto.nom_producto}</td>
					<td>{producto.descripcion}</td>
					<td>{producto.valorU}</td>
					<td>{producto.cantidad}</td>
					<td>{producto.estado}</td>
				</>
			)}
			<ComponentePrivado listaRoles={['Administrador']}>
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
									onClick={() => deleteProducto()}
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
			</ComponentePrivado>
		</tr>
	);
};

export default MProductos;