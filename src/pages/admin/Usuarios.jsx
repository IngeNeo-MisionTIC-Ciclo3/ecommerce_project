import React from 'react';
import { Link } from 'react-router-dom';

const Usuarios = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8">
			<h2 className='mt-6 text-3xl font-extrabold text-center text-blue-600'>Administración de Usuarios</h2>
			<form className='mt-8 space-y-6'>
				<div className='grid grid-cols-2 gap-2 rounded-md shadow-sm'>
					<label className='flex flex-col' htmlFor='tdocumento'> Tipo de documento
						<select className='px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' name='tdocumento' required="true" defaultValue={0}>
							<option disabled value={0}> Seleccione una opción </option>
							<option>Cédula de extranjería</option>
							<option>Cédula de ciudadanía</option>
							<option>Pasaporte</option>
						</select>
					</label>
					<label htmlFor='ndocumento'> Nro Documento
						<input name='ndocumento' type='number' autoComplete='email' required="true" readonly="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Numero de documento' />
					</label>
					<label htmlFor='nombre'> Nombres
						<input name='nombre' type='text' autoComplete='email' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Tus nombres' />
					</label>
					<label htmlFor='apellido'> Apellidos
						<input name='apellido' type='text' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Tus Apellidos' />
					</label>
					<label htmlFor='telefono'> Teléfono móvil
						<input name='telefono' type='tel' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Tu numero celular' />
					</label>
					<label htmlFor='correo'>Correo electrónico
						<input name='correo' type='email' required="true"
							className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Tu@correo' />
					</label>
					<label className='flex flex-col' htmlFor='tdocumento'> Tipo de usuario
						<select className='px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' name='tdocumento' required="true" defaultValue={0}>
							<option disabled value={0}> Seleccione una opción </option>
							<option>Administrador</option>
							<option>Director</option>
							<option>Ejecutivo</option>
							<option>Gerente Comercial</option>
							<option>Operario</option>
							<option>Vendedor</option>
						</select>
					</label>
					<label className='flex flex-col' htmlFor='tdocumento'> Estado
						<select className='px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' name='tdocumento' required="true">
							<option> Pendiente </option>
							<option>Autorizado</option>
							<option>No autorizado</option>
						</select>
					</label>
				</div>

				<div>
					<button type='submit' className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
						<Link to='#'>Actualizar</Link>
					</button>
				</div>
			</form>
			<div className='flex flex-col items-center justify-center my-10'>
				<h2 className='my-10 text-2xl font-extrabold text-blue-800'>Todos los Usuarios</h2>
				<div class="flex flex-col">
					<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div class="shadow overflow-hidden border-b-4 border-blue-400 sm:rounded-lg">
								<table class="min-w-full divide-y divide-blue-200">
									<thead>
										<tr>
											<th className='px-4 py-4 bg-blue-400 border border-blue-600'>Tipo de documento del usuario</th>
											<th className='px-4 py-4 bg-blue-400 border border-blue-600'>Numero de documento del usuario</th>
											<th className='px-4 py-4 bg-blue-400 border border-blue-600'>Nombres del usuario</th>
											<th className='px-4 py-4 bg-blue-400 border border-blue-600'>Apellidos del usuario</th>
											<th className='px-4 py-4 bg-blue-400 border border-blue-600'>Celular del usuario</th>
											<th className='px-4 py-4 bg-blue-400 border border-blue-600'>Correo del usuario</th>
											<th className='px-4 py-4 bg-blue-400 border border-blue-600'>Tipo de usuario</th>
											<th className='px-4 py-4 bg-blue-400 border border-blue-600'>Estado del usuario</th>
											<th className='px-4 py-4 bg-blue-400 border border-blue-600'>Acciones</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Cédula de Extranjeria</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>80975116</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Roger Alexis</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Valencia Garcia</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>3112705328</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Inge@equipo10.com</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Administrador</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Autorizado</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'> <button type='submit' className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'><Link to='#'>Modificar</Link></button> </td>
										</tr>
										<tr>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>Cédula de ciudadania</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600 '>1014393279</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>Diana Marcela</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>Pinilla Ortegón</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>3134478698</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>dianii230416@equipo10.com</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>Gerente Comercial</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>Pendiente</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'> <button type='submit' className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'><Link to='#'>Modificar</Link></button> </td>
										</tr>
										<tr>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Cédula de Extranjeria</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>79218759</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Rafael Alejandro</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Lancheros Rodríguez</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>3133975419</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>francoralf@equipo10.com</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Director</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Autorizado</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'> <button type='submit' className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'><Link to='#'>Modificar</Link></button> </td>
										</tr>
										<tr>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>Cédula de ciudadania</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>1151864970</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>Javier Esteban</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>Romero Medina</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>3126943791</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>Javier.rom1911@equipo10.com</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>Operario</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'>No Autorizado</td>
											<td className='px-4 py-4 bg-blue-100 border border-blue-600'> <button type='submit' className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'><Link to='#'>Modificar</Link></button> </td>
										</tr>
										<tr>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Pasaporte</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>60031268</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Leidy Viviana</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Gallardo Rico</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>3222173110</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'> papeta23@equipo10.com</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Vendedor</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'>Pendiente</td>
											<td className='px-4 py-4 border border-blue-600 bg-blue-50'> <button type='submit' className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'><Link to='#'>Modificar</Link></button> </td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Usuarios;
