import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerUsuarios, editarUsuario, eliminarUsuario } from 'utils/usuarios/api.usuarios';
import 'react-toastify/dist/ReactToastify.css';

const MUsuarios = () => {
	const [mostrarTabla] = useState(true);
	const [usuarios, setUsuarios] = useState([]);
	const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

	useEffect(() => {
		const traerusuarios = async () => {
			await obtenerUsuarios(
				(response) => {
					console.log('La respuesta que se recibio fue', response);
					setUsuarios(response.data);
					setEjecutarConsulta(false);
				},
				(error) => {
					console.error('Salio un error:', error);
				}
			);
		};
		console.log('consulta', ejecutarConsulta);
		if (ejecutarConsulta) {
			traerusuarios();
		}
	}, [ejecutarConsulta]);

	useEffect(() => {
		//obtener lista de usuarios desde el backend
		if (mostrarTabla) {
			setEjecutarConsulta(true);
		}
	}, [mostrarTabla]);

	return (
		<div className='flex flex-col items-center justify-center w-full h-full p-8'>
			<div className='flex flex-col w-full'>
				<h2 className='text-3xl font-extrabold text-gray-900'>Página de administración de Usuarios</h2>

			</div>
			<TablaUsuarios listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />
			<ToastContainer position='bottom-center' autoClose={4000} />
		</div>
	);
};

const TablaUsuarios = ({ listaUsuarios, setEjecutarConsulta }) => {
	const [busqueda, setBusqueda] = useState('');
	const [usuariosFiltrados, setusuariosFiltrados] = useState(listaUsuarios);

	useEffect(() => {
		setusuariosFiltrados(
			listaUsuarios.filter((elemento) => {
				return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
			})
		);
	}, [busqueda, listaUsuarios]);

	return (
		<div className='flex flex-col items-center justify-center w-full'>
			<input
				value={busqueda}
				onChange={(e) => setBusqueda(e.target.value)}
				placeholder='Buscar'
				className='self-start px-3 py-1 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500'
			/>
			<h2 className='text-2xl font-extrabold text-gray-800'>Todos los Usuarios</h2>
			<div className='hidden w-full md:flex'>
				<table className='tabla'>
					<thead>
						<tr>
							<th>Tipo de documento</th>
							<th>Numero de documento</th>
							<th>Nombres</th>
							<th>Celular</th>
							<th>Correo</th>
							<th>Tipo de usuario</th>
							<th>Estado</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
					{usuariosFiltrados.map((usuario) => {
							return (
								<FilaUsuario
									key={nanoid()}
									usuario={usuario}
									setEjecutarConsulta={setEjecutarConsulta}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className='flex flex-col w-full m-2 md:hidden'>
				{usuariosFiltrados.map((el) => {
					return (
						<div className='flex flex-col p-2 m-2 bg-gray-400 shadow-xl rounded-xl'>
							<span>{el.tdocumento}</span>
							<span>{el.ndocumento}</span>
							<span>{el.nombres}</span>
							<span>{el.telefono}</span>
							<span>{el.correo}</span>
							<span>{el.tusuario}</span>
							<span>{el.estado}</span>
						</div>
					);
				})}
			</div>
		</div>
);
};

const FilaUsuario = ({ usuario, setEjecutarConsulta }) => {
	const [edit, setEdit] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);
	const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
		tdocumento: usuario.tdocumento,
		ndocumento: usuario.ndocumento,
		nombres: usuario.nombres,
		telefono: usuario.telefono,
		correo: usuario.correo,
		tusuario: usuario.tusuario,
		estado: usuario.estado,
	});

	const actualizarUsuario = async () => {
		//enviar la info al backend
		await editarUsuario(
			usuario._id,
			{
				tdocumento: infoNuevoUsuario.tdocumento,
				ndocumento: infoNuevoUsuario.ndocumento,
				nombres: infoNuevoUsuario.nombres,
				telefono: infoNuevoUsuario.telefono,
				correo: infoNuevoUsuario.correo,
				tusuario: infoNuevoUsuario.tusuario,
				estado: infoNuevoUsuario.estado,
			},
			(response) => {
				console.log(response.data);
				toast.success('Usuario modificado con éxito');
				setEdit(false);
				setEjecutarConsulta(true);
			},
			(error) => {
				toast.error('Error modificando el Usuario');
				console.error(error);
			}
		);
	};

	const deleteUsuario = async () => {
		await eliminarUsuario(
			usuario._id,
			(response) => {
				console.log(response.data);
				toast.success('Usuario eliminado con éxito');
				setEjecutarConsulta(true);
			},
			(error) => {
				console.error(error);
				toast.error('Error eliminando el Usuario');
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
							value={infoNuevoUsuario.tdocumento}
							onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, tdocumento: e.target.value })}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='number'
							value={infoNuevoUsuario.ndocumento}
							onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, ndocumento: e.target.value })}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevoUsuario.nombres}
							onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, nombres: e.target.value })}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='number'
							value={infoNuevoUsuario.telefono}
							onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, telefono: e.target.value })}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='email'
							value={infoNuevoUsuario.correo}
							onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, correo: e.target.value })}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevoUsuario.tusuario}
							onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, tusuario: e.target.value })}
						/>
					</td>
					<td>
						<input
							className='p-2 m-2 border border-gray-600 rounded-lg bg-gray-50'
							type='text'
							value={infoNuevoUsuario.estado}
							onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, estado: e.target.value })}
						/>
					</td>
				</>
			) : (
				<>
					<td>{usuario.tdocumento}</td>
					<td>{usuario.ndocumento}</td>
					<td>{usuario.nombres}</td>
					<td>{usuario.telefono}</td>
					<td>{usuario.correo}</td>
					<td>{usuario.tusuario}</td>
					<td>{usuario.estado}</td>
				</>
			)}
			<td>
				<div className='flex justify-around w-full'>
					{edit ? (
						<>
							<Tooltip title='Confirmar Edición' arrow>
								<i
									onClick={() => actualizarUsuario()}
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
							<Tooltip title='Editar Usuario' arrow>
								<i
									onClick={() => setEdit(!edit)}
									className='text-yellow-700 fas fa-pencil-alt hover:text-yellow-500'
								/>
							</Tooltip>
							<Tooltip title='Eliminar Usuario' arrow>
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
							¿Está seguro de querer eliminar el Usuario?
						</h1>
						<div className='flex items-center justify-center w-full my-4'>
							<button
								onClick={() => deleteUsuario()}
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

export default MUsuarios;
