import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerVentas, editarVentas, eliminarVentas } from 'utils/ventas/api.ventas';
import 'react-toastify/dist/ReactToastify.css';
import ComponentePrivado from 'components/ComponentePrivado';

const Mventas = () => {
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
		if (mostrarTabla) {
			setEjecutarConsulta(true);
		}
	}, [mostrarTabla]);

	return (
		<div className='flex flex-col items-center justify-center w-full h-full p-8 mventas'>
			<h2 className='text-4xl font-extrabold text-gray-50'>Página de administración de Ventas</h2>

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
			<div className='hidden w-full md:flex'>
				<table className='tabla'>
					<thead>
						<tr key={nanoid()}>
							<th>ID del Cliente</th>
							<th>Nombre del Cliente</th>
							<th>Nombre del Vendedor</th>
							<th>Descripcion del producto</th>
							<th>Fecha de venta</th>
							<th>Valor Total</th>
							<th>Estado</th>
							<ComponentePrivado listaRoles={['Administrador', 'Vendedor']}>
								<th>Acciones</th>
							</ComponentePrivado>
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
							<span>{el.fecha}</span>
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
		fecha: venta.fecha,
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
				fecha: infoNuevaVenta.fecha,
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
		<tr key={nanoid()}>
			{edit ? (
				<>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50 select'
							type='text'
							value={infoNuevaVenta.id_cliente}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, id_cliente: e.target.value })}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50 select'
							type='text'
							value={infoNuevaVenta.nom_cliente}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, nom_cliente: e.target.value })}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50 select'
							type='text'
							value={infoNuevaVenta.nom_vendedor}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, nom_vendedor: e.target.value })
							}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50 select'
							type='text'
							value={infoNuevaVenta.nom_producto}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, nom_producto: e.target.value })
							}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50 select'
							type='date'
							value={infoNuevaVenta.fecha}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, fecha: e.target.value })
							}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50 select'
							type='number'
							value={infoNuevaVenta.v_total}
							onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, v_total: e.target.value })
							}
						/>
					</td>
					<td>
						<select name="estado" id="" defaultValue={infoNuevaVenta.estado} onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, estado: e.target.value })} className="p-2 m-2 bg-blue-100 border-blue-500 rounded-lg select" required>
							<option disabled value={0}>seleccione una opcion</option>
							<option>En Proceso</option>
							<option>Entregada</option>
							<option>Cancelada</option>
						</select>
					</td>
				</>
			) : (
				<>
					<td>{venta.id_cliente}</td>
					<td>{venta.nom_cliente}</td>
					<td>{venta.nom_vendedor}</td>
					<td>{venta.nom_producto}</td>
					<td>{venta.fecha}</td>
					<td>{venta.v_total}</td>
					<td>{venta.estado}</td>
				</>
			)}
			<td>
				<div className='flex justify-around w-full'>
					{edit ? (
						<ComponentePrivado listaRoles={['Administrador', 'Vendedor']}>
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
						</ComponentePrivado>
					) : (
						<>
							<ComponentePrivado listaRoles={['Administrador', 'Vendedor']}>
								<Tooltip title='Editar venta' arrow>
									<i
										onClick={() => setEdit(!edit)}
										className='text-yellow-700 fas fa-pencil-alt hover:text-yellow-500'
									/>
								</Tooltip>
								</ComponentePrivado>
								<ComponentePrivado listaRoles={['Administrador']}>
								<Tooltip title='Eliminar venta' arrow>
									<i
										onClick={() => setOpenDialog(true)}
										className='text-red-700 fas fa-trash hover:text-red-500'
									/>
								</Tooltip>
							</ComponentePrivado>
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