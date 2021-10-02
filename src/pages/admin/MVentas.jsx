import React from 'react';
import {Link} from 'react-router-dom';

const MVentas =() => {
    return (

    <div className= "container mx-auto mt-5 text-center">
        <h2 className='mt-6 text-3xl font-extrabold text-center text-blue-600'>MAESTRO DE VENTAS</h2>
     
        <table className="table-fixed border-2 border-blue-500 border-opacity-75 md:border-opacity-50">
            <thead>
                <tr>
                    <th className="border border-blue-600 px-4 py-2 text-blue-900">ID</th>
                    <th className="border border-blue-600 px-4 py-2 text-blue-900">Nombre del Cliente</th>
                    <th className="border border-blue-600 px-4 py-2 text-blue-900">ID Venta</th>
                    <th className="border border-blue-600 px-4 py-2 text-blue-900">Fecha de Venta</th>
                    <th className="border border-blue-600 px-4 py-2 text-blue-900">Producto</th>
                    <th className="border border-blue-600 px-4 py-2 text-blue-900">Cantidad</th>
                    <th className="border border-blue-600 px-4 py-2 text-blue-900">Valor Unitario</th>
                    <th className="border border-blue-600 px-4 py-2 text-blue-900">Valor Total</th>
                    <th className="border border-blue-600 px-4 py-2 text-blue-900">Vendedor</th>
                    <th className="border border-blue-600 px-4 py-2 text-blue-900">Estado</th>
                    <th className="border border-blue-600 px-4 py-2 text-blue-900">Acciones</th>
                </tr>
            </thead>

            <tbody>
                <tr className="bg-blue-200">
                    <th className="border border-gray-200 w-auto px-1 py-1">60987761</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">John Tyler</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">001</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">29-09-21</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">Jeans</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">3</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">$80000</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">$240000</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">Leidy Gallardo</th>
                    <th className="border border-blue-600 w-auto px-1 py-1">Despachado</th>
                    <th className="grid grid-flow-col grid-cols-1 gap-4 place-content-stretch bg-green-600 opacity-100 border border-green-900 px-4 py-2">Modificar</th>
                </tr>

                <tr>
                    <th className="border border-gray-200 w-auto px-1 py-1">1098765432</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">Sam Miller</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">002</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">30-09-21</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">Camisetas</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">5</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">$25000</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">$125000</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">Leidy Gallardo</th>
                    <th className="border border-blue-600 w-auto px-1 py-1">Facturado</th>
                    <th className="grid grid-flow-col grid-cols-1 gap-4 place-content-stretch bg-green-600 opacity-100 border border-green-900 px-4 py-2">Modificar</th>
                </tr>

                <tr className="bg-blue-200">
                    <th className="border border-gray-200 w-auto px-1 py-1">1094321765</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">Tom Carter</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">003</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">1-10-21</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">Sweater</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">1</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">$120000</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">$120000</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">Leidy Gallardo</th>
                    <th className="border border-blue-600 w-auto px-1 py-1">En proceso</th>
                    <th className="grid grid-flow-col grid-cols-1 gap-4 place-content-stretch bg-green-600 opacity-100 border border-green-900 px-4 py-2">Modificar</th>
                </tr>

                <tr>
                    <th className="border border-gray-200 w-auto px-1 py-1">88765234</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">Michael Park</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">004</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">1-10-21</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">Jean</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">2</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">$80000</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">$160000</th>
                    <th className="border border-gray-200 w-auto px-1 py-1">Leidy Gallardo</th>
                    <th className="border border-blue-600 w-auto px-1 py-1">Despachado</th>
                    <th className="grid grid-flow-col grid-cols-1 gap-8 place-content-stretch bg-green-600 opacity-100 border border-green-900 px-1 py-1">Modificar</th>
                </tr>
            </tbody>
        </table>
    </div>  
        
    );
};

export default MVentas;
