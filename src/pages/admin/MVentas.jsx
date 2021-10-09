import React from 'react';

const MVentas = () => {
	return (

		<div className="container mx-auto mt-5 text-center">
			<h2 className='mt-6 text-3xl font-extrabold text-center text-blue-600'>MAESTRO DE VENTAS</h2>

			<table className="border-2 border-blue-500 border-opacity-75 table-fixed md:border-opacity-50">
				<thead>
					<tr>
						<th className="px-4 py-2 text-blue-900 border border-blue-600">ID</th>
						<th className="px-4 py-2 text-blue-900 border border-blue-600">Nombre del Cliente</th>
						<th className="px-4 py-2 text-blue-900 border border-blue-600">ID Venta</th>
						<th className="px-4 py-2 text-blue-900 border border-blue-600">Fecha de Venta</th>
						<th className="px-4 py-2 text-blue-900 border border-blue-600">Producto</th>
						<th className="px-4 py-2 text-blue-900 border border-blue-600">Cantidad</th>
						<th className="px-4 py-2 text-blue-900 border border-blue-600">Valor Unitario</th>
						<th className="px-4 py-2 text-blue-900 border border-blue-600">Valor Total</th>
						<th className="px-4 py-2 text-blue-900 border border-blue-600">Vendedor</th>
						<th className="px-4 py-2 text-blue-900 border border-blue-600">Estado</th>
						<th className="px-4 py-2 text-blue-900 border border-blue-600">Acciones</th>
					</tr>
				</thead>

				<tbody>
					<tr className="bg-blue-200">
						<th className="w-auto px-1 py-1 border border-gray-200">60987761</th>
						<th className="w-auto px-1 py-1 border border-gray-200">John Tyler</th>
						<th className="w-auto px-1 py-1 border border-gray-200">001</th>
						<th className="w-auto px-1 py-1 border border-gray-200">29-09-21</th>
						<th className="w-auto px-1 py-1 border border-gray-200">Jeans</th>
						<th className="w-auto px-1 py-1 border border-gray-200">3</th>
						<th className="w-auto px-1 py-1 border border-gray-200">$80000</th>
						<th className="w-auto px-1 py-1 border border-gray-200">$240000</th>
						<th className="w-auto px-1 py-1 border border-gray-200">Leidy Gallardo</th>
						<th className="w-auto px-1 py-1 border border-blue-600">Despachado</th>
						<th className="grid grid-flow-col grid-cols-1 gap-4 px-4 py-2 bg-green-600 border border-green-900 opacity-100 place-content-stretch">Modificar</th>
					</tr>

					<tr>
						<th className="w-auto px-1 py-1 border border-gray-200">1098765432</th>
						<th className="w-auto px-1 py-1 border border-gray-200">Sam Miller</th>
						<th className="w-auto px-1 py-1 border border-gray-200">002</th>
						<th className="w-auto px-1 py-1 border border-gray-200">30-09-21</th>
						<th className="w-auto px-1 py-1 border border-gray-200">Camisetas</th>
						<th className="w-auto px-1 py-1 border border-gray-200">5</th>
						<th className="w-auto px-1 py-1 border border-gray-200">$25000</th>
						<th className="w-auto px-1 py-1 border border-gray-200">$125000</th>
						<th className="w-auto px-1 py-1 border border-gray-200">Leidy Gallardo</th>
						<th className="w-auto px-1 py-1 border border-blue-600">Facturado</th>
						<th className="grid grid-flow-col grid-cols-1 gap-4 px-4 py-2 bg-green-600 border border-green-900 opacity-100 place-content-stretch">Modificar</th>
					</tr>

					<tr className="bg-blue-200">
						<th className="w-auto px-1 py-1 border border-gray-200">1094321765</th>
						<th className="w-auto px-1 py-1 border border-gray-200">Tom Carter</th>
						<th className="w-auto px-1 py-1 border border-gray-200">003</th>
						<th className="w-auto px-1 py-1 border border-gray-200">1-10-21</th>
						<th className="w-auto px-1 py-1 border border-gray-200">Sweater</th>
						<th className="w-auto px-1 py-1 border border-gray-200">1</th>
						<th className="w-auto px-1 py-1 border border-gray-200">$120000</th>
						<th className="w-auto px-1 py-1 border border-gray-200">$120000</th>
						<th className="w-auto px-1 py-1 border border-gray-200">Leidy Gallardo</th>
						<th className="w-auto px-1 py-1 border border-blue-600">En proceso</th>
						<th className="grid grid-flow-col grid-cols-1 gap-4 px-4 py-2 bg-green-600 border border-green-900 opacity-100 place-content-stretch">Modificar</th>
					</tr>

					<tr>
						<th className="w-auto px-1 py-1 border border-gray-200">88765234</th>
						<th className="w-auto px-1 py-1 border border-gray-200">Michael Park</th>
						<th className="w-auto px-1 py-1 border border-gray-200">004</th>
						<th className="w-auto px-1 py-1 border border-gray-200">1-10-21</th>
						<th className="w-auto px-1 py-1 border border-gray-200">Jean</th>
						<th className="w-auto px-1 py-1 border border-gray-200">2</th>
						<th className="w-auto px-1 py-1 border border-gray-200">$80000</th>
						<th className="w-auto px-1 py-1 border border-gray-200">$160000</th>
						<th className="w-auto px-1 py-1 border border-gray-200">Leidy Gallardo</th>
						<th className="w-auto px-1 py-1 border border-blue-600">Despachado</th>
						<th className="grid grid-flow-col grid-cols-1 gap-8 px-1 py-1 bg-green-600 border border-green-900 opacity-100 place-content-stretch">Modificar</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default MVentas;
