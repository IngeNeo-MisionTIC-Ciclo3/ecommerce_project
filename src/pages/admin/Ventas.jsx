import { nanoid } from 'nanoid';
import React, { useState, useEffect, useRef } from 'react';
import { crearVenta } from '../../utils/ventas/api.ventas.js';
import { obtenerProductos } from '../../utils/productos/api.productos.js';
import { obtenerUsuarios } from '../../utils/usuarios/api.usuarios.js';
import { ToastContainer, toast } from "react-toastify";


const Ventas = () => {
	const form = useRef(null);
	const [vendedores, setVendedores] = useState([]);
	const [productos, setProductos] = useState([]);
	const [productosTabla, setProductosTabla] = useState([]);

	useEffect(() => {
		const fetchVendedores = async () => {
			await obtenerUsuarios(
				(response) => {
					setVendedores(response.data);
				},
				(error) => {
					console.error(error);
				}
			);
		};
		const fetchProductos = async () => {
			await obtenerProductos(
				(response) => {
					setProductos(response.data);
				},
				(error) => {
					console.error(error);
				}
			);
		};

		fetchVendedores();
		fetchProductos();
	}, []);

	const submitForm = async (e) => {
		e.preventDefault();
		const fd = new FormData(form.current);

		const formData = {};
		fd.forEach((value, key) => {
			formData[key] = value;
		});

		console.log('Datos del formulario', formData);

		const listaProductos = Object.keys(formData)
			.map((k) => {
				if (k.includes('Producto')) {
					return productosTabla.filter((v) => v._id === formData[k])[0];
				}
				return null;
			})
			.filter((v) => v);

		const valorVenta = TablaProductos.totalVentas;

		const datosVenta = {
			id_cliente: formData.id_cliente,
			nom_cliente: formData.nom_cliente,
			vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
			productos: [listaProductos],
			v_total: valorVenta,
			fecha: formData.fecha,
			estado: "En proceso",
		};

		await crearVenta(
			datosVenta,
			(response) => {
				console.log("Datos de la venta", datosVenta);
				console.log(response.data);
				toast.success('La venta ha sido almacenada con exito');
				//window.location.reload(true);
			},
			(error) => {
				console.log(error);
				toast.error('Error no se puede crear el producto');
			}
		);
	};

	return (
		<div className="flex flex-col items-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8 ventas">
			<h2 className='my-10 mt-6 text-3xl font-extrabold text-center text-gray-50'>Registro de Venta</h2>
			<form ref={form} onSubmit={submitForm} className='flex flex-col h-full px-10 mx-10 opaco1'>
				<div className='grid grid-cols-4 gap-4 rounded-md shadow-sm'>
					<label htmlFor='id_cliente' className='text-gray-50'>Identificación Cliente
						<input name='id_cliente' type='number' required
							className='relative block w-full px-1 py-2 text-gray-900 placeholder-gray-500 bg-blue-100 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Cedula cliente' />
					</label>
					<label htmlFor='nom_cliente' className='text-gray-50'>Nombres Cliente
						<input name='nom_cliente' type='text' required
							className='relative block w-full px-1 py-2 text-gray-900 placeholder-gray-500 bg-blue-100 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='Nombre Cliente' />
					</label>
					<label htmlFor='fecha' className='text-gray-50'>Fecha
						<input name='fecha' type='date' required
							className='relative block w-full px-1 py-2 text-gray-900 placeholder-gray-500 bg-blue-100 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
							placeholder='2021-01-01' />
					</label>
				</div>
				<TablaProductos
					productos={productos}
					setProductos={setProductos}
					setProductosTabla={setProductosTabla}
				/>
				<div className='px-2 py-2 mx-2 my-2'>
					<div className='flex flex-row'>
						<label htmlFor='vendedor' className='text-gray-50'>Vendedor
							<select name='vendedor' className='relative block w-full px-1 py-2 text-gray-900 placeholder-gray-500 bg-blue-100 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' defaultValue='' required>
								<option disabled value=''>
									Seleccione un Vendedor
								</option>
								{vendedores.map((el) => {
									return <option key={nanoid()} value={el._id}>{`${el.name}`}</option>;
								})}
							</select>
						</label>
					</div>
				</div>
				<button
					type='submit'
					className='col-span-2 p-2 text-white bg-purple-900 rounded-full shadow-md hover:bg-purple-600'
				>
					Crear Venta
				</button>
				<ToastContainer position='bottom-center' autoClose={4000} />
			</form>
		</div>
	);
};

const TablaProductos = ({ productos, setProductos, setProductosTabla }) => {
	const [productoAdicional, setProductoAdicional] = useState({});
	const [filasTabla, setFilasTabla] = useState([]);
	const [totalVentas, setTotalVentas] = useState(0);

	useEffect(() => {
		setProductosTabla(filasTabla);
	}, [filasTabla, setProductosTabla]);

	const agregarNuevoProducto = () => {
		setFilasTabla([...filasTabla, productoAdicional]);
		setProductos(productos.filter((v) => v._id !== productoAdicional._id));
		setProductoAdicional({});
	};

	const eliminarProducto = (productoAQuitar) => {
		setFilasTabla(filasTabla.filter((v) => v._id !== productoAQuitar._id));
		setProductos([...productos, productoAQuitar]);
	};

	const modificarProducto = (producto, cantidad) => {
		setFilasTabla(
			filasTabla.map((ft) => {
				if (ft._id === producto._id) {
					ft.cantidad = cantidad;
					ft.total = producto.valorU * cantidad;
				}
				return ft;
			})
		);
	};

	useEffect(() => {
		let total = 0;
		filasTabla.forEach((p) => {
			total = total + p.total;
		});
		setTotalVentas(total);

	}, [filasTabla]);

	return (
		<div className='px-2 py-2 mx-2 my-2'>
			<div className='flex flex-row'>
				<label htmlFor='producto' className='px-10 text-gray-50'>Producto
					<select
						className='p-2 mx-10 bg-blue-100 select'
						value={productoAdicional._id ?? ''}
						onChange={(e) =>
							setProductoAdicional(productos.filter((v) => v._id === e.target.value)[0])
						}
					>
						<option disabled value=''>
							Seleccione un Producto
						</option>
						{productos.map((el) => {
							return (
								<option
									key={nanoid()}
									value={el._id}
								>{`${el.nom_producto} ${el.descripcion} `}</option>
							);
						})}
					</select>
				</label>
				<div className='px-5 mx-5'>
					<button
						type='button'
						onClick={() => agregarNuevoProducto()}
						className='col-span-2 px-2 py-2 text-white bg-purple-900 rounded-full shadow-md hover:bg-purple-600'
					>
						Agregar Producto
					</button>
				</div>
			</div>
			<table className='px-4 py-4 mx-4 my-4 tabla'>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nombre</th>
						<th>Descripcion</th>
						<th>Valor Unitario</th>
						<th>Cantidad</th>
						<th>Total</th>
						<th>Eliminar</th>
						<th className='hidden'>Input</th>
					</tr>
				</thead>
				<tbody>
					{filasTabla.map((el, index) => {
						return (
							<FilaProducto
								key={el._id}
								prod={el}
								index={index}
								eliminarProducto={eliminarProducto}
								modificarProducto={modificarProducto}
							/>
						);
					})}
				</tbody>
			</table>
			<div className='px-2 py-2'>
				<span className='px-2 text-3xl bg-purple-900 border-gray-50 text-gray-50'> Valor Total Venta:  {totalVentas}</span>
			</div>
		</div>
	);
};

const FilaProducto = ({ prod, index, eliminarProducto, modificarProducto }) => {
	const [producto, setProducto] = useState(prod);
	useEffect(() => {
		console.log('prod', producto);
	}, [producto]);
	return (
		<tr>
			<td>{producto._id}</td>
			<td>{producto.nom_producto}</td>
			<td>{producto.descripcion}</td>
			<td>{producto.valorU}</td>
			<td>
				<label htmlFor={`valor_${index}`}>
					<input
						type='number'
						name={`cantidad_${index}`}
						onChange={(e) => {
							modificarProducto(producto, e.target.value === '' ? '0' : e.target.value);
							setProducto({
								...producto,
								cantidad: e.target.value === '' ? '0' : e.target.value,
								total:
									parseFloat(producto.valorU) *
									parseFloat(e.target.value === '' ? '0' : e.target.value),
							});
						}}
					/>
				</label>
			</td>
			<td>{parseFloat(producto.total ?? 0)}</td>
			<td>
				<i
					onClick={() => eliminarProducto(producto)}
					className='text-red-500 cursor-pointer fas fa-minus'
				/>
			</td>
			<td className='hidden'>
				<input hidden defaultValue={producto._id} name={`Producto_${index}`} />
			</td>
		</tr>
	);
};

export default Ventas;
