import React from 'react';
import { Link } from 'react-router-dom';

const Ventas = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8">
			<h2 className='mt-6 text-3xl font-extrabold text-center text-blue-600'>Registro de Venta</h2>
			<form className='mt-8 space-y-8'>
				<div className='grid grid-cols-4 gap-1 rounded-md shadow-sm text-center'>
					<label></label>
					<label></label>
					<label></label>
					<label htmlFor='factura'>Factura #  
						<h1 className='text-4xl'>FV-001</h1>
					</label>
				</div>
				<div className='grid grid-cols-4 gap-4 rounded-md shadow-sm'>
					<label htmlFor='id_cliente'>Identificación 
					<input name='id_cliente' type='text' autoComplete='email' required="true"
							className='relative block w-full px-1 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='ID cliente'/>
					</label>
					<label htmlFor='nom_cliente'>Cliente
						<input name='nom_cliente' type='text' required="true"
							className='relative block w-full px-1 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Nombre Cliente'/>
					</label>
					<label htmlFor='id_vendedor'>ID Vendedor
						<input name='id_vendedor' type='text' required="true"
							className='relative block w-full px-1 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='ID Vendedor'/>
					</label>
					<label htmlFor='nom_vendedor'>Vendedor
						<input name='nom_vendedor' type='text' required="true"
							className='relative block w-full px-1 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Nombre Vendedor'/>
					</label>
				</div>
				<div className='grid grid-cols-5 gap-1 rounded-md shadow-sm text-center'>
					<label htmlFor='id_producto'>ID Producto
						<select className='relative block w-full px-1 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Nombre Vendedor'>
							<option>RF-012345</option>
							<option>RF-012346</option>
							<option>RF-012347</option>
						</select>
					</label>
					<label htmlFor='nom_producto'>Producto
						<input name='nom_producto' type='text' required="true"
							className='relative block w-full px-1 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Nombre Vendedor'/>
					</label>
					<label htmlFor='cantidad'>Cantidad
						<input name='cantidad' type='text' required="true"
							className='relative block w-full px-1 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Cantidad'/>
					</label>
					<label htmlFor='v_unitario'>V / Unitario
						<input name='v_unitario' type='text' required="true"
							className='relative block w-full px-1 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='V / Unitario'/>
					</label>
					<label htmlFor='v_total'>V / TOTAL
						<input name='v_total' type='text' required="true"
							className='relative block w-full px-1 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='V / Total'/>
					</label>
				</div>


				<div class="flex flex-col">
					<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
								<table class="min-w-full divide-y divide-gray-200">
									<thead class="bg-gray-50">
										<tr>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID PRODUCTO</th>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PRODUCTO</th>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CANTIDAD</th>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">V / UNITARIO</th>
											<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">V / TOTAL</th>
										</tr>
									</thead>
									<tbody class="bg-white divide-y divide-gray-200">
										<tr>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="flex items-center">
													<div class="ml-4">
														<div class="text-sm font-medium text-gray-900">RF-012345</div>
													</div>
												</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-500">PRODUCTO 1</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-500">10</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-500">1200</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-500">12000</div>
											</td>
										</tr>
										<tr>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="flex items-center">
													<div class="ml-4">
														<div class="text-sm font-medium text-gray-900">RF-012346</div>
													</div>
												</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-500">PRODUCTO 2</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-500">25</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-500">10</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-500">250</div>
											</td>
										</tr>
										<tr>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="flex items-center">
													<div class="ml-4">
														<div class="text-sm font-medium text-gray-900">RF-012347</div>
													</div>
												</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-500">PRODUCTO 3</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-500">100</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-500">2</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-500">200</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				<div className='grid grid-cols-4 gap-1 rounded-md shadow-sm text-center'>
					<label></label>
					<label></label>
					<label></label>
					<label htmlFor='factura'>VALOR TOTAL  
						<h1 className='text-4xl'>$ 12.450</h1>
					</label>
				</div>

				<div className='grid grid-cols-5 gap-1 rounded-md shadow-sm text-center'>
					<div></div>
					<div></div>
					<button type='submit'className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
						<Link to='#'>Finalizar Venta</Link>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Ventas;
