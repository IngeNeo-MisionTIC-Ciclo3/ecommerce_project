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
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-extrabold text-gray-800'>Todos los Usuarios</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre del usuario</th>
              <th>Apellido del usuario</th>
              <th>Celular del usuario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                  <td>Roger</td>
                  <td>Valencia</td>
                  <td>3112702853</td>
                </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Usuarios;
