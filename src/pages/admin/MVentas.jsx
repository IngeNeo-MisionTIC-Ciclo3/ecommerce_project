import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerVentas, editarVentas, eliminarVentas } from 'utils/ventas/api.ventas';
import 'react-toastify/dist/ReactToastify.css';

const Mventas =() =>{
	const [mostrarTabla] = useState(true);
	const [ventas, setVentas] = useState([]);
	const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

	useEffect(() => {
		const traerVentas = async () => {
			await obtenerVentas(
				(response) => {
					console.log('la respuesta que se recibio fue', response);
					setVentas(response.data);
					setEjecutarConsulta(false);
				},
				(error) => {
					console.error('Salio un error:', error);
				}
			);
		};
		console.log('consulta', ejecutarConsulta);
		if (ejecutarConsulta) {
			traerVentas();
		}
	}, [ejecutarConsulta]);

	useEffect(() => {
		//obtener lista de ventas desde el backend
		if (mostrarTabla) {
			setEjecutarConsulta(true);
		}
	}, [mostrarTabla]);

	return (
		<div className='flex flex-col items-center justify-center w-full h-full p-8'>
			<div className='flex flex-col w-full'>
				<h2 className='text-3xl font-extrabold text-gray-900'>Página de administración de Ventas</h2>

			</div>
			<TablaVentas listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta} />
			<ToastContainer position='bottom-center' autoClose={4000} />
		</div>
	);
};

const TablaVentas = ({ listaVentas, setEjecutarConsulta }) => {
	const [busqueda, setBusqueda] = useState('');
	const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);

	useEffect(() => {
		setVentasFiltradas(
			listaVentas.filter((elemento) => {
				return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
			})
		);
	}, [busqueda, listaVentas]);

	return (
		<div className='flex flex-col items-center justify-center w-full'>
			<input
				value={busqueda}
				onChange={(e) => setBusqueda(e.target.value)}
				placeholder='Buscar'
				className='self-start px-3 py-1 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500'
			/>
			<h2 className='text-2xl font-extrabold text-gray-800'>Todas las Ventas</h2>
			<div className='hidden w-full md:flex'>
				<table className='tabla'>
					<thead>
						<tr>
							<th>ID del Cliente</th>
							<th>Nombre del Cliente</th>
							<th>Nombre del Vendedor</th>
							<th>Descripcion del producto</th>
							<th>Valor Unitario</th>
							<th>Cantidad</th>
							<th>Valor Total</th>
							<th>Estado</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{ventasFiltradas.map((venta) => {
							return (
								<FilaVenta
									key={nanoid()}
									venta={venta}
									setEjecutarConsulta={setEjecutarConsulta}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className='flex flex-col w-full m-2 md:hidden'>
				{ventasFiltradas.map((el) => {
					return (
						<div className='flex flex-col p-2 m-2 bg-gray-400 shadow-xl rounded-xl'>
							<span>{el.id_cliente}</span>
							<span>{el.nom_cliente}</span>
							<span>{el.nom_vendedor}</span>
							<span>{el.nom_producto}</span>
							<span>{el.v_unitario}</span>
							<span>{el.cantidad}</span>
							<span>{el.v_total}</span>
							<span>{el.estado}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const FilaVenta = ({ venta, setEjecutarConsulta }) => {
	const [edit, setEdit] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
	const [infoNuevaVenta, setInfoNuevaVenta] = useState({
		id_cliente: venta.id_cliente,
		nom_cliente: venta.nom_cliente,
		nom_vendedor: venta.nom_vendedor,
		nom_producto: venta.nom_producto,
		v_unitario: venta.v_unitario,
		cantidad: venta.cantidad,
		v_total: venta.v_total,
		estado: venta.estado,
	});

	const actualizarVenta = async () => {
		//enviar la info al backend
		await editarVentas(
			venta._id,
			{
				id_cliente: infoNuevaVenta.id_cliente,
				nom_cliente: infoNuevaVenta.nom_cliente,
				nom_vendedor: infoNuevaVenta.nom_vendedor,
				nom_producto: infoNuevaVenta.nom_producto,
				v_unitario: infoNuevaVenta.v_unitario,
				cantidad: infoNuevaVenta.cantidad,
				v_total: infoNuevaVenta.v_total,
				estado: infoNuevaVenta.estado,
			},
			(response) => {
				console.log(response.data);
				toast.success('venta modificada con éxito');
				setEdit(false);
				setEjecutarConsulta(true);
			},
			(error) => {
				toast.error('Error modificando la venta');
				console.error(error);
			}
		);
	};

	const deleteVenta = async () => {
		await eliminarVentas(
			venta._id,
			(response) => {
				console.log(response.data);
				toast.success('venta eliminada con éxito');
				setEjecutarConsulta(true);
			},
			(error) => {
				console.error(error);
				toast.error('Error eliminando la venta');
			}
		);
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
							value={infoNuevaVenta.id_cliente}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, id_cliente: e.target.value })}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevaVenta.nom_cliente}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, nom_cliente: e.target.value })}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevaVenta.nom_vendedor}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, nom_vendedor: e.target.value })
							}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevaVenta.nom_producto}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, nom_producto: e.target.value })
							}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevaVenta.v_unitario}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, v_unitario: e.target.value })
							}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevaVenta.cantidad}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, cantidad: e.target.value })
							}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevaVenta.v_total}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, v_total: e.target.value })
							}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevaVenta.estado}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, estado: e.target.value })
							}
						/>
					</td>
				</>
			) : (
				<>
					<td>{venta.id_cliente}</td>
					<td>{venta.nom_cliente}</td>
					<td>{venta.nom_vendedor}</td>
					<td>{venta.nom_producto}</td>
					<td>{venta.v_unitario}</td>
					<td>{venta.cantidad}</td>
					<td>{venta.v_total}</td>
					<td>{venta.estado}</td>
				</>
			)}
			<td>
				<div className='flex justify-around w-full'>
					{edit ? (
						<>
							<Tooltip title='Confirmar Edición' arrow>
								<i
									onClick={() => actualizarVenta()}
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
							<Tooltip title='Editar venta' arrow>
								<i
									onClick={() => setEdit(!edit)}
									className='text-yellow-700 fas fa-pencil-alt hover:text-yellow-500'
								/>
							</Tooltip>
							<Tooltip title='Eliminar venta' arrow>
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
							¿Está seguro de querer eliminar la venta?
						</h1>
						<div className='flex items-center justify-center w-full my-4'>
							<button
								onClick={() => deleteVenta()}
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

export default Mventas;