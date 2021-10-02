import React from 'react';
import { Link } from 'react-router-dom';

const RegistroProductos = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8">
        <h2 className="mt-6 text-3xl font-extrabold text-center text-blue-600">Creación de Productos</h2>
           <form className='text-xs w-4/12 mt-4 space-y-3'>
               <div className="grid grid-cols-2 gap 5 rounded-md shadow-md">
                   <label className='mt-4 mb-3 px-3' htmlFor="IdProducto"> ID o Código
                    <input name="IdProducto" type="number" required="true"
                    className='mt-1 relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-xs'/>
                   </label>

                   <label className='mt-4 px-3' htmlFor="valorUnitario"> Valor Unitario
                    <input name="valorUnitario" type="number" required="true"
                    className='mt-1 relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-xs'/>
                   </label>

                   <label className='mb-3 px-3' htmlFor="cantidad"> Cantidad
                    <input name="cantidad" type="number" required="false"
                    className='mt-1 relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-xs'
                    placeholder='Opcional'/>
                   </label>

                   <label class="mb-3 px-3 block text-left" htmlFor="cantidad"> Estado
                    <span class="text-gray-900"></span>
                    <select class="form-select block w-full mt-1 relative block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-xs">
                        <option></option>
                        <option>Disponible</option>
                        <option>No Disponible</option>
                    </select>
                    </label>

                   <label className='block text-left px-3 mb-4' htmlFor="descriProducto"> Descripción
                    <textarea name="descriProducto" type="text" required="true"
                    className='mt-1 relative block h-20 w-80 px-2 py-2 text-gray-900 placeholder-gray-500 border border-gray-10 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-10 focus:z-10 sm:text-xs'
                    placeholder='Describe brevemente el producto...'/>
                   </label>
               </div>

               <div className='px-24'>
                <button type='submit'className='relative flex justify-center w-full px-4 py-2 text-xs font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600'>
                    <Link to='#'>Crear Producto</Link>
                </button>
               </div>
               
            </form> 
    </div>
    );
};

export default RegistroProductos;